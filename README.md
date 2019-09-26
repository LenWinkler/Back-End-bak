Conjugator App Endpoints
Root endpoint : https://conju.herokuapp.com/

User Registeration Endpoint

POST -> /api/auth/register

Request:

{
"name": "test",
"email": "test@test.com",
"password": "123456"
}

Response: (201)

{
"id": "1",
"name": "test",
"email": "test@test.com"
}
