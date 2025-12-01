import { CreateMypickDTO } from "../dtos/mypick.dto";
import { Mypick, MovieGenre, Movie, Genre } from "../models";

export const mypickListService = async (user_id : number) => {
    console.log("mypickListService");
    const list = await Mypick.findAll({ where : { user_id },
        include: [{
            model : Movie, include : [Genre]
        }]
    });
    console.log("mypickListService list");

    list.map(mypick=> ({
        id: mypick.id,
        memo: mypick.memo,
        is_watched: mypick.is_watched,
        movie: {
            id: mypick.Movie.id,
            title: mypick.Movie.title,
            poster_path: mypick.Movie.poster_path,
            overview: mypick.Movie.overview,
            release_date: mypick.Movie.release_date,
            genres: mypick.Movie.Genres
        }
    }));

    return list;
};

// export const mypickCreateService = async (user_id : number, movie_id : number, genre_ids : number[], is_watched : boolean, memo : string, title:string, poster_path:string, overview:string, release_date : string) => {
export const mypickCreateService = async (dto :CreateMypickDTO) => {
    const { user_id, movie, memo, is_watched } = dto;
    const movieExist = await Movie.findOne({where : {id : movie.id}});
    if (!movieExist) {
        await Movie.create({ ...movie });

        await MovieGenre.bulkCreate(
            movie.genre_ids.map(genre_id => ({
                movie_id : movie.id,
                genre_id
            }))
        )
    }

    const mypick = await Mypick.create({ user_id, movie_id: movie.id, is_watched, memo });
    
    return mypick;
};

// UpdateMypickDTO
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
