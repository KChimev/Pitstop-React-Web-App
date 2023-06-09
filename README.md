## React car selling web app

This is a personal project made using `HTML, CSS, JavaScript, React, React Router and the Axios Library.`
To run this project you'll need to install `node.js modules` as well as run `$npm i axios` to install Axios library.
This app utilises a simple server running on `Node.js` and `Express`.
For the scope of this project I did not utilize a database as this is a demo project.
I used the post/get methods with Axios library to send and retrieve data from my server.
User`s data is saved in the `localStorage` of the browser to avoid having to log in everytime you test the features.
Functionaly this app offers `users creating accounts, uploading user's adverts, checking all existing offers and filtering them by condition, make, body,model, price and mileage and more.`
Challenging parts of this project include:

- Setting up server side logic and post/get requests, as I have little prior experience with Node.js and Express this was a challenging task.
- Finding a way to save user uploaded images to the localStorage taking into account the limited memory, in short this was done using the fileReader object to read the images and save them to localStorage as string with a key for each image, used ot identify
  them later when constructing the adverts.
- As I was totally unfamiliar with React Routing before this project, I also had to research ways to route the different pages of this app.
- Adding mobile and tablet responsiveness, usability features, conditional error/success prompts, and search/filter functionality.
- This was a big project which was done by myself so I had to keep track of all my code and the connections between my different components. I had to use React hooks, pass state through multiple components, render components and elements conditionally.

The project is made to be mobile and tablet responsive which can be seen in the finished pictures, as well as adding usability features, such as `scroll to top`, hididng the search menu on scroll-down and displaying core information in the adverts.
All data submitted by the user is sent to the server where realistically it would be saved to the database or perform actions based by the contents.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `node index.js`

Runs the server.


### `Finished images` , more can be seen in the finished folder, better quality picture to be added soon.

![Finished version image](https://github.com/KChimev/Pitstop-React-Web-App/blob/main/Finished-pics/pit1.jpg?raw=true)



![Finished version image](https://github.com/KChimev/Pitstop-React-Web-App/blob/main/Finished-pics/pit2.jpg?raw=true)

