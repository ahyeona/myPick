import { Request, Response } from "express";
import { genreListService } from "../services/searchService";

export const genreListController = async (req : Request, res : Response) => {
    try {
        const data = await genreListService();
        res.status(200).json({ data });
    } catch (error : any) {
        res.status(400).json({ message: error.message });
    }
}
