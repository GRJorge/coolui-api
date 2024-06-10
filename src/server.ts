import app from './app';
import { connect } from './config/db';

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listen`);
    connect();
});
