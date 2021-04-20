# React-Native

This repo contains the code of a React-Native App connected to a JSON Server.

## Creating your blank react-native app

You can create your react native app by following the instructions given [here](https://reactnative.dev/docs/environment-setup).

```[bash]
yarn global add expo-cli
expo init conFusion
```

Choose the "blank" option

```[bash]
cd conFusion
yarn start
```

Or to run directly in your web browser:

```[bash]
cd conFusion
yarn web
```

[Here is an Expo guide](https://docs.expo.io/workflow/already-used-react-native/) to take a look at after you've learned react Native.

## Deploying your application

These steps suppose that you have already finished implementing the connection between your front-end and Node.js/Express/MongoDB backend.

1. Deploy your mongoDB database on [Atlas](https://www.mongodb.com/cloud/atlas2). Access and test it using [MongoDB Compass](https://www.mongodb.com/products/compass) or [Mongo-Express](https://github.com/mongo-express/mongo-express).

2. Deploy your Node.js Express backend on [Heroku](https://www.heroku.com/nodejs) and test it using [Postman](https://www.postman.com/). Make sure to make your MongoDB Atlas Database URL known to your backend!

3. Deploy your React Native mobile application on the App stores (Google Play and Apple Store) by following the [expo deployment instructions](https://docs.expo.io/distribution/app-stores/) as well as the [expo building instructions](https://docs.expo.io/distribution/building-standalone-apps/). Iron out any bugs before publishing using the various debugging tools such as [Redux Devtools](https://github.com/reduxjs/redux-devtools). You can also test your React Native app with the [JSON server](https://www.npmjs.com/package/json-server) before your connect it to the actual Node.js/Express/MongoDB backend.

To avoid implementing your own backend, you can use [Firebase with React Native](https://rnfirebase.io/) instead of Node.js/Express/MongoDB.

For deploying your mobile compatible Web application built with [React](https://reactjs.org/), the [React deployment guide](https://create-react-app.dev/docs/deployment/) would be useful to chose a server that can deliver your Single Page Application (SPA) front-end. Notably, [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) is a good free choice if you plan to make your code publicly available. Another option uses [Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration) and is also detailed [here](https://create-react-app.dev/docs/deployment/#heroku).
