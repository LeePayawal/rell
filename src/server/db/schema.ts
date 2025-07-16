// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `rell_${name}`);

export const users = createTable(
  "users",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),

    name: d.varchar({ length: 256 }),
    age: d.integer(),
    studentNumber: d.varchar({ length: 50 }),
    course: d.varchar({ length: 100 }),
    yearLevel: d.varchar({ length: 50 }),
    section: d.varchar({ length: 50 }),
    birthdate: d.date(),
    gender: d.varchar({ length: 20 }),
    hobbies: d.varchar({ length: 256 }),
    address: d.varchar({ length: 256 }),
    email: d.varchar({ length: 256 }),
    phoneNumber: d.varchar({ length: 20 }),
    guardianName: d.varchar({ length: 256 }),
    guardianContact: d.varchar({ length: 20 }),
    emergencyContact: d.varchar({ length: 20 }),
    nationality: d.varchar({ length: 100 }),
    religion: d.varchar({ length: 100 }),
    profilePictureUrl: d.varchar({ length: 512 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d
      .timestamp({ withTimezone: true })
      .$onUpdate(() => new Date()),
  }),
  //(t) => [index("name_idx").on(t.name)],
);

