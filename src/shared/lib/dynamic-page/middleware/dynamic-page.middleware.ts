import type { RouteLocationNormalizedGeneric } from "#vue-router";

export async function dynamicPageMiddleware(to: RouteLocationNormalizedGeneric) {
  const url = import.meta.server
    ? `http://beny-directus:8055/resolve-route${to.path}`
    : `https://directus.localhost/resolve-route${to.path}`;

  try {
    to.meta.currentPage = await $fetch(url);
  } catch (error) {
    console.error("Не получилось выполнить запрос:", error);
  }
}
