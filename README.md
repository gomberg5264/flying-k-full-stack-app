# cc11-project.continuous-delivery-vue-a
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

# Flying K Finder App

A single-page web app that displays Flying K Truck Stops in the U.S., designed to be used by Truckers on the road or from their homes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Please install these programs on your machine if you don't already have them:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Installing

1. Create a local copy of the database. In the terminal enter:

```bash
echo "create database truck_stops;" | psql
```

2. In the project directory, run yarn to install dependencies:

```bash
yarn
```

3. Still in the project directory, run this command to 1. start the server, 2. run database migrations and seeds, 3. start the client front-end:

```bash
yarn hack
```

You should now be able to view the app at `http://localhost:8081/` (Your port may vary depening on your machine. Check the results message in the terminal.)

**Note:** By keeping `yarn hack` running, any updates you make to the front-end will be automatically visible in the browser (aka hot reloading).

## Running the tests

You can run tests with:

```bash
yarn test
```


### Using the API

This is a REST API that only supports GET requests.

| Endpoint                            | Returns an Array of:                             |
| ----------------------------------- | ------------------------------------------------ |
| api/locations/                      | all locations in the database                    |
| api/state/:stateName               | all truckstops that exist in one specified state |
| api/state/:stateName/city/:cityName |  all truckstops that exist in one specific city in state |
|api/state/:stateName/highway/:highway|all truckstops that exist on one specific highway in state|
|api/state/:stateName/city/:cityName/restaurant/:restaurant|all truckstops that exist on one specific highway in state|
|api/state/:stateName/highway/:highway/restaurant/:restaurant|all truckstops with specified restaurant in specific city in state|
|api/state/:stateName/city/:cityName/type/:type|all truckstops with specified type in specific city in state|
|api/state/:stateName/highway/:highway/type/:type|all truckstops with specified type on specific highway in state|

## Deployment

To deploy this on a live server, you need to create the `dist` folder.

```bash
yarn build
```

## Authors

This app made was made with ❤️ by engineers-in-training at [Code Chrysalis](https://www.codechrysalis.io/).

- [Ashley Kekona](https://github.com/akekona8)
- [Genta Shibasaki](https://github.com/GentaShibasaki)
- [Max Turer](https://github.com/caxwel)
- [Ryuki Kuga](https://github.com/ryukikikie)
- [Travis Ricks](https://github.com/travisricks)

## Acknowledgments

- Thanks to our awesome Instructors and Engineers-in-Residence at CC that helped us make this!
