import { sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: text("description"),
  price: integer("price"),
  image: text("image"),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});
