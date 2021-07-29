import { createConnection } from 'typeorm';

createConnection().then(() => console.log('+ Connected to the database.'));
