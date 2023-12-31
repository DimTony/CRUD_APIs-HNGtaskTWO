# HNGx-STAGEtwoTASK

HNGx Internship Stage Two Task - An API with endpoints that performs CREATE, READ, UPDATE, DELETE (CRUD) operation on a 'person' resource, built with node.js and express framework using MongoDB NoSQL database.

Project dependencies include express, a backend web application framework for building RESTful APIs with Node.js, mongoose which is an object data modeling (odm) library for mongodb and node.js, joi which is a popular module for data validation, dotenv which is a zero-dependency module that loads environment variables from a .env file into process.env, and cors which is a node.js package for providing a Connect/Express middleware that can be used to enable "Cross-Origin Resource Sharing" with various options

## Table of Contents
- [HNGx-STAGEtwoTASK](#hngx-stagetwotask)
  - [Table of Contents](#table-of-contents)
  - [1. Project Dependencies](#1-project-dependencies)
  - [2. Hosting](#2-hosting)
  - [3. Installation](#3-installation)
  - [4. Usage](#4-usage)

## 1. Project Dependencies
 - Express
 - Node.js
 - Mongoose
 - Cors
 - Dotenv
 - Nodemon
 - MongoDB

## 2. Hosting
Using Render hosting service

API Live URL: https://crud-rest-tonydim.onrender.com
  
## 3. Installation
 - ### Clone the repository to your local machine:
    ```
    git clone https://github.com/DimTony/HNGtaskTWO.git
    ```
 - ### Install the project dependencies
     ```
       npm install
     ```
   
   This installs the packages in package.json file
 - ### Configure the API
   You need to set up environment variables. Create a .env file in the project root and add the following variables:

    - PORT: The port on which the API will run (default is 5000).
    - MONGO_URI: The connection string to your MongoDB instance. Set the <database> and <password> to that of your preferred choice
   
    **Sample:**
    ```
      PORT=5000
      MONGO_URI = mongodb+srv://<database>:<password>@cluster0.cgmoocn.mongodb.net/persondb?retryWrites=true&w=majority
    ```
 - ## Running the API
    - To start the API, run the following command:
        ```
        npm start
        ```
      The API will start and be available at http://localhost:5000 (or the port you specified in the .env file).
## 4. Usage
Endpoints

  The API provides the following endpoints:
  - ``` GET /api/:user_id ``` Fetch a person's details by ID.
  - ``` POST /api ``` Add a new person.
  - ``` PUT /api/:user_id ``` Modify a person's details by ID.
  - ``` DELETE /api/:user_id ``` Remove a person by ID.
  

