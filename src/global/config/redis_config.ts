import { createClient } from 'redis';


export const redisConfig = {
    url: 'redis://:kJEdJUy4bkwG1baXFJ4fZsa0crlpm1UR@redis-17776.c16.us-east-1-3.ec2.cloud.redislabs.com:17776'
}

export async function redisClientConnect() {
    const client = createClient(redisConfig);

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    return client
}