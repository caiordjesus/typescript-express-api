import colors from './assets/colors';

export default async function init(app: any) {
  try {
    app.listen(process.env.PORT || 3001, () => {
      console.log(colors.bright, colors.fgWhite, 'Express App Listening on Port 3001');
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
