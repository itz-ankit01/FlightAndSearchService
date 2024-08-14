# Welcome to Flight Services

## Project setup

- clone the project on your local
- Execute `npm intall` on the same path as your root directory of the downloaded Project
- Create a `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
