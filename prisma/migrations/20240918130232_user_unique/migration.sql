/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `Org` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Org_user_key" ON "Org"("user");
