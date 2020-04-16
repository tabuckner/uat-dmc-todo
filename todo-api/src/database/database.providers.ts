import { Provider } from "@nestjs/common/interfaces";
import { Client, ClientConfig } from 'pg';

const clientConfig: ClientConfig = {
  host: '0.0.0.0',
  database: 'uat_ref',
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