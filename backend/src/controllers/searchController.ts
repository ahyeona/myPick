import { Request, Response } from "express";
import { detailService, genreSearchService, popularSearchService, searchService } from "../services/searchService";

export const keywordSearchController = async (req : Request, res : Response) => {
    try {
        const { keyword } = req.query as { keyword: string };
        const data = await searchService(keyword);

        res.status(200).json({ data });
    } catch (error : any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const popularSearchController = async (req : Request, res : Response) => {
    try {
        const data = await popularSearchService();

        res.status(200).json({ data });
    } catch (error : any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const genreSearchController = async (req : Request, res : Response) => {
    try {
        const { genres } = req.query as {genres :string};
        const data = await genreSearchService(genres);

        res.status(200).json({ data });
    } catch (error : any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const detailController = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const data = await detailService(id);

        res.status(200).json({ data });
    } catch (error : any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}