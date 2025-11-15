import type { Component } from "vue";

export type LazyComponent = () => Promise<{ default: Component }>;
