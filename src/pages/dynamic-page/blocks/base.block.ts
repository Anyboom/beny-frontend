import type { Component } from "vue";

export abstract class BaseBlock {
  public static readonly name: string;
  public abstract component: Component;
}
