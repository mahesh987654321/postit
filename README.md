# Here i am going to create a next js 13 project which is called post it

# am using database as prisma and Postgresql

1. First step: install next 13 and setup tailwind css
2. connect the database : go to https://railway.app/ and create a Postgresql server
3. go to prisma and {npm install typescript ts-node @types/node --save-dev} install it and then {npx prisma init} run it. A prisma folder and a .env file will be create automatically
4. go to Postgresql and click connect link and copy Postgres Connection URL and paste it into .env file as DATABASE_URL
5. go to https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgres site and paste

```prisma
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
}
```

6. install npm install @prisma/client
7. then create a file called client.js within prisma folder

````js
import { PrismaClient } from "@prisma/client";
const client = globalThis.prisma || new PrismaClient();
if (ProcessingInstruction.env.NODE_ENV !== "production")
  globalThis.prisma = client;
export default client;
}
```

````
8. in terminal install { npx prisma migrate dev } it will insert data into postgraeql railway server

## next auth
