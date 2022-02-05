export default async function init(app: any) {
  try {
    const port = process.env.PORT || 3001
    console.log(`listening on port ${port}`)
    app.listen(port);
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
