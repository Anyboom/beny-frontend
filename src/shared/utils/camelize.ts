import { cacheStringFunction } from "~/shared/utils/cache-string-function";

const camelizeRE = /-(\w)/g;

export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
