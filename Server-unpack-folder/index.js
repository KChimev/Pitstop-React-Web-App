const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const servicingRequests = []
const userBase = []
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const checkUserbase = (userbase, userDetails, response) => {
  console.log(userbase, userDetails)
  if (!userbase.length) {
    if (userDetails.alreadyUser === true) {
      response.push({
        login: {
          status: 'failed',
          reason: 'No such user found',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    if (userDetails.alreadyUser === false) {
      userbase.push({ ...userDetails, alreadyUser: true })
      response.push({
        login: {
          status: 'success',
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
          adverts: [],
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  } else if (userbase.length) {
    let isNotUser = 0
    userbase.forEach((existingUser) => {
      if (existingUser.email === userDetails.email) {
        if (userDetails.alreadyUser === false) {
          return response.push({
            login: {
              status: 'failed',
              reason: 'A user with that information already exists.',
            },
            headers: {
              'Content-Type': 'application/json',
            },
          })
        } else if (
          userDetails.alreadyUser === true &&
          userDetails['password'] === existingUser['password']
        ) {
          response.push({
            login: {
              status: 'success',
              name: existingUser.name,
              email: existingUser.email,
              password: existingUser.password,
              adverts: [],
            },
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      } else if (existingUser.email !== userDetails.email) {
        isNotUser += 1
      }
    })
    if (isNotUser === userbase.length && userDetails.alreadyUser === false) {
      userbase.push({ ...userDetails, alreadyUser: true, newUser: false })
      response.push({
        login: {
          status: 'success',
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
          adverts: [],
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }
}
app.post('/api/data', (req, res) => {
  for (const key in req.body) {
    let data = JSON.parse(key)
    let servicingRequest = false
    for (const prop in data) {
      prop === 'servicing' && data[prop] === true
        ? (servicingRequest = true)
        : ''
    }
    if (servicingRequest) {
      servicingRequests.push({ ...data, id: nanoid() })
    }
  }
  res.send(
    JSON.stringify({
      request: 'success',
      id: servicingRequests[servicingRequests.length - 1]['id'],
    })
  )
})
app.post('/api/user', (req, res) => {
  let userData = req.body.data
  let response = []
  checkUserbase(userBase, userData, response)
  res.send(response[0])
})
app.post('/api/existing-user', (req, res) => {
  let userFromLocalStorage = req.body.data
  if (userFromLocalStorage['email'].length < 2) {
    return
  } else {
    if (userBase.length !== 0) {
      userBase.forEach((existingUser) => {
        if (existingUser.email === userFromLocalStorage.email) {
          for (const property in existingUser) {
            existingUser[property] = userFromLocalStorage[property]
          }
          existingUser['alreadyUser'] = true
        } else {
          userBase.push({
            alreadyUser: true,
            logged: true,
            ...userFromLocalStorage,
          })
        }
      })
    } else {
      userBase.push({
        alreadyUser: true,
        logged: true,
        ...userFromLocalStorage,
      })
    }
  }
})
app.post('/api/user-update', (req, res) => {
  let userUpdate = req.body.data
  let userPassword = userUpdate['password']
  let toBeUpdated = userUpdate['change']
  let userEmail = userUpdate['email']
  let nameOfUpdated = userUpdate['type']
  userBase.forEach((existingUser) => {
    if (
      existingUser.email === userEmail &&
      existingUser.password === userPassword
    ) {
      existingUser[nameOfUpdated] = toBeUpdated
      res.send(existingUser)
    }
  })
})
app.post('/api/new-adverts', (req, res) => {
  //updating database
  let advertData = req.body.data
  res.send(JSON.stringify(advertData))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
app.use((err, req, res, next) => {
  console.error(`Server error: ${err}`)
  res.status(500).send('Server error')
})
