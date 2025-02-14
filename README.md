<p align="center" style="color: #343a40">
  <img src="https://raw.githubusercontent.com/deno-mage/server/main/mage.png" alt="Emotion logo" height="150" width="150">
  <h1 align="center">Mage</h1>
</p>
<div align="center">
  Build web applications with <a href="https://deno.com">Deno</a> and <a href="https://preactjs.com/">Preact</a>
</div>

## Mage Preact

Preact rendering for Mage apps.

### Getting started

```sh
deno add jsr:@mage/app jsr:@mage/preact npm:preact
```

Minimal `compilerOptions`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact"
  }
}
```

An example app:

```tsx
import { MageApp } from "@mage/app";
import { render } from "@mage/preact";

const app = new MageApp();

app.get("/", async (c) => {
  await render(
    c,
    <html lang="en">
      <head>
        <title>Hello, world!</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
  );
});

Deno.serve(app.handler);
```

Run the app:

```
deno run --allow-all main.ts
```
