# Online CV/Resume using Fullstack React & Firebase

## Back end
This project using server-less backend as functions powered by [Firebase Cloud Function](https://firebase.google.com/docs/functions)
with [Cloud Firestore](https://firebase.google.com/docs/firestore) for Database
and [Cloud Storage](https://firebase.google.com/docs/storage) for uploaded contents.

Functions are stored in `functions` folder.

### Deploy functions:

```
firebase deploy --only functions
```

or

```
cd functions
npm run deploy
```

After deploy your functions into cloud, update environment value `REACT_APP_FUNCTION_URL`
so that front-end app can call to.
API URL should end with `/api`.

### Create Resume:

Use by POST request to `/resume/:your-desired-resume-id` with body structured defined in `src/interface.ts`.

## Front end
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use your resume ID above and set for environment `REACT_APP_USER_ID`.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
[React snap](https://github.com/stereobooster/react-snap) then crawls and create static snapshots for your pages.<br />
**Your app is ready to be deployed with full SEO support!**

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Hosting
Hosting can be use with [Firebase Hosting](https://firebase.google.com/docs/hosting)
and the project already includes Firebase SDK URL.
You need to update environment variable `REACT_APP_HOSTING_URL`.

### Deploy to host

You should run build production before deploying to host.

```
yarn build
firebase deploy --only hosting
```

or

```
yarn build
yarn deploy
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn more about Firebase, check out [Firebase documentation](https://firebase.google.com/docs);
