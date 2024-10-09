import { envs } from './env.config';

let allowedOrigins: (RegExp | string)[] = [/localhost:\d{4}$/];

if (envs.CORS_ORIGIN)
  allowedOrigins = allowedOrigins.concat(envs.CORS_ORIGIN.split(','));

export const corsConfig = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Authorization', 'X-Requested-With', 'Content-Type'],
  maxAge: 86400, // NOTICE: 1 day
  credentials: true,
};
