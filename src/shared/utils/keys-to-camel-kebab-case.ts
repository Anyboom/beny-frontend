import { camelize } from "~/shared/utils/camelize";

export function keysToCamelKebabCase(obj: Record<string, any>) {
  const newObj: typeof obj = {};
  for (const key in obj) newObj[camelize(key)] = obj[key];
  return newObj;
}
