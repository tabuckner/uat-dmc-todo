import { Provider } from "@nestjs/common/interfaces";
import { Client, ClientConfig } from 'pg';

const DB_NAME = process.env.DB_NAME || 'uat_dev'

const clientConfig: ClientConfig = {
  host: '0.0.0.0',
  database: DB_NAME,
  user: 'yourusername',
  password: 'yoursecurepassword',
};

export const databaseProviders: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const client = new Client(clientConfig);
      await client.connect()
      return client;
    }
  }
];