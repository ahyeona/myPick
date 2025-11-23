import { DataTypes, Model, Sequelize } from "sequelize";

class Token extends Model {
    public id!: number;
    public user_id!: number;
    public refresh_token!: string;

    static initModel(sequelize : Sequelize) {
        Token.init(
            {
                id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement : true,
                    primaryKey : true
                },
                user_id : {
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull : false,
                    unique: true
                },
                refresh_token : {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName : "Token",
                tableName : "tokens",
                timestamps : true
            }
        );
    }
}

export default Token;