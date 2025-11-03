import { defineNuxtRouteMiddleware } from "#app";
import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const { data } = await useAsyncData("users", () => $fetch(`${pathDirectus}/resolve-route${to.path}`));

    to.meta.currentPage = data;
  } catch (error) {
    console.error("Не получилось выполнить запрос:", error);
  }
});
