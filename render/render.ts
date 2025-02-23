import type { JSX } from "preact";
import { renderToStringAsync } from "preact-render-to-string";
import type { MageContext } from "./types.ts";
import { buildId } from "./signals.ts";

/**
 *  Render JSX to HTML and serve it.
 *
 * @param c MageContext
 * @param component JSX to render to HTML
 */
export const render = async (
  c: MageContext,
  component: JSX.Element,
): Promise<void> => {
  buildId.value = c.buildId;

  const html = await renderToStringAsync(component);

  c.html(`<!DOCTYPE html>${html}`);
};
