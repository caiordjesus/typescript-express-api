import { Router } from 'express'
import auth_routes from './routes/auth'
import products_routes from './routes/products'
import order_routes from './routes/orders'
import client_routes from './routes/client'
import payment_method_routes from './routes/payment_method'
import personalization_routes from './routes/personalizations'
import jobs_routes from './routes/jobs'
import { check_job_basic_auth, check_user_middleware } from '../middlewares'

const router = Router()

router.use('/auth', auth_routes)
router.use('/produtos', check_user_middleware, products_routes)
router.use('/pedidos', check_user_middleware, order_routes)
router.use('/cliente/:id_cliente', check_user_middleware, client_routes)
router.use('/metodo_pagamento', check_user_middleware, payment_method_routes)
router.use('/personalizacoes', check_user_middleware, personalization_routes)
router.use('/jobs', check_job_basic_auth, jobs_routes)

export default router

interface CreateOrderDTO{
    clientId: number,
    formaPagamentoId: number,
    frete: number,
    observacao: string,
    preco_total: number,
    item: [{
        quantidade: number,
        preco_unitario: number,
        produtoId: number,
        item_personalizacao: [{
            personalizacaoId: number
        }]
    }]
}