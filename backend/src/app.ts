import express, { Response } from "express";
import { router } from "./routes";
import { authMiddleware } from "./middleware/authMiddleware";
import { RequestWithUser } from "./types/express";
import { sequelize } from "./models";

const app = express();

app.use(express.json());
app.use("/", router)
app.get("/profile", authMiddleware, (req : RequestWithUser, res : Response) => {
    try {
        res.json({ message: `${req.user}입니다.` });
    } catch (error) {
        console.log(error);
    }
});

const PORT = 8080;

sequelize.sync().then(() => {
  console.log('데이터베이스 동기화 성공');
}).catch(err => {
  console.error('데이터베이스 동기화 실패:', err);
});

app.listen(PORT, () => {
    console.log("server running");
});

export default app;