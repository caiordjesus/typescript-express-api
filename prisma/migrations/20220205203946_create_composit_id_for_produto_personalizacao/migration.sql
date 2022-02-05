/*
  Warnings:

  - Made the column `fk_personalizacao_id` on table `produto_personalizacao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fk_produto_id` on table `produto_personalizacao` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "produto_personalizacao" DROP CONSTRAINT "fk_produto_personalizacao";

-- DropForeignKey
ALTER TABLE "produto_personalizacao" DROP CONSTRAINT "fk_personalizacao_produto";

-- AlterTable
ALTER TABLE "produto_personalizacao" ALTER COLUMN "fk_personalizacao_id" SET NOT NULL,
ALTER COLUMN "fk_produto_id" SET NOT NULL,
ADD CONSTRAINT "produto_personalizacao_pkey" PRIMARY KEY ("fk_personalizacao_id", "fk_produto_id");

-- AddForeignKey
ALTER TABLE "produto_personalizacao" ADD CONSTRAINT "fk_produto_personalizacao" FOREIGN KEY ("fk_personalizacao_id") REFERENCES "personalizacao"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produto_personalizacao" ADD CONSTRAINT "fk_personalizacao_produto" FOREIGN KEY ("fk_produto_id") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
