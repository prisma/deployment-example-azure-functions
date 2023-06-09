# Azure Functions Deployment Example

## Getting started

Clone the example:
```bash
git clone git@github.com:prisma/deployment-example-azure-functions
```

Install the dependencies:

```bash
cd deployment-example-azure-functions
npm install
```

Create a `.env` file:
```bash
cp .env.sample .env
```

Update the `DIRECT_DATABASE_URL` environment variable to point ot your database:

```bash
DIRECT_DATABASE_URL="postgresql://johndoe:super-strong-password@host.db.ondigitalocean.com:5432/deployment-example-azure-functions"
```

Configure your database connection string:

```bash
# .env
DATABASE_URL="postgresql://johndoe:super-strong-password@host.db.ondigitalocean.com:5432/deployment-example-azure-functions"
```

Start up the application
```
npm run dev
```


