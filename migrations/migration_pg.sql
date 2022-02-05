
CREATE SEQUENCE USUARIO_seq;

CREATE TABLE USUARIO (
    nome text,
    usuario varchar(255) UNIQUE,
    senha text,
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('USUARIO_seq')
);

CREATE SEQUENCE CLIENTE_seq;

CREATE TABLE CLIENTE (
    celular text,
    id INTEGER DEFAULT NEXTVAL ('CLIENTE_seq') PRIMARY KEY,
    fk_usuario_id INTEGER,
    UNIQUE (id, fk_usuario_id)
);

CREATE SEQUENCE FUNCIONARIO_seq;

CREATE TABLE FUNCIONARIO (
    id INTEGER DEFAULT NEXTVAL ('FUNCIONARIO_seq'),
    fk_usuario_id INTEGER,
    PRIMARY KEY (id, fk_usuario_id)
);

CREATE SEQUENCE PEDIDO_seq;

CREATE TABLE PEDIDO (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('PEDIDO_seq'),
    preco_total DECIMAL(10,0),
    frete DECIMAL(10,0),
    observacao text,
    tipoPedido text,
    status integer,
    dataHora TIMESTAMP(0),
    fk_forma_pagamento_id INTEGER,
    fk_cliente_id INTEGER
);

CREATE SEQUENCE RECORRENCIA_seq;

CREATE TABLE RECORRENCIA (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('RECORRENCIA_seq'),
    data_inicio TIMESTAMP(0),
    data_fim TIMESTAMP(0),
    intervalo_dias INT NOT NULL
);

CREATE SEQUENCE FORMA_PAGAMENTO_seq;

CREATE TABLE FORMA_PAGAMENTO (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('FORMA_PAGAMENTO_seq'),
    nome text
);

CREATE SEQUENCE ITEM_seq;

CREATE TABLE ITEM (
    quantidade DECIMAL(10,0),
    preco_unitario DECIMAL(10,0),
    id INTEGER DEFAULT NEXTVAL ('ITEM_seq') PRIMARY KEY,
    fk_produto_id INTEGER,
    fk_pedido_id INTEGER,
    UNIQUE (id, fk_pedido_id)
);

CREATE SEQUENCE PRODUTO_seq;

CREATE TABLE PRODUTO (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('PRODUTO_seq'),
    preco_unitario DECIMAL(10,0),
    metrica text,
    nome text
);

CREATE SEQUENCE PERSONALIZACAO_seq;

CREATE TABLE PERSONALIZACAO (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('PERSONALIZACAO_seq'),
    nome text,
    preco_unitario DECIMAL(10,0)
);

CREATE SEQUENCE ENDERECO_seq;

CREATE TABLE ENDERECO (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL ('ENDERECO_seq'),
    cep text,
    logradouro text,
    numero text,
    complemento text,
    bairro text,
    cidade text,
    estado text,
    fk_cliente_id INTEGER
);

CREATE TABLE PRODUTO_PERSONALIZACAO (
    fk_personalizacao_id INTEGER,
    fk_produto_id INTEGER,
    PRIMARY KEY (fk_personalizacao_id, fk_produto_id)
);

CREATE TABLE RECORRENCIA_PEDIDO (
    fk_recorrencia_id INTEGER,
    fk_pedido_id INTEGER,
    PRIMARY KEY (fk_recorrencia_id, fk_pedido_id)
);

create table ITEM_PERSONALIZACAO
(
    fk_produto_personalizacao_id int null,
    fk_item_id int null
);

ALTER TABLE CLIENTE ADD CONSTRAINT fk_cliente_usuario
    FOREIGN KEY (fk_usuario_id)
        REFERENCES USUARIO (id)
        ON DELETE CASCADE;

ALTER TABLE FUNCIONARIO ADD CONSTRAINT fk_funcionario_usuario
    FOREIGN KEY (fk_usuario_id)
        REFERENCES USUARIO (id)
        ON DELETE CASCADE;

ALTER TABLE PEDIDO ADD CONSTRAINT fk_pedido_forma_pagamento
    FOREIGN KEY (fk_forma_pagamento_id)
        REFERENCES FORMA_PAGAMENTO (id)
    ;

ALTER TABLE PEDIDO ADD CONSTRAINT fk_pedido_cliente
    FOREIGN KEY (fk_cliente_id)
        REFERENCES CLIENTE (id)
;

ALTER TABLE ITEM ADD CONSTRAINT fk_item_produto
    FOREIGN KEY (fk_produto_id)
        REFERENCES PRODUTO (id)
        ON DELETE CASCADE;

