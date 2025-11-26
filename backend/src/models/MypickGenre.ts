import { Model, Sequelize } from "sequelize";

class MypickGenre extends Model {
    public mypick_id!: number;
    public genre_id!: number;

    static initModel(sequelize : Sequelize) {
        MypickGenre.init(
            {},
            {
                sequelize,
                modelName : "MypickGenre",
                tableName : "mypick_genres",
                timestamps : false
            }
        );
    }
}

export default MypickGenre;