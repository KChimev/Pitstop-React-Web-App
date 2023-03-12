## React car selling web app

This is a personal project made using HTML, CSS, JavaScript, React, React Router and the Axios Library.
To run this project you`ll need to install node.js modules as well as run `$npm i axios` to install the axios library.
The application can be started using the `$npm start` prompt.
This app utilises a simple server running on Node.js and Express.
Server side code can be executed with`$node index.js`.
For the scope of this project and to the best of my abilities I did not utilise a database as this is a demo project.
I used the post/get methods with the Axios library to make requests - to send and retrieve data from my server.
User`s data is saved in the localStorage of the browser to avoid having to log in everytime you test the features.
Functionaly this app offers uploading user`s adverts, checking all existing offers and filtering them by condition, make, body,model, price and mileage.
Challenging parts of this project include:

- Setting up server side logic and post/get requests, as I have little prior experience with Node.js and Express this was a challenging task.
- Finding a way to save user uploaded images to the localStorage taking into account the limited memory, in short this was done using the fileReader object to read the images and save them to localStorage as string with a key for each image, used ot identify
  them later when constructing the adverts.
  -As I was totally unfamiliar with React Routing before this project, I also had to research ways to route the different pages of this app.
  -Adding mobile and tablet responsiveness, usability features, conditional error/success prompts, and search/filter functionality.
  -This was a big project which was done by myself so I had to keep track of all my code and the connections between my different components. I had to use React hooks, pass state through multiple components, render components and elements conditionally.

  The project is made to be mobile and tablet responsive which can be seen in the finished pictures, as well as adding usability features, such as `scroll to top`, hididng the search menu on scroll-down and displaying core information in the adverts.
  Still the idea behind this project is not an website for selling cars, but a luxurious dealership.
  All data submitted by the user is sent to the server where realistically it would be saved to the database or perform actions based by the contents.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
