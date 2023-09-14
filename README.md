./gh-md-toc https://github.com/DimTony/HNGtaskTWO/blob/main/README.md

# HNGtaskTWO
Building a Simple REST API for Managing a 'person' resource with CRUD operations

## Table of Contents
1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Configuration](#configuration)
3. [Running the API](#running-the-api)
4. [Usage](#usage)
   - [Endpoints](#endpoints)
5. [Testing](#testing)
6. [License](#license)


## 1. Getting Started

### Prerequisites

   Before you can run the API, make sure you have the following prerequisites installed:
   
   - Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).
   - MongoDB: Install and set up MongoDB on your system. You can download it from [mongodb.com](https://www.mongodb.com/).
   
   ### Installation
   ```
   npm install
   ```
   ### Clone the repository to your local machine:
   ```
   git clone https://github.com/DimTony/HNGtaskTWO.git
   ```
    **Install the project dependencies:**
   ```
   npm install
```
## 2. Configuration
- To configure the API, you need to set up environment variables. Create a .env file in the project root and add the following variables:

- PORT: The port on which the API will run (default is 5000).
- MONGO_URI: The connection string to your MongoDB instance. Set the <database and <password> to that of your preferred choice

**Sample:**
```
  PORT=5000
  MONGO_URI = mongodb+srv://<database>:<password>@cluster0.cgmoocn.mongodb.net/persondb?retryWrites=true&w=majority
```

## 3. Running the API
- To start the API, run the following command:
**run**
```
npm start
```
- The API will start and be available at http://localhost:5000 (or the port you specified in the .env file).

## 4. Usage
**Endpoints**
- The API provides the following endpoints:

- ``` GET /api/:user_id ``` Retrieve person's details by ID.
- ``` POST /api ``` Create a new person.
- ``` PUT /api/:user_id ``` Update a person's details by ID.
- ``` DELETE /api/:user_id ``` Delect a person by ID.

## 5. Testing
We can use a testing tool like Postman (or any testing tool you are familiar with) to test each CRUD operation in the API

To run tests on Postman, use the following command:

- Create a Postman account if you don't have one already, and log into Postman for the web in your browser. To use Postman in a web browser, download and run the Postman agent on your local machine to overcome cross-origin resource sharing (CORS) limitations.
- Create or open a public workspace with a unique name
- Create a new collection under your workspace

For each endpoint, the API follows the following request and response formats:

### To CREATE A Person (POST /api)

- **Request:**
  - HTTP Method: ``` POST ```
  - Endpoint: ``` /api ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api ```
  - Request Body:
    ```
    {
      "name": "Obinna"
    }
    ```
- **Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body:
    ```
  
    {
      "person": {
          "name": "obinna",
          "_id": "65035bca9279fe61fdfbda31"
      }
    }
    ```

### To READ a Single Person (GET /api/:user_id)

- **Request:**

  - HTTP Method: ``` GET ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```

- **Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body:
    ```
    
    {
      "person": {
          "_id": "65035bca9279fe61fdfbda31",
          "name": "obinna"
      }
    }
    ```

### To UPDATE a Person's detail (PUT /api/:user_id)

- **Request:**

  - HTTP Method: ``` PUT ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format:```  https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```
  - Request Body:
    ```
    {
      "name": "Anthony"
    }
    ```

- **Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body:
    ```
    {
        "updatedPerson": {
            "_id": "65035bca9279fe61fdfbda31",
            "name": "Anthony"
        }
    }
    ```
  ### To DELETE a Person (DELETE /api/:user_id)

- **Request:**

  - HTTP Method: ``` DELETE ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```

- **Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body:
  ```
    {
        "message": "Person has been deleted."
    }

  ```

  To test the GET endpoint
- In the collection you've created, Set your HTTP request to GET
- In the request URL field, input link
- Click Send
- 
In the request URL field, input link

You will see 200 OK Message

- ## UML DIAGRAM
*LINK* https://lucid.app/lucidchart/e4e345e8-19da-407c-9920-b079544679b7/edit?viewport_loc=-236%2C-418%2C2346%2C1047%2C0_0&invitationId=inv_0138a24a-008a-42e7-b888-f14c40084274

## 6. License
This project is licensed under the MIT License. See the LICENSE file for details.
