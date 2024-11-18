-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "History" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "summary" TEXT NOT NULL
);
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
