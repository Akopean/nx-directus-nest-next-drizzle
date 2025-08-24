import { db } from './index.js';
import { pages } from './schema/index.js';

export async function getPages() {
  return db.select().from(pages);
}
