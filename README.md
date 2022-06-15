# Gadget Shopify Faker

## Getting Started

The following environment variables should be set to run the app. These can be set on the command line or if using direnv, in `.env.local`:

```sh
export NEXT_PUBLIC_API_KEY='The API key provided to you by the Shopify App'
export NEXT_PUBLIC_GADGET_APP_URL='The app url of your local app. For example: https://empty.ggt.pub:3000'
```

## Setup port forward for local-ssl-proxy (Linux only)

Linux by default requires root permissions to run on ports less than 1024. To workaround this, you can set `HTTPS_PORT` on the command line or if using direnv, in `.env.local`:

```sh
export HTTPS_PORT=8443
```

and then use `iptables` to setup a NAT redirect:

```sh
sudo iptables -A OUTPUT -t nat -p tcp --destination 127.0.0.1 --dport 443 -j REDIRECT --source 127.0.0.1 --to-port 8443
```

## Run the development server

If using direnv + nix to manage your environment, first run:

```sh
direnv allow
```

then run the development server:

```sh
yarn dev
```

Open [https://localhost](https://localhost) with your browser to see the result. We must run the proxy on port `443` as this is required for correct iframe security policies.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://localhost/api/hello](https://localhost/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Linting & Typechecking

To correct any errors and autoformat everything, run:

```sh
yarn lint:fix
```

To check if all the existing code lints properly, run:

```sh
yarn lint
```

To check if all the existing code typechecks properly, run:

```
yarn typecheck
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
