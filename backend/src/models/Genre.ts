import { DataTypes, Model, Sequelize } from "sequelize";

class Genre extends Model {
    public id!: number;
    public name!: string;

    static initModel(sequelize : Sequelize) {
        Genre.init(
            {
                id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    primaryKey : true
                },
                name : {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName : "Genre",
                tableName : "genres",
                timestamps : false
            }
        );
    }
}

export default Genre;