# Type: "git checkout main" To ensure smooth test cases running

# Current default Branch vercel-deployment1 is for production purposes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Directory Structure
This project is a Resume builder to build interactive resume for yourself. File directory is divided into Two main parts: 
Frontend: containing all frontend code: 
1- Components: includes all the necessary components of this application.
2- assets: includes things like images.
3- zustand: includes state management with zustand library which is a light weight easy to use Redux like state management library.
4- Api: this directory includes hooks for Api calls and an axios middleware.

Backend: containing all backend code: 
 1- test: directory contians tests for our API's.
 2- Routes: contains routes for sending and recieving data. 
 3- Models: defines mongoose schema for documents.
 4- Controllers: Our actuall business logic is written here. 

## Available Scripts

In the project directory you can start servers for both frontend and backend. 
# For frontend:

Navigate to frontend folder i.e. cd frontend. and type:

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

# For Backend: 
Navigate to backend folder i.e. cd backend:

### `npm start`

Runs the app in the development mode.

in terminal you will see these two messages: 

Server is running on http://localhost:4000
Successfully connected to Mongo DB

Which means everything is working fine

### `npm test`

Launches the test runner in the interactive watch mode.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
