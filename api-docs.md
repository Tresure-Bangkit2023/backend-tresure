# Tresure API Documentation
This is API Documentation for Tresure Application
# 📁 Collection: User 


## Register User
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

## Login User
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

## Get All User
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
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get User by Id
Request for get user by ID
### Method: GET
>```
>https://tresure-app-v5cbzwlk4q-uc.a.run.app/users/10000
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
        "id": 10000,
        "username": "alip",
        "password": "$2b$10$FumK0RGmr5wpUoMOG2NdtOZM.jCjbkIThC5S1w7TtB0gx.zPY/KgK",
        "email": "alip@gmail.com",
        "full_name": "Alip Raihan",
        "location": null,
        "profile_pic": null,
        "solo_traveler": null,
        "liked_categories": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Update User
Request for update user information

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

## Delete User
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


## Create Plan
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

## Get All Plans
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

## Get Plans by Id
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

## Update Plans
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

## Delete Plans
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


## Add Categories
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

## Get All Categories
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

## Get Categories by Id
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

## Update Categories
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

## Delete Categories
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


## Add Places
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

## Get All Places
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
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get Place by Category
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
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## Get Places by Id
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

## Update Places
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

## Delete Places
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


## Create Rating
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

## Get All Rating
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

## Get Rating by Id
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

## Update Rating
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

##  Delete Rating
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


##  Create User liked Category
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

##  Get All User liked Categories
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

##  Get User liked Categories by Id
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

##  Update User liked Category
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

##  Delete User liked Category
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


##  Create Plan Place
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

##  Get All Plan Places
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

##  Get Plan Place by Id
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

##  Update Plan Places
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

##  Delete Plan Places
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