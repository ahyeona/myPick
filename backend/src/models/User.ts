import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;

   static initModel(sequelize : Sequelize) {
        User.init(
        {
            id : {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement : true,
                primaryKey : true
            },
            email : {
                type: DataTypes.STRING(100),
                allowNull : false,
                unique : true
            },
            password : {
                type: DataTypes.STRING(200),
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName : "User",
            tableName : "users",
            timestamps : true
        }
    );
   }
}

export default User;