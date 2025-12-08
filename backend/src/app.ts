import express from "express";
import cors from "cors";
import { router } from "./routes";
import { sequelize } from "./models";
import { corsOptions } from "./config/cors";
import cookieParser from "cookie-parser";
import { syncGenreService, syncImgConfigService } from "./services/syncService";

const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router)

const PORT = 8080;

// (async () => {
//   await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
//   await sequelize.sync({ force: true });
//   await syncGenreService();
//   await syncImgConfigService();
//   await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
//   console.log("데이터베이스 동기화 성공");
// })();

sequelize.sync({ force: false }).then(() => {
  console.log('데이터베이스 동기화 성공');
}).catch(err => {
  console.error('데이터베이스 동기화 실패:', err);
});

(async () => {
  await syncImgConfigService();
  app.listen(PORT, () => console.log(`Server running…`));
})();

export default app;