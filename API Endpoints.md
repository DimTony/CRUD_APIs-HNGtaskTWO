# Authentication API Endpoints

# Generic

## Introduction

These endpoints serve as the gateway to secure and control access within your application. From user registration to login, account recovery, and two-factor authentication (2FA), these endpoints collectively ensure that only authorized individuals gain entry while providing essential tools for user management and security enhancement. Explore this documentation to understand their functions, implementation, and best practices, empowering you to build a robust and user-friendly authentication system.

### Table of Contents 
- [Authentication API Endpoints](#authentication-api-endpoints)
- [Generic](#generic)
  - [Introduction](#introduction)
    - [Table of Contents](#table-of-contents)
  - [Conventions](#conventions)
  - [Status Codes](#status-codes)
    - [Success Code](#success-code)
    - [Error Codes](#error-codes)
- [Objects](#objects)
  - [User Objects](#user-objects)
- [Endpoints](#endpoints)
    - [****Code samples \& SDKs****](#code-samples--sdks)
    - [User Signup](#user-signup)
    - [User Login with email](#user-login-with-email)
    - [Sign in with Google](#sign-in-with-google)
    - [**Two-Factor Authentication (2FA)**](#two-factor-authentication-2fa)
    - [Sign in with Facebook](#sign-in-with-facebook)
    - [Sign in with Github](#sign-in-with-github)


## Conventions

The base URL to send all API requests is `https://zuriportfoloio.com`. HTTPS is required for all API requests.

The Zuri-Portfolio API follows RESTful conventions when possible, with most operations performed via , `POST`, `PATCH` requests on page and database resources. Request and response bodies are encoded as JSON.

**JSON CONVENTIONS**

- Top-level resources have an `"object"` property. This property can be used to determine the type of the resource (e.g. `"firstname"`, `"lastname"`, `“email”` etc.)
- Top-level resources are addressable by a UUID `"id"` property. You may omit dashes from the ID when making requests to the API, e.g. when copying the ID from a Notion URL.
- Property names are in `camelCase`  (not `snake_case` or `kebab-case`).
- Temporal values (dates and datetimes) are encoded in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. Datetimes will include the time value (`2020-08-12T02:12:33.231Z`) while dates will include only the date (`2020-08-12`)
- The Zuri-Portfolio API does not support empty strings. To unset a string value for properties like a `url`Property value object, for example, use an explicit `null` instead of `""`.

## Status Codes

HTTP response codes are used to indicate general classes of success and error. 

### Success Code

| HTTP Status Quote | code | Description |
| --- | --- | --- |
| 200 | Success | Successfully processed request. |
| 201 | Created | User created successfully. |

### Error Codes

Error responses contain more detail about the error in the response body, in the `"code"` and `"message"` properties.

| HTTP Status Quote | code | message |
| --- | --- | --- |
| 400 | Bad Request | The user sent an invalid request. |
| 401 | Unauthorized | The user failed to authenticate with the server. |
| 404 | Page Not Found | The page was not found. |
| 403 | Access Denied | The user does not have permission to access the requested resource. |
| 500 | Internal Server Error | Error processing request from the server. |

# Objects

## User Objects

The user object will have the following attributes 

| Property | Updatable | Type | Description | Example value |
| --- | --- | --- | --- | --- |
| id | Display-only | string(UUID) | Unique identifier for this user. | "e79a0b74-3aba-4149-9f74-0bb5791a6ee6" |
| email | Editable | string | The email address associated with the user's account. | "johndoe@dev.com" |
| firstName | Display-only | string | User's First Name, as typed during registration | "John" |
| lastName | Display-only | string | User's Last Name, as typed during registration | "Doe" |
| passwordHash | Editable | string | A securely hashed version of the user's password. | "$2a$12$z3I8f7eF/m8DgjRu2xH7G.3QGKgY9b4QPC3fqqzTQrso/rU6EbwZa" |
| registrationDate | Display-only | date | A timestamp indicating when the user account was created. | 2023-09-12T02:12:33.231Z |
| verificationStatus | Editable | string(Enum) | A field to track whether the user's email has been verified. | "Verified" or "Not Verified" |
| accessToken | Editable | string | Access token generated during the login process | "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.-2F2RksP3Q5fHq7H1YlZO8tNY0IzHdUbR1MCvF1GqQw" |

# Endpoints

[Endpoints](Authentication%20API%20Endpoints%203e3d93c0aa184305b6f554a66a3cdd58/Endpoints%20b7efc4f51377439c99f23f5087a107d6.csv)

### ****Code samples & SDKs****

Sample requests and responses are shown for each endpoint. Requests are shown using the Notion [JavaScript SDK](https://github.com/makenotion/notion-sdk-js), and [cURL](https://curl.se/). These samples make it easy to copy, paste, and modify as you build your integration.

Notion SDKs are open-source projects that you can install to easily start building. You may also choose any other language or library that allows you to make HTTP requests.

### User Signup

Request Body

```json
{
		"firstName": "John",
		"lastName": "Doe",
		"email": "johndoe@email.com",
    "password": "password123"
}
```

Success Response

```json
{
  "message": "User registered successfully",
  "userId": "12345"
}
```

Error Response

```json
{
  "message": "Validation failed",
  "errors": "Invalid email format"
}
```

### User Login with email

Request Body

```json
{
"email": "johndoe@email.com",
"password": "password123"
}
```

Success Response

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response

```json
{
  "message": "Authentication failed",
  "error": "Invalid credentials"
}
```

### Sign in with Google

Request Body

```json
{
    "googleToken": "google-auth-token"
  }
```

Success Response

```json
{
  "message": "Google login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response

```json
{
  "message": "Google authentication failed",
  "error": "Invalid Google token"
}
```

### **Two-Factor Authentication (2FA)**

Request Body

```json
{
  "otp": "123456"
}
```

Success Response

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response

```json
{
  "message": "Authentication failed",
  "error": "Invalid credentials or OTP"
}
```

### Sign in with Facebook

Request Body

```json
{
  "facebookToken": "facebook-auth-token"
}
```

Success Response

```json
{
  "message": "Facebook login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response

```json
{
  "message": "Facebook authentication failed",
  "error": "Invalid Facebook token"
}
```

### Sign in with Github

Request Body

```json
{
  "githubToken": "github-auth-token"
}
```

Success Response

```json
{
  "message": "GitHub login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error Response

```json
{
  "message": "Github authentication failed",
  "error": "Invalid Github token"
}
```