import type { Block } from "~/pages/dynamic-page";

export interface Page {
  matched: boolean;
  template: string;
  params: Record<string, string | number>;
  title: string;
  description: string;
  slug: string;
  blocks: Block[];
}
