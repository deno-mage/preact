import { afterAll, beforeAll, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { MageTestServer } from "../../test-utils/server.ts";
import { render } from "../render.ts";
import { assetURL } from "../assets.ts";

let server: MageTestServer;

beforeAll(() => {
  server = new MageTestServer();

  server.app.get("/", (c) => {
    render(c, <h1>Hello, World!</h1>);
  });

  server.app.get("/asset", (c) => {
    render(
      c,
      <>
        <img src={assetURL("/public/image.png")} />
        <img src={assetURL("/public/image-no-extension")} />
      </>,
    );
  });

  server.start();
});

afterAll(async () => {
  await server.stop();
});

describe("responses - text", () => {
  it("should return text response", async () => {
    const response = await fetch(server.url("/"), {
      method: "GET",
    });

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=UTF-8",
    );
    expect(await response.text()).toBe("<!DOCTYPE html><h1>Hello, World!</h1>");
  });

  it("should return text response with asset", async () => {
    const response = await fetch(server.url("/asset"), {
      method: "GET",
    });

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=UTF-8",
    );
    expect(await response.text()).toBe(
      `<!DOCTYPE html><img src="/public/image${server.app.buildId}.png"/><img src="/public/image-no-extension${server.app.buildId}"/>`,
    );
  });
});
