import * as dotenv from "dotenv";

dotenv.config();

const { PORT, HOST, HOST_URL, } =
  process.env;

export const config = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
};
