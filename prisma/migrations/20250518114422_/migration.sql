-- CreateTable
CREATE TABLE "WebsiteObject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webname" TEXT,
    "webdata" TEXT,
    "userId" TEXT,
    CONSTRAINT "WebsiteObject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteObject_webname_key" ON "WebsiteObject"("webname");
