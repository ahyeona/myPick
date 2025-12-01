import { DataTypes, Model, Sequelize } from "sequelize";
import Movie from "./Movie";

class Mypick extends Model {
    public id!: number;
    public user_id!: number;
    public movie_id!: number;
    public is_watched!: boolean;
    public memo!: string;

    public Movie!: Movie;

    static initModel(sequelize : Sequelize) {
        Mypick.init(
            {
                id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true
                },
                user_id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull: false
                },
                movie_id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull: false
                },
                is_watched : {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
                memo : {
                    type: DataTypes.STRING(500),
                }
            },
            {
                sequelize,
                modelName : "Mypick",
                tableName : "mypicks",
                timestamps : false
            }
        );
    }
}

export default Mypick;