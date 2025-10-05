import type { Block } from "~/shared/lib/dynamic-page";

export interface Page {
  matched: boolean;
  template: string;
  params: Record<string, string | number>;
  title: string;
  slug: string;
  blocks: Block[];
}
