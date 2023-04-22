/*
  Warnings:

  - You are about to drop the column `receivePower` on the `Router` table. All the data in the column will be lost.
  - You are about to drop the column `transmitPower` on the `Router` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Router" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "routerModel" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,
    "cableDownloadSpeed" REAL NOT NULL,
    "cableUploadSpeed" REAL NOT NULL,
    "wifiDownloadSpeed2G" REAL NOT NULL,
    "wifiUploadSpeed2G" REAL NOT NULL,
    "wifiDownloadSpeed5G" REAL NOT NULL,
    "wifiUploadSpeed5G" REAL NOT NULL,
    "configuredAt" DATETIME NOT NULL,
    "configuredBy" TEXT NOT NULL
);
INSERT INTO "new_Router" ("cableDownloadSpeed", "cableUploadSpeed", "configuredAt", "configuredBy", "id", "macAddress", "routerModel", "wifiDownloadSpeed2G", "wifiDownloadSpeed5G", "wifiUploadSpeed2G", "wifiUploadSpeed5G") SELECT "cableDownloadSpeed", "cableUploadSpeed", "configuredAt", "configuredBy", "id", "macAddress", "routerModel", "wifiDownloadSpeed2G", "wifiDownloadSpeed5G", "wifiUploadSpeed2G", "wifiUploadSpeed5G" FROM "Router";
DROP TABLE "Router";
ALTER TABLE "new_Router" RENAME TO "Router";
CREATE UNIQUE INDEX "Router_macAddress_key" ON "Router"("macAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
