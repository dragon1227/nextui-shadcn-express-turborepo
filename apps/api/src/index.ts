import mongoose from "mongoose";
import { createServer } from "./server";
import { log } from "@repo/logger";
import { dbUrl } from "./config/const";

const port = process.env.API_PORT || 8000;
const server = createServer();

mongoose
  .connect(dbUrl)
  .then(() => {
    server.listen(port, () => {
      log(`api running on ${port}`);
    });
  })
  .catch((err) => {
    log(err);
  });
