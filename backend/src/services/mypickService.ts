import { Mypick, MypickGenre } from "../models";

export const mypickListService = async (user_id : number) => {
    const list = await Mypick.findAll({ where : { user_id } });

    return list;
};

export const mypickCreateService = async (user_id : number, movie_id : number, genre_ids : number[], is_watched : boolean, memo : string) => {
    const mypick = await Mypick.create({ user_id, movie_id, is_watched, memo });
        
    await MypickGenre.bulkCreate(
        genre_ids.map(genre_id => ({
            mypick_id : mypick.id,
            genre_id
        }))
    )

    return mypick;
};

export const mypickUpdateService = async (mypick_id : number, is_watched : boolean, memo : string) => {
    const updateData: Partial<Mypick> = {};

    if (is_watched !== undefined) updateData.is_watched = is_watched;
    if (memo !== undefined) updateData.memo = memo;

    const result = await Mypick.update(updateData, { where : { id : mypick_id } });

    return result;
};

export const mypickDeleteService = async (mypick_id : number) => {
    const result = await Mypick.destroy({where:{ id : mypick_id }})

    return result;
};
