# CampakCampakJerAPI

This REST API server is built for learning purposes and is used by CampakCampakJer application where user can add his/her own recipe into the cookbook.

It is built using MongoDB and Node.js.

- Node.js provides the RESTful API. 
- MongoDB stores the data.

This app is built based on the below tutorial

* Tutorial : http://thejackalofjavascript.com/an-end-to-end-hybrid-app

## Requirements

- [Node and npm](http://nodejs.org)
- [MongoDB](https://www.mongodb.org/)

## Source code

Clone the repository: `git clone https://ailuromaniac@bitbucket.org/ailuromaniac/campakcampakjerapi.git`

## Local Installation

1. Navigate to the mongodb directory: `cd campakcampakjerapi/mongodb`
2. Make sure the data folder exists in mongodb folder. If not, create one: `mkdir data`
3. Update dbpath and logpath in mongo.config to point to the data and mongodb respectively
4. Navigate to the server directory: `cd ..`
5. Install the application: `npm install`
6. Start the local DB: `<MongoDB-bin>/mongod.exe --config <parent-path>/campakcampakjerapi/mongodb/mongo.config`
7. Start the server: `node server.js`
8. View an API call in browser at http://localhost:9804/api/recipes

## OpenShift Environment (test)

REST API Server: http://campakcampakjerapi-ailuromaniac.rhcloud.com

For example, to see all the recipes in the  test db, view in browser at http://campakcampakjerapi-ailuromaniac.rhcloud.com/api/recipes