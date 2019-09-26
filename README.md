# Conjugator App Endpoints

## Root endpoint : https://conju.herokuapp.com/

## User Registeration Endpoint

## POST -> /api/auth/register

#### Request:

```json
{
  "name": "test",
  "email": "test@test.com",
  "password": "123456"
}
```

#### Response: (201)

```json
{
  "id": "1",
  "name": "test",
  "email": "test@test.com"
}
```
