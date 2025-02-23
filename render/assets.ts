import { buildId } from "./signals.ts";

/**
 * Get asset URL for the provided path with the build id embedded in the url for cache busting
 *
 * @param path Path to the asset
 * @returns string The asset URL
 */
export const assetURL = (path: string): string => {
  const pathParts = path.split("/");
  const filename = pathParts.pop();

  if (filename?.includes(".")) {
    const filenameParts = filename.split(".");
    const extension = filenameParts.pop();
    const basename = filenameParts.join(".");
    pathParts.push(`${basename}${buildId.value}.${extension}`);
  } else {
    pathParts.push(`${filename}${buildId.value}`);
  }

  return pathParts.join("/");
};
