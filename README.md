# Conjugator App Endpoints

### Root endpoint : https://conju.herokuapp.com/

### User Registeration Endpoint

#### POST -> /api/auth/register

##### Request:

```json
{
  "name": "test",
  "email": "test@test.com",
  "password": "123456"
}
```

##### Response: (201)

```json
{
  "id": "1",
  "name": "test",
  "email": "test@test.com"
}
```

#### POST -> /api/auth/login

##### Request:

```json
{
  "name": "github",
  "email": "email@test.com",
  "password": "password"
}
```

##### Response: (200)

```json
{
  "message": "Welcome, github.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJpYXQiOjE1Njk1MzI2ODEsImV4cCI6MTU2OTYxOTA4MX0.daDFxArTCCgXak4hbADqXwBkDNScZ7c1pSDZa3gbh48"
}
```

#### GET -> /api/verbs

##### Response: (200)

```json
[
  {
    "id": 1,
    "question": "abandonar",
    "answer": "abandono"
  },
  {
    "id": 2,
    "question": "abordar",
    "answer": "abordo"
  },
  {
    "id": 3,
    "question": "abrazar",
    "answer": "abrazas"
  },
  {
    "id": 4,
    "question": "abrir",
    "answer": "abres"
  },
  {
    "id": 5,
    "question": "aburrir",
    "answer": "aburres"
  },
  {
    "id": 6,
    "question": "acampar",
    "answer": "acampas"
  },
  {
    "id": 7,
    "question": "acercar",
    "answer": "acercas"
  },
  {
    "id": 8,
    "question": "acortar",
    "answer": "acortamos"
  },
  {
    "id": 9,
    "question": "adivinar",
    "answer": "adivinas"
  },
  {
    "id": 10,
    "question": "admirar",
    "answer": "admiran"
  },
  {
    "id": 11,
    "question": "admitir",
    "answer": "admiten"
  },
  {
    "id": 12,
    "question": "adorar",
    "answer": "adoran"
  },
  {
    "id": 13,
    "question": "adornar",
    "answer": "adornan"
  },
  {
    "id": 14,
    "question": "advertir",
    "answer": "advierten"
  },
  {
    "id": 15,
    "question": "afirmar",
    "answer": "afirman"
  }
]
```
