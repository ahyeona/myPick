import { Request, Response } from "express";
import { genreListService } from "../services/searchService";
import { GenreListDummy } from "../config/createTable";

export const genreListController = async (req: Request, res: Response) => {
    try {
        const data = await genreListService();
        // const data = GenreListDummy;
        return res.status(200).json({ data });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}
