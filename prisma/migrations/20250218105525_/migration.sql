/*
  Warnings:

  - The `subMenu` column on the `Menus` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Menus" DROP COLUMN "subMenu",
ADD COLUMN     "subMenu" JSONB;
