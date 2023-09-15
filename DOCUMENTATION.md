# HNGtaskTWO
Building a Simple REST API for Managing a 'person' resource with CRUD operations

## Table of Contents
- [HNGtaskTWO](#hngtasktwo)
  - [Table of Contents](#table-of-contents)
  - [1. API Usage](#1-api-usage)
    - [To CREATE a Person (POST /api)](#to-create-a-person-post-api)
    - [To READ a Person's details (GET /api/:user_id)](#to-read-a-persons-details-get-apiuser_id)
    - [To UPDATE a Person's details (PUT /api/:user_id)](#to-update-a-persons-details-put-apiuser_id)
    - [To DELETE a Person (DELETE /api/:user_id)](#to-delete-a-person-delete-apiuser_id)
  - [2. Sample Usage](#2-sample-usage)
    - [To CREATE a Person](#to-create-a-person)
    - [To READ a Person's details](#to-read-a-persons-details)
    - [Update a Person](#update-a-person)
    - [Delete a Person](#delete-a-person)
  - [3. Local Deployment](#3-local-deployment)
    - [Clone repository:](#clone-repository)
    - [Install dependencies in package.json:](#install-dependencies-in-packagejson)
    - [Create .env file and set db server:](#create-env-file-and-set-db-server)
    - [Run command below to start:](#run-command-below-to-start)
    - [Navigate to <http://localhost:5000> to view the project and the deploy the above mentioned endpoints.](#navigate-to-httplocalhostport-to-view-the-project-and-the-deploy-the-above-mentioned-endpoints)

## 1. API Usage

API Live URL: https://crud-rest-tonydim.onrender.com

We can use a testing tool like Postman (or any testing tool you are familiar with) to test each CRUD operation in the API

To run tests on Postman, use the following command:

- Create a Postman account if you don't have one already, and log into Postman for the web in your browser. To use Postman in a web browser, download and run the Postman agent on your local machine to overcome cross-origin resource sharing (CORS) limitations.
- Create or open a public workspace with a unique name
- Create a new collection under your workspace

For each endpoint, the API follows the following request and response formats:

### To CREATE a Person (POST /api)

- **Standard Request Format:**
  - HTTP Method: ``` POST ```
  - Endpoint: ``` /api ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api ```
  - Request Body (JSON):
    ```
    {
      "name": "Tony Dim"
    }
    ```
- **Successful Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body (JSON):
    ```
  
    {
      "createdPerson": {
          "name": "Tony Dim",
          "_id": "65035bca9279fe61fdfbda31"
      }
    }
    ```
- **Failed Response:**
  - HTTP Status Code: ``` 404 Bad Request ```
  - Instance: parsing ``` { "name": "" } ``` i.e An empty request field.
  - Response Body (JSON):
    ```
    {
       "message": "name field is required"
    }
    ```

### To READ a Person's details (GET /api/:user_id)

- **Standard Request Format:**

  - HTTP Method: ``` GET ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```

- **Successful Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body (JSON):
    ```
    
    {
      "PersonDetails": {
          "_id": "65035bca9279fe61fdfbda31",
          "name": "obinna"
      }
    }
    ```
- **Failed Response:**
  - HTTP Status Code: ``` 404 Not Found ```
  - Instance: Parsing ``` https://crud-rest-tonydim.onrender.com/api/65038162097164357fbadf4d ``` i.e A user that does not exist in the database.
  - Response Body (JSON):
    ```
    {
       "message": "Person not found"
    }
    ```

### To UPDATE a Person's details (PUT /api/:user_id)

- **Standard Request Format:**

  - HTTP Method: ``` PUT ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format:```  https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```
  - Request Body (JSON):
    ```
    {
      "name": "Anthony"
    }
    ```

- **Successful Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body (JSON):
    ```
    {
        "updatedPerson": {
            "_id": "65035bca9279fe61fdfbda31",
            "name": "Anthony"
        }
    }
    ```
- **Failed Response:**
  - HTTP Status Code: ``` 404 Not Found ```
  - Instance: Parsing ``` https://crud-rest-tonydim.onrender.com/api/65038162097164357fbadf4d ``` i.e A user that does not exist in the database.
  - Response Body (JSON):
    ```
    {
       "message": "Person not found"
    }
    ```
### To DELETE a Person (DELETE /api/:user_id)

- **Standard Request Format:**

  - HTTP Method: ``` DELETE ```
  - Endpoint: ``` /api/:user_id ```
  - Sample Url format: ``` https://crud-rest-tonydim.onrender.com/api/65035bca9279fe61fdfbda31 ```

- **Successful Response:**
  - HTTP Status Code: ``` 200 OK ```
  - Response Body (JSON):
    ```
      {
          "message": "Person has been deleted."
      }
  
    ```
- **Failed Response:**
  - HTTP Status Code: ``` 404 Not Found ```
  - Instance: Parsing ``` https://crud-rest-tonydim.onrender.com/api/65038162097164357fbadf4d ``` i.e A user that does not exist in the database or that has already been deleted.
  - Response Body (JSON):
    ```
    {
       "message": "Person not found"
    }
    ```

## 2. Sample Usage

Here are some sample API usage scenarios:
  
  - Note: make sure you have your server running*

### To CREATE a Person

   ```bash
   curl --location 'https://crud-rest-tonydim.onrender.com/api' --header 'Content-Type: application/json' --data '{
        "name": "Tony Dim"
      }'
   ```

- **Response:**

  ![A terminal response of CREATE](IMG/createPerson.png)

### To READ a Person's details

   ```bash
   curl --location 'https://crud-rest-tonydim.onrender.com/api/65048e1fcaa0559630deaafa'
   ```

- **Response:**

  ![A terminal response of GET](IMG/readAPerson.png)

### Update a Person

   ```bash
   curl --location --request PUT 'https://crud-rest-tonydim.onrender.com/api/65048e1fcaa0559630deaafa' \
      --header 'Content-Type: application/json' \
      --data '{
          "name": "Tony Dim Updated"
      }'
   ```

- **Response:**

  ![A terminal response of PUT](IMG/updateAPerson.png)

### Delete a Person

   ```bash
   curl --location --request DELETE 'https://crud-rest-tonydim.onrender.com/api/65048e1fcaa0559630deaafa'
   ```

  - **Response:**

    ![A terminal response of DELETE](IMG/deletePerson.png)
  
## 3. Local Deployment

### Clone repository:

```
git clone https://github.com/DimTony/HNGtaskTWO.git
```

### Install dependencies in package.json:

```
npm install
```

### Create .env file and set db server:

```
PORT: 5000
MONGODB_URI = "mongodb://localhost:27017/<database>"
```

### Run command below to start:

```
npm run start
```

### Navigate to <http://localhost:5000> to view the project and the deploy the above mentioned endpoints.
