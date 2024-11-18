-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "url" TEXT,
    "display_name" TEXT,
    "summary" TEXT NOT NULL
);
INSERT INTO "new_History" ("display_name", "id", "start_date", "summary", "title", "url") SELECT "display_name", "id", "start_date", "summary", "title", "url" FROM "History";
DROP TABLE "History";
ALTER TABLE "new_History" RENAME TO "History";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
