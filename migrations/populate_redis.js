const redis = require('redis')

async function connect() {
    const redisConfig = {
        url: 'redis://:kJEdJUy4bkwG1baXFJ4fZsa0crlpm1UR@redis-17776.c16.us-east-1-3.ec2.cloud.redislabs.com:17776'
    }
    const client = redis.createClient(redisConfig);

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    return client
}


async function populate(){
    const client = await connect()
    console.log('lista:10_produtos_mais_acessados')
    await client.set('lista:10_produtos_mais_acessados', JSON.stringify({
        produtos: [
            'pao',
            'bolo',
            'coquinha',
            'torrada',
            'rabanada',
            'fanta uva',
            'joelho',
            'coxinha',
            'requeijao',
            'amendoim'
        ]
    }))
    
    console.log('lista:10_personalizacoes_mais_acessadas')
    await client.set('lista:10_personalizacoes_mais_acessadas', JSON.stringify({
        produtos: [
            'M&M',
            'ganache de chocolate',
            'oreo',
            'kit kat',
            'fini',
            'bis extra',
            'sonho de valsa',
            'serenata de amor',
            'chantily de ninho',
            'topper do ben 10'
        ]
    }))

    console.log('lista:top_forma_de_pagamento')
    await client.set('lista:top_forma_de_pagamento', JSON.stringify({
        produtos: [
            'Pix',
            'Cartão'
        ]
    }))
    
    client.disconnect()
}

populate()