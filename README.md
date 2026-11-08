# React + Vite

## Start the project

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the address shown in the terminal in your browser (usually `http://localhost:5173`).

## Mock API with json-server

[json-server](https://github.com/typicode/json-server) exposes a JSON file as a REST API, useful as a fake backend.

1. Create a `db.json` file in the project root. Each top-level key becomes a resource:

```json
{
  "users": [
    { "id": "1", "firstName": "Mario", "lastName": "Rossi" },
    { "id": "2", "firstName": "Anna", "lastName": "Verdi" }
  ]
}
```

2. Start the server in a second terminal, next to `npm run dev`:

```bash
npx json-server db.json
```

By default it listens on `http://localhost:3000`. Use `--port` to change it:

```bash
npx json-server db.json --port 3001
```

3. Call it from the app or from the terminal:

| Method | URL | Action |
|---|---|---|
| `GET` | `/users` | list all users |
| `GET` | `/users/1` | get one user |
| `POST` | `/users` | create a user |
| `PUT` / `PATCH` | `/users/1` | replace / update a user |
| `DELETE` | `/users/1` | delete a user |

```js
fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((users) => console.warn(users))
```

`POST`, `PUT`, `PATCH` and `DELETE` requests modify `db.json` directly.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
