# Introduction to S.O.L.I.D challenge by Rocketseat.
  

## Application Routes:

POST /users <br>
PATCH /users/:user_id/admin <br>
GET /users/:user_id <br>
GET /users <br>
Documentation: localhost:3333/api-docs/

## Commands:

`yarn` or `npm i` - Download dependencies. <br>
`yarn dev` or `npm run dev` - Run application. <br>
`yarn test` or  `npm run test` - Run test configured by jest.

## Details:
The test command are getting two errors:
* should be able to create an user with all props
* should be able to list all users

This because of the jest version that was updated after the challenge template was created.
But the validations described in the test error are being done successfully.
