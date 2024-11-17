-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "developments" TEXT NOT NULL,
    "technologies" TEXT NOT NULL
);
INSERT INTO "new_Company" ("name", "developments", "period", "summary", "technologies", "url") SELECT "company_name", "developments", "period", "summary", "technologies", "url" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "career" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "qiita_url" TEXT NOT NULL,
    "github_url" TEXT NOT NULL,
    "future_goal" TEXT NOT NULL
);
INSERT INTO "new_Profile" ("career", "future_goal", "github_url", "hobbies", "name", "qiita_url", "university") SELECT "career", "future_goal", "github_url", "hobbies", "name", "qiita_url", "university" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "result" TEXT NOT NULL
);
INSERT INTO "new_Project" ("name", "result", "summary", "technologies") SELECT "project_name", "result", "summary", "technologies" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_ProjectReference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    CONSTRAINT "ProjectReference_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjectReference" ("display_name", "project_id", "url") SELECT "display_name", "project_id", "url" FROM "ProjectReference";
DROP TABLE "ProjectReference";
ALTER TABLE "new_ProjectReference" RENAME TO "ProjectReference";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("name", "password") SELECT "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
