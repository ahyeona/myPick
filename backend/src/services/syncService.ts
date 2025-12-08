import { imageConfig } from "../config/img";
import { Genre, sequelize } from "../models";
import { genreListService, imgConfigService } from "./searchService"

export const syncGenreService = async () => {
    const { genres } = await genreListService();

    // const [results] = await sequelize.query(`
    //     SHOW TABLES LIKE 'genres';
    // `);

    // if (results.length != 0) {
    //     await Genre.destroy({ truncate: true });
    // }

    for (const genre of genres) {
        await Genre.create({
            id: genre.id,
            name: genre.name,
        });
    }
}

export const syncImgConfigService = async () => {
    const data = await imgConfigService();

    imageConfig.baseUrl = data.images.secure_base_url;
    imageConfig.size = data.images.poster_sizes[3];
};
