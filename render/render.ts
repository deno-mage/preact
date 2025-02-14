import type { JSX } from "preact";
import { renderToStringAsync } from "preact-render-to-string";
import type { MageContext } from "@mage/app";

export const render = async (c: MageContext, component: JSX.Element) => {
  const html = await renderToStringAsync(component);

  c.html(`<!DOCTYPE html>${html}`);
};
