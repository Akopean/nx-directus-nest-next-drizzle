// libs/db/src/schema/user.ts
import { pgTable, integer, text } from 'drizzle-orm/pg-core';

export const pages = pgTable('pages', {
  id: integer('id').primaryKey(),
  status: text('status'),
});

export const pagesTranslations = pgTable('pages_translations', {
  id: integer('id').primaryKey(),
  slug: text('slug'),
});