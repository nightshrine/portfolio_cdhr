-- CreateTable
CREATE TABLE "Profile" (
    "profile_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "career" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "qiita_url" TEXT NOT NULL,
    "github_url" TEXT NOT NULL,
    "future_goal" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "result" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectReference" (
    "project_reference_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    CONSTRAINT "ProjectReference_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("project_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "developments" TEXT NOT NULL,
    "technologies" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
