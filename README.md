## CLI

### run development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### run production server

    1. build source files
    2. run server

```bash
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### create static source file

```bash
yarn build
# static files are created in /.next/ directory
```

### run on simulator

```bash
yarn run:android # for android
yarn run:ios # for iOS
```

### app build

```bash
# 주의! 개발용 서버는 반드시 종료 후 빌드를 진행해야 함
# 앱 빌드했을 때, 네트워크가 비정상적으로 동작할 수 있음

#안드로이드 스튜디오 혹은 xCode 를 열고, 빌드 설정에 따라 앱 빌드, cli로 제공시, 변수 대응 어려움
```

### DB Schema

```bash
# initialize database
yarn prisma:init

# create migration file
yarn prisma:migrate:dev

# clear all table data
yarn prisma:migrate:reset

#mark to resolve migration file
yarn prisma:run:resolve

#check migration file
yarn prisma:run:status

# deploy migration data to database
yarn prisma:run:deploy

# get database schema
yarn prisma:pull

# run migration flow
yarn prisma:run:migration

# open prisma studio
yarn prisma:studio
```

## Versions

- nextJS 13.1.6
- react 18.2.0
- sass 1.58.3
- prisma 4.11.0
- CapacitorJS 4.6.3
- node 18.12.1

## code convention

- ESLint
- Prettier
