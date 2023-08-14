## Description
Проверка пинга осуществляется командой:

curl -X 'POST' \
  'http://localhost:3000/api/test/v1/getInfoById' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "test.getInfoById",
  "params": {
    "id": "314051315729503241674281648803662839371110690",
    "host": ## === Указываем нужный адрес без http === ##
  }
}'

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running in Docker

```bash
# build 
$ docker build -t nest-test-app .

# run
$ docker run -p 80:3000 nest-test-app
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

