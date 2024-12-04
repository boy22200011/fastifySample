import { createServer } from './service';

const app = createServer();

const port:any = 3000
app.listen(port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
