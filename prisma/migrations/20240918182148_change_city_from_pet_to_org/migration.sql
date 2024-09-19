/*
  Warnings:

  - You are about to drop the column `city` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `city` to the `Org` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Org" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
INSERT INTO "new_Org" ("id", "pass", "street", "user", "whatsapp") SELECT "id", "pass", "street", "user", "whatsapp" FROM "Org";
DROP TABLE "Org";
ALTER TABLE "new_Org" RENAME TO "Org";
CREATE UNIQUE INDEX "Org_user_key" ON "Org"("user");
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "adoption" BOOLEAN NOT NULL,
    "weightInGrams" INTEGER NOT NULL,
    "orgId" TEXT,
    CONSTRAINT "Pet_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("adoption", "age", "id", "name", "orgId", "weightInGrams") SELECT "adoption", "age", "id", "name", "orgId", "weightInGrams" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
