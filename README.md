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

1. create auth folder into public and inside auth create a file name {{[...nextauth].js}}
2. import

```jsx
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
```

3. next auth docs > adapters > prisma install {@next-auth/prisma-adapter}
   add
   ```jsx
   import { PrismaAdapter } from "@next-auth/prisma-adapter";
   import client from "../../../prisma/client";
   ```
4. create a .env.local file here we can add next secret keys

### Now we have to create google cloud account

1. Go to https://console.cloud.google.com/welcome?project=image-sharing-apps
2. Go go api and services > credential
3. go to create credential > auth client id >application id > wen app > 1st http://localhost:3000 > Authorised redirect URIs = http://localhost:3000/api/auth/callback/google
4. Now copy code from - https://next-auth.js.org/adapters/prisma
   that code is

```prisma
   model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?  @db.Text
  access_token       String?  @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?  @db.Text
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

- it will create every time we go through google off its doing automatically make a new account and set all session for us
  the verification tokens and all other

change this

```prisma
model Post {
  id        String      @id @default(cuid())
  title     String   @db.VarChar(255)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  content   String?
  published Boolean  @default(false)
  userId    String
  user      User      @relation(fields: [userId], references: [id])
  // comments  Comment[]
  // hearts    Heart[]
}
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  posts         Post[]
  // comments      Comment[]
  // hearts        Heart[]
}
```
