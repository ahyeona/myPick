import { Model, Sequelize } from "sequelize";
import Genre from "./Genre";

class MovieGenre extends Model {
    public movie_id!: number;
    public genre_id!: number;

    public Genre!: Genre;

    static initModel(sequelize : Sequelize) {
        MovieGenre.init(
            {},
            {
                sequelize,
                modelName : "MovieGenre",
                tableName : "movie_genres",
                timestamps : false
            }
        );
    }
}

export default MovieGenre;