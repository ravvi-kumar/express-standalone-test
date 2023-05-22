import express, {Express, Request, Response} from 'express';
const app: Express = express();
console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}
// TODO: more examples

const port: string | Number = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://127.0.0.1:${port}`);
});
