// drizzle.config.ts
import { defineConfig  } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/user.ts",//'./libs/db/src/schema',
  out: "./drizzle",//'./libs/db/migrations',
});
