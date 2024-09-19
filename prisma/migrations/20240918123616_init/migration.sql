-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "adoption" BOOLEAN NOT NULL,
    "city" TEXT NOT NULL,
    "weightInGrams" INTEGER NOT NULL,
    "orgId" TEXT,
    CONSTRAINT "Pet_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Org" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL
);
