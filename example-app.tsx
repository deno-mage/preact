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
    </html>,
  );
});

Deno.serve(app.handler);
