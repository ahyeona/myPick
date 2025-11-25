import { Genre } from "../models";

export const genreListService = async () => {
    const genres = await Genre.findAll();

    return genres;
};