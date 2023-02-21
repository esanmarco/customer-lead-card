This is a Fullstack NextJS application for generating Leads behind an auth-wall

## Tech Stack

- NextJS 13 (in `app` dir)
- Next-Auth (auth)
- TailwindCSS + DaisyUI (UI)
- Tanstack Query (for mutations)
- Planetscale (DB hosting)
- Prisma (db ORM)
- Vercel (hosting)

## Steps to reproduce

- Setup and install NextJS application [>>](https://nextjs.org/docs/getting-started)
- Install & Setup TailwindCSS [>>](https://tailwindcss.com/docs/guides/nextjs)
- Install & Integrate DaisyUI [>>](https://daisyui.com/docs/install/)
- Install & Setup Next-Auth [>>](https://next-auth.js.org/getting-started/example)
- Integrate Next-Auth Middleware for auth checks [>>](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware)
- Setup & integrate Github repository [>>](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- Create `app` route for `dashboard/*.tsx`
- Create "signin" Page on `/` route (or use next-auth's built in signin pages)
- Setup Planetscale DB [>>](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide)
- Install & Setup Prisma [>>](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)
- Install & Setup Tanstack Query [>>](https://tanstack.com/query/latest/docs/react/installation)
- Create prisma models for User / Lead
- Build functionality for adding a new user on login (if applicable)
- Build UI for Dashboard Page (modal for adding new leads)
- Create GET request & map through leads coming from DB
- Setup Vercel project & deployment
