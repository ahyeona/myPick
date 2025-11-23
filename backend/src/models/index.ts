import { sequelize } from "../config/db";
import User from "./User";
import Token from "./Token";


User.initModel(sequelize);
Token.initModel(sequelize);

User.hasMany(Token, { foreignKey: "user_id", onDelete: "CASCADE" });
Token.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

export { sequelize, User, Token };