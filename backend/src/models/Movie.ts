import { DataTypes, Model, Sequelize } from "sequelize";
import MovieGenre from "./MovieGenre";
import Genre from "./Genre";

class Movie extends Model {
    public id!: number;
    public title!: string;
    public poster_path!: string;
    public overview!: string;
    public release_date!: string;

    public Genres!: Genre[];

    static initModel(sequelize : Sequelize) {
        Movie.init(
            {
                id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    primaryKey : true,
                    autoIncrement: false
                },
                title : {
                    type: DataTypes.STRING(200),
                },
                poster_path : {
                    type: DataTypes.STRING(500),
                },
                overview : {
                    type: DataTypes.STRING(500),
                },
                release_date : {
                    type: DataTypes.STRING(200),
                }
            },
            {
                sequelize,
                modelName : "Movie",
                tableName : "movies",
                timestamps : false
            }
        );
    }
}

export default Movie;