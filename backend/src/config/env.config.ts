import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  NEST_PORT: number;
  NODE_ENV: string;
  CORS_ORIGIN: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
  OPENAI_API_KEY: string;
}

const envVarsSchema = joi
  .object({
    NEST_PORT: joi.number().required(),
    NODE_ENV: joi.string().required(),
    CORS_ORIGIN: joi.string().required(),
    CLOUDINARY_CLOUD_NAME: joi.string().required(),
    CLOUDINARY_API_KEY: joi.string().required(),
    CLOUDINARY_API_SECRET: joi.string().required(),
    OPENAI_API_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  NEST_PORT: envVars.NEST_PORT,
  NODE_ENV: envVars.NODE_ENV,
  CORS_ORIGIN: envVars.CORS_ORIGIN,
  CLOUDINARY_CLOUD_NAME: envVars.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: envVars.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: envVars.CLOUDINARY_API_SECRET,
  OPENAI_API_KEY: envVars.OPENAI_API_KEY,
};
