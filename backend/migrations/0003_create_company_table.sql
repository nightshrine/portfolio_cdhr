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

