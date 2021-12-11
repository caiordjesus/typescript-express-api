CREATE TABLE USUARIO (
    nome tinytext,
    usuario varchar(255) UNIQUE,
    senha tinytext,
    id INTEGER PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE CLIENTE (
    celular tinytext,
    id INTEGER AUTO_INCREMENT,
    fk_usuario_id INTEGER,
    PRIMARY KEY (id, fk_usuario_id)
);

CREATE TABLE FUNCIONARIO (
    id INTEGER AUTO_INCREMENT,
    fk_usuario_id INTEGER,
    PRIMARY KEY (id, fk_usuario_id)
);

CREATE TABLE PEDIDO (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    preco_total DECIMAL,
    frete DECIMAL,
    observacao tinytext,
    tipoPedido tinytext,
    dataHora TIMESTAMP,
    fk_forma_pagamento_id INTEGER,
    fk_cliente_id INTEGER
);

CREATE TABLE RECORRENCIA (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_inicio TIMESTAMP,
    data_fim TIMESTAMP,
    intervalo_dias INT NOT NULL
);

CREATE TABLE FORMA_PAGAMENTO (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome tinytext
);

CREATE TABLE ITEM (
    quantidade DECIMAL,
    preco_unitario DECIMAL,
    id INTEGER AUTO_INCREMENT,
    fk_produto_id INTEGER,
    fk_pedido_id INTEGER,
    PRIMARY KEY (id, fk_pedido_id)
);

create table ITEM_PERSONALIZACAO
(
    fk_produto_personalizacao_id int null,
    fk_item_id int null,
    constraint fk_item_personalizacao
        foreign key (fk_produto_personalizacao_id) references personalizacao (id)
            on delete cascade,
    constraint fk_item_personalizado
        foreign key (fk_item_id) references item (id)
            on delete cascade
);



CREATE TABLE PRODUTO (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    preco_unitario DECIMAL,
    metrica tinytext,
    nome tinytext
);

CREATE TABLE PERSONALIZACAO (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome tinytext,
    preco_unitario DECIMAL
);

CREATE TABLE ENDERECO (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cep tinytext,
    logradouro tinytext,
    numero tinytext,
    complemento tinytext,
    bairro tinytext,
    cidade tinytext,
    estado tinytext,
    fk_cliente_id INTEGER
);

CREATE TABLE PRODUTO_PERSONALIZACAO (
    fk_personalizacao_id INTEGER,
    fk_produto_id INTEGER
);

CREATE TABLE RECORRENCIA_PEDIDO (
    fk_recorrencia_id INTEGER,
    fk_pedido_id INTEGER
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
        
/*********************************************************/
/* USUARIO INFO */
INSERT INTO gat2bsf0bvhm4fkz.usuario (nome, usuario, senha, id) VALUES ('CLIENTE', 'cliente', '12345', 1);
INSERT INTO gat2bsf0bvhm4fkz.usuario (nome, usuario, senha, id) VALUES ('FUNCIONARIO', 'funcionario', '12345', 2);
INSERT INTO gat2bsf0bvhm4fkz.cliente (celular, id, fk_usuario_id) VALUES ('2199999991', 1, 1);
INSERT INTO gat2bsf0bvhm4fkz.funcionario (id, fk_usuario_id) VALUES (1, 2);
INSERT INTO gat2bsf0bvhm4fkz.endereco (id, cep, logradouro, numero, complemento, bairro, cidade, estado, fk_cliente_id)
VALUES (1, '00000-000', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 1);

/* FORMA_PAGAMENTO */
INSERT INTO gat2bsf0bvhm4fkz.forma_pagamento (id, nome)
VALUES (1, 'dinheiro');

/* PEDIDO */
INSERT INTO gat2bsf0bvhm4fkz.pedido (id, preco_total, frete, observacao, tipoPedido, dataHora, fk_forma_pagamento_id, fk_cliente_id)
VALUES (1, 66.60, 5.00, '', 'recorrencia', now(), 1, 1);

/* RECORRENCIA */
INSERT INTO gat2bsf0bvhm4fkz.recorrencia (id, data_inicio, data_fim, intervalo_dias)
VALUES (1, now(), null, 1);
INSERT INTO gat2bsf0bvhm4fkz.recorrencia_pedido (fk_recorrencia_id, fk_pedido_id)
VALUES (1, 1);

/* PRODUTO */
INSERT INTO gat2bsf0bvhm4fkz.produto (id, preco_unitario, metrica, nome)
VALUES (1, 1.10, 'un', 'pao');
INSERT INTO gat2bsf0bvhm4fkz.produto (id, preco_unitario, metrica, nome)
VALUES (2, 50.10, 'un', 'bolo'); # personalizado
INSERT INTO gat2bsf0bvhm4fkz.personalizacao (id, nome, preco_unitario)
VALUES (1, 'M&Ms', 5.50);
INSERT INTO gat2bsf0bvhm4fkz.produto_personalizacao (fk_personalizacao_id, fk_produto_id)
VALUES (1, 2); # bolo com M&Ms

/* ITEM DE PEDIDO */
INSERT INTO gat2bsf0bvhm4fkz.item (id, quantidade, preco_unitario, fk_produto_id, fk_pedido_id)
VALUES (1, 10, 1.10, 1, 1); # 10 pães
INSERT INTO gat2bsf0bvhm4fkz.item (id, quantidade, preco_unitario, fk_produto_id, fk_pedido_id)
VALUES (2, 1, 55.60, 2, 1); # 1 bolo
INSERT INTO gat2bsf0bvhm4fkz.item_personalizacao (fk_produto_personalizacao_id, fk_item_id)
VALUES (1, 2);