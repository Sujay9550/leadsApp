## About App

This project was built using [React JS](https://reactjs.org) - a free and open-source front-end JavaScript library for building user interfaces, [React Router](https://reactrouter.com) - a fully-featured client and server-side routing library for React, [Bootstrap](https://getbootstrap.com) - a free and open-source CSS framework directed at responsive, mobile-first front-end web development, [Firebase](https://firebase.google.com) - An app development platform that helps you build and grow apps users love, [Parcel](https://parceljs.org) - The zero configuration build tool for the web.

### Features

- Firebase Authentication - Login or Signup with Email and Password.
- Context API - App wide state management for maintaining the authentication data.
- Custom Hooks - `useHttp` to send http requests.
- React Router - Conditionally rendering the pages based on the route and authentication data.
- Create - Create new lead with the help of Add Lead form.
- View - View a list of previously created leads.
- Detail View - View details of a particular lead by clicking on the View link.
- Error Pages - Renders `Page Not Found`, `Error`, `Lead Not Found`, `No Leads Found` pages conditionally.

### Available Scripts

In the project directory, you can run:

### `npm install`

This will install all the dependencies of this project.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
Your app is ready to be deployed!

### Additional Setup

Create a `.env` file in the root of your repository, and add `SIGNIN_URL = https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR FIREBASE PROJECT API KEY`, `SIGNUP_URL = https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR FIREBASE PROJECT API KEY`, `API_URL = YOUR FIREBASE API URL`

### Application Snapshots

![leadsapp-home](/snapshots/leadsapp-home.PNG)
![leadsapp-auth](/snapshots/leadsapp-auth.PNG)
![leadsapp-list](/snapshots/leadsapp-list.PNG)
![leadsapp-detail](/snapshots/leadsapp-detail.PNG)
![leadsapp-add-lead](/snapshots/leadsapp-add-lead.PNG)
![leadsapp-not-found](/snapshots/leadsapp-not-found.PNG)
