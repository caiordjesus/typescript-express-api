import { redisClientConnect } from "./global/config/redis_config";

export default async function init(app: any) {
  try {
    const redisClient = await redisClientConnect()
    app.locals.redisClient = redisClient
    const port = process.env.PORT || 3001
    console.log(`listening on port ${port}`)
    app.listen(port);
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
