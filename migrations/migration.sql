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