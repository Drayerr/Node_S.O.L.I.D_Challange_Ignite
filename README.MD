# Introduction to S.O.L.I.D challenge by Rocketseat.
  

## Application Routes:

POST /users

PATCH /users/:user_id/admin

GET /users/:user_id

GET /users


## Commands:

`yarn` or `npm i` - Download dependencies.
`yarn dev` or `npm run dev` - Run application.
`yarn test` or  `npm run test` - Run test configured by jest.

## Details:
The test command are getting two errors:
* should be able to create an user with all props
* should be able to list all users

This because of the jest version that was updated after the challenge template was created.
But the validations described in the test error are being done successfully.