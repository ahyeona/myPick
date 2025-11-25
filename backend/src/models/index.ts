import { sequelize } from "../config/db";
import User from "./User";
import Token from "./Token";
import Genre from "./Genre";


User.initModel(sequelize);
Token.initModel(sequelize);
Genre.initModel(sequelize);

User.hasMany(Token, { foreignKey: "user_id", onDelete: "CASCADE" });
Token.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

export { sequelize, User, Token, Genre };