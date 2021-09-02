# API Auth JavaScript Web Token

> With this simple app you can send email and password req and create a token when auth. You can verify the token and return user id from db.

![](https://img.shields.io/badge/status-in_progress-red?)

#### Tools & Packages

- TypeScript.
- Postgres with TypeORM.
- JWT, Bcrypt.

#### API

##### Create User

```
/users

# post
{
  "email": "email@email.com",
  "password": "password"
}

# return
{
  "email": "email@email.com",
  "password": "password",
  "id": "id"
}
```

##### Auth User

```
/auth

# post
{
	"email": "teste04@gmail.com",
	"password": "123456"
}

# return
jwt token
```
