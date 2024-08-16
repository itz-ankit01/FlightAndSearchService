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
and then execute
`npx sequelize db:migrate`


```

## DB Design
- Airplane Table
- Flight
- City
- Airport

- A flight belongs to an airplane but one airplane can be used to multiple flights.
- A City has many airports but one airport belongs to a city.
- One airport can have many flights, but a  flight belongs to one  airport.

```

## Tables

- city -> id, name, created_at, updated_at

- Airport -> id, name, address, city_id, created_at, updated_at,

- Relationship -> City has many airports and Airports belongs to a city (one to many)
