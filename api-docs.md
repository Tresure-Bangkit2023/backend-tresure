# backend-tresure

# Project: Tresure API Documentation
This is API Documentation for Tresure Application
# 📁 Collection: User 


## End-point: register user deploy
Request for Register User
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/register
>```
### Body (**raw**)

```json
{
    "username" : "reza",
    "password" : "oke123",
    "email" : "aee@gmail.com",
    "full_name" : "reza ae",
    "location"  : "Yogyakarta"
}
```

### Response: 201
```json
{
    "error": false,
    "message": "User registered successfully."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login user deploy
Request for login users
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/login
>```
### Body (**raw**)

```json
{
    "username" : "reza",
    "password" : "oke123"
}
```

### Response: 200
```json
{
    "error": false,
    "message": "Login success!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4NjU2NTk5MiwiZXhwIjoxNjg2NjUyMzkyfQ.CdzTQjwIWr3MC00SlHkrhS7P7EaZPWodqaDaeZ1xgaU"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get user deploy
Request for get all users
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "error": false,
    "data": [
        {
            "id": 10000,
            "username": "alip",
            "password": "$2b$10$FumK0RGmr5wpUoMOG2NdtOZM.jCjbkIThC5S1w7TtB0gx.zPY/KgK",
            "email": "alip@gmail.com",
            "full_name": "Alip Raihan",
            "location": null,
            "profile_pic": null,
            "solo_traveler": null
        },
        {
            "id": 10001,
            "username": "zyncaws",
            "password": "$2b$10$.rvbFa0DfRcYA/mr/htruO5JGBkTY6VB18DsW.S4V.wVnB6aEsMuO",
            "email": "zyncaws@gmail.com",
            "full_name": "Zynca W",
            "location": null,
            "profile_pic": null,
            "solo_traveler": null
        },
        {
            "id": 10002,
            "username": "a",
            "password": "$2b$10$7C.k2GOQJDQjY1vTqIJSQOsiMD41jcOYSYb9dHmM4BicHtEmUr/o6",
            "email": "a@a.a",
            "full_name": "a",
            "location": null,
            "profile_pic": null,
            "solo_traveler": null
        },
        {
            "id": 10003,
            "username": "test",
            "password": "$2b$10$2Lr1Nn1c.VSFiFIAe6ABXuHv9YHcFkJTTg4/dG1X9OedgY1.ui6JK",
            "email": "test@gmail.com",
            "full_name": "test",
            "location": null,
            "profile_pic": null,
            "solo_traveler": null
        },
        {
            "id": 10004,
            "username": "reza",
            "password": "$2b$10$vlewNTnAqFV8oKJ7sJPDFu71eUyS4JADYiCLwnAjo88R7pH3GciLe",
            "email": "aee@gmail.com",
            "full_name": "reza ae",
            "location": "Yogyakarta",
            "profile_pic": null,
            "solo_traveler": null
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get user by id deploy
Request for get user by ID
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/10002
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "error": false,
    "data": {
        "id": 10002,
        "username": "a",
        "password": "$2b$10$7C.k2GOQJDQjY1vTqIJSQOsiMD41jcOYSYb9dHmM4BicHtEmUr/o6",
        "email": "a@a.a",
        "full_name": "a",
        "location": null,
        "profile_pic": null,
        "solo_traveler": null,
        "liked_categories": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user deploy
Request for update user information

_**Masih error yang ini**_
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/10004
>```
### Body (**raw**)

```json
{
  "username": "rezawok",
  "password": "oke123098",
  "email": "aee23@gmail.com",
  "full_name": "reza ae",
  "location": "Bogor"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "error": false,
    "message": "User updated successfully."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: logout user deploy
Request for logout users

_**Masih belum di upload yang ini**_
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/logout
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete user deploy
Request for delete user
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/10002
>```
### Body (**raw**)

```json
{
    "username": "hehoe",
    "password": "ch33se",
    "email": "wkowk@gmail.com",
    "full_name": "Testheohe he",
    "location": "Yogyakarta"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "error": false,
    "message": "User successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Plan 


## End-point: create plan
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/plans
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "title": "Family Trip",
    "num_of_people": 4,
    "city": "New York",
    "start_location": "Central Park",
    "start_time": "2023-06-01T09:00:00Z"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Plan created successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all plans
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/plans
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
[
    {
        "id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
        "user_id": 10004,
        "title": "Family Trip",
        "num_of_people": 4,
        "city": "New York",
        "start_location": "Central Park",
        "start_time": "2023-06-01T09:00:00.000Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get plans by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/plans/3146c49b-62b6-48c0-816a-28d6b0e766ab
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
    "user_id": 10004,
    "title": "Family Trip",
    "num_of_people": 4,
    "city": "New York",
    "start_location": "Central Park",
    "start_time": "2023-06-01T09:00:00.000Z",
    "PlanPlace": [
        {
            "id": "e415916c-ed47-4874-9cf7-c4fad4eb1387",
            "plan_id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
            "place_id": 2,
            "depart_time": "2023-07-01T11:00:00.000Z",
            "transport_mode": "car",
            "transport_price": 50
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update plans by id
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/plans/3146c49b-62b6-48c0-816a-28d6b0e766ab
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "title": "Family Vacation",
    "num_of_people": 5,
    "city": "Los Angeles",
    "start_location": "Santa Monica Pier",
    "start_time": "2023-07-01T10:00:00Z"
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Plan successfully updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete plans
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/plans/3146c49b-62b6-48c0-816a-28d6b0e766ab
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Plan successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Categories 


## End-point: add categories
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/categories
>```
### Body (**raw**)

```json
{
    "id": 7,
    "name": "Teknologi"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Category created successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all categories
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/categories
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
[
    {
        "id": 1,
        "name": "Bahari"
    },
    {
        "id": 2,
        "name": "Budaya"
    },
    {
        "id": 3,
        "name": "Cagar Alam"
    },
    {
        "id": 4,
        "name": "Pusat Perbelanjaan"
    },
    {
        "id": 5,
        "name": "Taman Hiburan"
    },
    {
        "id": 6,
        "name": "Tempat Ibadah"
    },
    {
        "id": 7,
        "name": "Teknologi"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get categories by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/categories/1
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "id": 1,
    "name": "Bahari"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update categories
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/categories/1
>```
### Body (**raw**)

```json
{
  "name": "Bahari"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Category successfully updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete categories
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/categories/7
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Category successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Places 


## End-point: add places
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places
>```
### Body (**raw**)

```json
{
        "category_id": 6,
        "name": "Place Name",
        "description": "Place Description",
        "city": "Surabaya",
        "price": 10000,
        "lat": 123.456,
        "lng": 78.901,
        "rating": 4.8,
        "image": "https://example.com/image.jpg"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Place created successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all places
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
[
    {
        "id": 1,
        "category_id": 2,
        "name": "Monumen Nasional",
        "description": "Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan raky",
        "city": "Jakarta",
        "price": 20000,
        "lat": -6.1753924,
        "lng": 106.8271528,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Nasional.jpg"
    },
    {
        "id": 2,
        "category_id": 2,
        "name": "Kota Tua",
        "description": "Kota tua di Jakarta, yang juga bernama Kota Tua, berpusat di Alun-Alun Fatahillah, yaitu alun-alun yang ramai dengan pertunjukan rutin tarian tradisional. Museum Sejarah Jakarta adalah bangun",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1376448,
        "lng": 106.8171245,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Kota%20Tua.jpg"
    },
    {
        "id": 3,
        "category_id": 4,
        "name": "Dunia Fantasi",
        "description": "Dunia Fantasi atau disebut juga Dufan adalah tempat hiburan yang terletak di kawasan Taman Impian Jaya Ancol, Jakarta Utara, Indonesia. Dufan diresmikan dan dibuka pada tanggal 29 Agustus 198",
        "city": "Jakarta",
        "price": 270000,
        "lat": -6.1253124,
        "lng": 106.8335377,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Dunia%20Fantasi.jpg"
    },
    {
        "id": 4,
        "category_id": 4,
        "name": "Taman Mini Indonesia Indah (TMII)",
        "description": "Taman Mini Indonesia Indah merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur. Area seluas kurang lebih 150 hektare atau 1,5 kilometer persegi ini terletak pada ko",
        "city": "Jakarta",
        "price": 10000,
        "lat": -6.3024459,
        "lng": 106.8951559,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Mini%20Indonesia%20Indah%20%28TMII%29.jpg"
    },
    {
        "id": 5,
        "category_id": 4,
        "name": "Atlantis Water Adventure",
        "description": "Atlantis Water Adventure atau dikenal dengan Atlantis Ancol akan menyuguhkan petualangan wisata air tak terlupakan. Tempat Wisata bertemakan permainan air dengan luas 5 hektar ini memberi sen",
        "city": "Jakarta",
        "price": 94000,
        "lat": -6.12419,
        "lng": 106.839134,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Atlantis%20Water%20Adventure.jpg"
    },
    {
        "id": 6,
        "category_id": 4,
        "name": "Taman Impian Jaya Ancol",
        "description": "Taman Impian Jaya Ancol merupakan sebuah objek wisata di Jakarta Utara.\\n\\n",
        "city": "Jakarta",
        "price": 25000,
        "lat": -6.1173332,
        "lng": 106.8579951,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Impian%20Jaya%20Ancol.jpg"
    },
    {
        "id": 7,
        "category_id": 3,
        "name": "Kebun Binatang Ragunan",
        "description": "Kebun Binatang Ragunan adalah sebuah kebun binatang yang terletak di daerah Ragunan, Pasar Minggu, Jakarta Selatan, Indonesia. Kebun binatang seluas 140 hektare ini didirikan pada tahun 1864.",
        "city": "Jakarta",
        "price": 4000,
        "lat": -6.3124593,
        "lng": 106.8201865,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Binatang%20Ragunan.jpg"
    },
    {
        "id": 8,
        "category_id": 4,
        "name": "Ocean Ecopark",
        "description": "Ocean Ecopark Salah satu zona rekreasi Ancol yang menawarkan ruang terbuka hijau serta pengalaman dan tidak melupakan sisi pendidikan bagi para pengunjung. Beragam aktivitas dan wahana seru y",
        "city": "Jakarta",
        "price": 180000,
        "lat": -6.1258017,
        "lng": 106.8363249,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Ocean%20Ecopark.jpg"
    },
    {
        "id": 9,
        "category_id": 1,
        "name": "Pelabuhan Marina",
        "description": "Pelabuhan Marina Ancol berada di kawasan Taman Impian Jaya Ancol, Jakarta. Pelabuhan yang biasa disebut Dermaga Marina Ancol ini adalah kawasan yang tidak hanya untuk keperluan penyeberangan ",
        "city": "Jakarta",
        "price": 175000,
        "lat": 1.07888,
        "lng": 103.931398,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pelabuhan%20Marina-not-found.jpg"
    },
    {
        "id": 10,
        "category_id": 1,
        "name": "Pulau Tidung",
        "description": "Pulau Tidung adalah salah satu kelurahan di kecamatan Kepulauan Seribu Selatan, Kabupaten Kepulauan Seribu, Jakarta, Indonesia.",
        "city": "Jakarta",
        "price": 150000,
        "lat": -5.8032053,
        "lng": 106.5237907,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Tidung.jpg"
    },
    {
        "id": 11,
        "category_id": 1,
        "name": "Pulau Bidadari",
        "description": "Pulau Bidadari merupakan salah satu resor di Kabupaten Kepulauan Seribu, Jakarta. Sebelum bernama Pulau Bidadari, pulau ini memiliki dua nama yaitu Pulau Sakit dan Pulau Purmerend",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.035833,
        "lng": 106.746944,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Bidadari.jpg"
    },
    {
        "id": 12,
        "category_id": 1,
        "name": "Pulau Pari",
        "description": "Pulau Pari adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia.\r\n",
        "city": "Jakarta",
        "price": 150000,
        "lat": -5.9074328,
        "lng": 106.5863989,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Pari.jpg"
    },
    {
        "id": 13,
        "category_id": 1,
        "name": "Pulau Pramuka",
        "description": "Pulau Pramuka merupakan salah satu pulau yang berada dalam gugusan Kepulauan Seribu. Pulau ini merupakan pusat administrasi dan pemerintahan Kabupaten Administrasi Kepulauan Seribu. Pulau Pra",
        "city": "Jakarta",
        "price": 5000,
        "lat": -5.745962,
        "lng": 106.6136577,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Pramuka.jpg"
    },
    {
        "id": 14,
        "category_id": 1,
        "name": "Pulau Pelangi",
        "description": "Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia. Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah ",
        "city": "Jakarta",
        "price": 900000,
        "lat": -5.587055,
        "lng": 106.5885,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Pelangi.jpg"
    },
    {
        "id": 15,
        "category_id": 5,
        "name": "Pasar Seni",
        "description": "Pasar Seni merupakan Pusat kerajinan dan kesenian yang menjadi wadah bagi seniman berbakat untuk menyalurkan kerajinan seni yang mereka miliki. Seniman dapat bertemu dengan para kolektor seni",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1766868,
        "lng": 106.8417666,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Seni.jpg"
    },
    {
        "id": 16,
        "category_id": 2,
        "name": "Jembatan Kota Intan",
        "description": "Jembatan Kota Intan adalah jembatan tertua di Indonesia yang dibangun pada tahun 1628 oleh pemerintah Vereenigde Oostindische Compagnie atau VOC, atau masyarakat kita lebih familiar dengan se",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1314572,
        "lng": 106.8106169,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Jembatan%20Kota%20Intan.jpg"
    },
    {
        "id": 17,
        "category_id": 2,
        "name": "Museum Fatahillah",
        "description": "Museum Fatahillah memiliki nama resmi Museum Sejarah Jakarta adalah sebuah museum yang terletak di Jalan Taman Fatahillah No. 1, Jakarta Barat dengan luas lebih dari 1.300 meter persegi.\\nBan",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1364489,
        "lng": 106.8130661,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Fatahillah.jpg"
    },
    {
        "id": 18,
        "category_id": 2,
        "name": "Museum Bank Indonesia",
        "description": "Museum Bank Indonesia adalah sebuah museum di Jakarta, Indonesia yang terletak di Jl. Pintu Besar Utara No.3, Jakarta Barat (depan stasiun Beos Kota), dengan menempati area bekas gedung Bank ",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.137127,
        "lng": 106.813005,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Bank%20Indonesia.jpg"
    },
    {
        "id": 19,
        "category_id": 4,
        "name": "Kidzania",
        "description": "KidZania adalah sebuah waralaba swasta Meksiko berupa pusat hiburan keluarga yang saat ini beroperasi di 23 lokasi, yang memungkinkan anak-anak melakukan pekerjaan orang dewasa dan mendapat b",
        "city": "Jakarta",
        "price": 185000,
        "lat": -6.2250735,
        "lng": 106.8097144,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Kidzania.jpg"
    },
    {
        "id": 20,
        "category_id": 2,
        "name": "Museum Taman Prasasti",
        "description": "Museum Taman Prasasti adalah sebuah museum cagar budaya peninggalan masa kolonial Belanda yang berada di Jalan Tanah Abang No. 1, Jakarta Pusat. Museum ini memiliki koleksi prasasti nisan kun",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.1722241,
        "lng": 106.8189695,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Tekstil.jpg"
    },
    {
        "id": 21,
        "category_id": 2,
        "name": "Museum Wayang",
        "description": "Museum Wayang adalah sebuah museum yang berlokasi di Jalan Pintu Besar Utara Nomor 27, Jakarta Barat.",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1349072,
        "lng": 106.8124452,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Wayang.jpg"
    },
    {
        "id": 22,
        "category_id": 6,
        "name": "Masjid Istiqlal",
        "description": "Masjid Istiqlal (arti harfiah: Masjid Merdeka) adalah masjid nasional negara Republik Indonesia yang terletak di bekas Taman Wilhelmina, di Timur Laut Lapangan Medan Merdeka yang di tengahnya",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.17017,
        "lng": 106.83139,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Istiqlal.jpg"
    },
    {
        "id": 23,
        "category_id": 6,
        "name": "Gereja Katedral",
        "description": "Gereja Katedral Jakarta, atau bernama resmi Gereja Santa Maria Diangkat Ke Surga (bahasa Jerman: De Kerk van Onze Lieve Vrouwe ten Hemelopneming; bahasa Inggris: The Church of Our Lady of the",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.169225,
        "lng": 106.833063,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Katedral.jpg"
    },
    {
        "id": 24,
        "category_id": 2,
        "name": "Museum Nasional",
        "description": "Museum Nasional Republik Indonesia atau Museum Gajah, adalah sebuah museum arkeologi, sejarah, etnografi, dan geografi yang terletak di Jakarta Pusat dan persisnya di Jalan Merdeka Barat 12. ",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1764021,
        "lng": 106.8215901,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Nasional.jpg"
    },
    {
        "id": 25,
        "category_id": 5,
        "name": "Pasar Tanah Abang",
        "description": "Pasar Tanah Abang atau Pasar Sabtu dibangun oleh Yustinus Vinck pada 30 Agustus 1735. Yustinus Vinck mendirikan Pasar Tanah Abang Pasar atas izin dari Gubernur Jenderal Abraham Patramini. Izi",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1890096,
        "lng": 106.8119312,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Tanah%20Abang.jpg"
    },
    {
        "id": 26,
        "category_id": 5,
        "name": "Pecinan Glodok",
        "description": "Kawasan Glodok yang dikenal sebagai pusat perdagangan elektronik sendiri dulunya merupakan bekas Penjara Glodok yang angker. Lokasi ini berada di seberang Glodok-Pancoran di kawasan Harco. Se",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1427588,
        "lng": 106.8140791,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pecinan%20Glodok.jpg"
    },
    {
        "id": 27,
        "category_id": 4,
        "name": "Sea World",
        "description": "Seaworld Indonesia adalah sebuah miniatur pesona laut yang terdapat dalam kompleks wisata pertama di Taman Impian Jaya Ancol.\\nPada tanggal 2 Oktober 1992, Gubernur DKI masa itu, Wiyogo Atmod",
        "city": "Jakarta",
        "price": 115000,
        "lat": -6.1264775,
        "lng": 106.842963,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Sea%20World.jpg"
    },
    {
        "id": 28,
        "category_id": 4,
        "name": "Wisata Agro Edukatif Istana Susu Cibugary",
        "description": "Kawasan Wisata Agro Edukatif Istana Susu “Cibugary” (Cibubur Garden Dairy ) merupakan suatu kawasan agro peternakan sapi perah bernuansa kebun dan taman. Wisata edukasi Cibubur Garden Dairy (",
        "city": "Jakarta",
        "price": 35000,
        "lat": -6.3568093,
        "lng": 106.9062371,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Agro%20Edukatif%20Istana%20Susu%20Cibugary.jpg"
    },
    {
        "id": 29,
        "category_id": 5,
        "name": "Wisata Kuliner Pecenongan",
        "description": "Pecenongan merupakan salah satu surga kuliner di Jakarta Pusat yang dikenal sejak zaman Jakarta masih bernama kota Batavia. Dulunya di kawasan ini terdapat pedagang kaki lima yang menjajakan ",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1667887,
        "lng": 106.8265261,
        "rating": 5,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Kuliner%20Pecenongan.jpg"
    },
    {
        "id": 30,
        "category_id": 4,
        "name": "Taman Menteng",
        "description": "Taman Menteng adalah sebuah taman yang berlokasi di kawasan Menteng, Jakarta Pusat. Taman ini dulunya ditempati oleh Stadion Menteng.\\nTaman ini berdiri di atas lahan seluas 2,9 hektar, dan m",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1964087,
        "lng": 106.8293106,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Menteng.jpg"
    },
    {
        "id": 31,
        "category_id": 3,
        "name": "Wisata Alam Mangrove Angke",
        "description": "Jangan anggap di Jakarta tidak ada wisata alam. Langsung meluncur ke Jakarta Utara, tepatnya di Kamal Muara Penjaringan atau Pantai Indah Kapuk. Di daerah ini terdapat area wisata alam yaitu ",
        "city": "Jakarta",
        "price": 25000,
        "lat": -6.105334,
        "lng": 106.735584,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Alam%20Mangrove%20Angke.jpg"
    },
    {
        "id": 32,
        "category_id": 2,
        "name": "Setu Babakan",
        "description": "Setu Babakan atau Danau Babakan terletak di Srengseng Sawah, kecamatan Jagakarsa, Kotamadya Jakarta Selatan, Indonesia dekat Depok yang berfungsi sebagai pusat Perkampungan Budaya Betawi, sua",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.3416667,
        "lng": 106.8238889,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Setu%20Babakan.jpg"
    },
    {
        "id": 33,
        "category_id": 4,
        "name": "Taman Suropati",
        "description": "Taman Suropati (awalnya bernama Burgemeester Bisschopplein) adalah nama sebuah taman di Jakarta. Pada awalnya nama taman ini diambil dari nama wali kota Batavia pertama, G.J. Bisshop (1916–19",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1994034,
        "lng": 106.8326228,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Suropati.jpg"
    },
    {
        "id": 34,
        "category_id": 5,
        "name": "Pasar Taman Puring",
        "description": "Taman Puring bukanlah taman secara harfiah. Sejak eksis di tahun 1960 silam, Taman Puring adalah sebuah pasar. Selama bertahun-tahun, pasar ini sempat menjadi pasar gelap alias pasar barang-b",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.241369,
        "lng": 106.7890587,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Taman%20Puring.jpg"
    },
    {
        "id": 35,
        "category_id": 5,
        "name": "Grand Indonesia Mall",
        "description": "Grand Indonesia merupakan mal di Jakarta. Mal ini dibuka pada tahun 2007 oleh Presiden Susilo Bambang Yudhoyono. Pada tahun 2007, Hotel Indonesia mengalami pemugaran. Selanjutnya setelah dibu",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1951801,
        "lng": 106.8204412,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Grand%20Indonesia%20Mall.jpg"
    },
    {
        "id": 36,
        "category_id": 4,
        "name": "Skyrink - Mall Taman Anggrek",
        "description": "Salah satu arena ice skating Jakarta adalah Ice Skating Taman Anggrek. Area ice skating di Taman Anggrek dibuat seluas 1.248 meter persegi. Ice Skating Termegah Di Indonesia adalaH di Taman A",
        "city": "Jakarta",
        "price": 110000,
        "lat": -6.178996,
        "lng": 106.791941,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Skyrink%20-%20Mall%20Taman%20Anggrek.jpg"
    },
    {
        "id": 37,
        "category_id": 4,
        "name": "Bumi Perkemahan Cibubur",
        "description": "Bumi Perkemahan dan Graha Wisata Pramuka Cibubur (Buperta Cibubur) adalah kawasan perkemahan yang terdapat di Cibubur, Ciracas, Jakarta Timur. Kawasan ini memiliki luas 210 hektar dan sudah b",
        "city": "Jakarta",
        "price": 10000,
        "lat": -6.3602487,
        "lng": 106.893842,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bumi%20Perkemahan%20Cibubur.jpg"
    },
    {
        "id": 38,
        "category_id": 2,
        "name": "Istana Negara Republik Indonesia",
        "description": "Istana Negara merupakan pusat kegiatan pemerintahan negara. Banyak kegiatan-kegiatan bersifat kenegaraan digelar di Istana Negara. Seperti kegiatan pelantikan pejabat-pejabat penting negara, ",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.168069,
        "lng": 106.8239727,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Istana%20Negara%20Republik%20Indonesia.jpg"
    },
    {
        "id": 39,
        "category_id": 2,
        "name": "Museum Macan (Modern and Contemporary Art in Nusantara)",
        "description": "Museum Seni Modern dan Kontemporer di Nusantara atau Museum MACAN adalah sebuah museum seni di Kebon Jeruk di Jakarta, Indonesia. Museum ini merupakan yang pertama di Indonesia yang memiliki ",
        "city": "Jakarta",
        "price": 100000,
        "lat": -6.190942,
        "lng": 106.767622,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Macan%20%28Modern%20and%20Contemporary%20Art%20in%20Nusantara%29.jpg"
    },
    {
        "id": 40,
        "category_id": 2,
        "name": "Galeri Nasional Indonesia",
        "description": "Galeri Nasional Indonesia (bahasa Inggris: National Gallery of Indonesia) adalah sebuah lembaga budaya negara atau sebagai museum seni rupa modern dan kontemporer. Di sini terdapat gedung yan",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1785482,
        "lng": 106.8327716,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Gedung%20Agung%20Yogyakarta.jpg"
    },
    {
        "id": 41,
        "category_id": 2,
        "name": "Museum Bahari Jakarta",
        "description": "Museum Bahari adalah museum yang menyimpan koleksi yang berhubungan dengan kebaharian dan kenelayanan bangsa Indonesia dari Sabang hingga Merauke yang berlokasi di seberang Pelabuhan Sunda Ke",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.1269553,
        "lng": 106.8085899,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Bahari%20Jakarta.jpg"
    },
    {
        "id": 42,
        "category_id": 2,
        "name": "Museum Seni Rupa dan Kramik",
        "description": "Museum Seni Rupa dan Keramik (Indonesia: Museum Seni Rupa dan Keramik) adalah sebuah museum di Jakarta, Indonesia. Museum ini didedikasikan khusus untuk menampilkan seni rupa tradisional dan ",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1342598,
        "lng": 106.814552,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Seni%20Rupa%20dan%20Kramik.jpg"
    },
    {
        "id": 43,
        "category_id": 4,
        "name": "The Escape Hunt",
        "description": "Escape Hunt adalah salah satu tempat rekreasi yang lokasinya terletak di Jakarta Selatan. Di tempat ini, kamu akan berperan sebagai seorang detektif yang berada di sebuah ruangan terkunci dan",
        "city": "Jakarta",
        "price": 70000,
        "lat": -6.2555033,
        "lng": 106.8122591,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/The%20Escape%20Hunt.jpg"
    },
    {
        "id": 44,
        "category_id": 2,
        "name": "Monumen Selamat Datang",
        "description": "Monumen Selamat Datang adalah sebuah monumen yang terletak di tengah Bundaran Hotel Indonesia, Jakarta, Indonesia. Monumen ini berupa patung sepasang manusia yang sedang menggenggam bunga dan",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1949978,
        "lng": 106.8230496,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Selamat%20Datang.jpg"
    },
    {
        "id": 45,
        "category_id": 4,
        "name": "Jakarta Aquarium dan Safari",
        "description": "Jika telah mengunjungi Seaworld Ancol, mungkin sudah tidak asing lagi dengan serunya menyaksikan biota laut. Jika belum puas, pengunjung dapat mencoba mengunjungi wisata satwa laut unik di Ja",
        "city": "Jakarta",
        "price": 185000,
        "lat": -6.1752647,
        "lng": 106.7904684,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Jakarta%20Aquarium%20dan%20Safari.jpg"
    },
    {
        "id": 46,
        "category_id": 1,
        "name": "Pulau Semak Daun",
        "description": "Pulau Semak Daun merupakan salah satu pulau yang terletak digugusan kepulauan Seribu. Secara administratif pulau ini termasuk dalam wilayah kabupaten Kepulauan Seribu provinsi DKI Jakarta seb",
        "city": "Jakarta",
        "price": 40000,
        "lat": -5.7296716,
        "lng": 106.5714158,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pulau%20Semak%20Daun.jpg"
    },
    {
        "id": 47,
        "category_id": 4,
        "name": "Taman Situ Lembang",
        "description": "Taman Situ Lembang adalah sebuah taman kota yang terletak di pusat Jakarta. Situ berarti danau yang payau, sedangkan Lembang adalah nama jalan yang berada di dekat taman tersebut..\\nTaman ini",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1978861,
        "lng": 106.8346708,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Situ%20Lembang.jpg"
    },
    {
        "id": 48,
        "category_id": 2,
        "name": "Taman Ismail Marzuki",
        "description": "Pusat Kesenian Jakarta Taman Ismail Marzuki yang populer disebut Taman Ismail Marzuki (TIM) merupakan sebuah pusat kesenian dan kebudayaan yang berlokasi di jalan Cikini Raya 73, Jakarta Pusa",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1891586,
        "lng": 106.8397738,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Ismail%20Marzuki.jpg"
    },
    {
        "id": 49,
        "category_id": 2,
        "name": "Galeri Indonesia Kaya",
        "description": "Galeri Indonesia Kaya (disingkat GIK) adalah ruang publik yang memadukan konsep edukasi dan digital dengan tujuan untuk memperkenalkan dan mengapresiasi seni-budaya Indonesia khususnya kepada",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1948499,
        "lng": 106.8200607,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Galeri%20Nasional%20Indonesia.jpg"
    },
    {
        "id": 50,
        "category_id": 2,
        "name": "Museum Joang 45",
        "description": "Gedung Joang '45 atau Museum Joang 45 adalah salah satu museum yang berada di Jakarta. Saat ini pengelolaannya dilaksanakan oleh Dinas Pariwisata dan Kebudayaan Provinsi DKI Jakarta. Museum i",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.1861838,
        "lng": 106.8364761,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Joang%2045.jpg"
    },
    {
        "id": 51,
        "category_id": 4,
        "name": "Jakarta Planetarium",
        "description": "Planetarium dan Observatorium Jakarta adalah satu dari tiga wahana simulasi langit di Indonesia selain di Kutai, Kalimantan Timur, dan Surabaya, Jawa Timur. Planetarium tertua ini letaknya di",
        "city": "Jakarta",
        "price": 12000,
        "lat": -6.1900819,
        "lng": 106.8388532,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Jakarta%20Planetarium.jpg"
    },
    {
        "id": 52,
        "category_id": 2,
        "name": "Kampung Cina",
        "description": "KAMPUNG China adalah hunian dan kawasan perdagangan di Cibubur, Jakarta Timur. Wilayah ini berdiri berkat kerja sama antara Pemerintah Kota Jakarta Timur dengan perusahaan asing untuk menyula",
        "city": "Jakarta",
        "price": 15000,
        "lat": -6.3651357,
        "lng": 106.7617984,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Cina.jpg"
    },
    {
        "id": 53,
        "category_id": 2,
        "name": "Rumah Sipitung",
        "description": "Rumah Si Pitung di Marunda, Jakarta Utara, Indonesia, merupakan satu dari sedikit rumah panggung Betawi yang tersisa. Rumah panggung ini merupakan representasi hunian panggung masyarakat Beta",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.10016,
        "lng": 106.96057,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Rumah%20Sipitung.jpg"
    },
    {
        "id": 54,
        "category_id": 4,
        "name": "Taman Agrowisata Cilangkap",
        "description": "Taman seluas sekitar 19 hektar ini dimiliki oleh pemerintah Provinsi (Pemprov) DKI Jakarta yang dikelola oleh Dinas Pertanian dan Kehutanan DKI. Taman Wisata Agro Cilangkap ini terletak di Ja",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.3401514,
        "lng": 106.9012561,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Agrowisata%20Cilangkap.jpg"
    },
    {
        "id": 55,
        "category_id": 6,
        "name": "Klenteng Jin De Yuan",
        "description": "Kelenteng Kim Tek Le, atau yang lebih dikenal dengan Kelenteng Jin De Yuan, sudah dibangun sejak 1650. Kelenteng yang disebut-sebut sebagai yang tertua di Jakarta ini didirikan oleh seorang L",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1444737,
        "lng": 106.8126018,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Klenteng%20Jin%20De%20Yuan.jpg"
    },
    {
        "id": 56,
        "category_id": 1,
        "name": "Pantai Ancol",
        "description": "Pantai Ancol merupakan kawasan wisata yang merupakan destinasi wisata pantai dalam kota Jakarta. Wisatawan dapat menikmati suasana segar Pantai Lagoon, Festival, Indah, Beach Pool dan Carnava",
        "city": "Jakarta",
        "price": 25000,
        "lat": -6.1194215,
        "lng": 106.8502435,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ancol.jpg"
    },
    {
        "id": 57,
        "category_id": 4,
        "name": "Taman Lapangan Banteng",
        "description": "Lapangan Banteng, dulu bernama Waterlooplein (bahasa Belanda: plein = lapangan) yaitu suatu lapangan yang terletak di Weltevreden, Batavia; tidak jauh dari Gereja Katedral Jakarta. Pada masa ",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.170555,
        "lng": 106.8350378,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Lapangan%20Banteng.jpg"
    },
    {
        "id": 58,
        "category_id": 4,
        "name": "Taman Ayodya",
        "description": "Taman Ayodya, yang dulu bernama Taman Barito, adalah sebuah taman kota yang berada di Jakarta Selatan. Taman ini berlokasi di atas lahan seluas 7.500 m2, dilengkapi dengan kolam buatan seluas",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.2452294,
        "lng": 106.7946655,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Ayodya.jpg"
    },
    {
        "id": 59,
        "category_id": 2,
        "name": "Museum Sumpah Pemuda",
        "description": "Museum Sumpah Pemuda adalah sebuah museum sejarah perjuangan kemerdekaan Republik Indonesia yang berada di Jalan Kramat Raya No. 106, Jakarta Pusat dan dikelola oleh Kementerian Pendidikan da",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.1838388,
        "lng": 106.8430507,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Sumpah%20Pemuda.jpg"
    },
    {
        "id": 60,
        "category_id": 2,
        "name": "Museum Tekstil",
        "description": "Museum cinta Tekstil menempati gedung tua di Jalan K.S. Tubun / Kota Bambu Selatan No. 4 Kecamatan Palmerah, Jakarta Barat\\n\\nGedungnya sendiri pada mulanya adalah rumah pribadi seorang warga",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.1879634,
        "lng": 106.8096081,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Tengah%20Kebun.jpg"
    },
    {
        "id": 61,
        "category_id": 2,
        "name": "Tugu Proklamasi",
        "description": "Tugu Proklamasi adalah tugu peringatan proklamasi kemerdekaan Republik Indonesia yang berdiri di kompleks Taman Proklamasi di Jalan Proklamasi, Jakarta Pusat. Taman tersebut berlokasi di beka",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.2030468,
        "lng": 106.8466623,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Tugu%20Proklamasi.jpg"
    },
    {
        "id": 62,
        "category_id": 4,
        "name": "Taman Legenda Keong Emas",
        "description": "Taman Legenda Keong Emas merupakan salah satu tempat rekreasi favorit yang ada di kawasan Jakarta Timur. Berada di dalam lokasi Taman Mini Indonesia Indah atau TMII, Taman Legenda Keong Emas ",
        "city": "Jakarta",
        "price": 30000,
        "lat": -6.3039042,
        "lng": 106.8936219,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Legenda%20Keong%20Emas.jpg"
    },
    {
        "id": 63,
        "category_id": 2,
        "name": "Museum Kebangkitan Nasional",
        "description": "Museum Kebangkitan Nasional (bahasa Inggris: Museum of National Awakening) adalah sebuah gedung yang dibangun sebagai monumen tempat lahir dan berkembangnya kesadaran nasional dan juga ditemu",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.178352,
        "lng": 106.838094,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Kebangkitan%20Nasional.jpg"
    },
    {
        "id": 64,
        "category_id": 2,
        "name": "Museum Sasmita Loka Ahmad Yani",
        "description": "Museum Sasmita Loka Ahmad Yani adalah salah satu museum pahlawan nasional yang terletak di jalan Lembang No. 58 dan jalan Laruharhari No. 65, Jakarta Pusat, DKI Jakarta, Indonesia. Museum ini",
        "city": "Jakarta",
        "price": 2000,
        "lat": -6.2046303,
        "lng": 106.8365324,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Sasmita%20Loka%20Ahmad%20Yani.jpg"
    },
    {
        "id": 65,
        "category_id": 2,
        "name": "Museum Basoeki Abdullah",
        "description": "Museum Basoeki Abdullah berisi lukisan dan koleksi pribadi Basoeki Abdullah seperti patung, topeng, wayang dan senjata. Museum yang terletak di Jakarta Selatan ini dikelola oleh Kementerian P",
        "city": "Jakarta",
        "price": 1000,
        "lat": -6.2897885,
        "lng": 106.7932681,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Basoeki%20Abdullah.jpg"
    },
    {
        "id": 66,
        "category_id": 2,
        "name": "Museum Layang-layang",
        "description": "Museum Layang-Layang adalah sebuah museum yang terletak di Jl. H. Kamang No. 38, Pondok Labu, Jakarta Selatan. Museum ini merupakan museum layang-layang pertama di Indonesia. Jumlah koleksi l",
        "city": "Jakarta",
        "price": 10000,
        "lat": -6.3080282,
        "lng": 106.790548,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Layang-layang.jpg"
    },
    {
        "id": 67,
        "category_id": 3,
        "name": "Margasatwa Muara Angke",
        "description": "Suaka margasatwa Muara Angke adalah sebuah kawasan konservasi berdasarkan SK Menteri Kehutanan RI Nomor: 097/Kpts-II/1988, 29 Februari 1998 di wilayah hutan bakau di pesisir utara Jakarta. Se",
        "city": "Jakarta",
        "price": 25000,
        "lat": -6.1160075,
        "lng": 106.7692016,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Margasatwa%20Muara%20Angke.jpg"
    },
    {
        "id": 68,
        "category_id": 5,
        "name": "Pasar Petak Sembilan",
        "description": "Pecinan Glodok, tepatnya di Pasar Petak Sembilan, Jakarta Barat merupakan salah satu tempat yang menjual berbagai macam kuliner khas China. Kawasan yang sebagaian besar dihuni oleh orang Tion",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1436722,
        "lng": 106.8129398,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Petak%20Sembilan.jpg"
    },
    {
        "id": 69,
        "category_id": 2,
        "name": "Freedom Library",
        "description": "Freedom Library adalah perpustakaan buku yang dibuka umum. Memiliki puluhan ribu koleksi buku yang disusun di rak dan sesuai dengan tema, sehingga mempermudah untuk mencari buku yang diingink",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.2022482,
        "lng": 106.8451968,
        "rating": 5,
        "image": "https://storage.googleapis.com/tresure-place-images/Freedom%20Library.jpg"
    },
    {
        "id": 70,
        "category_id": 2,
        "name": "Perpustakaan Nasional",
        "description": "Perpustakaan Nasional adalah perpustakaan yang secara khusus didirikan oleh Pemerintah Negara demi menyimpan informasi negara tersebut. Berbeda dengan perpustakaan umum, sangatlah jarang khal",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1812918,
        "lng": 106.8268717,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Perpustakaan%20Nasional.jpg"
    },
    {
        "id": 71,
        "category_id": 3,
        "name": "Cibubur Garden Diary (Cibugary)",
        "description": "Cibubur Garden Dairy atau biasa dikenal degan sebutan Cibugary merupakan sebuah perternakan sapi perah dan peternakan kambing yang memiliki nuansa kebun dikawasan Cibubur, sang empunya Bapak ",
        "city": "Jakarta",
        "price": 50000,
        "lat": -6.3799969,
        "lng": 106.8949793,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Cibubur%20Garden%20Diary%20%28Cibugary%29.jpg"
    },
    {
        "id": 72,
        "category_id": 4,
        "name": "Waterboom PIK (Pantai Indah Kapuk)",
        "description": "Waterbom Jakarta merupakan sebuah wahana permainan air yang cukup populer di kawasan Pantai Indah Kapuk (PIK), Jakarta Utara. Harga tiket masuk Waterboom PIK tidak terlalu menguras kantong, h",
        "city": "Jakarta",
        "price": 300000,
        "lat": -6.1136559,
        "lng": 106.7478596,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Waterboom%20PIK%20%28Pantai%20Indah%20Kapuk%29.jpg"
    },
    {
        "id": 73,
        "category_id": 2,
        "name": "Museum Perangko",
        "description": "Museum perangko dibangun dengan bentuk bangunan bergaya Jawa Bali di atas lahan seluas 9.590 m2 dan diresmikan oleh Presiden Soeharto pada tanggal 29 September 1983. Museum ini memamerkan kol",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.3041841,
        "lng": 106.9017725,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Perangko.jpg"
    },
    {
        "id": 74,
        "category_id": 2,
        "name": "Museum Tengah Kebun",
        "description": "Museum di Tengah Kebun adalah sebuah museum penyimpanan ± 4.000 koleksi seni dan sejarah Indonesia dan luar negeri yang berlokasi di daerah Kemang, Jakarta Selatan. Museum ini dibangun di ten",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.267513,
        "lng": 106.824107,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20TNI%20AL%20Loka%20Jala%20Crana.jpg"
    },
    {
        "id": 75,
        "category_id": 4,
        "name": "SnowBay Waterpark",
        "description": "Waterpark yang menghadirkan wahana imajinatif berkonsep pegunungan bersalju. Tidak ketinggalan dengan atraksi air terbaik yang sangat menyenangkan. Dengan luas sekitar 3 hektar, tempat wisata",
        "city": "Jakarta",
        "price": 180000,
        "lat": -6.2992718,
        "lng": 106.89151,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/SnowBay%20Waterpark.jpg"
    },
    {
        "id": 76,
        "category_id": 4,
        "name": "Taman Cattleya",
        "description": "Kehadiran Taman Cattleya tentu saja sangat bermanfaat bagi masyarakat Ibu Kota, ditengah situasi penatnya kemacetan, tumpukkan pekerjaan, serta polusi yang menjadi ancaman bagi kota-kota besa",
        "city": "Jakarta",
        "price": 20000,
        "lat": -6.1810843,
        "lng": 106.7954476,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Cattleya.jpg"
    },
    {
        "id": 77,
        "category_id": 4,
        "name": "Taman Hutan Tebet",
        "description": "Taman Tebet dibangun tahun 1960, taman ini sempat tertunda di tahun 1970 dan jadi pemukiman liar sampai tahun 2006. Dahulu, namanya Taman Honda. Bukan tanpa alasan, dinamakan demikian karena ",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.2371409,
        "lng": 106.8526505,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Hutan%20Tebet.jpg"
    },
    {
        "id": 78,
        "category_id": 4,
        "name": "Hutan Kota Srengseng",
        "description": "Selain Taman Hutan Mangrove dan Pantai Indah Kapuk, salah satu taman yang sudah cukup terkenal lama bisa dijumpai di sekitar Universitas Indonesia Depok, letaknya di pinggiran Jakarta, namany",
        "city": "Jakarta",
        "price": 1000,
        "lat": -6.2106945,
        "lng": 106.7643954,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Kota%20Srengseng.jpg"
    },
    {
        "id": 79,
        "category_id": 4,
        "name": "Taman Spathodea",
        "description": "Objek Wisata Taman Spathodea di Jagakarsa DKI Jakarta Selatan Jakarta adalah salah satu tempat wisata yang berada di Jl. Kebagusan Raya, Kecamatan Jagakarsa, Kota Jakarta Selatan, Daerah Khus",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.3226133,
        "lng": 106.8241871,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Spathodea.jpg"
    },
    {
        "id": 80,
        "category_id": 5,
        "name": "Plaza Indonesia",
        "description": "Plaza Indonesia diresmikan pada awal tahun 1990, terdiri dari empat lantai pertokoan kelas atas dengan luas 38.050 m2. Pusat perbelanjaan ini terletak di Bundaran Hotel Indonesia, tepatnya pa",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1939259,
        "lng": 106.8222158,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Plaza%20Indonesia.jpg"
    },
    {
        "id": 81,
        "category_id": 5,
        "name": "Mall Thamrin City",
        "description": "Thamrin City atau Thamrin City Mall merupakan pusat perbelanjaan besar yang berada di Jakarta Pusat, yang lokasinya terletak ± 150 meter dari bundaran Hotel Indonesia dan ± 300 meter dari Pas",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1946096,
        "lng": 106.817905,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Mall%20Thamrin%20City.jpg"
    },
    {
        "id": 82,
        "category_id": 2,
        "name": "Museum Satria Mandala",
        "description": "Museum Satria Mandala adalah museum sejarah perjuangan Tentara Nasional Indonesia yang terletak di Jalan Gatot Subroto, Jakarta Selatan. Museum yang diresmikan pada tahun 1972 oleh mantan Pre",
        "city": "Jakarta",
        "price": 5000,
        "lat": -6.2316985,
        "lng": 106.8185425,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Satria%20Mandala.jpg"
    },
    {
        "id": 83,
        "category_id": 4,
        "name": "Alive Museum Ancol",
        "description": "Museum kini tidak hanya menawarkan benda – benda yang bernilai sejarah dan edukatif. Tapi telah disulap menjadi wahana rekreasi seru dengan objek foto yang berbeda. Seperti Alive Museum yang ",
        "city": "Jakarta",
        "price": 200000,
        "lat": -6.1175344,
        "lng": 106.857313,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Alive%20Museum%20Ancol.jpg"
    },
    {
        "id": 84,
        "category_id": 5,
        "name": "Kawasan Kuliner BSM",
        "description": "Tidak seperti Pecenongan, Kawasan Kuliner BSM buka dari pukul 09:00 hingga 18:00. Berlokasi di Jalan M. H. Thamrin, Jakarta Pusat, Kawasan Kuliner BSM merupakan tempat makan murah favorit war",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1842588,
        "lng": 106.824033,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawasan%20Kuliner%20BSM.jpg"
    },
    {
        "id": 85,
        "category_id": 4,
        "name": "Taman Pintar Yogyakarta",
        "description": "Taman Pintar Yogyakarta (bahasa Jawa: Hanacaraka,ꦠꦩꦤ꧀​ꦥꦶꦤ꧀ꦠꦂ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ, Taman Pintar Ngayogyakarta) adalah wahana wisata yang terdapat di pusat Kota Yogyakarta, tepatnya di Jalan Panembahan S",
        "city": "Yogyakarta",
        "price": 6000,
        "lat": -7.8006715,
        "lng": 110.3676551,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Pintar%20Yogyakarta.jpg"
    },
    {
        "id": 86,
        "category_id": 2,
        "name": "Keraton Yogyakarta",
        "description": "Keraton Ngayogyakarta Hadiningrat atau Keraton Yogyakarta (bahasa Jawa: ꦏꦫꦠꦺꦴꦤ꧀​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦲꦢꦶꦤꦶꦔꦿꦠ꧀, translit. Karaton Ngayogyakarta Hadiningrat) merupakan istana resmi Kesultanan Ngayogyakar",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.8052845,
        "lng": 110.3642031,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Keraton%20Yogyakarta.jpg"
    },
    {
        "id": 87,
        "category_id": 4,
        "name": "Sindu Kusuma Edupark (SKE)",
        "description": "Sindu Kusuma Edupark (SKE) merupakan sebuah destinasi rekreasi yang terletak di Jogjakarta. Di tujuh hektar kawasan taman yang selesai dibangun tahun 2014 ini, terdapat bermacam-macam wahana,",
        "city": "Yogyakarta",
        "price": 20000,
        "lat": -7.7672973,
        "lng": 110.3542486,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Sindu%20Kusuma%20Edupark%20%28SKE%29.jpg"
    },
    {
        "id": 88,
        "category_id": 2,
        "name": "Museum Benteng Vredeburg Yogyakarta",
        "description": "Museum Benteng Vredeburg (bahasa Jawa: ꦩꦸꦱꦶꦪꦸꦩ꧀​ꦧꦺꦠꦺꦁ​ꦮ꦳ꦽꦢꦼꦧꦸꦂꦒ꧀, translit. Musiyum Bètèng Vredeburg adalah sebuah benteng yang terletak di depan Gedung Agung dan Kraton Kesultanan Yogyakarta",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.8002016,
        "lng": 110.3663044,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Benteng%20Vredeburg%20Yogyakarta.jpg"
    },
    {
        "id": 89,
        "category_id": 2,
        "name": "De Mata Museum Jogja",
        "description": "Museum De Mata merupakan salah satu museum yang berisi lukisan 3D terbanyak di dunia. Jumlah lukisannya sekitar 120 dan setiap lukisan memiliki konsep dengan latar belakang yang terlihat sepe",
        "city": "Yogyakarta",
        "price": 50000,
        "lat": -7.8163156,
        "lng": 110.3871442,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/De%20Mata%20Museum%20Jogja.jpg"
    },
    {
        "id": 90,
        "category_id": 4,
        "name": "Kampung Wisata Taman Sari",
        "description": "Taman Sari Yogyakarta atau Taman Sari Keraton Yogyakarta (Hanacaraka:ꦠꦩꦤ꧀ꦱꦫꦶꦔꦪꦺꦴꦒꦾꦏꦂꦡ, Tamansari Ngayogyakarta) adalah situs bekas taman atau kebun istana Keraton Ngayogyakarta Hadiningrat, y",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8100673,
        "lng": 110.3594581,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Wisata%20Taman%20Sari.jpg"
    },
    {
        "id": 91,
        "category_id": 4,
        "name": "Situs Warungboto",
        "description": "Situs Warungboto atau Pesanggrahan Rejawinangun adalah salah satu bangunan cagar budaya yang terletak di Jalan Veteran No.77, Kelurahan Warungboto, Kecamatan Umbulharjo, Kota Yogyakarta, Daer",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8102685,
        "lng": 110.3931513,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Situs%20Warungboto.jpg"
    },
    {
        "id": 92,
        "category_id": 4,
        "name": "Nol Kilometer Jl.Malioboro",
        "description": "Walaupun hanyalah sebuah persimpangan, namun persimpangan Titik 0 km ini bukanlah sebuah persimpangan biasa. Karena di persimpangan ini bisa dibilang sebagai titik tengah kota Jogja karena lo",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8013803,
        "lng": 110.3647652,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Nol%20Kilometer%20Jl.Malioboro.jpg"
    },
    {
        "id": 93,
        "category_id": 3,
        "name": "Gembira Loka Zoo",
        "description": "Kebun Binatang Gembira Loka biasa disebut Gembira Loka Zoo (disingkat GL Zoo, bahasa Jawa: ꦏꦼꦧꦺꦴꦤ꧀​ꦫꦗ​ꦒꦼꦩ꧀ꦧꦶꦫ​ꦭꦺꦴꦏ, translit. Kêbon Raja Gêmbira Loka) adalah kebun binatang yang berada di Kot",
        "city": "Yogyakarta",
        "price": 60000,
        "lat": -7.8062344,
        "lng": 110.3967977,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Geoforest%20Watu%20Payung%20Turunan.jpg"
    },
    {
        "id": 94,
        "category_id": 4,
        "name": "Sumur Gumuling",
        "description": "Sumur Gumuling adalah salah satu tempat untuk ibadah atau kegiatan agama pada masa lalu. Sumur Gumuling merupakan masjid pada zaman pemerintahan Sri Sultan Hamengkubuwana I dan II.",
        "city": "Yogyakarta",
        "price": 7000,
        "lat": -7.8087911,
        "lng": 110.3591825,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Sumur%20Gumuling.jpg"
    },
    {
        "id": 95,
        "category_id": 4,
        "name": "Desa Wisata Sungai Code Jogja Kota",
        "description": "Kampung Code berada di Kelurahan Kotabaru, Kecamatan Gondokusuman Kota Yogyakarta. Lokasi persisnya ada di RT 01/RW 01 di sebelah selatan jembatan Gondolayu di Jl Jenderal Sudirman atau di se",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8229089,
        "lng": 110.3756894,
        "rating": 5,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Sungai%20Code%20Jogja%20Kota.jpg"
    },
    {
        "id": 96,
        "category_id": 4,
        "name": "Alun Alun Selatan Yogyakarta",
        "description": "Alun-alun Selatan atau yang sekarang lebih dikenal sebagai Alun-alun Kidul (Alkid) yaitu alun-alun yang terletak di sebelah selatan karaton Yogyakarta. Alun-alun ini berbentuk tanah lapang lu",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8116719,
        "lng": 110.363238,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Alun%20Alun%20Selatan%20Yogyakarta.jpg"
    },
    {
        "id": 97,
        "category_id": 2,
        "name": "Monumen Yogya Kembali",
        "description": "Museum Monumen Yogya Kembali (bahasa Jawa: ꦩꦺꦴꦤꦸꦩꦺꦤ꧀​ꦪꦺꦴꦒꦾ​ꦏꦼꦩ꧀ꦧꦭꦶ, translit. Monumèn Yogya Kembali) biasa dikenal sebagai Monumen Jogja Kembali disingkat Monjali adalah sebuah museum sejarah",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.7495904,
        "lng": 110.3696068,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Yogya%20Kembali.jpg"
    },
    {
        "id": 98,
        "category_id": 4,
        "name": "Taman Pelangi Yogyakarta",
        "description": "Taman Pelangi Yogyakarta merupakan tempat wisata malam yang menampilkan warna-warni lampu lampion, sehingga terlihat seperti pelangi. Taman wisata ini terletak di Jalan Padjajaran (sebelumnya",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.7505259,
        "lng": 110.3687049,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Pelangi.jpg"
    },
    {
        "id": 99,
        "category_id": 2,
        "name": "Kampung Wisata Kadipaten",
        "description": "Kampung Wisata Kadipaten secaara kewilayahan berada di Kelurahan Kadipaten Kecamatan Kraton. Keberadaannya juga berfungsi sebagai penyangga obyek wisata Kraton Kasultanan Yogyakarta. Sesuai d",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.806093,
        "lng": 110.35831,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Wisata%20Kadipaten.jpg"
    },
    {
        "id": 100,
        "category_id": 2,
        "name": "Taman Budaya Yogyakarta",
        "description": "Taman Budaya Yogyakarta (TBY) (Hanacaraka:ꦠꦩꦤ꧀​ꦧꦸꦢꦪ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ, bahasa Jawa: Taman Budaya Ngayogyakarta) adalah sarana wisata yang terletak di Jalan Sri Wedani No 1, Yogyakarta. TBY memiliki k",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8001041,
        "lng": 110.3676579,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Budaya%20Yogyakarta.jpg"
    },
    {
        "id": 101,
        "category_id": 2,
        "name": "Kampung Wisata Sosro Menduran",
        "description": "Kampung wisata Sosromenduran merupakan kampung wisata yang sangat unik karena berbasis multi culture, akomodasi dan belanja sekaligus berfungsi sebagai penyangga kawasan Objek Wisata Maliobor",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.79219,
        "lng": 110.362151,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Wisata%20Sosro%20Menduran.jpg"
    },
    {
        "id": 102,
        "category_id": 2,
        "name": "Monumen Batik Yogyakarta",
        "description": "Perhatian pemerintah megenai kebudayan batik ini sangat besar, hal ini dikarenakan kebudayaannya bersinggungan langsung dengan masyarakat Jawa. Memperingati Hari Batik Nasional pada hari ini,",
        "city": "Yogyakarta",
        "price": 40000,
        "lat": -7.8011159,
        "lng": 110.3646172,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Batik%20Yogyakarta.jpg"
    },
    {
        "id": 103,
        "category_id": 4,
        "name": "Tugu Pal Putih Jogja",
        "description": "Tugu Yogyakarta (Jawa: , Tugu Ngayogyakarta) adalah sebuah landmark bersejarah yang penting di kota Yogyakarta, Indonesia. Tugu berarti tugu, yang biasanya dibangun sebagai simbol suatu kawas",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.7829437,
        "lng": 110.3670548,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Tugu%20Pal%20Putih%20Jogja.jpg"
    },
    {
        "id": 104,
        "category_id": 2,
        "name": "Tebing Breksi",
        "description": "Tebing Breksi merupakan tempat wisata yang berada di wilayah Kabupaten Sleman. Lokasinya berada di sebelah selatan Candi Prambanan dan berdekatan dengan Candi Ijo serta Kompleks Keraton Boko.",
        "city": "Yogyakarta",
        "price": 20000,
        "lat": -7.7815714,
        "lng": 110.5045827,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Tebing%20Breksi.jpg"
    },
    {
        "id": 105,
        "category_id": 2,
        "name": "Candi Donotirto",
        "description": "Walaupun melekat dengan kata candi, Candi Donotirto bukanlah peninggalan jaman Hindu-Buddha di Yogyakarta. Tempat ini dibangun oleh pemerintah Belanda. Ada dua bagian, yaitu bagian barat untu",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.7955613,
        "lng": 110.3612095,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Donotirto.jpg"
    },
    {
        "id": 106,
        "category_id": 4,
        "name": "Kawasan Malioboro",
        "description": "Jalan Malioboro adalah nama salah satu kawasan jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke perempatan Kantor Pos Yogyakarta. Secara keseluruhan ter",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.793167,
        "lng": 110.3655238,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawasan%20Malioboro.jpg"
    },
    {
        "id": 107,
        "category_id": 2,
        "name": "Bangsal Pagelaran",
        "description": "Bangunan utama adalah Bangsal Pagelaran yang dahulu dikenal dengan nama Tratag Rambat. Pada zamannya Pagelaran merupakan tempat para penggawa kesultanan menghadap Sultan pada upacara resmi. S",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8052843,
        "lng": 110.3642137,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Bangsal%20Pagelaran.jpg"
    },
    {
        "id": 108,
        "category_id": 4,
        "name": "Embung Tambakboyo",
        "description": "Embung atau waduk Tambakboyo adalah konservasi air yang terletak di Dusun Tambakboyo, Kecamatan Depok, Kabupaten Sleman, Yogyakarta. Waduk ini memanfaatkan sumber air dari sungai Tambak Bayan",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.756227,
        "lng": 110.4150131,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Embung%20Tambakboyo.jpg"
    },
    {
        "id": 109,
        "category_id": 4,
        "name": "Hutan Pinus Pengger",
        "description": "Hutan Pinus Pengger (bahasa Jawa: ꦄꦭꦱ꧀​ꦥꦶꦤꦸꦱ꧀​ꦥꦼꦁ​ꦒꦼꦂ​, translit. Alas Pinus​ Pěnggěr) merupakan salah satu objek wisata andalan Kabupaten Bantul. Wisata alam ini berlokasi di Sendangsari, De",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.8704832,
        "lng": 110.4599108,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Pinus%20Pengger.jpg"
    },
    {
        "id": 110,
        "category_id": 4,
        "name": "Monumen Serangan Umum 1 Maret",
        "description": "Monumen Serangan Umum 1 Maret berada di area sekitar Museum Benteng Vredeburg yaitu tepat di depan Kantor Pos Besar Yogyakarta. Monumen ini dibangun untuk memperingati serangan tentara Indone",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.8010124,
        "lng": 110.3653376,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Serangan%20Umum%201%20Maret.jpg"
    },
    {
        "id": 111,
        "category_id": 4,
        "name": "Puncak Pinus Becici",
        "description": "Puncak Pinus Becici atau Puncak Becici merupakan objek wisata yang berada di Desa Muntuk, Kecamatan Dlingo, Kabupaten Bantul, Yogyakarta. Pemandangan di kawasan ini sangat indah dengan hampar",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.9020355,
        "lng": 110.4374627,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Puncak%20Pinus%20Becici.jpg"
    },
    {
        "id": 112,
        "category_id": 4,
        "name": "Bukit Bintang Yogyakarta",
        "description": "Bukit Bintang merupakan salah satu lokasi nongkrong favorit di Yogyakarta. Saat malam tiba, pemandangan Yogyakarta sangatlah indah!Terletak di perbatasan Bantul dan Gunungkidul, siapa pun yan",
        "city": "Yogyakarta",
        "price": 25000,
        "lat": -7.8458407,
        "lng": 110.4798457,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Bintang.jpg"
    },
    {
        "id": 113,
        "category_id": 2,
        "name": "Gedung Agung Yogyakarta",
        "description": "Istana Yogyakarta yang dikenal dengan nama Gedung Agung (bahasa Jawa: ꦒꦼꦝꦺꦴꦁ​ꦄꦒꦼꦁ, translit. Gedhong Ageng) terletak di pusat keramaian kota, tepatnya di ujung selatan Jalan Ahmad Yani dahulu",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8001506,
        "lng": 110.3637507,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Gedung%20Sate.jpg"
    },
    {
        "id": 114,
        "category_id": 4,
        "name": "The Lost World Castle",
        "description": "The Lost World Castle merupakan salah satu objek wisata di kawasan lereng Gunung Merapi yang terletak di Dusun Petung, Desa Kepuharjo Cangkringan, Sleman, Daerah Istimewa Yogyakarta, Indonesi",
        "city": "Yogyakarta",
        "price": 30000,
        "lat": -7.6041648,
        "lng": 110.4510042,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/The%20Lost%20World%20Castle.jpg"
    },
    {
        "id": 115,
        "category_id": 2,
        "name": "Monumen Sanapati",
        "description": "Monumen Sanapati dibangun untuk memeringati 50 tahun persandian Indonesia di Yogyakarta. Persandian di Yogyakarta memiliki andil yang besar dalam mempertahankan kemerdekaan Negara Indonesia. ",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.7881728,
        "lng": 110.3715403,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Sanapati.jpg"
    },
    {
        "id": 116,
        "category_id": 4,
        "name": "Jurang Tembelan Kanigoro",
        "description": "Jurang Tembelan Kanigoro berada di Desa Wisata Mangunan, Dlingo, Bantul. Familiar dengan Desa Mangunan, bukan? Kawasan ini memang memiliki tempat wisata bagus yang murah. Termasuk Jurang Temb",
        "city": "Yogyakarta",
        "price": 2500,
        "lat": -7.9401065,
        "lng": 110.4300062,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Jurang%20Tembelan%20Kanigoro.jpg"
    },
    {
        "id": 117,
        "category_id": 4,
        "name": "The World Landmarks - Merapi Park Yogyakarta",
        "description": "Merapi Park merupakan salah satu tempat wisata di Yogyakarta yang terletak di Jalan Kaliurang km 22, Hargobinangun, Kecamatan Pakem, Kabupaten Sleman. Pengoperasian Merapi Park dimulai sejak ",
        "city": "Yogyakarta",
        "price": 22000,
        "lat": -7.6209046,
        "lng": 110.4216275,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/The%20World%20Landmarks%20-%20Merapi%20Park%20Yogyakarta.jpg"
    },
    {
        "id": 118,
        "category_id": 2,
        "name": "Museum Sonobudoyo Unit I",
        "description": "Museum Sonobudoyo adalah museum dan perpustakaan sejarah dan budaya Jawa di Yogyakarta, Indonesia. Museum ini berisi koleksi artefak Jawa terlengkap, setelah Museum Nasional di Jakarta. Selai",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8024499,
        "lng": 110.3639555,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Sonobudoyo%20Unit%20I.jpg"
    },
    {
        "id": 119,
        "category_id": 2,
        "name": "Lava Bantal",
        "description": "Wilayah DIY menawarkan sejumlah potensi wisata, terlebih pariwisata berbasis sungai. Salah satunya yang kini menjadi salah satu favorut wisatawan adalah Lava Bantal yang berada di Kecamatan B",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8081518,
        "lng": 110.4595183,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Lava%20Bantal.jpg"
    },
    {
        "id": 120,
        "category_id": 2,
        "name": "Bukit Panguk Kediwung",
        "description": "Bukit Panguk Kediwung adalah salah satu obyek wisata yang menawarkan pemandangan alam dari ketinggian. Jika dibandingkan dengan obyek wisata perbukitan lain di Bantul memang Bukit Panguk Kedi",
        "city": "Yogyakarta",
        "price": 250000,
        "lat": -7.9583695,
        "lng": 110.4407622,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Panguk%20Kediwung.jpg"
    },
    {
        "id": 121,
        "category_id": 2,
        "name": "Candi Prambanan",
        "description": "Candi Prambanan atau Candi Roro Jonggrang (bahasa Jawa: ꦕꦤ꧀ꦝꦶ​ꦥꦿꦩ꧀ꦧꦤꦤ꧀, translit. Candhi Prambanan) adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 masehi. Cand",
        "city": "Yogyakarta",
        "price": 50000,
        "lat": -7.7520206,
        "lng": 110.4914674,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Prambanan.jpg"
    },
    {
        "id": 122,
        "category_id": 2,
        "name": "Watu Goyang",
        "description": "Watu Goyang ini berasal dari Bahasa Jawa yang berarti Batu yang bergoyang. Dulunya di tempat ini terdapat batu yang berada di puncak yang bias bergoyang ketika disentuh maupun didorong. Batu ",
        "city": "Yogyakarta",
        "price": 2500,
        "lat": -7.9274086,
        "lng": 110.4120586,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Watu%20Goyang.jpg"
    },
    {
        "id": 123,
        "category_id": 2,
        "name": "Kampung Wisata Rejowinangun",
        "description": "Kampung wisata Rejowinangun terletak di Kelurahan rejowinangun, Kecamatan Kotagede, Kota Yogyakarta tepatnya sebelah selatan Kebun binatang Gembiraloka. Kampung wisata ini telah dirintis seja",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8152776,
        "lng": 110.3988359,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Wisata%20Rejowinangun.jpg"
    },
    {
        "id": 124,
        "category_id": 2,
        "name": "Kauman Pakualaman Yogyakarta",
        "description": "Pakualaman adalah sebuah kecamatan di Kota Yogyakarta, Provinsi Daerah Istimewa Yogyakarta, Indonesia. Kecamatan ini terletak di antara Sungai Code dan Sungai Manunggal. Nama 'Pakualaman' dia",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8010347,
        "lng": 110.3751922,
        "rating": 5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kauman%20Pakualaman%20Yogyakarta.jpg"
    },
    {
        "id": 125,
        "category_id": 2,
        "name": "Alun-alun Utara Keraton Yogyakarta",
        "description": "Alun-alun utara atau dalam Bahasa Jawa disebut Alun-alun Lor merupakan salah satu land mark Kota Yogyakarta yang berupa sebuah tanah lapang yang berada di depan Keraton Yogyakarta. Disebut Al",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8038975,
        "lng": 110.3644232,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Alun-alun%20Utara%20Keraton%20Yogyakarta.jpg"
    },
    {
        "id": 126,
        "category_id": 1,
        "name": "Pantai Goa Cemara",
        "description": "Pantai Goa Cemara (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ​ ꦒꦸꦮ​ ꦕꦺꦩꦫ, translit. Pasisir Guwa Cemara​) adalah objek wisata pantai yang terletak di Dusun Patihan, Desa Gadingsari, Kecamatan Sanden, Kabupaten Bant",
        "city": "Yogyakarta",
        "price": 4000,
        "lat": -7.999423,
        "lng": 110.248963,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Goa%20Cemara.jpg"
    },
    {
        "id": 127,
        "category_id": 4,
        "name": "Blue Lagoon Jogja",
        "description": "Blue Lagoon adalah salah satu wisata air Jogja yang sudah sangat terkenal dan banyak dikunjungi oleh wisatawan dari berbagai daerah penjuru. Banyak yang menganggap bahwa Blue Lagoon sebagai s",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.7044358,
        "lng": 110.45026,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Blue%20Lagoon%20Jogja.jpg"
    },
    {
        "id": 128,
        "category_id": 4,
        "name": "Gumuk Pasir Parangkusumo",
        "description": "Gumuk Pasir Parangkusumo (bahasa Jawa: ꦒꦸꦩꦸꦏ꧀​ꦥꦱꦶꦂ​ꦥꦫꦁ​ꦏꦸꦱꦸꦩ, translit. Gumuk Pasir Parangkusuma) adalah objek wisata di Kabupaten Bantul, Yogyakarta, letaknya di sebelah barat Pantai Parangt",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -8.0173266,
        "lng": 110.3180791,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Gumuk%20Pasir%20Parangkusumo.jpg"
    },
    {
        "id": 129,
        "category_id": 4,
        "name": "Bukit Lintang Sewu",
        "description": "Bukit Lintang Sewu ini berasal ketika pada saat malam hari di bukit ini terlihat ribuan bintang – bintang yang membentang luas di angkasa. Dalam bahasa Jawa Bukit Seribu Bintang adalah Bukit ",
        "city": "Yogyakarta",
        "price": 2000,
        "lat": -7.9157997,
        "lng": 110.4366436,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Lintang%20Sewu.jpg"
    },
    {
        "id": 130,
        "category_id": 4,
        "name": "Studio Alam Gamplong",
        "description": "Studio Gamplong atau Studio Alam Gamplong adalah sebuah tempat wisata yang terletak di Desa Gamplong, Kecamatan Moyudan, Kabupaten Sleman. Tempat tersebut awalnya adalah tempat pengambilan ga",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.8057936,
        "lng": 110.2367304,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Studio%20Alam%20Gamplong.jpg"
    },
    {
        "id": 131,
        "category_id": 3,
        "name": "Watu Lumbung",
        "description": "Letak Kampung Edukasi Watu Lumbung yang berada di area perbukitan dipenuhi rerimbunan pohon jati, membuat pemandadangan dari tempat ini sangat indah sekali. Watu Lumbung dikonsep oleh M Boy R",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.9924379,
        "lng": 110.317778,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Watu%20Lumbung.jpg"
    },
    {
        "id": 132,
        "category_id": 3,
        "name": "Air Terjun Kedung Pedut",
        "description": "Air Terjun Kedung Pedut atau biasa disebut Curug Kedung Pedut berasal dari istilah bahasa Jawa. Curug yang berarti air terjun, kedung berarti kubangan atau kolam, dan pedut berarti kabut. Air",
        "city": "Yogyakarta",
        "price": 20000,
        "lat": -7.7699875,
        "lng": 110.1210707,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Air%20Terjun%20Kedung%20Pedut.jpg"
    },
    {
        "id": 133,
        "category_id": 4,
        "name": "Puncak Kebun Buah Mangunan",
        "description": "Berlibur di pegunungan memang menyenangkan. Dapat menikmati sejuknya udara serta pemandangan indah dari atas perbukitan. Wisata seperti ini dapat dinikmati di Bantul, tepatnya di Kebun Buah M",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.9413718,
        "lng": 110.4247345,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Puncak%20Kebun%20Buah%20Mangunan.jpg"
    },
    {
        "id": 134,
        "category_id": 4,
        "name": "Desa Wisata Gamplong",
        "description": "Desa Wisata Gamplong adalah desa wisata kerajinan tenun yang berada di Padukuhan Gamplong Desa Sumber Rahayu Kecamatan Moyudan Kabupaten Sleman, Yogyakarta. Desa wisata yang terletak di sebel",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.8055232,
        "lng": 110.2374676,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Gamplong.jpg"
    },
    {
        "id": 135,
        "category_id": 5,
        "name": "Kawasan Wisata Sosrowijayan",
        "description": "Tempat wisata Sosrowijayan memang selama ini dikenal sebagai Wisata Kampung bule, lokasinya sendiri berada di pusat kota Yogyakarta sehingga hampir tiap hari di lokasi ini banyak sekali pengu",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.7916235,
        "lng": 110.361956,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawasan%20Wisata%20Sosrowijayan.jpg"
    },
    {
        "id": 136,
        "category_id": 4,
        "name": "Grojogan Watu Purbo Bangunrejo",
        "description": "Objek wisata itu tak adalah Grojogan Watu Purbo yang berada di Bangunrejo, Merdikorejo, Kecamatan Tempel. Objek wisata itu sekitar setahun terakhir cukup populer di kalangan wisatawan karena ",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.6340172,
        "lng": 110.33837,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Grojogan%20Watu%20Purbo%20Bangunrejo.jpg"
    },
    {
        "id": 137,
        "category_id": 3,
        "name": "Wisata Alam Kalibiru",
        "description": "Kalibiru sebenarnya adalah sebuah nama hutan yang saat ini diolah menjadi sebuah tempat wisata alam. Hutan Kalibiru memiliki ketinggian 450 mdpl dan berupa kawasan perbukitan yang subur. Suhu",
        "city": "Yogyakarta",
        "price": 20000,
        "lat": -7.8057305,
        "lng": 110.127969,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Alam%20Kalibiru.jpg"
    },
    {
        "id": 138,
        "category_id": 4,
        "name": "Jogja Exotarium",
        "description": "Di Yogyakarta, tepatnya di Sleman, ada satu tempat wisata edukasi yang patut dikunjungi. Namanya adalah Jogja Exotarium — terdengar unik, kan? Namun sebenarnya, tempat ini merupakan taman hew",
        "city": "Yogyakarta",
        "price": 20000,
        "lat": -7.7280356,
        "lng": 110.3591712,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Jogja%20Exotarium.jpg"
    },
    {
        "id": 139,
        "category_id": 3,
        "name": "Puncak Gunung Api Purba - Nglanggeran",
        "description": "Gunung Nglanggeran adalah sebuah gunung di Daerah Istimewa Yogyakarta, Indonesia. Gunung ini merupakan suatu gunung api purba yang terbentuk sekitar 0,6-70 juta tahun yang lalu atau yang memi",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.841253,
        "lng": 110.543056,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Puncak%20Gunung%20Api%20Purba%20-%20Nglanggeran.jpg"
    },
    {
        "id": 140,
        "category_id": 4,
        "name": "Bendung Lepen",
        "description": "Bendung Lepen sendiri dulunya merupakan saluran irigasi yang tidak sebersih sekarang ini. Sebelumnya, tempat ini merupakan saluran irigasi yang kumuh disertai taman desa yang tak terurus. Nam",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8316668,
        "lng": 110.3945119,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Bendung%20Lepen.jpg"
    },
    {
        "id": 141,
        "category_id": 3,
        "name": "Bunker Kaliadem Merapi",
        "description": "Bunker Kaliadem merupakan objek wisata yang terletak di lereng selatan Gunung Merapi. Destinasi wisata ini banyak menyimpan jejak erupsi gunung tersebut, terutama tahun 2006 dan 2010. Lokasi ",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.5829198,
        "lng": 110.4476816,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bunker%20Kaliadem%20Merapi.jpg"
    },
    {
        "id": 142,
        "category_id": 3,
        "name": "Ledok Sambi",
        "description": "Desa wisata Ledok Sambi merupakan desa yang mempunyai nuansa alami asli Jogja, yang berlokasi dekat dengan Gunung Merapi atau berada di Jl. Kaliurang Km. 19,2 Padukuhan Sambi Desa Pakembinang",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.6470943,
        "lng": 110.4280998,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Ledok%20Sambi.jpg"
    },
    {
        "id": 143,
        "category_id": 3,
        "name": "Seribu Batu Songgo Langit",
        "description": "Nama Seribu Batu Songgo Langit memiliki makna tersendiri. Sebelum jadi tempat wisata, di lokasi ini terdapat ratusan bahkan ribuan batu dan pastinya hutan pinus. Songgo langit berarti penyang",
        "city": "Yogyakarta",
        "price": 2000,
        "lat": -7.9310984,
        "lng": 110.430919,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Seribu%20Batu%20Songgo%20Langit.jpg"
    },
    {
        "id": 144,
        "category_id": 3,
        "name": "Goa Jomblang",
        "description": "Gua Jomblang merupakan gua vertikal yang bertipe collapse doline. Gua ini terbentuk akibat proses geologi amblasnya tanah beserta vegetasi yang ada di atasnya ke dasar bumi yang terjadi ribua",
        "city": "Yogyakarta",
        "price": 500000,
        "lat": -8.0281562,
        "lng": 110.6383307,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Goa%20Pindul.jpg"
    },
    {
        "id": 145,
        "category_id": 4,
        "name": "Desa Wisata Rumah Domes",
        "description": "Kawasan desa teletubbies menjadi perhatian menarik berbagai media, sehingga menjadikan para wisatawan mulai berbondong-bondong datang kesana. Hingga sekarang kawasan ini menjadi objek wisata ",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8136085,
        "lng": 110.5033442,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Rumah%20Domes.jpg"
    },
    {
        "id": 146,
        "category_id": 3,
        "name": "Bukit Wisata Pulepayung",
        "description": "Pule Payung Yogyakarta. Sebuah objek wisata populer yang menyajikan keindahan alam dari ketinggian 500 mdpl. Bukit Wisata Pule Payung Yogyakarta merupakan kawasan wisata yang dipenuhi dengan ",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.8001106,
        "lng": 110.1238954,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Wisata%20Pulepayung.jpg"
    },
    {
        "id": 147,
        "category_id": 2,
        "name": "Bentara Budaya Yogyakarta (BBY)",
        "description": "Bentara Budaya Yogyakarta adalah pusat budaya yang terletak di Yogyakarta, Indonesia. Bentara Budaya Yogyakarta dibuka pada 26 September 1982, didanai oleh Kompas Gramedia Group. Bentara Buda",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.7857242,
        "lng": 110.3746954,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bentara%20Budaya%20Yogyakarta%20%28BBY%29.jpg"
    },
    {
        "id": 148,
        "category_id": 3,
        "name": "Goa Rancang Kencono",
        "description": "Goa Rancang Kencono yang terletak di Padukuhan Menggoran, Desa Bleberan, Kecamatan Playen, Gunungkidul, Yogyakarta, merupakan salah satu goa yang yang dihuni manusia prasejarah hingga modern.",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.9492612,
        "lng": 110.4926511,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Goa%20Rong.jpg"
    },
    {
        "id": 149,
        "category_id": 3,
        "name": "Goa Cerme",
        "description": "Gua Cerme (bahasa Jawa: ꦒꦸꦮ​ꦕꦺꦂꦩꦺ, translit. Gua Cerme) adalah gua bersejarah dan sekaligus tempat wisata yang terletak di Dusun Srunggo, Desa Selopamioro, Kecamatan Imogiri, Kabupaten Bantul",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.9794413,
        "lng": 110.3803114,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Goa%20Jomblang.jpg"
    },
    {
        "id": 150,
        "category_id": 2,
        "name": "Wisata Kraton Jogja",
        "description": "Kraton Jogja adalah sebuah komplek kerajaan yang berada tepat berdiri di tengah kota Yogyakarta. Kraton yang didirikan seiring perjanjian giyanti pada tahun 1755 yang memecah Kerajaan Mataram",
        "city": "Yogyakarta",
        "price": 7000,
        "lat": -7.8067535,
        "lng": 110.3636659,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Kraton%20Jogja.jpg"
    },
    {
        "id": 151,
        "category_id": 4,
        "name": "Desa Wisata Kelor",
        "description": "Desa wisata Kelor merupakan salah satu desa yang ada di kabupaten Sleman yang saat ini sedang dikembangkan menjadi desa wisata. Desa wisata Kelor ini menawarkan suasana pedesaan yang penduduk",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.6410258,
        "lng": 110.3622794,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Kelor.jpg"
    },
    {
        "id": 152,
        "category_id": 1,
        "name": "Pantai Patihan",
        "description": "Pantai ini terletak di daerah Srigading, Sanden dan cukup dekat dengan Pantai Goa Cemara. Tempatnya juga asyik banget buat foto-foto, nggak beda jauh dengan Pandasari.",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.997778,
        "lng": 110.2449113,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Patihan.jpg"
    },
    {
        "id": 153,
        "category_id": 1,
        "name": "Pantai Kukup",
        "description": "Pantai Kukup adalah salah satu pantai yang memiliki hamparan pasir putih yang terkenal di Kabupaten Gunung Kidul, Yogyakarta. Selain memiliki pemandangan pantai yang cantik, pantai ini juga m",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1338763,
        "lng": 110.5548349,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Kukup.jpg"
    },
    {
        "id": 154,
        "category_id": 1,
        "name": "Pantai Ngrawe (Mesra)",
        "description": "Kabupaten Gunungkidul jadi salah satu wilayah di Yogyakarta dengan koleksi pantai terbanyak. Tak terhitung jumlah pantai yang ada di sepanjang pesisir selatannya. Ada yang tetap alami, ada ju",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1333389,
        "lng": 110.5537405,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ngrawe%20%28Mesra%29.jpg"
    },
    {
        "id": 155,
        "category_id": 1,
        "name": "Pantai Ngobaran",
        "description": "Pantai Ngobaran merupakan salah satu tempat wisata alam yang terletak di gugusan laut pantai selatan tepatnya di Desa Kanigoro, kecamatan Saptosari Kabupaten Gunungkidul Daerah Istimewa Yogya",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1184844,
        "lng": 110.5028785,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ngobaran.jpg"
    },
    {
        "id": 156,
        "category_id": 1,
        "name": "Pantai Pulang Sawal",
        "description": "Pantai Pulang Sawal yang ada di Kecamatan Tepus bisa dicoba. Wisatawan lebih akrab dengan nama Indrayanti untuk merujuk pantai ini. Tidak hanya pengunjung lokal, wisatawan mancanegara pun ter",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1506589,
        "lng": 110.6126311,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Pulang%20Sawal.jpg"
    },
    {
        "id": 157,
        "category_id": 1,
        "name": "Pantai Baron",
        "description": "Pantai Baron adalah salah satu objek wisata berupa pantai yang terletak di Desa Kemadang, Kecamatan Tanjungsari, Kabupaten Gunungkidul. Lokasi Pantai Baron dapat ditempuh 40 km daeri pusat ko",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1288246,
        "lng": 110.5487763,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Baron.jpg"
    },
    {
        "id": 158,
        "category_id": 1,
        "name": "Pantai Pok Tunggal",
        "description": "Pantai Pok Tunggal atau biasa disebut \"the hidden paradise\" (surga yang tersembunyi) adalah salah satu objek wisata yang ada di Yogyakarta tepatnya di Desa Tepus, Tepus, Gunung Kidul, Yogyaka",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1554468,
        "lng": 110.6217582,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Pok%20Tunggal.jpg"
    },
    {
        "id": 159,
        "category_id": 3,
        "name": "Hutan Pinus Asri",
        "description": "Hampir semua kawasan di daerah Dlingo dan sekitarnya banyak ditumbuhi pohon pinus. Salah satunya adalah kawasan Hutan Pinus Asri yang ada di Dusun Karangasem. Karena keindahannya, tak heran j",
        "city": "Yogyakarta",
        "price": 2500,
        "lat": -7.9209209,
        "lng": 110.4355651,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Pinus%20Asri.jpg"
    },
    {
        "id": 160,
        "category_id": 5,
        "name": "Pasar Kebon Empring Bintaran",
        "description": "Pasar Kebon Empring merupakan salah satu objek wisata di Kecamatan Piyungan yang menawarkan kuliner tradisional seperti sego atau nasi wader, jangan lombok, sego lele, sego welut, sego wiwit,",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.8363205,
        "lng": 110.4575806,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Kebon%20Empring%20Bintaran.jpg"
    },
    {
        "id": 161,
        "category_id": 3,
        "name": "Bukit Paralayang, Watugupit",
        "description": "Bukit Paralayang Parangtritis merupakan tempat wisata di Yogyakarta, tempat ini mensajikan pemandangan pantai parangtritis dari atas bukit dengan ketinggian 900 mdpl dan pemandangan matahari ",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.0268551,
        "lng": 110.3459122,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Paralayang%2C%20Watugupit.jpg"
    },
    {
        "id": 162,
        "category_id": 2,
        "name": "Kampung Wisata Dipowinatan",
        "description": "Kampung Wisata Dipowinatan adalah sebuah kampung yang dikembangkan oleh Dinas Pariwisata Yogyakarta untuk tujuan pariwisata. Kampung tersebut merupakan salah satu dari 17 yang saat ini sedang",
        "city": "Yogyakarta",
        "price": 220000,
        "lat": -7.8105529,
        "lng": 110.3704987,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Wisata%20Dipowinatan.jpg"
    },
    {
        "id": 163,
        "category_id": 3,
        "name": "Watu Mabur Mangunan",
        "description": "Kawasan Tebing Watu Mabur ini terbilang belum lama dikenal oleh masyarakat. Hal ini memang terjadi karena dahulu potensi wisata di kawasan Mangunan belum dikembangkan sedemikian rupa. Dahulu ",
        "city": "Yogyakarta",
        "price": 2500,
        "lat": -7.947121,
        "lng": 110.441,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Watu%20Mabur%20Mangunan.jpg"
    },
    {
        "id": 164,
        "category_id": 3,
        "name": "Pintoe Langit Dahromo",
        "description": "Pintu Langit Dahromo ini menyediakan berbagai spot selfie yang hitz dan instagramable dengan latar belakang panorama keindahan sebagian Kota Jogja yang istimewa. Adapun berbagai spot foto ter",
        "city": "Yogyakarta",
        "price": 2500,
        "lat": -7.913608,
        "lng": 110.437783,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pintoe%20Langit%20Dahromo.jpg"
    },
    {
        "id": 165,
        "category_id": 4,
        "name": "Green Village Gedangsari",
        "description": "Wisata Green Village Gedangsari Gunungkidul merupakan wisata alam cukup menakjubkan, pesona alam berupa hamparan pepohonan hijau rindang serta udara sejuk, bahkan sekarang telah hadir loh wah",
        "city": "Yogyakarta",
        "price": 2000,
        "lat": -7.813094,
        "lng": 110.615571,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Green%20Village%20Gedangsari.jpg"
    },
    {
        "id": 166,
        "category_id": 3,
        "name": "Kebun Teh Nglinggo",
        "description": "Wisata Kebun Teh Nglinggo adalah satu-satunya kebun teh yang berada di Yogyakarta. Sebenarnya kebun teh ini merupakan tempat mata pencaharian penduduk di sekitar Pagerhajo. Kemudian warga mem",
        "city": "Yogyakarta",
        "price": 6000,
        "lat": -7.647054,
        "lng": 110.1414699,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Teh%20Nglinggo.jpg"
    },
    {
        "id": 167,
        "category_id": 3,
        "name": "Geoforest Watu Payung Turunan",
        "description": "Bagi para pemburu keindahan matahari terbit yang tinggal atau berdomisili di Yogyakarta dan sekitarnya, Geoforest Watu Payung Turunan merupakan tujuan yang tepat. Keindahan matahari terbit, p",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.974294,
        "lng": 110.4364363,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Katedral%20Santo%20Petrus%20Bandung.jpg"
    },
    {
        "id": 168,
        "category_id": 1,
        "name": "Pantai Timang",
        "description": "Pantai Timang adalah objek wisata berupa pantai yaitu wilayah yang menjadi batas antara lautan dan daratan yang terletak di Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Pantai Timang me",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1759266,
        "lng": 110.6624196,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Timang.jpg"
    },
    {
        "id": 169,
        "category_id": 3,
        "name": "Puncak Segoro",
        "description": "Puncak Segoro menjadi destinasi wisata terbaru di Yogyakarta yang menawarkan sajian pesona sunset yang mempesona. Puncak Segoro Jogja sendiri berlokasi di pinggir pantai selatan Yogyakarta. K",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1026167,
        "lng": 110.4562084,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Puncak%20Segoro.jpg"
    },
    {
        "id": 170,
        "category_id": 2,
        "name": "Candi Borobudur",
        "description": "Borobudur (bahasa Jawa: ꦕꦤ꧀ꦝꦶ​ꦧꦫꦧꦸꦝꦸꦂ, translit. Candhi Barabudhur) adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 10",
        "city": "Yogyakarta",
        "price": 50000,
        "lat": -7.6078738,
        "lng": 110.2037513,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Borobudur.jpg"
    },
    {
        "id": 171,
        "category_id": 2,
        "name": "Candi Ijo",
        "description": "Candi Ijo (bahasa Jawa: ꦕꦤ꧀ꦝꦶ​ꦆꦗꦺꦴ, translit. Candhi Ijo) adalah sebuah kompleks percandian bercorak Hindu, berada 4 kilometer arah tenggara dari Candi Ratu Boko atau kira-kira 18 kilometer d",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.7838276,
        "lng": 110.5118987,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Ijo.jpg"
    },
    {
        "id": 172,
        "category_id": 1,
        "name": "Pantai Indrayanti",
        "description": "Pantai Indrayanti menawarkan keindahan alam yang menakjubkan. Hamparan pasir dan birunya laut menjadi pesona yang tiada dua. Pantai Indrayanti merupakan salah satu tempat wisata Yogyakarta ya",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1508415,
        "lng": 110.6129852,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Indrayanti.jpg"
    },
    {
        "id": 173,
        "category_id": 1,
        "name": "Pantai Nglambor",
        "description": "Pantai Nglambor adalah sebuah pantai eksotis yang terletak di Kelurahan Purwodadi, Kecamatan Tepus, Gunung Kidul, Daerah Istimewa Yogyakarta. Lokasinya persis di sebelah barat dari Pantai Siu",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1827028,
        "lng": 110.6792399,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Nglambor.jpg"
    },
    {
        "id": 174,
        "category_id": 5,
        "name": "Pasar Beringharjo",
        "description": "Pasar Beringharjo (bahasa Jawa: ꦥꦱꦂꦧꦼꦫꦶꦁꦲꦂꦗ, translit. Pasar Beringharjo) adalah pasar tertua dengan nilai historis dan filosofis yang tidak dapat dipisahkan dengan Keraton Yogyakarta. Bering",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.7987943,
        "lng": 110.367443,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Beringharjo.jpg"
    },
    {
        "id": 175,
        "category_id": 2,
        "name": "Museum Ullen Sentalu",
        "description": "Museum Ullen Sentalu, (bahasa Jawa: ꦩꦸꦱꦶꦪꦸꦩ꧀​ꦈꦭ꧀ꦭꦺꦤ꧀​ꦱꦼꦤ꧀ꦠꦭꦸ, translit. Musiyum Ullèn Sentalu) terletak di Kecamatan Pakem (Kaliurang), Kabupaten Sleman, Daerah Istimewa Yogyakarta, adalah mu",
        "city": "Yogyakarta",
        "price": 100000,
        "lat": -7.5978656,
        "lng": 110.4233959,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Ullen%20Sentalu.jpg"
    },
    {
        "id": 176,
        "category_id": 2,
        "name": "Museum Gunung Merapi",
        "description": "Museum Gunung Merapi (bahasa Jawa: ꧋ꦩꦸꦱꦶꦪꦸꦩ꧀​ ꦒꦸꦤꦸꦁ​ ꦩꦼꦫꦥꦶ꧉, translit. Musiyum Gunung Merapi) merupakan museum bersejarah yang terdapat di Yogyakarta tepatnya di Jln. Boyong, Dusun Banteng, D",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.6159272,
        "lng": 110.4243329,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Gunung%20Merapi.jpg"
    },
    {
        "id": 177,
        "category_id": 1,
        "name": "Pantai Parangtritis",
        "description": "Pantai Parangtritis (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ ꦥꦫꦁꦠꦿꦶꦠꦶꦱ꧀, translit. Pasisir Parangtritis) adalah tempat wisata yang terletak di Desa Parangtritis, Kretek, Kabupaten Bantul, Daerah Istimewa Yogyaka",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.024608,
        "lng": 110.3298045,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Parangtritis.jpg"
    },
    {
        "id": 178,
        "category_id": 3,
        "name": "Goa Pindul",
        "description": "Gua Pindul adalah objek wisata berupa gua yang terletak di Desa Bejiharjo, Kecamatan Karangmojo, Kabupaten Gunungkidul. Gua Pindul dikenal karena cara menyusuri gua yang dilakukan dengan mena",
        "city": "Yogyakarta",
        "price": 40000,
        "lat": -7.9339721,
        "lng": 110.651966,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Goa%20Rancang%20Kencono.jpg"
    },
    {
        "id": 179,
        "category_id": 2,
        "name": "Candi Ratu Boko",
        "description": "Situs Ratu Baka atau Candi Boko (Hanacaraka:ꦕꦤ꧀ꦝꦶ​ꦫꦠꦸ​ꦧꦏ, bahasa Jawa: Candhi Ratu Baka) adalah situs purbakala yang merupakan kompleks sejumlah sisa bangunan yang berada kira-kira 3 km di se",
        "city": "Yogyakarta",
        "price": 75000,
        "lat": -7.7705416,
        "lng": 110.4894158,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Ratu%20Boko.jpg"
    },
    {
        "id": 180,
        "category_id": 1,
        "name": "Pantai Depok Jogja",
        "description": "Pantai Depok (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ ꦝꦺꦥꦺꦴꦏ꧀, translit. Pasisir Dhépok) merupakan objek wisata pantai yang terletak di Kecamatan Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta, sekitar tig",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.0137087,
        "lng": 110.2914777,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Depok%20Jogja.jpg"
    },
    {
        "id": 181,
        "category_id": 1,
        "name": "Pantai Sundak",
        "description": "Pantai Sundak merupakan salah satu pantai indah yang berada di Gunung Kidul tepatnya di dekat Pantai Indrayanti. Pantai ini berpasir putih dan memilii air yang masih bersih, bening, dan menye",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.147072,
        "lng": 110.6079043,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Sundak.jpg"
    },
    {
        "id": 182,
        "category_id": 1,
        "name": "Hutan Mangrove Kulon Progo",
        "description": "Di sini ada kawasan wisata Hutan Mangrove Kulon Progo yang menyajikan keindahan alamnya. hutan Mangrove  ini memberikan pesona tersendiri selain pantai Glagah yang sudah menjadi primadona di ",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.8933459,
        "lng": 110.0198257,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Mangrove%20Kulon%20Progo.jpg"
    },
    {
        "id": 183,
        "category_id": 4,
        "name": "Jogja Bay Pirates Adventure Waterpark",
        "description": "Jogja Bay Waterpark atau Jogja Bay (bahasa Jawa: ꦠꦼꦭꦸꦏ꧀ꦔꦪꦺꦴꦒꦾ 'Teluk Ngayogya') adalah salah satu taman wisata air atau waterpark terbesar di Asia Tenggara yang berlokasi di Yogyakarta, Indon",
        "city": "Yogyakarta",
        "price": 150000,
        "lat": -7.7478461,
        "lng": 110.4188754,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Jogja%20Bay%20Pirates%20Adventure%20Waterpark.jpg"
    },
    {
        "id": 184,
        "category_id": 1,
        "name": "Pantai Sepanjang",
        "description": "Siapa sangka, ternyata Yogyakarta pun punya “Kuta”-nya sendiri Ialah Pantai Sepanjang, salah satu pantai di Kabuaten Gunungkidul. Daerah yang satu ini memang memiliki koleksi pantai cantik ya",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1366656,
        "lng": 110.5659962,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Sepanjang.jpg"
    },
    {
        "id": 185,
        "category_id": 1,
        "name": "Pantai Krakal",
        "description": "Pantai krakal merupakan pantai strategis untuk singgah, selain bisa menikmati panorama laut, wisatawan juga bisa mencicipi kuliner laut. Terdapat icon berupa bangunan berbentuk ikan diatas bu",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.145019,
        "lng": 110.5998857,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Krakal.jpg"
    },
    {
        "id": 186,
        "category_id": 1,
        "name": "Pantai Glagah",
        "description": "Pantai Glagah Indah adalah salah satu pantai yang menjadi objek wisata di provinsi Daerah Istimewa Yogyakarta. Pantai Glagah Indah merupakan salah satu pantai di Yogyakarta dengan hamparan pa",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -7.9119427,
        "lng": 110.0647339,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Glagah.jpg"
    },
    {
        "id": 187,
        "category_id": 1,
        "name": "Pantai Siung",
        "description": "Pantai Siung adalah suatu objek wisata pantai yang terletak di Kec. Tepus, tepatnya berada di Dusun Duwet, Kelurahan Purwodadi, Kecamatan Tepus, Kabupaten Gunungkidul, provinsi Daerah Istimew",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1818233,
        "lng": 110.6832394,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Siung.jpg"
    },
    {
        "id": 188,
        "category_id": 1,
        "name": "Pantai Sadranan",
        "description": "Pantai Sadranan Jogja adalah butiran intan permata tersembunyi yang tiba-tiba memunculkan diri, dari dalam tumpukan harta karun deretan pantai pantai indah di Jogja. Seperti halnya pantai-pan",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.145668,
        "lng": 110.6043914,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Sadranan.jpg"
    },
    {
        "id": 189,
        "category_id": 1,
        "name": "Pantai Nguluran",
        "description": "Di pantai Nguluran anda hanya bisa melihat hamparan laut luas serta spot foto. Semua fasilitas itu adanya di atas tebing. Sekitar belasan meter dari permukaan air pantai. Spot favorit di reso",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1060061,
        "lng": 110.4618655,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Nguluran.jpg"
    },
    {
        "id": 190,
        "category_id": 1,
        "name": "Pantai Samas",
        "description": "Pantai Samas (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ​ꦱꦩꦱ꧀, translit. Pasisir Samas) merupakan salah satu pantai yang berada di deretan pantai sebelah timur Pantai Parangtritis. Lokasi Pantai Samas kurang lebih ",
        "city": "Yogyakarta",
        "price": 4000,
        "lat": -8.0045535,
        "lng": 110.2703756,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Samas.jpg"
    },
    {
        "id": 191,
        "category_id": 1,
        "name": "Pantai Drini",
        "description": "Pantai Drini adalah salah satu objek wisata yang terletak di Desa Banjarejo, Kecamatan Tanjungsari,Gunungkidul, Yogyakarta. Letaknya di sebelah timur Pantai Baron dan berjarak sekitar 1 km ke",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1384509,
        "lng": 110.577522,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Drini.jpg"
    },
    {
        "id": 192,
        "category_id": 3,
        "name": "Air Terjun Sri Gethuk",
        "description": "Air Terjun Sri Gethuk merupakan salah satu objek wisata alam yang terletak di Kecamatan Playen, Kabupaten Gunungkidul, Yogyakarta. Air terjun ini berada di tepi Sungai Oyo sehingga untuk meni",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.943178,
        "lng": 110.48924,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Air%20Terjun%20Sri%20Gethuk.jpg"
    },
    {
        "id": 193,
        "category_id": 2,
        "name": "Candi Sewu",
        "description": "Candi Sewu atau Manjusrighra (Hanacaraka:ꦕꦤ꧀ꦝꦶ​ꦱꦺꦮꦸ, Jawa: Candhi Sèwu) adalah candi Buddha yang dibangun pada abad ke-8 Masehi yang berjarak hanya delapan ratus meter di sebelah utara Candi ",
        "city": "Yogyakarta",
        "price": 50000,
        "lat": -7.7439217,
        "lng": 110.4929095,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Sewu.jpg"
    },
    {
        "id": 194,
        "category_id": 1,
        "name": "Pantai Wediombo",
        "description": "Pantai Wediombo (O Jawa: Wedhiamba) adalah sebuah pantai yang berada di Desa Jepitu, Girisubo, Gunungkidul di dekat Pantai Siung, berjarak 80 km dari kota Yogyakarta. Pantai tersebut meliputi",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1862462,
        "lng": 110.709901,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Wediombo.jpg"
    },
    {
        "id": 195,
        "category_id": 1,
        "name": "Pantai Jogan",
        "description": "Pantai Jogan adalah objek wisata pantai yang terletak di Dusun Duwet, Purwodadi, Tepus, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Lokasinya berjarak kurang lebih 74 km dari Pusat kot",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.180135,
        "lng": 110.6763715,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Jogan.jpg"
    },
    {
        "id": 196,
        "category_id": 1,
        "name": "Pantai Ngrenehan",
        "description": "Pantai Ngrenehan merupakan\\npantai nelayan. Terletak di desa Kanigoro\\nKecamatan Saptosari kurang lebih 30 km di sebelah selatan kota Wonosari. Suatu pantai berupa teluk yang dikelilingi hamp",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -8.1211475,
        "lng": 110.5142337,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ngrenehan.jpg"
    },
    {
        "id": 197,
        "category_id": 1,
        "name": "Pantai Jungwok",
        "description": "Pantai Jungwok adalah pantai yang terletak di Desa Jepitu, Kecamatan Girisubo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Pantai Jungwok merupakan salah satu pantai yang memiliki pano",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.197822,
        "lng": 110.7123397,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Jungwok.jpg"
    },
    {
        "id": 198,
        "category_id": 1,
        "name": "Pantai Greweng",
        "description": "Di Kabupaten Gunungkidul, tidak sulit memilih pantai yang masih sepi dan indah. Pantai Greweng yang berada di Kecamatan Girisubo adalah satu di antaranya. Tidak hanya cantik, pantai ini juga ",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1978644,
        "lng": 110.7186216,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Greweng.jpg"
    },
    {
        "id": 199,
        "category_id": 1,
        "name": "Pantai Sedahan",
        "description": "Pantai Sedahan ini memiliki garis pantai yang cukup panjang dan cukup luas untuk dijadikan sebagai arena bermain. Pada kedua sisi pantai, terdapat tebing karang yang mengapit pantai ini dan m",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1978943,
        "lng": 110.7208535,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Sedahan.jpg"
    },
    {
        "id": 200,
        "category_id": 1,
        "name": "Pantai Watu Kodok",
        "description": "Pantai Watu Kodok merupakan salah satu pantai yang ada di Gunung Kidul. Pantai Watu Kodok ini memiliki pasir putih dan air laut yang masih berwarna biru yang sangat indah. Di pantai ini terda",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.1370556,
        "lng": 110.5746611,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Watu%20Kodok.jpg"
    },
    {
        "id": 201,
        "category_id": 1,
        "name": "Pantai Kesirat",
        "description": "Pada umumnya pantai identik dengan pasirnya bukan, namun pantai kesirat memiliki keunikan tersendiri yang akan anda temukan disini. Pantai kesirat tidak memiliki pasir namun anda akan menemuk",
        "city": "Yogyakarta",
        "price": 5000,
        "lat": -8.0961535,
        "lng": 110.4350483,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Kesirat.jpg"
    },
    {
        "id": 202,
        "category_id": 1,
        "name": "Pantai Ngandong",
        "description": "Pantai Ngandong terletak di Desa Sidoarjo, Kecamatan Tepus, Kabupaten Gunung Kidul, Yogyakarta. Pantai ini sebenarnya tidak jauh dari Pantai Indrayanti yang lebih terkenal dahulu, tepatnya te",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.146423,
        "lng": 110.6061408,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ngandong.jpg"
    },
    {
        "id": 203,
        "category_id": 4,
        "name": "Galaxy Waterpark Jogja",
        "description": "Galaxy Waterpark adalah taman rekreasi air yang berdiri di atas lahan seluas 2,5 hektar ini sangat cukup untuk menampung pengunjung di waktu liburan. Dengan lokasi yang sangat luas banyak wah",
        "city": "Yogyakarta",
        "price": 40000,
        "lat": -7.8159633,
        "lng": 110.4136917,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Galeri%20Indonesia%20Kaya.jpg"
    },
    {
        "id": 204,
        "category_id": 4,
        "name": "Desa Wisata Pulesari",
        "description": "Desa Wisata Pulesari semakin menambah deretan profil desa wisata di Jogja yang lahir dari kesadaran masyarakat, atas potensi lokal yang dimiliki. Baik itu dari sisi ragam budaya, pesona alam ",
        "city": "Yogyakarta",
        "price": 0,
        "lat": -7.6258806,
        "lng": 110.371698,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Pulesari.jpg"
    },
    {
        "id": 205,
        "category_id": 4,
        "name": "Desa Wisata Tembi",
        "description": "Desa Wisata Tembi, merupakan satu dari sekian desa wisata yang sukses menata kawasannya, sehingga menjadi sebuah kawasan yang layak untuk dikunjungi. Potensi alam, sejarah, serta potensi buda",
        "city": "Yogyakarta",
        "price": 50000,
        "lat": -7.8725673,
        "lng": 110.3546963,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Tembi.jpg"
    },
    {
        "id": 206,
        "category_id": 3,
        "name": "Wisata Kaliurang",
        "description": "Jogja selalu menarik untuk dikulik, terlebih tempat wisatanya. Berbagai wisata tersedia di Jogja, mulai dari wisata buatan hingga wisata alam. Seperti halnya Taman Wisata Kaliurang, yang mema",
        "city": "Yogyakarta",
        "price": 8000,
        "lat": -7.6120675,
        "lng": 110.4205209,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Kaliurang.jpg"
    },
    {
        "id": 207,
        "category_id": 4,
        "name": "Heha Sky View",
        "description": "HeHa Sky View adalah salah satu tempat wisata terbaru di Yogyakarta dan paling hits saat ini. Mau foto estetik ala selebgram atau berfoto di atas rooftop berlantai kaca? Bisa! .Terletak di Yo",
        "city": "Yogyakarta",
        "price": 15000,
        "lat": -7.8496144,
        "lng": 110.478324,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Heha%20Sky%20View.jpg"
    },
    {
        "id": 208,
        "category_id": 3,
        "name": "Taman Sungai Mudal",
        "description": "Taman Sungai Mudal, sebuah objek wisata alam terbuka yang terletak di Kabupaten Kulon Progo, yang menawarkan pesona sebuah kolam pemandian yang bersumber dari mata air alami. Mata airnya bers",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -7.7628136,
        "lng": 110.1161626,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Sungai%20Mudal.jpg"
    },
    {
        "id": 209,
        "category_id": 1,
        "name": "Pantai Sanglen",
        "description": "Pantai Sanglen. Lokasinya berada di Desa Kemadang, Gunung Kidul. Pantai indah yang satu ini memang terdengar asing di telinga, namun ternyata pantai ini menyimpan keindahan yang sangat menena",
        "city": "Yogyakarta",
        "price": 10000,
        "lat": -8.1367456,
        "lng": 110.5716362,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Sanglen.jpg"
    },
    {
        "id": 210,
        "category_id": 1,
        "name": "Pantai Congot",
        "description": "Selain Pantai Glagah dan Pantai Trisik, ternyata masih ada satu lagi pantai yang berada di Kulon Progo. Yakni Pantai Congot, pantai yang satu ini terkenal sebagai surganya memancing ikan. Mak",
        "city": "Yogyakarta",
        "price": 3000,
        "lat": -7.9075425,
        "lng": 110.0535658,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Congot.jpg"
    },
    {
        "id": 211,
        "category_id": 3,
        "name": "GunungTangkuban perahu",
        "description": "Gunung Tangkuban Parahu adalah salah satu gunung yang terletak di Provinsi Jawa Barat, Indonesia. Sekitar 20 km ke arah utara Kota Bandung, dengan rimbun pohon pinus dan hamparan kebun teh di",
        "city": "Bandung",
        "price": 30000,
        "lat": -6.7596377,
        "lng": 107.6097807,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/GunungTangkuban%20perahu.jpg"
    },
    {
        "id": 212,
        "category_id": 2,
        "name": "Jalan Braga",
        "description": "Jalan Braga adalah nama sebuah jalan utama di kota Bandung, Indonesia. Nama jalan ini cukup dikenal sejak masa pemerintahan Hindia Belanda. Sampai saat ini nama jalan tersebut tetap dipertaha",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9150534,
        "lng": 107.6089842,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Jalan%20Braga.jpg"
    },
    {
        "id": 213,
        "category_id": 2,
        "name": "Gedung Sate",
        "description": "Gedung Sate, dengan ciri khasnya berupa ornamen tusuk sate pada menara sentralnya, telah lama menjadi penanda atau markah tanah Kota Bandung yang tidak saja dikenal masyarakat di Jawa Barat, ",
        "city": "Bandung",
        "price": 5000,
        "lat": -6.9024812,
        "lng": 107.61881,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Gembira%20Loka%20Zoo.jpg"
    },
    {
        "id": 214,
        "category_id": 4,
        "name": "Trans Studio Bandung",
        "description": "Trans Studio Bandung adalah kawasan wisata terpadu di Kota Bandung, Indonesia. Trans Studio dibangun pada areal seluas 4,2 hektare dengan investasi mencapai Rp 2 triliun sehingga menjadikan s",
        "city": "Bandung",
        "price": 280000,
        "lat": -6.9250943,
        "lng": 107.6364944,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Trans%20Studio%20Bandung.jpg"
    },
    {
        "id": 215,
        "category_id": 3,
        "name": "Taman Hutan Raya Ir. H. Djuanda",
        "description": "Taman Hutan Raya Ir. H. Djuanda (Tahura Djuanda) merupakan kawasan konservasi yang terpadu antara alam sekunder dengan hutan tanaman dengan jenis Pinus (Pinus merkusil) yang terletak di Sub-D",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.8565791,
        "lng": 107.6323734,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Hutan%20Raya%20Ir.%20H.%20Djuanda.jpg"
    },
    {
        "id": 216,
        "category_id": 4,
        "name": "Farm House Susu Lembang",
        "description": "Sebagai salah satu tempat wisata lembang baru, Farm house Lembang mulai beroperasi sekitar tahun 2015. Tempat wisata di Bandung biasanya terbantu naik oleh medsos, terutama facebook dan insta",
        "city": "Bandung",
        "price": 30000,
        "lat": -6.832969,
        "lng": 107.6056183,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Farm%20House%20Susu%20Lembang.jpg"
    },
    {
        "id": 217,
        "category_id": 3,
        "name": "Kebun Binatang Bandung",
        "description": "Kebun Binatang Bandung merupakan salah satu objek wisata alam flora dan fauna di Kota Bandung, Jawa Barat, Indonesia. Kebun Binatang Bandung terletak berdampingan dengan kampus Institut Tekno",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.8897177,
        "lng": 107.6077282,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Binatang%20Bandung.jpg"
    },
    {
        "id": 218,
        "category_id": 3,
        "name": "Kawah Putih",
        "description": "Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih meru",
        "city": "Bandung",
        "price": 81000,
        "lat": -7.1662039,
        "lng": 107.4021256,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawah%20Putih.jpg"
    },
    {
        "id": 219,
        "category_id": 3,
        "name": "Tebing Karaton",
        "description": "Tebing Keraton atau Tebing Karaton merupakan sebuah tebing yang berada di dalam kawasan Taman Hutan Raya Ir. H. Djuanda. Tebing ini terletak di Kampung Ciharegem Puncak, Desa Ciburial, Bandun",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.8340683,
        "lng": 107.6636151,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Tebing%20Karaton.jpg"
    },
    {
        "id": 220,
        "category_id": 4,
        "name": "Dusun Bambu",
        "description": "Dusun Bambu merupakan taman rekreasi berbasis ecotourism di Jawa Barat dengan konsep ‘Private Sanctuary Lifestyle’ (Konsep Wisata Sehat). Melalui konsep ini, Dusun Bambu siap menghadirkan sar",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.7897147,
        "lng": 107.5791627,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Dusun%20Bambu.jpg"
    },
    {
        "id": 221,
        "category_id": 2,
        "name": "Museum Geologi Bandung",
        "description": "Museum Geologi didirikan pada tanggal 16 Mei 1929 Museum ini telah direnovasi dengan dana bantuan dari JICA (Japan International Cooperation Agency). Setelah mengalami renovasi, Museum Geolog",
        "city": "Bandung",
        "price": 2000,
        "lat": -6.9007162,
        "lng": 107.6214553,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Geologi%20Bandung.jpg"
    },
    {
        "id": 222,
        "category_id": 2,
        "name": "Museum Konferensi Asia Afrika",
        "description": "Museum Konferensi Asia Afrika merupakan salah satu museum yang berada di kota Bandung yang terletak di Jalan Asia Afrika No. 65. Museum ini merupakan memorabilia Konferensi Asia Afrika. Museu",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9211092,
        "lng": 107.609597,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Konferensi%20Asia%20Afrika.jpg"
    },
    {
        "id": 223,
        "category_id": 6,
        "name": "Masjid Raya Bandung",
        "description": "Masjid Raya Bandung Provinsi Jawa Barat, yang dulu dikenal dengan nama Masjid Agung Bandung adalah masjid yang berada di Kota Bandung, Jawa Barat, Indonesia. Status masjid ini adalah sebagai ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9216897,
        "lng": 107.6061399,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Raya%20Bandung.jpg"
    },
    {
        "id": 224,
        "category_id": 4,
        "name": "Dago Dreampark",
        "description": "Dago Dreampark merupakan wisata kekinian di Kota Bandung dengan luas 13 hektar yang mengusung konsep Jawa - Sunda & Bali dengan dilengkapi berbagai fasilitas & wahana yang menarik.",
        "city": "Bandung",
        "price": 40000,
        "lat": -6.8486423,
        "lng": 107.625939,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Dago%20Dreampark.jpg"
    },
    {
        "id": 225,
        "category_id": 4,
        "name": "Orchid Forest Cikole",
        "description": "Orchid Forest Cikole Lembang sudah berdiri sejak Agustus tahun 2017. Tempat ini merupakan taman anggrek terluas di Indonesia. Berada di tengah kawasan hutan lindung dan terbentang seluas 12 h",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.780493,
        "lng": 107.637475,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Orchid%20Forest%20Cikole.jpg"
    },
    {
        "id": 226,
        "category_id": 4,
        "name": "Kawasan Punclut",
        "description": "Punclut yang merupakan singkatan dari Puncak Ciumbuleuit adalah salah satu kawasan yang terletak di sebelah utara Kota Bandung. Kawasan ini terletak 7 kilometer dari pusat kota Bandung. Pada ",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.8419756,
        "lng": 107.622824,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawasan%20Punclut.jpg"
    },
    {
        "id": 227,
        "category_id": 4,
        "name": "Alun-Alun Kota Bandung",
        "description": "Alun-alun Bandung adalah pusat kota Bandung yang dicirikan oleh sebidang tanah yang luas. Di sekelilingnya ada bangunan-bangunan fungsional. Tempatnya ada di dekat Grote Postweg.",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9218571,
        "lng": 107.6070141,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Alun-Alun%20Kota%20Bandung.jpg"
    },
    {
        "id": 228,
        "category_id": 2,
        "name": "Museum Sri Baduga",
        "description": "Museum Sri Baduga merupakan sebuah museum yang terletak di kota Bandung, Jawa Barat, Indonesia.\\nMuseum ini dikelola oleh pemerintah provinsi Jawa Barat, yang mulai didirikan pada tahun 1974 ",
        "city": "Bandung",
        "price": 3000,
        "lat": -6.9375748,
        "lng": 107.603775,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Sri%20Baduga.jpg"
    },
    {
        "id": 229,
        "category_id": 4,
        "name": "Rabbit Town",
        "description": "Rabbit Town Bandung merupakan salah satu wisata unik di Bandung yang didirikan pada 11 Januari 2018. Tempat wisata yang menjadikan hewan kelinci sebagai ikon utama. Pada seluruh dekorasi dibu",
        "city": "Bandung",
        "price": 45000,
        "lat": -6.8669518,
        "lng": 107.6100859,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Rabbit%20Town.jpg"
    },
    {
        "id": 230,
        "category_id": 4,
        "name": "Stone Garden Citatah",
        "description": "Stone  Garden, adalah sebutan nama untuk hamparan tanah yang diisi oleh  formasi batuan tak beraturan yang indah dan membentuk taman alam.Bandung  memiliki banyak wisata alam yang sangat luar",
        "city": "Bandung",
        "price": 30000,
        "lat": -6.8281528,
        "lng": 107.4350179,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Stone%20Garden%20Citatah.jpg"
    },
    {
        "id": 231,
        "category_id": 4,
        "name": "The Great Asia Africa",
        "description": "Kota Bandung tampaknya tidak pernah kehabisan ide kreatif dalam mengembangkan destinasi wisata. Berbagai tujuan berlibur tersedia di sini, mulai dari wisata kuliner, sejarah, hingga edukasi. ",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.833123,
        "lng": 107.6041595,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/The%20Great%20Asia%20Africa.jpg"
    },
    {
        "id": 232,
        "category_id": 3,
        "name": "Bukit Moko",
        "description": "Bandung sebagai destinasi wisata tak pernah ada habisnya. Didukung dengan lanskap yang cantik, kawasan Bandung mampu menarik perhatian wisatawan. Baik dari segi alam, budaya, kuliner, dan sen",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.8422202,
        "lng": 107.6767988,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Moko.jpg"
    },
    {
        "id": 233,
        "category_id": 3,
        "name": "Gunung Papandayan",
        "description": "Gunung Papandayan adalah gunung api strato yang terletak di Kabupaten Garut, Jawa Barat tepatnya di Kecamatan Cisurupan. Gunung dengan ketinggian 2665 meter di atas permukaan laut itu terleta",
        "city": "Bandung",
        "price": 30000,
        "lat": -7.3193253,
        "lng": 107.7310494,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Gunung%20Papandayan.jpg"
    },
    {
        "id": 234,
        "category_id": 2,
        "name": "Amazing Art World",
        "description": "Amazing Art World Bandung, sebuah objek wisata yang terletak di Bandung, yang menegaskan bahwa destinasi wisata itu bukan hanya sekedar tentang pantai, air terjun, atau wisata alam lainnya sa",
        "city": "Bandung",
        "price": 75000,
        "lat": -6.8516591,
        "lng": 107.5955534,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Amazing%20Art%20World.jpg"
    },
    {
        "id": 235,
        "category_id": 3,
        "name": "Gua Belanda",
        "description": "Gua Belanda Bandung merupakan sebuah gua yang berada dalam kawasan yang sekarang ditetapkan sebagai Taman Hutan Raya Ir. H. Djuanda adalah bentangan pegunungan dari Barat sampai ke Timur yang",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.8544594,
        "lng": 107.6377907,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Gua%20Belanda.jpg"
    },
    {
        "id": 236,
        "category_id": 4,
        "name": "Taman Balai Kota Bandung",
        "description": "Taman Balai Kota Bandung merupakan sebuah taman kota yang terletak di Kota Bandung. Taman ini berada di sebelah selatan Balai Kota Bandung. Saat ini, Taman Balai Kota Bandung terdiri dari dua",
        "city": "Bandung",
        "price": 0,
        "lat": -6.912966,
        "lng": 107.6096031,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Balai%20Kota%20Bandung.jpg"
    },
    {
        "id": 237,
        "category_id": 4,
        "name": "Panghegar Waterboom Bandung",
        "description": "Panghegar Waterboom Bandung merupakan salah satu destinasi wisata yang wajib dikunjungi bagi wisatawan yang hendak mengajak buah hatinya bermain air. Terletak di Buah Batu, lokasi ini kerap k",
        "city": "Bandung",
        "price": 75000,
        "lat": -6.9614032,
        "lng": 107.6227321,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Panghegar%20Waterboom%20Bandung.jpg"
    },
    {
        "id": 238,
        "category_id": 3,
        "name": "Gunung Manglayang",
        "description": "Gunung Manglayang adalah sebuah gunung bertipe Stratovolcano yang terletak di antara Kota Bandung dan Kabupaten Sumedang, Jawa Barat, Indonesia dan memiliki ketinggian sekitar 1818 mdpl. Pema",
        "city": "Bandung",
        "price": 7500,
        "lat": -6.8761111,
        "lng": 107.7436111,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Gunung%20Manglayang.jpg"
    },
    {
        "id": 239,
        "category_id": 3,
        "name": "Lembang Park & Zoo",
        "description": "Di Lembang Park & Zoo ada 370 ekor satwa, lengkap dari berbagai jenis herbivora, karnivora, dan omnivora. Luas total tempat ini mencapai 20 hektar, namun baru 10 hektar yang dikembangkan. Sis",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.8059154,
        "lng": 107.5919726,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Lembang%20Park%20%26%20Zoo.jpg"
    },
    {
        "id": 240,
        "category_id": 4,
        "name": "Taman Lalu Lintas Ade Irma Suryani Nasution",
        "description": "Taman Lalu-lintas Ade Irma Suryani adalah sebuah taman rekreasi yang ada di jantung kota Bandung, Jawa Barat, Indonesia. Selain sebagai taman dan tempat bermain, di sini juga dijadikan pusat ",
        "city": "Bandung",
        "price": 7000,
        "lat": -6.911211,
        "lng": 107.6133389,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Lalu%20Lintas%20Ade%20Irma%20Suryani%20Nasution.jpg"
    },
    {
        "id": 241,
        "category_id": 4,
        "name": "Lawangwangi Creative Space",
        "description": "Lawangwangi merupakan sebuah galeri seni dengan konsep retro modern. Mememadukan keindahan alam dan cita rasa kuliner. Hmm, bikin penasaran ya Teman Traveler. Lawangwangi Creative Space sebel",
        "city": "Bandung",
        "price": 0,
        "lat": -6.847898,
        "lng": 107.6276146,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Lawangwangi%20Creative%20Space.jpg"
    },
    {
        "id": 242,
        "category_id": 3,
        "name": "Curug Dago",
        "description": "Curug Dago Kota Bandung Jawa Barat berada di ketinggian 800 meter di atas permukaan air laut dengan tinggi air terjun mencapai 12 meter. Air terjun ini terbentuk sebagai akibat aliran Sungai ",
        "city": "Bandung",
        "price": 12000,
        "lat": -6.8655225,
        "lng": 107.6181878,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Dago.jpg"
    },
    {
        "id": 243,
        "category_id": 2,
        "name": "Kampung Korea Bandung",
        "description": "Kampung Korea adalah sebuah kawasan di kota Bandung yang dibangun semirip mungkin dengan karakter kota Seoul di Korea Selatan. Tujuan pengembangan kawasan ini adalah sebagai bagian dari kegia",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.9154546,
        "lng": 107.640769,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Korea%20Bandung.jpg"
    },
    {
        "id": 244,
        "category_id": 4,
        "name": "Kampung Batu Malakasari",
        "description": "Kampung Batu Malakasari adalah sebuah tempat wisata yang didirikan di bekas penambangan batu. Di lokasi tersebut masih terlihat jelas pahatan-pahatan bekas penambangan Batu. Kini, di bekas pe",
        "city": "Bandung",
        "price": 10000,
        "lat": -7.0093633,
        "lng": 107.6069444,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Batu%20Malakasari.jpg"
    },
    {
        "id": 245,
        "category_id": 4,
        "name": "Jendela Alam",
        "description": "Tidak hanya menikmati alam sekitar yang masih sejuk dan hijau, anak anda juga bisa mengikuti berbagai kegiatan edukasi yang bermanfaat. Berbagai kegiatan edukasi disediakan dan dirancang sede",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.819604,
        "lng": 107.5964519,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Jendela%20Alam.jpg"
    },
    {
        "id": 246,
        "category_id": 3,
        "name": "Curug Tilu Leuwi Opat",
        "description": "Curug Tilu Leuwi Opat merupakan salah satu wisata curug di Lembang. Tempatnya sendiri cukup luas. Disini ada area outbond, camping, dan tentunya wisata air terjun dan sungai. Area depan berup",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.7905692,
        "lng": 107.5826388,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Tilu%20Leuwi%20Opat.jpg"
    },
    {
        "id": 247,
        "category_id": 4,
        "name": "Kiara Artha Park",
        "description": "Kiara Artha Park merupakan sebuah kawasan terpadu yang memadukan konsep hunian, bisnis, komersial, dan wisata yang ikonik di Kota Bandung dengan luas + 2.9 hektar. Kiara Artha Park sendiri me",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.9159459,
        "lng": 107.6421462,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kiara%20Artha%20Park.jpg"
    },
    {
        "id": 248,
        "category_id": 4,
        "name": "NuArt Sculpture Park",
        "description": "NuArt Sculpture Park ini merupakan sebuah gallery miliki seorang seniman ternama di Bandung yang bernama Nyoman Nuarta. Terlahir di Tabanan Bali, Nyoman Nuarta akhirnya menetap di Bandung. Da",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.8778589,
        "lng": 107.5720263,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/NuArt%20Sculpture%20Park.jpg"
    },
    {
        "id": 249,
        "category_id": 4,
        "name": "Upside Down World Bandung",
        "description": "Upside Down World Bandung pertama kali dibuka pada 10 Oktober 2016 dengan konsep yang sangat unik. Semua furnitur yang berada di Upside Down World ini dipasang terbalik seolah pengunjung bera",
        "city": "Bandung",
        "price": 100000,
        "lat": -6.8963,
        "lng": 107.617,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Upside%20Down%20World%20Bandung.jpg"
    },
    {
        "id": 250,
        "category_id": 4,
        "name": "Pesona Nirwana Waterpark & Cottages",
        "description": "Pesona Nirwana Waterpark merupakan sebuah objek wisata wahana air seluas 4000 meter persegi yang berlokasi di Kampung Legok Jeungjing, Desa Panyirapan, Kecamatan Soreang, Kabupaten Bandung.\\n",
        "city": "Bandung",
        "price": 50000,
        "lat": -7.0409154,
        "lng": 107.5269156,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Pesona%20Nirwana%20Waterpark%20%26%20Cottages.jpg"
    },
    {
        "id": 251,
        "category_id": 4,
        "name": "Taman Lansia",
        "description": "Berlibur santai di akhir pekan cocok dilakukan dengan menghabiskan waktu di taman. Salah satu taman yang dapat menjadi tujuan wisata adalah Taman Lansia Bandung. Lansia merupakan singkatan da",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9021326,
        "lng": 107.6209387,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Lansia-not-found.jpg"
    },
    {
        "id": 252,
        "category_id": 4,
        "name": "Kampoeng Tulip",
        "description": "Kampoeng Tulip ialah salah satu objek wisata di Bandung yang lokasinya dipenuhi dengan bunga-bunga tulip yang sangat indah. Tulip sendiri adalah bunga cantik yang identik dengan Negara Kincir",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.963162,
        "lng": 107.66195,
        "rating": 3.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampoeng%20Tulip.jpg"
    },
    {
        "id": 253,
        "category_id": 4,
        "name": "Selasar Sunaryo Art Space",
        "description": "Selasar Sunaryo Art Space (SSAS) adalah sebuah ruang dan organisasi nirlaba yang bertujuan mendukung pengembangan praktik dan pengkajian seni dan kebudayaan visual di Indonesia. Dididirikan p",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.8585406,
        "lng": 107.6365486,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Selasar%20Sunaryo%20Art%20Space.jpg"
    },
    {
        "id": 254,
        "category_id": 4,
        "name": "Teras Cikapundung BBWS",
        "description": "Teras Cikapundung Bandung sebelumnya merupakan daerah yang kumuh dan tak terurus yang berhasil diubah menjadi tempat wisata. Cikapundung adalah sungai yang membelah Kota Bandung yang dimulai ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8844199,
        "lng": 107.6068344,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Teras%20Cikapundung%20BBWS.jpg"
    },
    {
        "id": 255,
        "category_id": 2,
        "name": "Museum Barli",
        "description": "Museum Barli adalah sebuah museum yang terletak di Kota Bandung. Museum ini didedikasikan untuk mengenang dan memamerkan hasil karya pelukis Barli Sasmitawinata. Museum ini didirikan pada tah",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.8782387,
        "lng": 107.5875349,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Barli.jpg"
    },
    {
        "id": 256,
        "category_id": 3,
        "name": "Wisata Batu Kuda",
        "description": "Kawasan Batu Kuda berupa perbukitan dengan hutan pinus yang indah. Berada di ketinggian antara 1150 sampai dengan 1300 mdpl, segarnya pegunungan Bandung bisa anda dapatkan disini. Batu Kuda b",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8936106,
        "lng": 107.7447399,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Batu%20Kuda.jpg"
    },
    {
        "id": 257,
        "category_id": 2,
        "name": "Monumen Bandung Lautan Api",
        "description": "Monumen Bandung Lautan Api, merupakan monumen yang menjadi markah tanah Bandung. Monumen ini setinggi 45 meter, memiliki sisi sebanyak 9 bidang.\\nMonumen ini dibangun untuk memperingati peris",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9338497,
        "lng": 107.604925,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Bandung%20Lautan%20Api.jpg"
    },
    {
        "id": 258,
        "category_id": 2,
        "name": "Museum Gedung Sate",
        "description": "Salah satu museum yang menjadi ikon kota ini adalah Museum Gedung Sate. Museum yang berada di gedung yang sama dengan kantor dinas Gubernur Jawa Barat ini dibangun pada masa kolonial oleh ars",
        "city": "Bandung",
        "price": 5000,
        "lat": -6.9026379,
        "lng": 107.619169,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Gedung%20Sate.jpg"
    },
    {
        "id": 259,
        "category_id": 2,
        "name": "Monumen Perjuangan Rakyat Jawa Barat",
        "description": "Monumen Perjuangan Rakyat Jawa Barat (Monju) adalah Museum Sejarah Perjuangan Rakyat Jawa Barat, di Tatar Pasundan atau Parahyangan. Monumen diresmikan oleh Gubernur Jawa Barat, Raden Nana Nu",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8934327,
        "lng": 107.6185513,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Perjuangan%20Rakyat%20Jawa%20Barat.jpg"
    },
    {
        "id": 260,
        "category_id": 2,
        "name": "Museum Pos Indonesia",
        "description": "Museum Pos Indonesia telah ada sejak masa Hindia Belanda dengan nama Pos Telegraph dan Telepon (PTT). Pada tahun 1931 telah dibuka Museum PTT yang terletak di bagian sayap kanan bawah Gedung ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.902013,
        "lng": 107.6197787,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Pos%20Indonesia.jpg"
    },
    {
        "id": 261,
        "category_id": 3,
        "name": "Ciwangun Indah Camp Official",
        "description": "Ciwangun Indah Camp atau CIC adalah sebuah tempat rekreasi berkonsep petualangan alam dan outbound. Tempat ini terletak di kecamatan Parongpong Kabupaten Bandung Barat, bersebelahan dengan du",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.786939,
        "lng": 107.5837331,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Ciwangun%20Indah%20Camp%20Official.jpg"
    },
    {
        "id": 262,
        "category_id": 3,
        "name": "Wot Batu",
        "description": "Wot Batu adalah sebuah konfigurasi energi yang hadir dari perjalanan spiritualitas dan transendental Sunaryo. Dalam ruang terbuka seluas ±2000 m2 dengan rangkaian 135 +1, batu-batu ditanam da",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.8597013,
        "lng": 107.6360983,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Wot%20Batu.jpg"
    },
    {
        "id": 263,
        "category_id": 3,
        "name": "Curug Batu Templek",
        "description": "Curug Batu Templek Bandung adalah sebuah wisata alam air terjun yang terletak di Kota Bandung Timur. Dari sekian banyak wisata alam air terjun di Bandung, Curug Batu Templek tak kalah menarik",
        "city": "Bandung",
        "price": 5000,
        "lat": -6.8743633,
        "lng": 107.6844023,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Batu%20Templek.jpg"
    },
    {
        "id": 264,
        "category_id": 6,
        "name": "Gereja Katedral Santo Petrus Bandung",
        "description": "Gereja Katedral Bandung, atau Katedral Santo Petrus, adalah sebuah gereja yang terletak di Jalan Merdeka, Babakanciamis, Sumurbandung, Bandung, Indonesia. Bangunan ini dirancang oleh Charles ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9148394,
        "lng": 107.6105511,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Perawan%20Maria%20Tak%20Berdosa%20Surabaya.jpg"
    },
    {
        "id": 265,
        "category_id": 2,
        "name": "Museum Mandala Wangsit Siliwangi",
        "description": "Museum Wangsit Mandala Siliwangi adalah museum militer yang berada di Kota Bandung, Jawa Barat. Siliwangi merupakan nama komando daerah militer TNI-AD di Jawa Barat dan Banten yang namanya di",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9173405,
        "lng": 107.6112627,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Mandala%20Wangsit%20Siliwangi.jpg"
    },
    {
        "id": 266,
        "category_id": 3,
        "name": "Caringin Tilu",
        "description": "Bandung tidak pernah kehilangan pesonanya, wisata alamnya selalu membius wisatawan untuk berkunjung. Caringin Tilu salah satunya, wisata dengan pemandangan alam yang indah. Pemandangan Kota B",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8580464,
        "lng": 107.6647084,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Caringin%20Tilu.jpg"
    },
    {
        "id": 267,
        "category_id": 4,
        "name": "Panama Park 825",
        "description": "Panama Park Bandung menjadi salah satu tempat bermain di Bandung, Jawa Barat. Wahana rekreasi yang disebut-sebut terbesar di Bandung ini dibuka sejak Mei 2019 lalu. Ada beberapa permainan yan",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.9119768,
        "lng": 107.569674,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Panama%20Park%20825.jpg"
    },
    {
        "id": 268,
        "category_id": 4,
        "name": "Sudut Pandang Bandung",
        "description": "Sudut Pandang Cafe Bandung merupakan sebuah destinasi wisata baru di kawasan Pluncut. Sudut Pandang Cafe Bandung ini sendiri tepatnya berada di kawasan Sarae Hills di Jalan Pagermaneuh, RT 05",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.8423638,
        "lng": 107.6232403,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Sudut%20Pandang%20Bandung.jpg"
    },
    {
        "id": 269,
        "category_id": 3,
        "name": "Bumi Perkemahan Batu Kuda",
        "description": "Bumi Perkemahan Batu Kuda ini terletak di Desa Cibiru Wetan, Kecamatan Cileunyi, Kabupaten Bandung, tepatnya berada di kaki gunung Manglayang. Area Batu Kuda sendiri cukup terkenal di kalanga",
        "city": "Bandung",
        "price": 7500,
        "lat": -6.8932173,
        "lng": 107.7448856,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Bumi%20Perkemahan%20Batu%20Kuda.jpg"
    },
    {
        "id": 270,
        "category_id": 3,
        "name": "Bukit Bintang",
        "description": "Bukit Bintang (Melayu [bu.ket̚ bi.ntaŋ]; disebut dengan nama Bintang Walk atau Starhill, yang terakhir menjadi terjemahan dari nama Melayu) adalah nama dari distrik perbelanjaan dan hiburan d",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.8417795,
        "lng": 107.6768585,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Bintang%20Yogyakarta.jpg"
    },
    {
        "id": 271,
        "category_id": 4,
        "name": "Taman Vanda",
        "description": "Taman Vanda Bandung adalah taman yang terletak di Kota Bandung, Jawa Barat. Taman ini memiliki latar belakang pemandangan air mancur pada malam hari. Pada malam hari dipasang air mancur di 20",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9140478,
        "lng": 107.6101684,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Vanda.jpg"
    },
    {
        "id": 272,
        "category_id": 2,
        "name": "Taman Budaya Jawa Barat",
        "description": "Taman Budaya Jawa Barat (TBJB) didirikan pada tahun 1991 di Kawasan Dago Tea House. TBJB memiliki fasilitas gedung teater tertutup, teater terbuka, ruang pameran, sekertariat, sanggar olah se",
        "city": "Bandung",
        "price": 0,
        "lat": -6.870099,
        "lng": 107.6164386,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Budaya%20Jawa%20Barat.jpg"
    },
    {
        "id": 273,
        "category_id": 3,
        "name": "Curug Bugbrug",
        "description": "Curug Bugbrug Sesuai dengan namanya kata Bugbrug dalam bahasa sunda adalah berarti bertumpuk atau tumpah tindih. Jadi apabila Anda ditanya kenapa air terjun di bandung ini dinamai Curug Bugbr",
        "city": "Bandung",
        "price": 7500,
        "lat": -6.790389,
        "lng": 107.5777632,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Bugbrug.jpg"
    },
    {
        "id": 274,
        "category_id": 3,
        "name": "Babakan Siliwangi City Forest Path Bandung",
        "description": "Forest walk Babakan Siliwangi adalah fasilitas publik berupa hutan kota. Hutan ini merupakan hutan kota yang masih aktif di kota Bandung hingga kini. Letaknya strategis berada di kawasan tama",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8853746,
        "lng": 107.6111899,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Babakan%20Siliwangi%20City%20Forest%20Path%20Bandung.jpg"
    },
    {
        "id": 275,
        "category_id": 3,
        "name": "Curug Cipanas",
        "description": "Siapa bilang berendam air panas harus merogoh kocek dalam? Kabupaten Bandung Barat punya solusi bagi pelancong yang ingin merasakan manfaat air panas pegunungan asli tanpa harus membayar maha",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.7991958,
        "lng": 107.5922088,
        "rating": 3.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Cipanas.jpg"
    },
    {
        "id": 276,
        "category_id": 4,
        "name": "Taman Jomblo",
        "description": "Taman Jomblo dapat mengacu kepada:\\n\\nTaman Pasupati, sebuah taman yang didirikan oleh Ridwan Kamil di Bandung\\nPedestrian Jomblo, sebuah tempat rekreasi yang didirikan di Jambi\\nTaman Jomblo",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8980549,
        "lng": 107.6094673,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Jomblo.jpg"
    },
    {
        "id": 277,
        "category_id": 4,
        "name": "Peta Park",
        "description": "Bandung seperti tidak henti menawarkan tempat wisata menarik untuk dikunjungi. Terutama untuk para anak muda. Beberapa waktu lalu Peta Park Bandung dibuka. Tempat wisata yang menawarkan konse",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.9317951,
        "lng": 107.5883026,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Peta%20Park.jpg"
    },
    {
        "id": 278,
        "category_id": 6,
        "name": "Masjid Daarut Tauhiid Bandung",
        "description": "pada bulan Juli 1993 berdirilah sebuah masjid berlantai tiga, tepatnya di Jalan Gegerkalong Girang nomor 38 Bandung. Masjid ini sering dijuluki sebagai masjid seribu tangan karena dibangun se",
        "city": "Bandung",
        "price": 0,
        "lat": -6.863527,
        "lng": 107.5899194,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Daarut%20Tauhiid%20Bandung.jpg"
    },
    {
        "id": 279,
        "category_id": 6,
        "name": "Masjid Agung Trans Studio Bandung",
        "description": "Masjid Agung Trans Studio Bandung (TSB) berdiri megah. Rumah ibadah seluas 4.000 meter persegi bergaya Timur Tengah ini menjadi oase di tengah-tengah pusat perbelanjaan dan tempat rekreasi. k",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9259635,
        "lng": 107.6354278,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Agung%20Trans%20Studio%20Bandung.jpg"
    },
    {
        "id": 280,
        "category_id": 6,
        "name": "Gereja Tiberias Indonesia Bandung",
        "description": "Gereja Tiberias Indonesia (GTI), atau Tiberias Ministry adalah salah satu sinode gereja Kristen Protestan di Indonesia. Salah satu ciri khas dari pelayanan GTI adalah pelayanan Kesembuhan Ila",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9347698,
        "lng": 107.6253513,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Glamping%20Lakeside%20Rancabali.jpg"
    },
    {
        "id": 281,
        "category_id": 4,
        "name": "Tektona Waterpark",
        "description": "Tektona Waterpark sebuah wahana yang memberikan sensasi bermain air bersama keluarga dan sahabat anda, memberikan keceriaan bagi anak-anak maupun pengunjung dewasa dengan fasilitas modern dia",
        "city": "Bandung",
        "price": 60000,
        "lat": -7.0096022,
        "lng": 107.6062161,
        "rating": 3.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Tektona%20Waterpark.jpg"
    },
    {
        "id": 282,
        "category_id": 3,
        "name": "Curug Cilengkrang",
        "description": "Curug Cilengkrang bisa menjadi pilihan tujuan objek wisata alam di Bandung. Menawarkan area hutan sejuk serta area air terjun yang menyegarkan. Meski tidak besar, kawasan air terjun cukup bis",
        "city": "Bandung",
        "price": 7500,
        "lat": -6.8908877,
        "lng": 107.7307085,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Cilengkrang.jpg"
    },
    {
        "id": 283,
        "category_id": 4,
        "name": "Jembatan Pasupati",
        "description": "Jembatan Pasupati atau Jalan Layang Pasupati adalah sebuah jembatan yang menghubungkan bagian utara dan timur Kota Bandung melewati lembah Cikapundung. Panjangnya 2,8 km dan lebarnya 30-60 m.",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9000987,
        "lng": 107.6046708,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Jembatan%20Pasupati.jpg"
    },
    {
        "id": 284,
        "category_id": 5,
        "name": "Pasar Baru",
        "description": "Pasar Baru adalah kawasan perdagangan yang berpusat di Jalan Pasar Baru, Kelurahan Pasar Baru, Kecamatan Sawah Besar, Jakarta Pusat. Pusat perbelanjaan ini didirikan pada tahun 1820, dan meru",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9177044,
        "lng": 107.6036014,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pasar%20Baru.jpg"
    },
    {
        "id": 285,
        "category_id": 2,
        "name": "Taman Sejarah Bandung",
        "description": "Taman Sejarah Bandung adalah taman yang terletak di belakang Balai Kota Bandung, kompleks Pemerintahan Kota Bandung. Taman ini berfungsi untuk mengenalkan sejarah di Kota Bandung. Taman ini d",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9103086,
        "lng": 107.6098619,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Sejarah%20Bandung.jpg"
    },
    {
        "id": 286,
        "category_id": 2,
        "name": "Roemah Seni Sarasvati",
        "description": "Roemah Seni Sarasvati adalah sebuah galeri yang berlokasi di Jl. Jendral Sudirman 137, Bandung. RSS merupakan project utama Sarasvati Arts Management yang dibangun dengan tujuan untuk memperk",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9204173,
        "lng": 107.5996425,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Roemah%20Seni%20Sarasvati.jpg"
    },
    {
        "id": 287,
        "category_id": 4,
        "name": "Puspa Iptek Sundial",
        "description": "Puspa Iptek Sundial adalah wahana pendidikan yang terletak di kawasan Kota Baru Parahyangan, Padalarang, Bandung, Jawa Barat. Puspa Iptek Sundial diresmikan pada tanggal 11 Mei 2002, bertepat",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.852208,
        "lng": 107.493882,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Puspa%20Iptek%20Sundial.jpg"
    },
    {
        "id": 288,
        "category_id": 6,
        "name": "Masjid Salman ITB",
        "description": "Masjid Salman ITB adalah masjid kampus yang terletak di Jalan Ganesha 7, Lebak Siliwangi, Coblong, Kota Bandung atau tepat di depan area Kampus ITB Ganesha. Dengan luas lahan 7800 m2 dan luas",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8936643,
        "lng": 107.611271,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Salman%20ITB.jpg"
    },
    {
        "id": 289,
        "category_id": 3,
        "name": "Curug Aseupan",
        "description": "Curug Aseupan berada di kawasan Curug Tilu Leuwi Opat. Curug ini merupakan bintang utama dari beberapa curug di sini. Jika diceritakan, kecantikannya bisa lah buat mengisi galeri dan feed ins",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.7875652,
        "lng": 107.5822844,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Aseupan.jpg"
    },
    {
        "id": 290,
        "category_id": 2,
        "name": "Museum Pendidikan Nasional",
        "description": "Museum Pendidikan Nasional Universitas Pendidikan Indonesia diresmikan oleh Gubernur Jawa Barat, H. Ahmad Heryawan, Lc. Pembangunan Museum Pendidikan Nasional ini merupakan salah satu bentuk ",
        "city": "Bandung",
        "price": 5000,
        "lat": -6.8597474,
        "lng": 107.5941693,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Pendidikan%20Nasional.jpg"
    },
    {
        "id": 291,
        "category_id": 4,
        "name": "Water Park Bandung Indah",
        "description": "Bandung Indah Waterpark merupakan salah satu kolam renang yang ada di Bandung. Menyediakan berbagai wahana permainan air yang cocok bagi keluarga. Terdapat kolam renang untuk dewasa dan anak-",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.9805807,
        "lng": 107.5856567,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Water%20Park%20Bandung%20Indah.jpg"
    },
    {
        "id": 292,
        "category_id": 3,
        "name": "Curug Anom",
        "description": "Curug Anom adalah sebuah air terjun yang memiliki dinding batu atau tebing berbentuk flat, sehingga sekilas terlihat seperti tembok, padahal ini nyata tebing batu yang memiliki permukaan rata",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8116009,
        "lng": 107.5695213,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Anom.jpg"
    },
    {
        "id": 293,
        "category_id": 4,
        "name": "Taman Badak",
        "description": "Taman Badak ini baru saja diresmikan pada tanggan 19 Desember 2017 oleh Bapak Ridwan Kamil sebagai Wali Kota Bandung. Terdapat Patung Badak yang berusia puluhan tahun di taman ini yang menjad",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9132752,
        "lng": 107.6094908,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Badak.jpg"
    },
    {
        "id": 294,
        "category_id": 2,
        "name": "Taman Film",
        "description": "Taman Film adalah salah satu taman tematik dan ruang terbuka publik di Kota Bandung yang terletak di bawah Jembatan Pasupati, Bandung, Jawa Barat. Taman ini diresmikan oleh Wali kota Bandung,",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8986869,
        "lng": 107.6077451,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Film.jpg"
    },
    {
        "id": 295,
        "category_id": 2,
        "name": "Museum Nike Ardilla",
        "description": "Museum Nike Ardilla diresmikan atau dibuka untuk umum tepat di hari dimana almarhumah Nike Ardilla jika masih hidup berusia 21 tahun. Diresmikan langsung sendiri oleh pihak keluarga yaitu aya",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9406015,
        "lng": 107.6725445,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Nike%20Ardilla.jpg"
    },
    {
        "id": 296,
        "category_id": 4,
        "name": "Batununggal Indah Club",
        "description": "Kolam renang Batununggal merupakan salah satu kolam renang yang digemari warga Bandung saat liburan. Kolam renang berada di kawasan komplek perumahan Batununggal Insah Estate. Buat kamu yang ",
        "city": "Bandung",
        "price": 70000,
        "lat": -6.96323,
        "lng": 107.626416,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Batununggal%20Indah%20Club.jpg"
    },
    {
        "id": 297,
        "category_id": 3,
        "name": "Mountain View Golf Club",
        "description": "Selamat Datang di Mountain View Golf Club Dago Pakar Bandung. Golf Course dengan 72 par, 18 hole telah dirancang oleh Juara dunia 5 kali asal Inggris Peter Thompson dan tentu saja achitect te",
        "city": "Bandung",
        "price": 375000,
        "lat": -6.8629384,
        "lng": 107.6482191,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Mountain%20View%20Golf%20Club.jpg"
    },
    {
        "id": 298,
        "category_id": 3,
        "name": "Gunung Lalakon",
        "description": "Gunung Lalakon merupakan sebuah gunung yang terdapat di Kampung Jelegong, Desa Badaraksa, Kecamatan Kutawaringin, Kabupaten Bandung, Jawa Barat dan memiliki ketinggian 870 meter. Gunung Lalak",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9580556,
        "lng": 107.5205556,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gunung%20Lalakon.jpg"
    },
    {
        "id": 299,
        "category_id": 3,
        "name": "Sendang Geulis Kahuripan",
        "description": "Wilayah ini lebih tepatnya berada di RPH Cikalong Wetan, BKPH Padalarang Perum Perhutani BKPH Bandung Utara. Dilihat dari kawasannya, mengingatkan saya kepada salah satu objek wisata yang ber",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.7495268,
        "lng": 107.478658,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Sendang%20Geulis%20Kahuripan.jpg"
    },
    {
        "id": 300,
        "category_id": 3,
        "name": "Sanghyang Heuleut",
        "description": "Danau yang satu ini memiliki air jernih bernuansa kehijauan yang berpadu indah dengan tebing batu berukuran besar di sekelilingnya. Di sela-sela bebatuan, kamu bisa menemukan pepohonan dan re",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8765131,
        "lng": 107.3422183,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Sanghyang%20Heuleut.jpg"
    },
    {
        "id": 301,
        "category_id": 3,
        "name": "Lereng Anteng Panoramic Coffee Place",
        "description": "Lereng Anteng Panoramic Coffee adalah sebuah tempat tongkrongan asyik berupa cafe and resto dengan perpaduan antara kafe dan spot wisata alam. Tempat makan satu ini dibuka sejak tanggal 1 Jun",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.842535,
        "lng": 107.622698,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Lereng%20Anteng%20Panoramic%20Coffee%20Place.jpg"
    },
    {
        "id": 302,
        "category_id": 6,
        "name": "Masjid Pusdai",
        "description": "Masjid PUSDAI (pusat dakwah islam) dibangun dalam arsitektur asli di Indonesia, dengan bentuk bentuk yang khas atap Limas. Aplikasikan pada semua atap bangunannya dengan dipadu berbagia gaya ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9000672,
        "lng": 107.62587,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Pusdai.jpg"
    },
    {
        "id": 303,
        "category_id": 6,
        "name": "Masjid Al-Imtizaj",
        "description": "Masjid Al Imtizaj adalah salah satu masjid yang bernuansa oriental dan arsitektur bercorak negeri tirai bambu yang berada di Kota Bandung. Letak masjid ini lebih tepatnya berada di Jalan Banc",
        "city": "Bandung",
        "price": 0,
        "lat": -6.919425,
        "lng": 107.6078639,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Al-Imtizaj-not-found.jpg"
    },
    {
        "id": 304,
        "category_id": 3,
        "name": "Situ Cileunca",
        "description": "Situ Cileunca yang berlokasi di Warnasari, Pangalengan, Bandung, Jawa Barat adalah sebuah danau buatan dengan luas mencapai 1.400 hektar dengan latar belakang perbukitan dan pegunungan yang i",
        "city": "Bandung",
        "price": 2500,
        "lat": -7.1923281,
        "lng": 107.5510012,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Situ%20Cileunca.jpg"
    },
    {
        "id": 305,
        "category_id": 3,
        "name": "Sunrise Point Cukul",
        "description": "Sunrise Point Cukul merupakan salah satu tempat wisata populer bagi wisatawan untuk melihat matahari terbit di kawasan Bandung Selatan. Mereka bisa melihat sunrise dari ketinggian 1.600 meter",
        "city": "Bandung",
        "price": 10000,
        "lat": -7.233689,
        "lng": 107.5342933,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Sunrise%20Point%20Cukul.jpg"
    },
    {
        "id": 306,
        "category_id": 3,
        "name": "Sungai Palayangan",
        "description": "Sungai Palayangan terletak di Kawasan Objek Wisata Situ Cileunca Pangalengan Kab. Bandung, sekitar 45 Km atau kurang lebih 2 jam perjalanan dari pusat Kota Bandung. Adalah lokasi Arung Jeram ",
        "city": "Bandung",
        "price": 150000,
        "lat": -7.1965023,
        "lng": 107.5454594,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Sungai%20Palayangan.jpg"
    },
    {
        "id": 307,
        "category_id": 3,
        "name": "Perkebunan Teh Malabar",
        "description": "Salah satu perkebunan teh yang cukup terkenal di Jawa Barat adalah perkebunan teh Malabar yang dibangun pada masa penjajahan kolonial Belanda tahun 1896. Perkebunan ini masuk dalam wilayah ke",
        "city": "Bandung",
        "price": 5000,
        "lat": -7.2274463,
        "lng": 107.6050805,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Perkebunan%20Teh%20Malabar.jpg"
    },
    {
        "id": 308,
        "category_id": 3,
        "name": "Pemandian Air Panas Ciater",
        "description": "Di Subang, terdapat kawasan pemandian Air Panas Ciater yang sering menjadi incaran wisatawan. Kawasan wisata yang buka 24 jam ini memiliki suhu air sekitar 43-46 derajat celcius. Sangat cocok",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.7380853,
        "lng": 107.6566092,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Pemandian%20Air%20Panas%20Ciater.jpg"
    },
    {
        "id": 309,
        "category_id": 3,
        "name": "Observatorium Bosscha",
        "description": "Observatorium Bosscha merupakan salah satu tempat peneropongan bintang tertua di Indonesia. Observatorium Bosscha (dahulu bernama Bosscha Sterrenwacht) dibangun oleh Nederlandsch-Indische Ste",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.8246311,
        "lng": 107.6171106,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Observatorium%20Bosscha.jpg"
    },
    {
        "id": 310,
        "category_id": 3,
        "name": "Taman Bunga Cihideung",
        "description": "Taman Bunga Cihideung mempunyai pesona alam yang sederhana namun mampu menghasilkan landscape yang menyita perhatian. Pesona dari kebun / taman bunga ini padahal hanya sebatas tumbuhan sejeni",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8038883,
        "lng": 107.5866313,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Bunga%20Cihideung.jpg"
    },
    {
        "id": 311,
        "category_id": 3,
        "name": "The Lodge Maribaya",
        "description": "The Lodge Maribaya adalah salah satu tempat wisata di Lembang yang menawarkan berbagai hal pada pengunjung. Disini kita bisa melakukan berbagai akitivitas seperti camping, trekking mengelilin",
        "city": "Bandung",
        "price": 25000,
        "lat": -6.8294112,
        "lng": 107.6874666,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/The%20Lodge%20Maribaya.jpg"
    },
    {
        "id": 312,
        "category_id": 3,
        "name": "Taman Hutan Raya Ir. H. Juanda",
        "description": "Taman Hutan Raya Ir. H. Djuanda (Tahura Djuanda) merupakan kawasan konservasi yang terpadu antara alam sekunder dengan hutan tanaman dengan jenis Pinus (Pinus merkusil) yang terletak di Sub-D",
        "city": "Bandung",
        "price": 11000,
        "lat": -6.8585841,
        "lng": 107.6306089,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Hutan%20Raya%20Ir.%20H.%20Juanda.jpg"
    },
    {
        "id": 313,
        "category_id": 3,
        "name": "Taman Begonia",
        "description": "Taman Begonia Bandung terletak pada ketinggian 1200 meter di atas laut. Selain balinea, ada beraneka jenis bunga lainnya seperti salvia, impatiens, geranium, dan celosia. Saking indahnya bany",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8260163,
        "lng": 107.6383564,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Begonia.jpg"
    },
    {
        "id": 314,
        "category_id": 3,
        "name": "Tafso Barn",
        "description": "Nama Punclut mungkin sudah cukup akrab di telinga wisatawan. Kawasan dataran tinggi di Bandung yang belakangan populer sebagai destinasi wisata. Selain menawarkan pemandangan yang indah, kawa",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8426446,
        "lng": 107.6228408,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Tafso%20Barn.jpg"
    },
    {
        "id": 315,
        "category_id": 3,
        "name": "Curug Luhur Waterfall",
        "description": "Sekitaran Bandung banyak sekali curug dari yang kekinian, terlupakan, kurang terdengar sampai baru dengar. Salah satunya adalah curug Luhur Cibodas di daerah Maribaya Lembang di sekitar area ",
        "city": "Bandung",
        "price": 5000,
        "lat": -6.8131767,
        "lng": 107.7136367,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Luhur%20Waterfall.jpg"
    },
    {
        "id": 316,
        "category_id": 3,
        "name": "Curug Malela",
        "description": "Curug Malela adalah salah satu destinasi alam yang berupa air terjun. Curug ini memilliki keindahan yang luar biasa. Jadi tak heran banyak para pengunjung yang datang untuk mengunjungi curug ",
        "city": "Bandung",
        "price": 10000,
        "lat": -7.0182386,
        "lng": 107.2072145,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Malela.jpg"
    },
    {
        "id": 317,
        "category_id": 3,
        "name": "Curug Cimahi",
        "description": "Curug Cimahi adalah air terjun yang terletak di Jalan Kolonel Masturi, Desa Kertawangi, Kecamatan Cisarua, Kabupaten Bandung Barat, Jawa Barat. Dengan ketinggian sekitar 87 meter, menjadikan ",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.7977383,
        "lng": 107.5783691,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Curug%20Cimahi.jpg"
    },
    {
        "id": 318,
        "category_id": 3,
        "name": "Situ Patenggang",
        "description": "Situ Patenggang atau Situ Patengan adalah suatu danau yang terletak di kawasan objek wisata alam Bandung Selatan, Jawa Barat, Indonesia, tepatnya di Ciwidey. Terletak di ketinggian 1600 meter",
        "city": "Bandung",
        "price": 20000,
        "lat": -7.1669649,
        "lng": 107.3575344,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Situ%20Patenggang.jpg"
    },
    {
        "id": 319,
        "category_id": 3,
        "name": "Kawah Rengganis Cibuni",
        "description": "Kawasan Bandung Selatan khususnya Ciwidey memang sudah dikenal sebagai destinasi wisata alam dengan panorama yang indah dan udara yang sejuk, oleh karena itu masyarakat perkotaan memilih berw",
        "city": "Bandung",
        "price": 5000,
        "lat": -7.1724126,
        "lng": 107.3766656,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Kawah%20Rengganis%20Cibuni.jpg"
    },
    {
        "id": 320,
        "category_id": 3,
        "name": "Pemandian Air Panas Cimanggu",
        "description": "Air Panas Cimanggu menjadi salah satu objek wisata di Bandung yang menawarkan berbagai macam daya tarik yang dijamin mengagumkan. Tempat wisata yang satu ini juga dikenal dengan nama Cimanggu",
        "city": "Bandung",
        "price": 23000,
        "lat": -7.1471529,
        "lng": 107.3901424,
        "rating": 3.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Pemandian%20Air%20Panas%20Cimanggu.jpg"
    },
    {
        "id": 321,
        "category_id": 4,
        "name": "Glamping Lakeside Rancabali",
        "description": "Glamping Lakeside Rancabali menawarkan tempat berkemah mewah yang cocok untuk Anda jadikan destinasi liburan di akhir pekan. Seperti namanya, glamping atau glamour camping terdiri dari tenda ",
        "city": "Bandung",
        "price": 30000,
        "lat": -7.1675908,
        "lng": 107.3532419,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Goa%20Cerme.jpg"
    },
    {
        "id": 322,
        "category_id": 3,
        "name": "Bukit Jamur",
        "description": "Bukit Jamur Ciwidey adalah satu dari sekian banyak pesona wisata alam yang berada di Kecamatan Ciwidey, Kabupaten Bandung, Provinsi Jawa barat. Bukit Jamur Ciwidey memang memiliki khas wisata",
        "city": "Bandung",
        "price": 0,
        "lat": -7.1951102,
        "lng": 107.4312811,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Jamur.jpg"
    },
    {
        "id": 323,
        "category_id": 3,
        "name": "Kebun Tanaman Obat Sari Alam",
        "description": "Kebun Tanaman Obat Sari Alam lebih terkenal dengan sebutan wisata pengobatan herbal, karena disana terdapat banyak sekali tanaman yang dijadikan sebagai pengobatan alternative. Kebun Tanaman ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.601321,
        "lng": 106.632734,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Tanaman%20Obat%20Sari%20Alam.jpg"
    },
    {
        "id": 324,
        "category_id": 3,
        "name": "Happyfarm Ciwidey",
        "description": "Objek wisata alam dan edukasi tengah banyak menjamur akhir-akhir ini. Selain De Ranch dan Farmhouse Lembang, ada juga Happy Farm Ciwidey di Bandung. Objek wisata ini masih terbilang baru, kar",
        "city": "Bandung",
        "price": 15000,
        "lat": -7.1147877,
        "lng": 107.4380865,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Happyfarm%20Ciwidey.jpg"
    },
    {
        "id": 325,
        "category_id": 2,
        "name": "Saung Angklung Mang Udjo",
        "description": "Saung Angklung Udjo (SAU) adalah suatu tempat yang merupakan tempat pertunjukan, pusat kerajinan tangan dari bambu, dan workshop instrumen musik dari bambu. Selain itu, SAU mempunyai tujuan s",
        "city": "Bandung",
        "price": 75000,
        "lat": -6.8971362,
        "lng": 107.6558466,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Saung%20Angklung%20Mang%20Udjo.jpg"
    },
    {
        "id": 326,
        "category_id": 3,
        "name": "Taman Kupu-Kupu Cihanjuang",
        "description": "Taman Kupu-Kupu Cihanjuang Bandung ini,sepertinya telah menambah daftar objek wisata di Bandung yang unik dan menarik seperti halnya theme park Jendela Alam Bandung sekaligus bernilai edukasi",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8590047,
        "lng": 107.568779,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Kupu-Kupu%20Cihanjuang.jpg"
    },
    {
        "id": 327,
        "category_id": 4,
        "name": "Taman Miniatur Kereta Api",
        "description": "Salah satu wisata yang ramai di Bandung adalah Taman Miniatur Kereta Api yang berada di taman wisata Floating Market Lembang. Dengan menghadirkan pernak-pernik kereta api secara lengkap dan s",
        "city": "Bandung",
        "price": 15000,
        "lat": -6.817327,
        "lng": 107.61794,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Miniatur%20Kereta%20Api.jpg"
    },
    {
        "id": 328,
        "category_id": 3,
        "name": "Gua Pawon",
        "description": "Gua Pawon adalah sebuah gua alami dan situs purbakala yang terletak di Desa Gunung Masigit, Kecamatan Cipatat, Padalarang, Kabupaten Bandung Barat, atau sekitar 25 km arah barat Kota Bandung.",
        "city": "Bandung",
        "price": 10000,
        "lat": -6.8231833,
        "lng": 107.4371655,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Gua%20Pawon.jpg"
    },
    {
        "id": 329,
        "category_id": 3,
        "name": "Bukit Gantole Cililin",
        "description": "Bukit Gantole Cililin atau yang dikenal juga dengan sebutan Venue Gantole merupakan sebuah kawasan wisata yang awalnya di buka untuk tujuan terselenggaranya Porda Jabar 2010 dan Pekan Olahrag",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9588812,
        "lng": 107.4713147,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Bukit%20Gantole%20Cililin.jpg"
    },
    {
        "id": 330,
        "category_id": 2,
        "name": "Bandros City Tour",
        "description": "Bandros atau Bus Wisata Bandung adalah bus wisata yang beroperasi di Bandung, Jawa Barat, Indonesia.Digunakan oleh wisatawan di Kota Bandung. Bus tersebut diresmikan oleh Wali Kota Bandung Ri",
        "city": "Bandung",
        "price": 40000,
        "lat": -6.9220816,
        "lng": 107.6073182,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Bandros%20City%20Tour.jpg"
    },
    {
        "id": 331,
        "category_id": 2,
        "name": "Kyotoku Floating Market",
        "description": "Kyotoku Floating Market Bandung, sebuah wisata kekinian yang mengusung tema hal-hal yang berbau Jepang. Di tempat ini anda akan melihat bangunan-bangunan khas Jepang serta pemandangan bak di ",
        "city": "Bandung",
        "price": 175000,
        "lat": -6.819875,
        "lng": 107.618707,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kyotoku%20Floating%20Market.jpg"
    },
    {
        "id": 332,
        "category_id": 3,
        "name": "Rainbow Garden",
        "description": "Rainbow Garden Harapan Indah salah satu taman rekreasi yang terutama cocok untuk keluarga. Berkonsep ‘eat and play’, Rainbow Garden Bekasi memadukan arena permainan anak dengan wisata kuliner",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.8179514,
        "lng": 107.618914,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Rainbow%20Garden.jpg"
    },
    {
        "id": 333,
        "category_id": 4,
        "name": "Kota Mini",
        "description": "Destinasi yang sangat menarik bernuansa eropa lengkap dengan fasilitas publiknya membuat anda seolah-olah sedang berada di eropa. Ada rumah sakit, kantor polisi, box telepon, cafe-café pinggi",
        "city": "Bandung",
        "price": 20000,
        "lat": -6.8186888,
        "lng": 107.6169403,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kota%20Mini.jpg"
    },
    {
        "id": 334,
        "category_id": 4,
        "name": "Chingu Cafe Little Seoul",
        "description": "Selain populer karena memiliki pemandangan yang indah dan hawa yang sejuk, Bandung juga menawarkan banyak destinasi wisata kreatif. Taman kota, museum, hingga tempat makan pun tidak luput dar",
        "city": "Bandung",
        "price": 50000,
        "lat": -6.9012241,
        "lng": 107.6099853,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Chingu%20Cafe%20Little%20Seoul.jpg"
    },
    {
        "id": 335,
        "category_id": 2,
        "name": "Candi Gedong Songo",
        "description": "Candi Gedong Songo (bahasa Jawa: ꦕꦤ꧀ꦝꦶ​ꦒꦼꦝꦺꦴꦁ​ꦱꦔ, translit. Candhi Gedhong Sanga) adalah nama sebuah kompleks bangunan candi peninggalan budaya Hindu yang terletak di desa Candi, Kecamatan Ba",
        "city": "Semarang",
        "price": 10000,
        "lat": -7.2098867,
        "lng": 110.3421119,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Candi%20Gedong%20Songo.jpg"
    },
    {
        "id": 336,
        "category_id": 4,
        "name": "Grand Maerakaca",
        "description": "Masyarakat Jawa Tengah mungkin sudah tidak asing dengan nama “Puri Maerokoco”. Taman wisata ini merupakan “Taman Mini” versi Jawa Tengah yang menyajikan replika dan miniatur bangunan khas dar",
        "city": "Semarang",
        "price": 15000,
        "lat": -6.9605225,
        "lng": 110.3863941,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Grand%20Maerakaca.jpg"
    },
    {
        "id": 337,
        "category_id": 4,
        "name": "Kampung Pelangi",
        "description": "Kampung pelangi atau dalam bahasa Inggris disebut Rainbow Village merupakan sebutan untuk daerah atau kampung yang rumah-rumah penduduknya dicat dengan warna-warni. Sebenarnya Kampung Pelangi",
        "city": "Semarang",
        "price": 3000,
        "lat": -6.9888812,
        "lng": 110.4083781,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Pelangi.jpg"
    },
    {
        "id": 338,
        "category_id": 2,
        "name": "Lawang Sewu",
        "description": "Lawang Sewu (\"Seribu Pintu\") (bahasa Jawa: ꦭꦮꦁ​ꦱꦺꦮꦸ, translit. Lawang Sèwu) adalah landmark di Semarang, Jawa Tengah, Indonesia, yang dibangun sebagai kantor pusat Perusahaan Kereta Api Hindi",
        "city": "Semarang",
        "price": 10000,
        "lat": -6.9839099,
        "lng": 110.4104342,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Lawang%20Sewu.jpg"
    },
    {
        "id": 339,
        "category_id": 2,
        "name": "Sam Poo Kong Temple",
        "description": "Sam Poo Kong (Hanzi: ; Pinyin: Sānbǎo Dòng), juga dikenal sebagai Kuil Gedung Batu, adalah kuil Tionghoa tertua di Semarang, Jawa Tengah, Indonesia. Awalnya didirikan oleh penjelajah Muslim T",
        "city": "Semarang",
        "price": 35000,
        "lat": -6.9962366,
        "lng": 110.398122,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Sam%20Poo%20Kong%20Temple.jpg"
    },
    {
        "id": 340,
        "category_id": 4,
        "name": "Desa Wisata Lembah Kalipancur",
        "description": "Wisata alam tengah menjadi sorotan bagi dunia pariwisata. Wisata alam tidak hanya pegunungan, danau, hutan, air terjun, atau pantai. Tapi juga merambah ke konsep pedesaan, seperti Desa Wisata",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0205245,
        "lng": 110.3754605,
        "rating": 3.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Desa%20Wisata%20Lembah%20Kalipancur.jpg"
    },
    {
        "id": 341,
        "category_id": 3,
        "name": "Hutan Wisata Tinjomoyo Semarang",
        "description": "Awalnya taman wisata hutan Tinjomoyo Semarang (smg) ini merupakan sebuah kebun binatang dengan ragam binatang hutan di dalamnya. Namun terjadi banjir besar, hingga memutuskan jembatan besar y",
        "city": "Semarang",
        "price": 3000,
        "lat": -7.0296837,
        "lng": 110.3999611,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Wisata%20Tinjomoyo%20Semarang.jpg"
    },
    {
        "id": 342,
        "category_id": 4,
        "name": "Taman Kasmaran",
        "description": "Taman Kasmaran terletak di sebelah kiri Pasar Bunga. Gedung food court dan Taman Kasmaran dibangun dua lantai. Lantai bawah utuk spot dijadikan wisata kuliner, sementara lantai atas menjadi t",
        "city": "Semarang",
        "price": 3000,
        "lat": -6.9909404,
        "lng": 110.4065932,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Kasmaran.jpg"
    },
    {
        "id": 343,
        "category_id": 1,
        "name": "Pantai Baruna",
        "description": "kunjungi Pantai Baruna yang berada di Kota Semarang, Jawa Tengah! Pantai yang satu ini akan memberikan pengalaman wisata yang berbeda. Pasalnya, di sini tidak ada hamparan pasir. Memang Panta",
        "city": "Semarang",
        "price": 3000,
        "lat": -6.9451052,
        "lng": 110.3982398,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Baruna.jpg"
    },
    {
        "id": 344,
        "category_id": 1,
        "name": "Pantai Marina",
        "description": "Pantai Marina (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ​ꦩꦫꦶꦤ, translit. Pasisir Marina) adalah salah satu objek wisata pantai yang berada di kota Semarang, Jawa Tengah. Pantai ini menyimpan pemandangan eksotis kh",
        "city": "Semarang",
        "price": 3000,
        "lat": -6.948877,
        "lng": 110.3893285,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Marina.jpg"
    },
    {
        "id": 345,
        "category_id": 2,
        "name": "Kampoeng Djadhoel Semarang",
        "description": "Kampoeng Djadhoel terletak di Kampung Batik Semarang tepatnya di Kampung Batik Tengah RT 04/ RW 02 Kelurahan Rejomulyo, Kecamatan Semarang Timur. Penamaan Kampoeng Djadhoel ini tercetus sejak",
        "city": "Semarang",
        "price": 10000,
        "lat": -6.9687731,
        "lng": 110.4319505,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampoeng%20Djadhoel%20Semarang.jpg"
    },
    {
        "id": 346,
        "category_id": 4,
        "name": "Indonesia Kaya Park",
        "description": "Lokasi Taman Indonesia Kaya yang berada di pusat kota Semarang, membuat taman seluas 5.000 meter persegi ini bisa difungsikan sebagai wadah berkesenian komunitas seniman Jawa Tengah. Di sini ",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9923507,
        "lng": 110.4201162,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Indonesia%20Kaya%20Park.jpg"
    },
    {
        "id": 347,
        "category_id": 4,
        "name": "Taman Pandanaran",
        "description": "Dalam sejarah yang tercatat, dulunya tempat ini merupakan kawasan SPBU yang tak begitu laku. Bekas SPBU tersebut dirombak total menjadi sebuah taman. Konon, luas tanah 600 meter persegi terse",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9877936,
        "lng": 110.4172262,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Pandanaran.jpg"
    },
    {
        "id": 348,
        "category_id": 2,
        "name": "Pura Giri Natha",
        "description": "Awal berdirinya Pura Agung Giri Natha tidak terlepas dari hadirnya pemeluk umat Hindu dari berbagai daerah yang mulai berdatangan dan menetap di Semarang. Sebelum menetap, umat Hindu yang ada",
        "city": "Semarang",
        "price": 20000,
        "lat": -6.9984759,
        "lng": 110.4106468,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Pura%20Giri%20Natha.jpg"
    },
    {
        "id": 349,
        "category_id": 3,
        "name": "Wisata Mangrove Tapak",
        "description": "Wisata hutan mangrove Semarang hampir tak pernah sepi dikunjungi wisatawan. Tak jarang pengunjung yang datang ke wisata cantik ini baik berswafoto maupun sekedar jalan-jalan menapaik selasar ",
        "city": "Semarang",
        "price": 5000,
        "lat": -6.9685618,
        "lng": 110.3459696,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Mangrove%20Tapak.jpg"
    },
    {
        "id": 350,
        "category_id": 1,
        "name": "Pantai Cipta",
        "description": "Pantai Cipta juga dikenal sebagai Pantai Petikemas, karena jarak dan letaknya dekat dengan Pantai Petikemas. Tempat wisata di semarang Pantai Cipta hanya memiliki sedikit hamparan pasir dan d",
        "city": "Semarang",
        "price": 5000,
        "lat": -6.9486402,
        "lng": 110.4102923,
        "rating": 4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Cipta.jpg"
    },
    {
        "id": 351,
        "category_id": 2,
        "name": "Old City 3D Trick Art Museum",
        "description": "Destinasi wisata kekinian satu ini memang tengah naik daun di banyak kota termasuk Semarang. Salah satunya Old City 3D Trick Art Museum, museum dengan tema Seni 3 Dimensi yang menyuguhkan sen",
        "city": "Semarang",
        "price": 50000,
        "lat": -6.9684064,
        "lng": 110.4261995,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Old%20City%203D%20Trick%20Art%20Museum.jpg"
    },
    {
        "id": 352,
        "category_id": 6,
        "name": "GPIB Immanuel Semarang (Gereja Blenduk)",
        "description": "GPIB Immanuel Semarang (populer dengan nama Gereja Blenduk, kadang-kadang dieja Gereja Blendug, dan sering kali dilafazkan sebagai mBlendhug) (bahasa Jawa: ꦒꦿꦺꦗ​ꦧ꧀ꦭꦼꦤ꧀ꦝꦸꦏ꧀, translit. Gréja Bl",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9683488,
        "lng": 110.4274767,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Galaxy%20Waterpark%20Jogja.jpg"
    },
    {
        "id": 353,
        "category_id": 4,
        "name": "Taman Srigunting",
        "description": "Merupakan salah satu landmark di Kawasan Kota Lama Semarang, Taman Srigunting pada masa kolonial belanda berwujud parade plein untuk panggung parade, kini menjadi sebuah ruang terbuka berupa ",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9681728,
        "lng": 110.4278262,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Srigunting.jpg"
    },
    {
        "id": 354,
        "category_id": 2,
        "name": "Semarang Contemporary Art Gallery",
        "description": "Salah satu wisata yang berbau seni di Semarang bisa kamu temukan di kawasan Kota Lama yakni Semarang Contemporary Art Gallery atau lebih mudahnya disebut sebagai Galsem yang berarti Galeri Se",
        "city": "Semarang",
        "price": 10000,
        "lat": -6.9675,
        "lng": 110.4282,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Semarang%20Contemporary%20Art%20Gallery.jpg"
    },
    {
        "id": 355,
        "category_id": 3,
        "name": "Umbul Sidomukti",
        "description": "Kawasan wisata umbul Sidomukti merupakan salah satu Wisata Alam Pegunungan di Semarang, berada di Desa Sidomukti Kecamatan Bandungan Kabupaten Semarang. Kawasan wisata ini dengan didukung fas",
        "city": "Semarang",
        "price": 75000,
        "lat": -7.1945903,
        "lng": 110.3733583,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Umbul%20Sidomukti.jpg"
    },
    {
        "id": 356,
        "category_id": 4,
        "name": "Saloka Theme Park",
        "description": "SALOKA hadir sebagai taman rekreasi terbesar di Tengah Jawa yang masuk dalam daftar destinasi wisata Pesona Indonesia, serta mengusung konsep kearifan lokal berdasarkan legenda rakyat Baru Kl",
        "city": "Semarang",
        "price": 150000,
        "lat": -7.2807262,
        "lng": 110.4595539,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Saloka%20Theme%20Park.jpg"
    },
    {
        "id": 357,
        "category_id": 3,
        "name": "Wisata Alam Wana Wisata Penggaron",
        "description": "Berada sekitar 2 KM dari Kota Ungaran atau sekitar 18 KM dari Kota Semarang, Kawasan Wana Wisata Penggaron secara administratif berada di Desa Susukan, Kecamatan Ungaran, Kabupaten semarang. ",
        "city": "Semarang",
        "price": 10000,
        "lat": -7.1157969,
        "lng": 110.4217966,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Alam%20Wana%20Wisata%20Penggaron.jpg"
    },
    {
        "id": 358,
        "category_id": 6,
        "name": "Masjid Kapal Semarang",
        "description": "Masjid Safinatun Najah atau pengunjung biasa menyebutnya dengan Masjid Kapal Semarang kini menjadi wisata religi yang ramai dikunjungi saat bulan Ramadan. Masjid yang berlokasi di berlokasi d",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0187782,
        "lng": 110.2937134,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Kapal%20Semarang.jpg"
    },
    {
        "id": 359,
        "category_id": 3,
        "name": "Taman Bunga Celosia",
        "description": "Wisata Semarang menawarkan berbagai tempat wisata menarik. Salah satunya yaitu berkunjung ke Taman Bunga Celosia Bandungan. Lokasinya berada di kaki Gunung Ungaran, Semarang. Menawarkan peman",
        "city": "Semarang",
        "price": 25000,
        "lat": -7.2255041,
        "lng": 110.3463166,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Bunga%20Celosia.jpg"
    },
    {
        "id": 360,
        "category_id": 3,
        "name": "Air Terjun Kali Pancur",
        "description": "Kali Pancur Getasan merupakan kawasan wisata alam Air Terjun Kali Pancur ini berada di Desa Nogosaren, Kecamatan Getasan, Kabupaten Semarang, sekitar 14 km sebelah barat Kota Salatiga. Untuk ",
        "city": "Semarang",
        "price": 5000,
        "lat": -7.3580963,
        "lng": 110.4210681,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Air%20Terjun%20Kali%20Pancur.jpg"
    },
    {
        "id": 361,
        "category_id": 4,
        "name": "Wisata Kampung Krisan Clapar",
        "description": "Wisata Kampung Krisan Gemah Ripah di Dusun Clapar Desa Duren Kecamatan Bandungan Kabupaten Semarang bisa jadi altenatif liburan. Di tempat ini terhampar kebun bunga warna warni yang memesona.",
        "city": "Semarang",
        "price": 10000,
        "lat": -7.2141582,
        "lng": 110.3769541,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Kampung%20Krisan%20Clapar.jpg"
    },
    {
        "id": 362,
        "category_id": 3,
        "name": "Danau Rawa Pening",
        "description": "Rawa Pening (pening adalah salah satu varian bahasa Jawa dari kata \"wening\" yang artinya hening, tenang, damai) (bahasa Jawa: ꦫꦮ​ꦥꦼꦤꦶꦁ, translit. Rawa Pening) adalah danau alam di Kabupaten S",
        "city": "Semarang",
        "price": 15000,
        "lat": -7.2854929,
        "lng": 110.4321671,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Danau%20Rawa%20Pening.jpg"
    },
    {
        "id": 363,
        "category_id": 1,
        "name": "Pantai Maron",
        "description": "Pantai Maron (bahasa Jawa: ꦥꦱꦶꦱꦶꦂ​ꦩꦫꦺꦴꦤ꧀, translit. Pasisir Maron) yang terletak di sebelah barat Semarang, tepatnya di sekitar muara Sungai Silandak ini, bisa ditempuh dari dua tempat, yaitu",
        "city": "Semarang",
        "price": 5000,
        "lat": -6.9545687,
        "lng": 110.3600951,
        "rating": 3.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Maron.jpg"
    },
    {
        "id": 364,
        "category_id": 4,
        "name": "Water Blaster Bukit Candi Golf",
        "description": "Buat kamu yang bingung mau rekreasi kemana di Semarang, langsung saja ke Water Blaster Semarang. Waterpark yang menyediakan banyak permainan dan atraksi seru yang semuanya layak untuk dicoba.",
        "city": "Semarang",
        "price": 80000,
        "lat": -7.0218894,
        "lng": 110.4383345,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Water%20Blaster%20Bukit%20Candi%20Golf.jpg"
    },
    {
        "id": 365,
        "category_id": 3,
        "name": "Waduk Jatibarang",
        "description": "Waduk Jatibarang merupakan sebuah waduk yang berada di Kota Semarang. Pembangunan waduk ini selesai setelah sekitar empat tahun pembangunan dan memulai proses pengisian air pada tanggal 5 Mei",
        "city": "Semarang",
        "price": 2500,
        "lat": -7.0370499,
        "lng": 110.3477586,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Waduk%20Jatibarang.jpg"
    },
    {
        "id": 366,
        "category_id": 4,
        "name": "Tirto Argo Siwarak",
        "description": "Kolam Renang Tirto Argo Siwarak, merupakan kolam renang yang berada di Ungaran. Keberadaannya yang dekat dengan Kota Semarang menjadikan tempat wisata ini cukup populer. Bahkan, tidak jarang ",
        "city": "Semarang",
        "price": 20000,
        "lat": -7.132106,
        "lng": 110.394523,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Tirto%20Argo%20Siwarak.jpg"
    },
    {
        "id": 367,
        "category_id": 3,
        "name": "Wisata Lereng Kelir",
        "description": "Wisata yang ada di kawasan gunung Kelir ini memang mulai populer sejak awal tahun 2021 dan para wisatawan kerap berbondong-bondong menuju kesana untuk meredam rasa penasaran tentang destinasi",
        "city": "Semarang",
        "price": 7000,
        "lat": -7.3126613,
        "lng": 110.3746785,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Lereng%20Kelir.jpg"
    },
    {
        "id": 368,
        "category_id": 3,
        "name": "Kampoeng Rawa",
        "description": "Kampoeng Rawa (disebut juga Kampung Rawa) adalah objek wisata di Ambarawa, Jawa Tengah, yang terletak di sabuk hijau di sekitar Danau Rawa Pening. Dibuka pada Agustus 2012, tempat ini dimilik",
        "city": "Semarang",
        "price": 3000,
        "lat": -7.267539,
        "lng": 110.418076,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampoeng%20Rawa.jpg"
    },
    {
        "id": 369,
        "category_id": 2,
        "name": "Monumen Palagan Ambarawa",
        "description": "Monumen Palagan Ambarawa adalah sebuah monumen yang terdapat di Ambarawa, Kabupaten Semarang.\\nMonumen ini merupakan simbol untuk mengenang sejarah pertempuran Palagan Ambarawa pada tanggal 1",
        "city": "Semarang",
        "price": 7500,
        "lat": -7.2598861,
        "lng": 110.4025602,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Palagan%20Ambarawa.jpg"
    },
    {
        "id": 370,
        "category_id": 2,
        "name": "Benteng Pendem",
        "description": "Benteng Pendem Cilacap (bahasa Belanda: Kustbatterij op de Landtong te Cilacap), adalah benteng peninggalan Belanda di pesisir pantai Teluk Penyu kabupaten Cilacap, Jawa Tengah yang dibangun ",
        "city": "Semarang",
        "price": 5000,
        "lat": -7.2706462,
        "lng": 110.4103291,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Benteng%20Pendem.jpg"
    },
    {
        "id": 371,
        "category_id": 3,
        "name": "Wisata Eling Bening",
        "description": "Sebuah fasilitas wisata yang dikelola dengan cara modern, untuk menimbulkan kenikmatan berwisata seperti halnya yang diinginkan oleh anak-anak muda. Namun tetap menyatu dengan lingkungan, den",
        "city": "Semarang",
        "price": 25000,
        "lat": -7.2531096,
        "lng": 110.4264512,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Wisata%20Eling%20Bening.jpg"
    },
    {
        "id": 372,
        "category_id": 3,
        "name": "Gua Maria Kerep Ambarawa",
        "description": "Gua Maria Kerep (Gua Maria Kerep Ambarawa, disinglkat GMKA), adalah sebuah tempat ziarah yang terletak di Jalan Tentara Pelajar, Kelurahan Panjang, Ambarawa. Tempat ini adalah tempat yang cuk",
        "city": "Semarang",
        "price": 2000,
        "lat": -7.2552364,
        "lng": 110.3991897,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gua%20Maria%20Kerep%20Ambarawa.jpg"
    },
    {
        "id": 373,
        "category_id": 2,
        "name": "Museum Kereta Ambarawa",
        "description": "Museum Kereta Api Ambarawa (bahasa Inggris: Indonesian Railway Museum, Ambarawa) adalah sebuah stasiun kereta api yang sudah dialihfungsikan menjadi sebuah museum serta merupakan museum perke",
        "city": "Semarang",
        "price": 10000,
        "lat": -7.2645989,
        "lng": 110.4046017,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Kereta%20Ambarawa.jpg"
    },
    {
        "id": 374,
        "category_id": 3,
        "name": "Hutan Pinus Kayon",
        "description": "Tak dipungkiri Hutan Pinus Kayon Getasan dekat Salatiga ini memang merupakan salah satu tempat wisata yang indah dan memanjakan mata. Pengunjung akan disuguhkan dengan jajaran hutan pinus yan",
        "city": "Semarang",
        "price": 6000,
        "lat": -7.395606,
        "lng": 110.4517727,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Pinus%20Kayon.jpg"
    },
    {
        "id": 375,
        "category_id": 2,
        "name": "Kota Lama Semarang",
        "description": "Kota Lama Semarang (bahasa Jawa: ꦏꦸꦛ​ꦭꦩ​ꦱꦼꦩꦫꦁ, translit. Kutha Lama Semarang) adalah suatu kawasan di Semarang yang menjadi pusat perdagangan pada abad 19-20 . Pada masa itu, untuk mengamanka",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9681399,
        "lng": 110.4278611,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Kota%20Lama%20Semarang.jpg"
    },
    {
        "id": 376,
        "category_id": 2,
        "name": "Semarang Chinatown",
        "description": "Terbentuknya Pecinan Semarang tak terlepas dari Geger Pecinan di Batavia (Jakarta tempo dulu) pada 1740. Kala itu warga Tionghoa memberontak pada penguasa Belanda. Buntut dari tragedi tersebu",
        "city": "Semarang",
        "price": 30000,
        "lat": -6.9749923,
        "lng": 110.424954,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Semarang%20Chinatown.jpg"
    },
    {
        "id": 377,
        "category_id": 4,
        "name": "La Kana Chapel",
        "description": "La Kana Chapel menawarkan konsep baru standing party, manjakan selera Anda dengan menu memasak langsung spesial masakan segar ala menit di piring Anda. Ini adalah Tempat Pernikahan Kerajaan d",
        "city": "Semarang",
        "price": 35000,
        "lat": -7.2156923,
        "lng": 110.3649392,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/La%20Kana%20Chapel.jpg"
    },
    {
        "id": 378,
        "category_id": 4,
        "name": "Jembatan Biru Ambarawa",
        "description": "Jembatan ini terletak di Tuntang, Kab. Semarang, Jawa tengah. dekat dengan rawa pening dan Sungai Tuntang. Kalau yang biasa mondar mandir salatiga-semarang, pasti tidak asing dengan yang nama",
        "city": "Semarang",
        "price": 0,
        "lat": -7.2678201,
        "lng": 110.4483217,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Jembatan%20Biru%20Ambarawa.jpg"
    },
    {
        "id": 379,
        "category_id": 3,
        "name": "Goa Rong",
        "description": "Semarang memiliki wisata di ketinggian bernama Goa Rong. Keberadaan kawasan wisata ini menunjukkan bahwa Semarang tak hanya identik dengan Lawang Sewu atau Kota Lama saja. Meskipun bernama Go",
        "city": "Semarang",
        "price": 5000,
        "lat": -7.2721621,
        "lng": 110.4698457,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/GPIB%20Immanuel%20Semarang%20%28Gereja%20Blenduk%29.jpg"
    },
    {
        "id": 380,
        "category_id": 6,
        "name": "Masjid Agung Ungaran",
        "description": "Masjid Agung Al-Mabrur berlokasi di Jln. Ahmad Yani, Desa Sidomulyo, Kecamatan Ungaran Tibur, Kabupaten Semarang, Provinsi Jawa Tengah. Masjid ini juga menjadi Masjid Agung Bagi Kabupaten Sem",
        "city": "Semarang",
        "price": 0,
        "lat": -7.1350705,
        "lng": 110.4088131,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Agung%20Ungaran.jpg"
    },
    {
        "id": 381,
        "category_id": 2,
        "name": "Tugu Muda Semarang",
        "description": "Tugu Muda (\"Monumen Pemuda\" Indonesia) adalah sebuah monumen batu di Semarang, Jawa memperingati perjuangan kemerdekaan oleh pemuda Indonesia. Itu didedikasikan oleh Presiden Sukarno pada 20 ",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9843485,
        "lng": 110.4093207,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Tugu%20Muda%20Semarang.jpg"
    },
    {
        "id": 382,
        "category_id": 4,
        "name": "Kampoeng Kopi Banaran",
        "description": "Kampoeng Kopi Banaran, sebuah agro wisata perkebunan kopi di Kabupaten Semarang. Tempat wisata ini memiliki luas 462 hektar yang sebagian dijadikan resort dan tempat wisata. Lokasinya berada ",
        "city": "Semarang",
        "price": 200000,
        "lat": -7.2539005,
        "lng": 110.4414953,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampoeng%20Kopi%20Banaran.jpg"
    },
    {
        "id": 383,
        "category_id": 4,
        "name": "Taman Tabanas",
        "description": "Taman Tabanas merupakan sebuah taman yang letaknya berada di Tanjakan Gombel Semarang. Dari Taman Tabanas Semarang ini pengunjung bisa melihat landscape pemandangan kota Semarang menjadikan T",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0388032,
        "lng": 110.4215576,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Tabanas.jpg"
    },
    {
        "id": 384,
        "category_id": 2,
        "name": "Kampung Tematik Jawi",
        "description": "Tak dipungkiri lagi kalau Kampung Jawi Gunungpati Semarang memang sudah viral bahkan banyak dikunjungi masyarakat. Padahal wisata kuliner ini berawal dari kampung kecil, namun kini sudah bany",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0290974,
        "lng": 110.3775382,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Tematik%20Jawi.jpg"
    },
    {
        "id": 385,
        "category_id": 2,
        "name": "Kampung Batik Gedong Semarang",
        "description": "Kampung Batik Semarang merupakan salah satu kampung di Kota Semarang yang unik dan menarik yang selalu dikaitkan dengan batik Semarang sejak zaman dulu hingga sekarang. Kampung Batik Semarang",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9688821,
        "lng": 110.4318692,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kampung%20Batik%20Gedong%20Semarang.jpg"
    },
    {
        "id": 386,
        "category_id": 3,
        "name": "Air Terjun Semirang",
        "description": "Terletak di lereng Gunung Ungaran bagian utara, terdapat sebuah air terjun yang eksotis dengan kolam renang yang berwarna hijau yang dikelilingi popohonan dan kesejukan udara pegunungan. Nama",
        "city": "Semarang",
        "price": 9000,
        "lat": -7.1662971,
        "lng": 110.381068,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Air%20Terjun%20Semirang.jpg"
    },
    {
        "id": 387,
        "category_id": 3,
        "name": "Obyek Wisata Goa Kreo",
        "description": "Goa Kreo Semarang yang berada di ibukota Jawa Tengah ini begitu hit di kalangan netizen. Tak heran jika cuaca cerah, antrian menuju ke sana begitu mengular. Meski tak ada angkutan umum menuju",
        "city": "Semarang",
        "price": 5500,
        "lat": -7.0372113,
        "lng": 110.3476164,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Obyek%20Wisata%20Goa%20Kreo.jpg"
    },
    {
        "id": 388,
        "category_id": 3,
        "name": "Watu Gunung Ungaran",
        "description": "Objek wisata alam memang sangat cocok dikunjungi, terlebih saat akhir pekan. Ditambah lagi, lokasi objek wisata yang tidak terlalu jauh dari pusat kota. Seperti objek wisata Watu Gunung yang ",
        "city": "Semarang",
        "price": 25000,
        "lat": -7.1298066,
        "lng": 110.388832,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Watu%20Gunung%20Ungaran.jpg"
    },
    {
        "id": 389,
        "category_id": 3,
        "name": "Brown Canyon",
        "description": "Di Indonesia, Brown Canyon adalah sebuah bekas penambangan tanah di Meteseh, Tembalang, Semarang. Lokasi ini menjadi salah satu lokasi (bukan tempat wisata) yang populer di Semarang dan diang",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0565164,
        "lng": 110.4862531,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Brown%20Canyon.jpg"
    },
    {
        "id": 390,
        "category_id": 3,
        "name": "Durian Gardens and Tourism Education Watu Simbar",
        "description": "Perlu diketahui, watu simbar ini merupakan lokasi wisata yang menawarkan edukasi dari berbagai macam pohon durian. Walaupun terkesan biasa saja, hal tersebut lah yang sebenarnya menjadi keuni",
        "city": "Semarang",
        "price": 5000,
        "lat": -7.0967079,
        "lng": 110.3900517,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Durian%20Gardens%20and%20Tourism%20Education%20Watu%20Simbar.jpg"
    },
    {
        "id": 391,
        "category_id": 3,
        "name": "Flower Farm Setiya Aji",
        "description": "Di taman bunga Setiya Aji Flower Farm kita bisa melihat warna-warni bunga krisan yang terlihat sangat cantik. Selain itu lokasinya yang berada di dataran tinggi membuat udara di kebun bunga B",
        "city": "Semarang",
        "price": 7500,
        "lat": -7.2241813,
        "lng": 110.3782661,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Flower%20Farm%20Setiya%20Aji.jpg"
    },
    {
        "id": 392,
        "category_id": 3,
        "name": "Ekowisata Mangrove Wonorejo",
        "description": "Hutan Wisata Mangrove Surabaya merupakan wisata yang menggabungkan wisata rekreasi dan edukasi. Di area dengan luas kurang lebih 200 hektar ini ditanami berbagai tanaman bakau. Lokasi wisata ",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3086482,
        "lng": 112.8216622,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Ekowisata%20Mangrove%20Wonorejo.jpg"
    },
    {
        "id": 393,
        "category_id": 3,
        "name": "Taman Harmoni Keputih",
        "description": "Tempat tersebut ialah Taman Hatmoni Keputih Surabaya yang memiliki segudang koleksi bunga warna-warni. Dulunya tempat ini merupakan lokasi pembuangan sampah atau TPA, namun kini bertransforma",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2952211,
        "lng": 112.8035603,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Harmoni%20Keputih.jpg"
    },
    {
        "id": 394,
        "category_id": 4,
        "name": "Air Mancur Menari",
        "description": "Jembatan Kenjeran dengan air mancur menarinya sejatinya bukan hanya sebuah jembatan penghubung jalan saja, namun juga dimanfaatkan sebagai destinasi wisata oleh pemerintah kota Surabaya. Posi",
        "city": "Surabaya",
        "price": 35000,
        "lat": -7.2356933,
        "lng": 112.7955234,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Air%20Mancur%20Menari.jpg"
    },
    {
        "id": 395,
        "category_id": 4,
        "name": "Taman Prestasi",
        "description": "Taman Prestasi Surabaya merupakan salah satu taman yang begitu terkenal di Kota Pahlawan dan banyak dikunjungi, sehingga tak heran jika menjadi tempat favorit bagi keluarga terutama pada saat",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2614722,
        "lng": 112.7428284,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Prestasi.jpg"
    },
    {
        "id": 396,
        "category_id": 2,
        "name": "Monumen Kapal Selam",
        "description": "Monumen Kapal Selam, atau disingkat Monkasel, adalah sebuah museum kapal selam yang terdapat di Embong Kaliasin, Genteng, Surabaya. Terletak di pusat kota, monumen ini sebenarnya merupakan ka",
        "city": "Surabaya",
        "price": 15000,
        "lat": -7.2654304,
        "lng": 112.7503052,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Kapal%20Selam.jpg"
    },
    {
        "id": 397,
        "category_id": 4,
        "name": "Taman Kunang-Kunang",
        "description": "Taman Kunang – Kunang di Surabaya ini mempunyai luas 400 meter persegi dan Taman Kunang – Kunang di Surabaya ini diresmikan oleh walikota Surabaya, Ibu Tri Rismaharini pada hari sabtu 28 Okto",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3182202,
        "lng": 112.7842405,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Kunang-Kunang.jpg"
    },
    {
        "id": 398,
        "category_id": 4,
        "name": "Taman Buah Surabaya",
        "description": "Wisata Taman Buah Undaan di Surabaya adalah salah satu tempat wisata yang berada di blok m suturejo utara, kabupaten surabaya, provinsi jawa timur, negara indonesia. Wisata Taman Buah Undaan ",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2662139,
        "lng": 112.795281,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Buah%20Surabaya.jpg"
    },
    {
        "id": 399,
        "category_id": 4,
        "name": "Taman Pelangi",
        "description": "Kalau pelangi biasanya ada di siang hari pasca hujan, maka di Taman Pelangi Yogyakarta pengunjung justru bisa menikmatinya setiap malam hari. Ya, ini lantaran taman ini merupakan Taman Lampio",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3275604,
        "lng": 112.7312242,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Pelangi%20Yogyakarta.jpg"
    },
    {
        "id": 400,
        "category_id": 3,
        "name": "Hutan Bambu Keputih",
        "description": "Surabaya menjadi kota metropolitan kedua setelah Jakarta. Kepadatan penduduk Surabaya pun cukup tinggi, dan karena terletak di pesisir, suhu kota terasa panas. Meski begitu, masih ada tempat ",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2941909,
        "lng": 112.8017238,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Hutan%20Bambu%20Keputih.jpg"
    },
    {
        "id": 401,
        "category_id": 4,
        "name": "Taman Keputran",
        "description": "Ntah, mengapa nama taman ini disebut dengan taman keputran, namun jika dikaitkan dengan lokasi taman, berada di persimpangan jalan Keputran Surabaya. Selain itu, di seberang sungai terdapat j",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2732153,
        "lng": 112.744102,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Keputran.jpg"
    },
    {
        "id": 402,
        "category_id": 5,
        "name": "Food Junction Grand Pakuwon",
        "description": "Food Junction Grand Pakuwon sebetulnya merupakan suatu pujasera dengan konsep yang sedikit berbeda dengan tempat lainnya. Tempatnya yang terletak di area Tandes, Surabaya Barat (strategis den",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.251022,
        "lng": 112.6620053,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Food%20Junction%20Grand%20Pakuwon.jpg"
    },
    {
        "id": 403,
        "category_id": 4,
        "name": "Taman Barunawati",
        "description": "Taman Barunawati yang lokasinya berada di kota Surabaya bagian utara. Taman yang satu ini bisa menjadi referensi untuk dikunjungi karena cukup recommended terutama bagi warga Surabaya atau ba",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2220559,
        "lng": 112.7319967,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Barunawati.jpg"
    },
    {
        "id": 404,
        "category_id": 4,
        "name": "Kenjeran Park",
        "description": "Kenjeran Park merupakan salah satu tempat wisata kekinian di Surabaya. Tempat wisata ini berlokasi tepat di Jalan Sukolilo, Desa Sukolilo Baru, Kecamatan Bulak, Surabaya, Jawa Timur. Dulunya,",
        "city": "Surabaya",
        "price": 35000,
        "lat": -7.2522964,
        "lng": 112.7966952,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Kenjeran%20Park.jpg"
    },
    {
        "id": 405,
        "category_id": 4,
        "name": "Surabaya North Quay",
        "description": "Surabaya menjadi kota besar yang sering menjadi tempat tujuan wisata. Berbagai tempat belanja dari tradisional hingga modern ada di Ibukota Jawa Timur ini. Namun, apakah tidak bosan wisata be",
        "city": "Surabaya",
        "price": 50000,
        "lat": -7.1968193,
        "lng": 112.7324578,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Surabaya%20North%20Quay.jpg"
    },
    {
        "id": 406,
        "category_id": 3,
        "name": "Kebun Bibit Wonorejo",
        "description": "Meskipun namanya kebun bibit, namun kawasan ini rasanya lebih cocok disebut sebagai taman. Kawasan Kebun Bibit Wonorejo ini terbagi menjadi 2 bagian, yaitu Taman Aktif dan Taman Pasif yang to",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3123655,
        "lng": 112.7889021,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Bibit%20Wonorejo.jpg"
    },
    {
        "id": 407,
        "category_id": 4,
        "name": "Taman Ekspresi Dan Perpustakaan",
        "description": "Taman Ekspresi Surabaya tidak hanya menyuguhkan taman yang rindang dan asri. Taman di Jalan Gentengkali ini juga punya fasilitas penunjang berupa perpustakaan di sisi barat. Perpustakaan yang",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2573072,
        "lng": 112.7437199,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Ekspresi%20Dan%20Perpustakaan.jpg"
    },
    {
        "id": 408,
        "category_id": 3,
        "name": "Kebun Binatang Surabaya",
        "description": "Kebun Binatang Surabaya (KBS) (Dialek Arekan: Kebon Binatang Suroboyo) adalah salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya. KBS merupakan kebun binatang yang p",
        "city": "Surabaya",
        "price": 15000,
        "lat": -7.2959546,
        "lng": 112.7366094,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Kebun%20Binatang%20Surabaya.jpg"
    },
    {
        "id": 409,
        "category_id": 2,
        "name": "Rumah Batik",
        "description": "Di rumah batik ini terdapat sekitar 2000 lembar batik yang memiliki ragam corak yang beraneka macam. Aneka batik tersebut terbuat dari berbagai macam jenis bahan yaitu seperti prima, primis, ",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.278736,
        "lng": 112.718453,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Rumah%20Batik.jpg"
    },
    {
        "id": 410,
        "category_id": 4,
        "name": "Ciputra Waterpark",
        "description": "Ciputra Waterpark Surabaya – Bermain air di waterpark memang bisa menjadi alternatif rekreasi kaum urban di berbagai kota besar. Tidak hanya Jakarta, Surabaya sebagai salah satu kota metropol",
        "city": "Surabaya",
        "price": 95000,
        "lat": -7.2861707,
        "lng": 112.6333338,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Ciputra%20Waterpark.jpg"
    },
    {
        "id": 411,
        "category_id": 6,
        "name": "Masjid Muhammad Cheng Hoo",
        "description": "Masjid Cheng Hoo Surabaya adalah Masjid bernuansa Muslim Tionghoa yang berlokasi di Jalan Gading, Ketabang, Genteng, Surabaya atau 1.000 m utara Gedung Balaikota Surabaya. Masjid ini didirika",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2522754,
        "lng": 112.7468796,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Muhammad%20Cheng%20Hoo.jpg"
    },
    {
        "id": 412,
        "category_id": 6,
        "name": "Masjid Nasional Al-Akbar",
        "description": "Masjid Nasional Al Akbar (atau biasa disebut Masjid Agung Surabaya) ialah masjid terbesar kedua di Indonesia yang berlokasi di Kota Surabaya, Jawa Timur setelah Masjid Istiqlal di Jakarta. Po",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3366141,
        "lng": 112.7151806,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Nasional%20Al-Akbar.jpg"
    },
    {
        "id": 413,
        "category_id": 2,
        "name": "Museum TNI AL Loka Jala Crana",
        "description": "Museum Loka Jala Crana berdiri pada tanggal 19 September 1969 oleh Ibu R. Mulyadi, isteri panglima Angkatan Laut Laksamana R. Moeljadi, dengan nama Museum Akabri Laut. Pada tahun 1973, tepatn",
        "city": "Surabaya",
        "price": 2000,
        "lat": -7.227185,
        "lng": 112.718997,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Taman%20Prasasti.jpg"
    },
    {
        "id": 414,
        "category_id": 2,
        "name": "Jembatan Merah",
        "description": "Jembatan Merah merupakan salah satu monumen sejarah di Surabaya, Jawa Timur yang dibiarkan seperti adanya: sebagai jembatan. Jembatan yang menjadi salah satu judul lagu ciptaan Gesang ini, se",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2367447,
        "lng": 112.7383009,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Jembatan%20Merah.jpg"
    },
    {
        "id": 415,
        "category_id": 2,
        "name": "Museum De Javasche Bank",
        "description": "Museum Bank Indonesia (Bahasa Indonesia: Museum Bank Indonesia) adalah museum bank yang terletak di Surabaya, Indonesia. Secara resmi didirikan oleh Bank Indonesia dan dibuka pada 27 Januari ",
        "city": "Surabaya",
        "price": 5000,
        "lat": -7.2353939,
        "lng": 112.7367646,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20De%20Javasche%20Bank.jpg"
    },
    {
        "id": 416,
        "category_id": 2,
        "name": "Keraton Surabaya",
        "description": "Kawasan yang berjuluk Kampung Keraton ini terdiri dari empat gang. Gang ini rata-rata berukuran sempit, lebarnya 2 hingga 3 meter. Saking sempitnya, pengendara sepeda motor terkadang turun da",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2567553,
        "lng": 112.7942203,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Keraton%20Surabaya.jpg"
    },
    {
        "id": 417,
        "category_id": 2,
        "name": "Klenteng Sanggar Agung",
        "description": "Kelenteng Sanggar Agung atau Klenteng Hong San Tang adalah sebuah klenteng di Kota Surabaya. Alamatnya berada di Jalan Sukolilo Nomor 100, Pantai Ria Kenjeran, Surabaya. Kuil ini, selain menj",
        "city": "Surabaya",
        "price": 10000,
        "lat": -7.246944,
        "lng": 112.802222,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Klenteng%20Sanggar%20Agung.jpg"
    },
    {
        "id": 418,
        "category_id": 2,
        "name": "Museum Sepuluh Nopember Kota Surabaya",
        "description": "Museum Sepuluh November Surabaya adalah salah satu museum yang terletak di Kota Surabaya, dibangun pada tahun 1945. Museum ini dibangun dengan tujuan untuk mempelajari dan memperdalam peristi",
        "city": "Surabaya",
        "price": 5000,
        "lat": -7.2454369,
        "lng": 112.7378985,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Sepuluh%20Nopember%20Kota%20Surabaya.jpg"
    },
    {
        "id": 419,
        "category_id": 2,
        "name": "Monumen Tugu Pahlawan",
        "description": "Tugu Pahlawan (bahasa Indonesia: Tugu Pahlawan) adalah sebuah monumen di Surabaya, Indonesia. Itu adalah lambang utama kota yang didedikasikan untuk orang-orang yang tewas dalam Pertempuran S",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.246926,
        "lng": 112.73781,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Tugu%20Pahlawan.jpg"
    },
    {
        "id": 420,
        "category_id": 2,
        "name": "Surabaya Museum (Gedung Siola)",
        "description": "Saat ini Museum Surabaya Siola menjelma menjadi sebuah destinasi wisata sejarah yang unik dan menarik untuk dikunjungi. Bukan hanya menyuguhkan cerita masa lampau yang ditampilkan dengan berb",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2562972,
        "lng": 112.7379955,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Surabaya%20Museum%20%28Gedung%20Siola%29.jpg"
    },
    {
        "id": 421,
        "category_id": 2,
        "name": "Museum Kesehatan Dr. Adhyatma",
        "description": "Museum Kesehatan Dr. Adhyatma, MPH adalah museum kesehatan yang dirintis Pemerintah indonesia melalui Departemen Kesehatan pada tanggal 16 Desember 2003. Museum Kesehatan Puslitbang Pelayanan",
        "city": "Surabaya",
        "price": 10000,
        "lat": -7.240328,
        "lng": 112.731431,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Kesehatan%20Dr.%20Adhyatma.jpg"
    },
    {
        "id": 422,
        "category_id": 2,
        "name": "Monumen Jalesveva Jayamahe",
        "description": "Monumen Jalesveva Jayamahe atau Monjaya adalah sebuah monumen yang terletak di Kota Surabaya, Jawa Timur. Monumen ini menggambarkan sosok Perwira TNI Angkatan Laut berbusana Pakaian Dinas Upa",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.1954748,
        "lng": 112.7395206,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Jalesveva%20Jayamahe.jpg"
    },
    {
        "id": 423,
        "category_id": 2,
        "name": "Patung Sura dan Buaya",
        "description": "Patung Sura dan Baya (Jawa: Patung Suro lan Boyo) adalah sebuah patung yang merupakan lambang kota Surabaya. Patung ini berada di depan Kebun Binatang Surabaya. Patung ini terdiri atas dua he",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2960492,
        "lng": 112.7387012,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Patung%20Sura%20dan%20Buaya.jpg"
    },
    {
        "id": 424,
        "category_id": 1,
        "name": "Pantai Ria Kenjeran",
        "description": "Obyek wisata Pantai Ria Kenjeran Surabaya merupakan salah satu destinasi wisata ketika mengujungi kota Surabaya. Pantai ini termasuk salah satu wisata andalan kota Surabaya yang selalu ramai ",
        "city": "Surabaya",
        "price": 15000,
        "lat": -7.2509164,
        "lng": 112.8009332,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Pantai%20Ria%20Kenjeran.jpg"
    },
    {
        "id": 425,
        "category_id": 4,
        "name": "Waterpark Kenjeran Surabaya",
        "description": "Waterpark Kenjeran Surabaya merupakan wisata keluarga dengan permainan air dan olahraga renang. Terdapat berbagai wahana menarik bagi keluarga dan anak-anak. Berlokasi tidak jauh dari kawasan",
        "city": "Surabaya",
        "price": 35000,
        "lat": -7.2477963,
        "lng": 112.7998235,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Waterpark%20Kenjeran%20Surabaya.jpg"
    },
    {
        "id": 426,
        "category_id": 2,
        "name": "Balai Kota Surabaya",
        "description": "Surabaya sebagai Resort Gemeente (Haminte) secara resmi mulai berdiri pada tanggal 1 April 1906. Sebelumnya Surabaya merupakan bagian dari karesidenan Pemerintah Haminte dijalankan oleh Dewan",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2592948,
        "lng": 112.7470512,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Balai%20Kota%20Surabaya.jpg"
    },
    {
        "id": 427,
        "category_id": 2,
        "name": "Patung Buddha Empat Rupa",
        "description": "Terletak di sudut Pantai Ria Kenjeran, Patung Buddha Empat Rupa ini sering digunakan oleh pemuda-pemudi setempat untuk tempat nongkrong dan berkumpul. Dibangun mulai tahun 2003 dan mempunyai ",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2472841,
        "lng": 112.8010814,
        "rating": 4.3,
        "image": "https://storage.googleapis.com/tresure-place-images/Patung%20Buddha%20Empat%20Rupa.jpg"
    },
    {
        "id": 428,
        "category_id": 2,
        "name": "Monumen Bambu Runcing Surabaya",
        "description": "Monumen Bambu Runcing adalah ikon pariwisata Surabaya yang berhubungan dengan situs sejarah perjuangan bangsa. Monumen ini terdiri dari 5 pilar dan memiliki tinggi yang tidak sama dan dibentu",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2677755,
        "lng": 112.7443898,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Bambu%20Runcing%20Surabaya.jpg"
    },
    {
        "id": 429,
        "category_id": 2,
        "name": "House of Sampoerna",
        "description": "House of Sampoerna adalah sebuah museum tembakau dan markas besar Sampoerna yang terletak di Surabaya. Gaya arsitektur dari bangunan utamanya yang dipengaruhi oleh gaya kolonial Belanda diban",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2308173,
        "lng": 112.7342344,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/House%20of%20Sampoerna.jpg"
    },
    {
        "id": 430,
        "category_id": 4,
        "name": "Atlantis Land Surabaya",
        "description": "Sejak diresmikan pada bulan Desember 2017, Atlantis Land Kenjeran Surabaya sudah sukses mendatangkan banyak pengunjung. Taman wisata air ini menjadi taman air terbesar di Kota Surabaya. Lokas",
        "city": "Surabaya",
        "price": 125000,
        "lat": -7.2516189,
        "lng": 112.8009694,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Atlantis%20Land%20Surabaya.jpg"
    },
    {
        "id": 431,
        "category_id": 4,
        "name": "Taman Hiburan Rakyat",
        "description": "Taman Hiburan Rakyat atau THR tentunya sudah tak asing lagi bagi masyarakat Surabaya. Taman ini berletak di belakang Taman Remaja Surabaya (TRS) dan juga ada di belakang Hi-Tech Mall. THR bia",
        "city": "Surabaya",
        "price": 5000,
        "lat": -7.252291,
        "lng": 112.7520012,
        "rating": 4.2,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Hiburan%20Rakyat.jpg"
    },
    {
        "id": 432,
        "category_id": 4,
        "name": "Taman Mundu",
        "description": "Taman Mundu merupakan salah satu taman atau ruang terbuka hijau terutama bagi warga kota Surabaya, taman ini lebih tepatnya berada di Jl. Tambaksari atau berada di seberang Stadion Gelora Sep",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2516046,
        "lng": 112.7545983,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Mundu.jpg"
    },
    {
        "id": 433,
        "category_id": 2,
        "name": "Museum Mpu Tantular",
        "description": "Museum Negeri Mpu Tantular adalah sebuah museum negeri yang berlokasi di kecamatan Buduran, Sidoarjo, Jawa Timur. Awalnya, museum ini bernama Stedelijk Historisch Museum Soerabaia, didirikan ",
        "city": "Surabaya",
        "price": 2000,
        "lat": -7.4338593,
        "lng": 112.7199058,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Museum%20Mpu%20Tantular.jpg"
    },
    {
        "id": 434,
        "category_id": 4,
        "name": "Taman Bungkul",
        "description": "Taman Bungkul adalah taman wisata kota yang terletak di pusat kota Surabaya, tepatnya di Jalan Raya Darmo. Taman ini berdiri di area seluas 900 meter persegi. Dilengkapi berbagai fasilitas pe",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2913468,
        "lng": 112.7398218,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Bungkul.jpg"
    },
    {
        "id": 435,
        "category_id": 4,
        "name": "Taman Air Mancur Menari Kenjeran",
        "description": "Air mancur menari atau dancing fountain juga ada di kawasan jembatan kenjeran Surabaya. Air mancur ini di buat bersamaan dengan pembuatan jembatan kenjeran, di resmikan pada tanggal 9 juli 20",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2752955,
        "lng": 112.7549381,
        "rating": 4.4,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Air%20Mancur%20Menari%20Kenjeran.jpg"
    },
    {
        "id": 436,
        "category_id": 4,
        "name": "Taman Flora Bratang Surabaya",
        "description": "Taman Flora adalah salah satu taman kota di Surabaya yang merupakan fasilitas publik dari Pemkot setempat. Sehingga tempat ini memang sengaja dibuat untuk dinikmati oleh khalayak umum. Karena",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2943303,
        "lng": 112.7617534,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Taman%20Flora%20Bratang%20Surabaya.jpg"
    },
    {
        "id": 437,
        "category_id": 6,
        "name": "Gereja Perawan Maria Tak Berdosa Surabaya",
        "description": "Gereja Katolik Kelahiran Santa Perawan Maria merupakan salah satu gereja tua di kota Surabaya, Jawa Timur, Indonesia. Berlokasi di Jalan Kepanjen, Surabaya, bangunan religius ini berdampingan",
        "city": "Surabaya",
        "price": 10000,
        "lat": -7.2420758,
        "lng": 112.7368158,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Tiberias%20Indonesia%20Bandung.jpg"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get place by category
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places/search?category=Tempat%20Ibadah
>```
### Query Params

|Param|value|
|---|---|
|category|Tempat%20Ibadah|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
[
    {
        "id": 22,
        "category_id": 6,
        "name": "Masjid Istiqlal",
        "description": "Masjid Istiqlal (arti harfiah: Masjid Merdeka) adalah masjid nasional negara Republik Indonesia yang terletak di bekas Taman Wilhelmina, di Timur Laut Lapangan Medan Merdeka yang di tengahnya",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.17017,
        "lng": 106.83139,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Istiqlal.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 23,
        "category_id": 6,
        "name": "Gereja Katedral",
        "description": "Gereja Katedral Jakarta, atau bernama resmi Gereja Santa Maria Diangkat Ke Surga (bahasa Jerman: De Kerk van Onze Lieve Vrouwe ten Hemelopneming; bahasa Inggris: The Church of Our Lady of the",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.169225,
        "lng": 106.833063,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Katedral.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 55,
        "category_id": 6,
        "name": "Klenteng Jin De Yuan",
        "description": "Kelenteng Kim Tek Le, atau yang lebih dikenal dengan Kelenteng Jin De Yuan, sudah dibangun sejak 1650. Kelenteng yang disebut-sebut sebagai yang tertua di Jakarta ini didirikan oleh seorang L",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1444737,
        "lng": 106.8126018,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Klenteng%20Jin%20De%20Yuan.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 223,
        "category_id": 6,
        "name": "Masjid Raya Bandung",
        "description": "Masjid Raya Bandung Provinsi Jawa Barat, yang dulu dikenal dengan nama Masjid Agung Bandung adalah masjid yang berada di Kota Bandung, Jawa Barat, Indonesia. Status masjid ini adalah sebagai ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9216897,
        "lng": 107.6061399,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Raya%20Bandung.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 264,
        "category_id": 6,
        "name": "Gereja Katedral Santo Petrus Bandung",
        "description": "Gereja Katedral Bandung, atau Katedral Santo Petrus, adalah sebuah gereja yang terletak di Jalan Merdeka, Babakanciamis, Sumurbandung, Bandung, Indonesia. Bangunan ini dirancang oleh Charles ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9148394,
        "lng": 107.6105511,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Perawan%20Maria%20Tak%20Berdosa%20Surabaya.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 278,
        "category_id": 6,
        "name": "Masjid Daarut Tauhiid Bandung",
        "description": "pada bulan Juli 1993 berdirilah sebuah masjid berlantai tiga, tepatnya di Jalan Gegerkalong Girang nomor 38 Bandung. Masjid ini sering dijuluki sebagai masjid seribu tangan karena dibangun se",
        "city": "Bandung",
        "price": 0,
        "lat": -6.863527,
        "lng": 107.5899194,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Daarut%20Tauhiid%20Bandung.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 279,
        "category_id": 6,
        "name": "Masjid Agung Trans Studio Bandung",
        "description": "Masjid Agung Trans Studio Bandung (TSB) berdiri megah. Rumah ibadah seluas 4.000 meter persegi bergaya Timur Tengah ini menjadi oase di tengah-tengah pusat perbelanjaan dan tempat rekreasi. k",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9259635,
        "lng": 107.6354278,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Agung%20Trans%20Studio%20Bandung.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 280,
        "category_id": 6,
        "name": "Gereja Tiberias Indonesia Bandung",
        "description": "Gereja Tiberias Indonesia (GTI), atau Tiberias Ministry adalah salah satu sinode gereja Kristen Protestan di Indonesia. Salah satu ciri khas dari pelayanan GTI adalah pelayanan Kesembuhan Ila",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9347698,
        "lng": 107.6253513,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Glamping%20Lakeside%20Rancabali.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 288,
        "category_id": 6,
        "name": "Masjid Salman ITB",
        "description": "Masjid Salman ITB adalah masjid kampus yang terletak di Jalan Ganesha 7, Lebak Siliwangi, Coblong, Kota Bandung atau tepat di depan area Kampus ITB Ganesha. Dengan luas lahan 7800 m2 dan luas",
        "city": "Bandung",
        "price": 0,
        "lat": -6.8936643,
        "lng": 107.611271,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Salman%20ITB.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 302,
        "category_id": 6,
        "name": "Masjid Pusdai",
        "description": "Masjid PUSDAI (pusat dakwah islam) dibangun dalam arsitektur asli di Indonesia, dengan bentuk bentuk yang khas atap Limas. Aplikasikan pada semua atap bangunannya dengan dipadu berbagia gaya ",
        "city": "Bandung",
        "price": 0,
        "lat": -6.9000672,
        "lng": 107.62587,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Pusdai.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 303,
        "category_id": 6,
        "name": "Masjid Al-Imtizaj",
        "description": "Masjid Al Imtizaj adalah salah satu masjid yang bernuansa oriental dan arsitektur bercorak negeri tirai bambu yang berada di Kota Bandung. Letak masjid ini lebih tepatnya berada di Jalan Banc",
        "city": "Bandung",
        "price": 0,
        "lat": -6.919425,
        "lng": 107.6078639,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Al-Imtizaj-not-found.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 352,
        "category_id": 6,
        "name": "GPIB Immanuel Semarang (Gereja Blenduk)",
        "description": "GPIB Immanuel Semarang (populer dengan nama Gereja Blenduk, kadang-kadang dieja Gereja Blendug, dan sering kali dilafazkan sebagai mBlendhug) (bahasa Jawa: ꦒꦿꦺꦗ​ꦧ꧀ꦭꦼꦤ꧀ꦝꦸꦏ꧀, translit. Gréja Bl",
        "city": "Semarang",
        "price": 0,
        "lat": -6.9683488,
        "lng": 110.4274767,
        "rating": 4.6,
        "image": "https://storage.googleapis.com/tresure-place-images/Galaxy%20Waterpark%20Jogja.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 358,
        "category_id": 6,
        "name": "Masjid Kapal Semarang",
        "description": "Masjid Safinatun Najah atau pengunjung biasa menyebutnya dengan Masjid Kapal Semarang kini menjadi wisata religi yang ramai dikunjungi saat bulan Ramadan. Masjid yang berlokasi di berlokasi d",
        "city": "Semarang",
        "price": 0,
        "lat": -7.0187782,
        "lng": 110.2937134,
        "rating": 4.1,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Kapal%20Semarang.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 380,
        "category_id": 6,
        "name": "Masjid Agung Ungaran",
        "description": "Masjid Agung Al-Mabrur berlokasi di Jln. Ahmad Yani, Desa Sidomulyo, Kecamatan Ungaran Tibur, Kabupaten Semarang, Provinsi Jawa Tengah. Masjid ini juga menjadi Masjid Agung Bagi Kabupaten Sem",
        "city": "Semarang",
        "price": 0,
        "lat": -7.1350705,
        "lng": 110.4088131,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Agung%20Ungaran.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 411,
        "category_id": 6,
        "name": "Masjid Muhammad Cheng Hoo",
        "description": "Masjid Cheng Hoo Surabaya adalah Masjid bernuansa Muslim Tionghoa yang berlokasi di Jalan Gading, Ketabang, Genteng, Surabaya atau 1.000 m utara Gedung Balaikota Surabaya. Masjid ini didirika",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.2522754,
        "lng": 112.7468796,
        "rating": 4.7,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Muhammad%20Cheng%20Hoo.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 412,
        "category_id": 6,
        "name": "Masjid Nasional Al-Akbar",
        "description": "Masjid Nasional Al Akbar (atau biasa disebut Masjid Agung Surabaya) ialah masjid terbesar kedua di Indonesia yang berlokasi di Kota Surabaya, Jawa Timur setelah Masjid Istiqlal di Jakarta. Po",
        "city": "Surabaya",
        "price": 0,
        "lat": -7.3366141,
        "lng": 112.7151806,
        "rating": 4.9,
        "image": "https://storage.googleapis.com/tresure-place-images/Masjid%20Nasional%20Al-Akbar.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    },
    {
        "id": 437,
        "category_id": 6,
        "name": "Gereja Perawan Maria Tak Berdosa Surabaya",
        "description": "Gereja Katolik Kelahiran Santa Perawan Maria merupakan salah satu gereja tua di kota Surabaya, Jawa Timur, Indonesia. Berlokasi di Jalan Kepanjen, Surabaya, bangunan religius ini berdampingan",
        "city": "Surabaya",
        "price": 10000,
        "lat": -7.2420758,
        "lng": 112.7368158,
        "rating": 4.8,
        "image": "https://storage.googleapis.com/tresure-place-images/Gereja%20Tiberias%20Indonesia%20Bandung.jpg",
        "category": {
            "id": 6,
            "name": "Tempat Ibadah"
        }
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get places by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places/1
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "id": 1,
    "category_id": 2,
    "name": "Monumen Nasional",
    "description": "Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan raky",
    "city": "Jakarta",
    "price": 20000,
    "lat": -6.1753924,
    "lng": 106.8271528,
    "rating": 4.6,
    "image": "https://storage.googleapis.com/tresure-place-images/Monumen%20Nasional.jpg"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update places
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places/440
>```
### Body (**raw**)

```json
{
  "category_id": 2,
  "name": "Updated Place Name",
  "description": "Updated Place Description",
  "city": "Updated City Name",
  "price": 100,
  "lat": 987.654,
  "lng": 321.098,
  "rating": 3.8,
  "image": "https://example.com/updated-image.jpg"
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Place updated successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete places
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/places/439
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjU3MzE3MywiZXhwIjoxNjg2NjU5NTczfQ.ElelQRd4iLlhlII7zPGhT6QfJH8z4eSebd27Ei2TJW4|string|


### Response: 200
```json
{
    "message": "Place deleted successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Rating 


## End-point: create rating
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/ratings
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "place_id": "2",
    "rating": 4.5
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Rating successfully added"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all rating
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/ratings/
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "error": false,
    "data": [
        {
            "id": "0302aa0a-7309-48c9-a285-0aefab3e157e",
            "rating": 4.5,
            "user_id": 10004,
            "place_id": 2
        },
        {
            "id": "f012fe3a-04ad-411c-a9c9-bb0213e6c48a",
            "rating": 4.5,
            "user_id": 10001,
            "place_id": 441
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get rating by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/ratings/0302aa0a-7309-48c9-a285-0aefab3e157e
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "id": "0302aa0a-7309-48c9-a285-0aefab3e157e",
    "rating": 4.5,
    "user_id": 10004,
    "place_id": 2,
    "place": {
        "id": 2,
        "category_id": 2,
        "name": "Kota Tua",
        "description": "Kota tua di Jakarta, yang juga bernama Kota Tua, berpusat di Alun-Alun Fatahillah, yaitu alun-alun yang ramai dengan pertunjukan rutin tarian tradisional. Museum Sejarah Jakarta adalah bangun",
        "city": "Jakarta",
        "price": 0,
        "lat": -6.1376448,
        "lng": 106.8171245,
        "rating": 4.5,
        "image": "https://storage.googleapis.com/tresure-place-images/Kota%20Tua.jpg"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update rating
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/ratings/0302aa0a-7309-48c9-a285-0aefab3e157e
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "place_id": "2",
    "rating": 4.4
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Rating successfully updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete rating
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/ratings/0302aa0a-7309-48c9-a285-0aefab3e157e
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: User Liked Category 


## End-point: create user like category
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/userLikedCategory
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "category_id": 5
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Category successfull added to user liked"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all user liked categories
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/userLikedCategory
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
[
    {
        "id": "58e9e03b-d3e2-4339-94b4-1fedb1859158",
        "user_id": 10004,
        "category_id": 5
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get user liked categories by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/userLikedCategory/58e9e03b-d3e2-4339-94b4-1fedb1859158
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "id": "58e9e03b-d3e2-4339-94b4-1fedb1859158",
    "user_id": 10004,
    "category_id": 5
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user liked category
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/userLikedCategory/58e9e03b-d3e2-4339-94b4-1fedb1859158
>```
### Body (**raw**)

```json
{
    "user_id": 10004,
    "category_id": 2
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Category liked successfully updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete user liked category
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/userLikedCategory/58e9e03b-d3e2-4339-94b4-1fedb1859158
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "User liked category successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Plan Places 


## End-point: create plan place
### Method: POST
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/planplace
>```
### Body (**raw**)

```json
{
   "plan_id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
   "place_id": 2,
   "depart_time": "2023-07-01T11:00:00Z",
   "transport_mode": "car",
   "transport_price": 50
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Place successfully added to the plan!"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all plan places
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/planplace
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
[
    {
        "id": "e415916c-ed47-4874-9cf7-c4fad4eb1387",
        "plan_id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
        "place_id": 2,
        "depart_time": "2023-07-01T11:00:00.000Z",
        "transport_mode": "car",
        "transport_price": 50
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get a plan place by id
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/planplace/e415916c-ed47-4874-9cf7-c4fad4eb1387
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "id": "e415916c-ed47-4874-9cf7-c4fad4eb1387",
    "plan_id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
    "place_id": 2,
    "depart_time": "2023-07-01T11:00:00.000Z",
    "transport_mode": "car",
    "transport_price": 50
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update plan places
### Method: PUT
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/planplace/e415916c-ed47-4874-9cf7-c4fad4eb1387
>```
### Body (**raw**)

```json
{
   "plan_id": "3146c49b-62b6-48c0-816a-28d6b0e766ab",
   "place_id": 32,
   "depart_time": "2023-05-28T14:00:00Z",
   "transport_mode": "train",
   "transport_price": 35.99
}

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Plan place successfully updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete plan places
### Method: DELETE
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/planplace/e415916c-ed47-4874-9cf7-c4fad4eb1387
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "message": "Plan place successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Recommender Model 


## End-point: predict
### Method: POST
>```
>https://tresure-model-v5cbzwlk4q-uc.a.run.app/predict
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDQsInVzZXJuYW1lIjoicmV6YSIsImlhdCI6MTY4Njc0OTM2NywiZXhwIjoxNjg2ODM1NzY3fQ.-QbSXNuw2zsCrmgBCxNPg4fFl0YJPfYvHTJyvY-pdI8|string|


### Response: 200
```json
{
    "data": [
        321,
        1,
        200
    ],
    "error": "false"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: halo
### Method: GET
>```
>https://tresure-model-v5cbzwlk4q-uc.a.run.app/
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZWQ4MDk1LTNhZTYtNDRiOS1hZWNhLTViYzJlZTQ0ZDY2OSIsInVzZXJuYW1lIjoicmV6YXdvayIsImlhdCI6MTY4NjcxNDIyMSwiZXhwIjoxNjg2ODAwNjIxfQ.UPbZVRtpUTWmoE-NnW87zEnWUrPf-FdSqIrZIAaqX3Q|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
