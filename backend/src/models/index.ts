import { sequelize } from "../config/db";
import User from "./User";
import Token from "./Token";
import Genre from "./Genre";
import Mypick from "./Mypick";
import MypickGenre from "./MypickGenre";

User.initModel(sequelize);
Token.initModel(sequelize);
Genre.initModel(sequelize);
Mypick.initModel(sequelize);
MypickGenre.initModel(sequelize);

User.hasMany(Token, { foreignKey: "user_id", onDelete: "CASCADE" });
Token.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

User.hasMany(Mypick, { foreignKey: "user_id", onDelete: "CASCADE" });
Mypick.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Mypick.belongsToMany(Genre, { through : MypickGenre, foreignKey : "mypick_id" });
Genre.belongsToMany(Mypick, { through : MypickGenre, foreignKey : "genre_id" });

export { sequelize, User, Token, Genre, Mypick, MypickGenre };