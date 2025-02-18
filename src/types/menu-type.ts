// type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
import { Prisma } from '@prisma/client';

export interface Imenu {
  id: number;
  name: string;
  description?: string | null;
  link: string;
  position?: number;
  subMenu?: Prisma.JsonValue | null;
}