ALTER TABLE ITEM ADD CONSTRAINT fk_item_pedido
    FOREIGN KEY (fk_pedido_id)
        REFERENCES PEDIDO (id)
        ON DELETE RESTRICT;

ALTER TABLE ENDERECO ADD CONSTRAINT fk_endereco_cliente
    FOREIGN KEY (fk_cliente_id)
        REFERENCES Cliente (id)
        ON DELETE CASCADE;

ALTER TABLE PRODUTO_PERSONALIZACAO ADD CONSTRAINT fk_produto_personalizacao
    FOREIGN KEY (fk_personalizacao_id)
        REFERENCES PERSONALIZACAO (id)
        ON DELETE SET NULL;

ALTER TABLE PRODUTO_PERSONALIZACAO ADD CONSTRAINT fk_personalizacao_produto
    FOREIGN KEY (fk_produto_id)
        REFERENCES PRODUTO (id)
        ON DELETE SET NULL;

ALTER TABLE RECORRENCIA_PEDIDO ADD CONSTRAINT fk_recorrencia
    FOREIGN KEY (fk_recorrencia_id)
        REFERENCES RECORRENCIA (id)
        ON DELETE SET NULL;

ALTER TABLE RECORRENCIA_PEDIDO ADD CONSTRAINT FK_Recorrencia_pedido
    FOREIGN KEY (fk_pedido_id)
        REFERENCES Pedido (id)
        ON DELETE RESTRICT;


ALTER TABLE ITEM_PERSONALIZACAO ADD CONSTRAINT fk_produto_personalizacao_id
    FOREIGN KEY (fk_produto_personalizacao_id)
        REFERENCES personalizacao (id)
        ON DELETE CASCADE;

ALTER TABLE ITEM_PERSONALIZACAO ADD CONSTRAINT fk_item_personalizado
    FOREIGN KEY (fk_item_id)
        REFERENCES item (id)
        ON DELETE CASCADE;


/*********************************************************/
/* USUARIO INFO */
INSERT INTO usuario (nome, usuario, senha, id) VALUES ('CLIENTE', 'cliente', '12345', 1);
INSERT INTO usuario (nome, usuario, senha, id) VALUES ('FUNCIONARIO', 'funcionario', '12345', 2);
INSERT INTO cliente (celular, id, fk_usuario_id) VALUES ('2199999991', 1, 1);
INSERT INTO funcionario (id, fk_usuario_id) VALUES (1, 2);
INSERT INTO endereco (id, cep, logradouro, numero, complemento, bairro, cidade, estado, fk_cliente_id)
VALUES (1, '00000-000', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 1);

/* FORMA_PAGAMENTO */
INSERT INTO forma_pagamento (id, nome)
VALUES (1, 'dinheiro');

/* PEDIDO */
INSERT INTO pedido (id, preco_total, frete, observacao, tipoPedido, dataHora, fk_forma_pagamento_id, fk_cliente_id, status)
VALUES (1, 66.60, 5.00, '', 'recorrencia', now(), 1, 1, 1);

/* RECORRENCIA */
INSERT INTO recorrencia (id, data_inicio, data_fim, intervalo_dias)
VALUES (1, now(), null, 1);
INSERT INTO recorrencia_pedido (fk_recorrencia_id, fk_pedido_id)
VALUES (1, 1);

/* PRODUTO */
INSERT INTO produto (id, preco_unitario, metrica, nome)
VALUES (1, 1.10, 'un', 'pao');
INSERT INTO produto (id, preco_unitario, metrica, nome)
VALUES (2, 50.10, 'un', 'bolo'); /* personalizado */
INSERT INTO personalizacao (id, nome, preco_unitario)
VALUES (1, 'M&Ms', 5.50);
INSERT INTO produto_personalizacao (fk_personalizacao_id, fk_produto_id)
VALUES (1, 2); /* bolo com M&Ms */

/* ITEM DE PEDIDO */
INSERT INTO item (id, quantidade, preco_unitario, fk_produto_id, fk_pedido_id)
VALUES (1, 10, 1.10, 1, 1); /* 10 pães */
INSERT INTO item (id, quantidade, preco_unitario, fk_produto_id, fk_pedido_id)
VALUES (2, 1, 55.60, 2, 1); /* 1 bolo */
INSERT INTO item_personalizacao (fk_produto_personalizacao_id, fk_item_id)
VALUES (1, 2);