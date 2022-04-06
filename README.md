# Getting Started with My Med List API Server and Database

## Description 

This is the server for My Med List app and should be run along with the app itself which can be found: 
https://github.com/GurpreetD13/my-med-list


The problem: People often have a hard time remembering the medications they take. 

The solution: My Med List! 

A web application that helps people easily manage their list of medications anywhere, anytime!

Features: Auth on both front and back-ends, a database, controlled react form and an...

Integrated API: Health Canada drug products database.

DIN: 8 digit Drug Identification Number found on every medication bottle in Canada.

The Back-end stack!
- Express server using MVC design!
- Knex
- MySQL database
- Axios and integrated API
- Auth: JWT and bcrypt

## Installation

### 1. Create new MySQL database/schema and update with your MySQL username & password

Open up your MySQL Workbench (alternatively can also be done in terminal) and 
- Create a new schema named "my_med_list_db" or a name of your choice 

Then Update knexfile.js with your MySQL username and password (if different)

Open up the root folder and in the terminal run:

### 2. `npm install`

Will install all dependencies: express, cors, axios, jsonwebtoken, bcrypt, knex, mysql

### 3. `knex migrate:latest`

Will create tables.

### 4. `knex seed:run`

Will populate database tables with sample Users and medications

- username: "User1" password: "sugar"
- username: "User2" password: "heart"

### 5. `node index.js`

Will start the server, enjoy!
