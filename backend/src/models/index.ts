import { sequelize } from "../config/db";
import User from "./User";
import Token from "./Token";
import Genre from "./Genre";
import Mypick from "./Mypick";
import MovieGenre from "./MovieGenre";
import Movie from "./Movie";


User.initModel(sequelize);
Token.initModel(sequelize);
Genre.initModel(sequelize);
Mypick.initModel(sequelize);
Movie.initModel(sequelize);
MovieGenre.initModel(sequelize);

User.hasMany(Token, { foreignKey: "user_id", onDelete: "CASCADE" });
Token.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Movie.belongsToMany(Genre, { through : MovieGenre, foreignKey : "movie_id" });
Genre.belongsToMany(Movie, { through : MovieGenre, foreignKey : "genre_id" });

User.hasMany(Mypick, { foreignKey: "user_id", onDelete: "CASCADE" });
Mypick.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Movie.hasMany(Mypick, { foreignKey: "movie_id", onDelete: "CASCADE" });
Mypick.belongsTo(Movie, { foreignKey: "movie_id", onDelete: "CASCADE" });

export { sequelize, User, Token, Genre, Mypick, Movie, MovieGenre };