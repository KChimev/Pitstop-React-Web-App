export default function checkModelResults(
  results,
  models,
  searchQuery,
  dataBase
) {
  results.current = 0
  models.current = [{ found: 'All', ref: '' }]
  for (let key in searchQuery) {
    if (key === 'make' && searchQuery[key] !== 'All') {
      let brand = searchQuery[key]
      dataBase.make[brand].forEach((model) => {
        let m = 0
        for (let searchParams in searchQuery) {
          if (searchQuery[searchParams] !== 'All' && searchParams !== 'make') {
            model[searchParams] === searchQuery[searchParams]
              ? (m += 1)
              : (m -= 100)
          }
        }
        if (m > 0) {
          let result = model.model
          let n = 0
          results.current += 1
          models.current.forEach((model) => {
            if (model.found !== result) {
              n++
            }
          })
          if (n === models.current.length) {
            models.current.push({ found: result, ref: model.ref })
          }
        }
      })
    }

    if (key === 'make' && searchQuery[key] === 'All') {
      for (let brand in dataBase.make) {
        dataBase.make[brand].forEach((model) => {
          let m = 0
          for (let searchParams in searchQuery) {
            if (
              searchQuery[searchParams] !== 'All' &&
              searchParams !== 'make'
            ) {
              model[searchParams] === searchQuery[searchParams]
                ? (m += 1)
                : (m -= 100)
            }
          }
          if (m > 0) {
            let result = model.model
            let n = 0
            results.current += 1
            models.current.forEach((model) => {
              if (model.found !== result) {
                n++
              }
            })
            if (n === models.current.length) {
              models.current.push({ found: result, ref: model.ref })
            }
          }
        })
      }
    }
  }
}
