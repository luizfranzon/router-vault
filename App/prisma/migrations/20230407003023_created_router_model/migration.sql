-- CreateTable
CREATE TABLE "Router" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "routerModel" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,
    "cableDownloadSpeed" INTEGER NOT NULL,
    "cableUploadSpeed" INTEGER NOT NULL,
    "wifiDownloadSpeed2G" INTEGER NOT NULL,
    "wifiUploadSpeed2G" INTEGER NOT NULL,
    "wifiDownloadSpeed5G" INTEGER NOT NULL,
    "wifiUploadSpeed5G" INTEGER NOT NULL,
    "receivePower" INTEGER NOT NULL,
    "transmitPower" INTEGER NOT NULL,
    "configuredAt" DATETIME NOT NULL,
    "configuredBy" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Router_macAddress_key" ON "Router"("macAddress");
