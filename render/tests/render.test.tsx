import { afterAll, beforeAll, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { MageTestServer } from "../../test-utils/server.ts";
import { render } from "../render.ts";

let server: MageTestServer;

beforeAll(() => {
  server = new MageTestServer();

  server.app.get("/", (c) => {
    render(c, <h1>Hello, World!</h1>);
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
});
