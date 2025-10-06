import { defineNuxtRouteMiddleware, useAsyncData } from "#app";
import { useDirectus } from "#imports";

type pageResponse = {
  matched: boolean;
};

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const { data } = await useAsyncData<pageResponse>("global", async () => {
      const directus = useDirectus();
      return directus(`/resolve-route${to.path}`);
    });

    to.meta.pageData = data.value;
  } catch (error) {
    console.error("Route resolution failed:", error);
    return false;
  }
});
