-- CreateTable
CREATE TABLE "cliente" (
    "celular" TEXT,
    "id" SERIAL NOT NULL,
    "fk_usuario_id" INTEGER,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "cep" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "fk_cliente_id" INTEGER,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forma_pagamento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,

    CONSTRAINT "forma_pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id" SERIAL NOT NULL,
    "fk_usuario_id" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id","fk_usuario_id")
);

-- CreateTable
CREATE TABLE "item" (
    "quantidade" DECIMAL(10,0),
    "preco_unitario" DECIMAL(10,0),
    "id" SERIAL NOT NULL,
    "fk_produto_id" INTEGER,
    "fk_pedido_id" INTEGER,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_personalizacao" (
    "fk_produto_personalizacao_id" INTEGER,
    "fk_item_id" INTEGER
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "preco_total" DECIMAL(10,0),
    "frete" DECIMAL(10,0),
    "observacao" TEXT,
    "tipopedido" TEXT,
    "datahora" TIMESTAMP(0),
    "fk_forma_pagamento_id" INTEGER,
    "fk_cliente_id" INTEGER,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personalizacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "preco_unitario" DECIMAL(10,0),

    CONSTRAINT "personalizacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "preco_unitario" DECIMAL(10,0),
    "metrica" TEXT,
    "nome" TEXT,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto_personalizacao" (
    "fk_personalizacao_id" INTEGER,
    "fk_produto_id" INTEGER
);

-- CreateTable
CREATE TABLE "recorrencia" (
    "id" SERIAL NOT NULL,
    "data_inicio" TIMESTAMP(0),
    "data_fim" TIMESTAMP(0),
    "intervalo_dias" INTEGER NOT NULL,

    CONSTRAINT "recorrencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recorrencia_pedido" (
    "fk_recorrencia_id" INTEGER NOT NULL,
    "fk_pedido_id" INTEGER NOT NULL,

    CONSTRAINT "recorrencia_pedido_pkey" PRIMARY KEY ("fk_recorrencia_id","fk_pedido_id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "nome" TEXT,
    "usuario" VARCHAR(255),
    "senha" TEXT,
    "id" SERIAL NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_id_fk_usuario_id_key" ON "cliente"("id", "fk_usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "item_id_fk_pedido_id_key" ON "item"("id", "fk_pedido_id");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usuario_key" ON "usuario"("usuario");

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "fk_cliente_usuario" FOREIGN KEY ("fk_usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "fk_endereco_cliente" FOREIGN KEY ("fk_cliente_id") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "funcionario" ADD CONSTRAINT "fk_funcionario_usuario" FOREIGN KEY ("fk_usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "fk_item_pedido" FOREIGN KEY ("fk_pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "fk_item_produto" FOREIGN KEY ("fk_produto_id") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item_personalizacao" ADD CONSTRAINT "fk_item_personalizado" FOREIGN KEY ("fk_item_id") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item_personalizacao" ADD CONSTRAINT "fk_produto_personalizacao_id" FOREIGN KEY ("fk_produto_personalizacao_id") REFERENCES "personalizacao"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "fk_pedido_cliente" FOREIGN KEY ("fk_cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "fk_pedido_forma_pagamento" FOREIGN KEY ("fk_forma_pagamento_id") REFERENCES "forma_pagamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produto_personalizacao" ADD CONSTRAINT "fk_produto_personalizacao" FOREIGN KEY ("fk_personalizacao_id") REFERENCES "personalizacao"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produto_personalizacao" ADD CONSTRAINT "fk_personalizacao_produto" FOREIGN KEY ("fk_produto_id") REFERENCES "produto"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recorrencia_pedido" ADD CONSTRAINT "fk_recorrencia_pedido" FOREIGN KEY ("fk_pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recorrencia_pedido" ADD CONSTRAINT "fk_recorrencia" FOREIGN KEY ("fk_recorrencia_id") REFERENCES "recorrencia"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
