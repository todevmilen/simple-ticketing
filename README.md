

https://github.com/todevmilen/simple-ticketing/assets/78319110/47404f47-055a-428c-91b2-0a8b664af030

## Getting Started

```bash
git clone https://github.com/todevmilen/simple-ticketing.git
cd simple-ticketing
npm i
```
___

Add Postgres environment variable `DATABASE_URL` inside `.env` file. 

___

Generate Database Schema
```bash
prisma generate && prisma migrate dev --name init
```


Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
