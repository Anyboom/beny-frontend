import { defineNuxtRouteMiddleware } from "#app";
import { dynamicPageMiddleware } from "~/shared/lib/dynamic-page";

export default defineNuxtRouteMiddleware(dynamicPageMiddleware);
