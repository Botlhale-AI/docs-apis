---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

 Authentication API

## Endpoint: `/auth/create_user`

**Method:** `POST`

This endpoint creates a new user in Botlhale AI APIs and sends an email to the provided email.

### Request Body
The request body should include the following fields:

-  **email (str)** - Required
 The email address for the new user.


#### Response

The API returns a JSON object along with an HTTP status code.

**Successful User Creation:**

```
Unset 
{
    "message": ""Your username is {email}and temporary password is {password}."
    }
```

-  **message (str)** 

A message indicating the status of user creation.

## Endpoint:`/auth/login`

**Method:**  `POST`

This endpoint authenticates a user using their email and password, returning a new refresh token upon successful login. User is limited to 3 active refresh tokens . 


#### Request Body

The request body should include the following fields:

-  **email (str)** - Required

 The email address of the user.


-  **password (str)** - Required

 The password associated with the user's account.

#### Response

The API returns a JSON object along with an HTTP status code.

**Successful Authentication:**

```
Unset
{
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

-  **refresh_token (str)**

 A token that can be used to refresh the user's session.

## Endpoint: `/auth/reset_password`

**Method:** ` POST`

This endpoint initiates the password reset process by sending a confirmation code to the user's email address

#### Request Body

The request body should include the following field:
 -  **email (str)** - Required

  The email address of the user requesting the password reset.

  #### Response

  The API returns a JSON object along with an HTTP status code.
 **Successful Password Reset Initiation:**
 ```
 Unset
 {
    "message": "Password reset initiated successfully. Please check your email for further instructions."
}
```

## Endpoint: `/auth/confirm_reset_password`

**Method:** `POST`

 This endpoint completes the password reset process for a Botlhale AI API user by verifying the confirmation code and setting a new password.

#### Request Body

The request body must include the following fields:


| Request Params  | Data Type | Required | Description |
|-----------------|-----------|----------|-------------|
|email (str)           | string  | **Required** |   The email address of the user. |
| confirmation_code    | string  | **Required** |  The confirmation code sent to the user's email during the password reset initiation. |
| new_password | string  | **Required** |   The new password for the user. |


 #### Response

 The API returns a JSON object along with an HTTP status code.

**Successful Password Reset Confirmation:**
```
Unset
{
    "message": "Password reset confirmed successfully."
}
```

## Endpoint: `/auth/get_tokens`

**Method:** `GET`

This endpoint retrieves all refresh tokens associated with a specific user from the `api-users` table. The tokens are returned in a partially masked format for security purposes.


#### Request Parameters

The request must include the following query parameter:

-  **email (str)** - Required
 The email address of the user whose refresh tokens are being retrieved.

 #### Response

 The API returns a JSON object containing the list of refresh tokens along with an HTTP status code.

**Successful Retrieval of Tokens:**

```
Unset 
{
    "refresh_tokens": [
        {
            "token": "abcde****vwxyz",
            "datetime": "2023-10-01T12:34:56.789Z",
            "status": "active",
            "id": "token_id"
        },
        {
            "token": "mnopq****rstuv",
            "datetime": "2023-09-15T08:22:11.567Z",
            "status": "revoked",
            "id": "token_id_2"
        }
    ]
}
```

-  **token (str)**

    Partially masked refresh token for security.


-  **datetime (str)**

    The timestamp when the token was created or last updated.


-  **status (str)**

    The current status of the token (e.g., active or revoked).


-  **id (str)**

    A unique identifier for the refresh token.


## Endpoint: `/auth/revoke_token`

**Method:** `POST`

This endpoint allows a user to revoke a specific refresh token by providing the token ID and their email. The token is revoked from Botlhale AI APIs.

#### Request Body

The request body must include the following fields:

-  **email (str)** - Required

 The email address of the user requesting the revocation.


-  **id (str)** - Required

 The ID of the refresh token to be revoked.

 #### Response

 The API returns a JSON object along with an HTTP status code.
 
**Successful Token Revocation:**
```
Unset
{
    "message": "Refresh token revoked successfully."
}
```

## Endpoint: `/auth/generate`

**Method:**`POST`

This endpoint generates a new authentication token by refreshing an existing one using the provided refresh token.

#### Request Body

The request body should include the following field:

    -  **refresh_token (str)** -  **Required**

         The refresh token used to generate a new authentication token.


 #### Response

The API returns a JSON object along with an HTTP status code.

**Successful Token Generation:**
```
Unset
{
    "expires":  86400,
    "token": "eyJraWQiOiJwNzBVMDJlQzMxV01WbGg3b...."
}
```


- **token (str)**

   The newly generated authentication token.


- **expires (int)**

   The time in seconds until the token expires (e.g., 3600 seconds = 1 hour).


## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::






















