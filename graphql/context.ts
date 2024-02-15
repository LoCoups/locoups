// /graphql/context.ts
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export type Context = {
  db: PrismaClient;
};
export const context: Context = {
  db,
};
