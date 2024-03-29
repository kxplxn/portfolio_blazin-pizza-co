# Blazin Pizza CO.
![Blazin Pizza CO App UI Screenshot](https://i.ibb.co/9Gw9tpK/Screenshot-2021-05-04-at-11-57-26.png)

## The Purpose
I have created this application to demonstrate **the degree of my knowledge in [MERN stack](https://www.mongodb.com/mern-stack) (MongoDB, Express.js, React/Redux, Node.js)**, as well as my **ability to understand and integrate third-party libraries written in JavaScript**. 

The result is a full-stack JavaScript app that simulates the workflow of an online pizza store where both guests and registered members can add bespoke pizzas, drinks, and sides to their basket, and place orders online.

## The State of the App
This app has a user interface that I designed nearly two years ago. As a freshly designed and developed app, I believe [GoTeam!](https://github.com/alicandev/portfolio_goteam) serves as a more accurate representation of not only my UI/UX design capabilities but also the state of my programming skills across the entire stack. I do not plan to do much more with this app, but there are a couple of issues I might consider working on, which you can view in the [issues](https://github.com/alicandev/portfolio_blazin-pizza-co/issues) section.

> Though I am the sole author of this application, I have used an ASP.NET MVC 5 application that I have previously created for a C# portfolio as a model. This saved me some time. However, it also made me understand better the components that make up the MERN stack since at every step of the way I was able to compare it with a framework that I am already fluent in. 

## Running the App

### Requirements
1. [Node.js](https://nodejs.org/en/)
2. [Yarn](https://yarnpkg.com/getting-started/install) or [NPM](https://www.npmjs.com/get-npm)
3. [MongoDB](https://docs.mongodb.com/manual/installation/)
4. In order to run either the frontend or the backend, you must provide some environment variables. dotenv is installed on both projects, so you can just create a .env file in both the frontend and the backend folders, and declare the environment variables within them. For a list of required environment variables, please see the .env-sample file in each folder.

### The Backend
1. Inside a terminal, navigate into the *backend* folder. 
    - `cd backend`
2. Run a local MongoDB instance.
    - `mongod --dbpath db`
3. Keep the database running, and create a new tab inside your terminal.
    - Usually **[CMD + T]** on Mac, or **[CTRL + T]** on Windows.
4. Make sure you are still inside the *backend* folder and install dependencies.
    - `yarn install` or `npm install`
5. Run the app.
    - `yarn start` or `npm start`

### The Frontend
1. Keep the database and the backend running, and create a new tab inside your terminal.
    - Usually **[CMD + T]** on Mac, or **[CTRL + T]** on Windows.
2. Navigate into the *frontend* folder.
    - `cd frontend` from the root, or `cd ../frontend` from the *backend* folder
3. Install dependencies.
    - `yarn install` or `npm install`
4. Run the app.
    - `yarn start` or `npm start`

That's it! If all your environment variables check out and you have followed the instructions, the frontend app must now be running at *http://localhost:3000*, and the backend app at *http://localhost:8000*.

## Running the Tests
To run the backend and the frontend tests respectively, execute the `yarn test` or the `npm test` command within the *backend* and the *frontend* folders. The state of these tests is not perfect by the time I'm writing this, but I will soon fix them if time permits.
