/*
  Warnings:

  - Made the column `fk_produto_personalizacao_id` on table `item_personalizacao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fk_item_id` on table `item_personalizacao` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "item_personalizacao" ALTER COLUMN "fk_produto_personalizacao_id" SET NOT NULL,
ALTER COLUMN "fk_item_id" SET NOT NULL,
ADD CONSTRAINT "item_personalizacao_pkey" PRIMARY KEY ("fk_produto_personalizacao_id", "fk_item_id");
