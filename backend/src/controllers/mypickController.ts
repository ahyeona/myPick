import { Response } from "express";
import { mypickCreateService, mypickDeleteService, mypickDetailService, mypickListService, mypickUpdateService } from "../services/mypickService";
import { RequestWithUser } from "../types/express";
import { CreateMypickDTO } from "../dtos/mypick.dto";

export const mypickListController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        const data = await mypickListService(user_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickDetailController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        const { movie_id } = req.body
        const data = await mypickDetailService(user_id, movie_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickCreateController = async (req: RequestWithUser, res: Response) => {
    try {
        const user_id = req.user as number;
        // const dto: CreateMypickDTO = {
        //     user_id,
        //     movie: {
        //         id: req.body.id,
        //         title: req.body.title,
        //         poster_path: req.body.poster_path,
        //         overview: req.body.overview,
        //         release_date: req.body.release_date,
        //         genre_ids: req.body.genre_ids,
        //         adult: req.body.adult,
        //         original_language: req.body.original_language,
        //         original_title: req.body.original_title,
        //     },
        //     is_watched: req.body.is_watched,
        //     memo: req.body.memo,
        // };

        const dto: CreateMypickDTO = { user_id, ...req.body };

        // const { movie_id, genre_ids, is_watched, memo, title, poster_path, overview, release_date } = req.body;
        // const result = await mypickCreateService(user_id, movie_id, genre_ids, is_watched, memo, title, poster_path, overview, release_date);
        const result = await mypickCreateService(dto);

        res.status(200).json({ result });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export const mypickUpdateController = async (req: RequestWithUser, res: Response) => {
    try {
        const { mypick_id, is_watched, memo } = req.body;
        const result = await mypickUpdateService(mypick_id, is_watched, memo);

        res.status(200).json({ result });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }

}

export const mypickDeleteController = async (req: RequestWithUser, res: Response) => {
    try {
        const { mypick_id } = req.body;
        const data = await mypickDeleteService(mypick_id);

        res.status(200).json({ data });
    } catch (error: any) {
        console.log("error : ", error.message);
        res.status(400).json({ message: error.message });
    }
}

