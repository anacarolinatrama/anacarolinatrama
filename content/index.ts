import { en } from "./en";
import { pt } from "./pt";
import type { Copy, Lang } from "./types";

export const copy: Record<Lang, Copy> = { pt, en };

export type { Copy, Lang } from "./types";
