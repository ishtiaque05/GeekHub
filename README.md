# **GEEKHUB**
-------------
It is a simple web application that consist of user authentication and guest login where use can search books from **GoodReads** and save them in Mongodb database.

### **Feature list done**
---
- Guest User route implemented
- User Authenticated route implemented
- Mailtrap is configured to send email confirmation        message and reset password link
- User can reset the password
- Search books in GoodReads API
- Save books in MongoDb
- Form validations for email & password done 

### **TODO**
---
- Create separate link to display all saved books
- Delete books
- Download e-books if free link available
- Rate the books
- Review the books
- Share the books among other app user or share via fb
- categorized book example - Fiction, romantic novel etc
- Advance filter search example search by genre, writer, rating etc

### **Installation and setup front-end**
---
- `git clone git@github.com:ishtiaque05/GeekHub.git`
- Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
- Install and setup [MongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
- cd into project directory and run `yarn install`
- You will need the **[GeekHub server](https://github.com/ishtiaque05/GeekHub-server)** running which handles api request for saving books and authentication
- `yarn start`
- go to `localhost:3000` in the browser

### **Installation and setup of GeekHub server**
The GeekHub server uses express server to handle API request and response.

**Prerequisite**
-----------------
 Open a [Mailtrap](https://mailtrap.io/) account for sending default messages for password reset instruction and email confirmation

**Setup**
----------
1. `git clone git@github.com:ishtiaque05/GeekHub-server.git`
2.  cd to project directory run `yarn install`
3.  start the mongo service `sudo service mongod start`
4. `yarn start`
5.  Login to your mailtrap.io account and get the smtp settings
6.  Edit the .env file of GeekHub-server and set your **host**, **port**, **username** and **password** to receive the emails

### Packages used for development
---
**GeekHub**: react-router, react-router-dom, semantic-ui-react, semantic-ui-css, validator, prop-types,redux, react-redux, redux-thunk, redux-devtool-extension(development), axios(for api request), gravatar-url

**GeekHub-server**: babel-cli(development), babel-preset-env(development), express, nodemon (for auto refresh server if changes are made), babel-eslint(development), mongoose, body-parser(for parsing api request body), bcrypt, jsonwebtoken, dotenv, bluebird, mongoose-unique-validator, lodash, nodemailer, jwt-decode, reselect, xml2json, request-promise, normalizr, babel-plugin-transform-object-rest-spread

