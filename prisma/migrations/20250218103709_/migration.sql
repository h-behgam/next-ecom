-- CreateTable
CREATE TABLE "Menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "subMenu" TEXT[],

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);
