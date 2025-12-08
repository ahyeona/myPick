import { baseAxios } from "../axios";
import type { MypickType } from "../types";

interface MypickProps {
    mypick_id: number;
    is_watched: boolean;
    memo: string;
}

interface MypickDetailProps {
    movie_id: number;
}

interface MypickDeleteProps {
    mypick_id: number;
}

export const getMypickApi = () => baseAxios.get("/mypick/list");
export const getMypickDetailkApi = (data: MypickDetailProps) => baseAxios.post("/mypick/detail", data);
export const addMypickApi = (data: MypickType) => baseAxios.post(`/mypick/create`, data);
export const updateMypickApi = (data: MypickProps) => baseAxios.post(`/mypick/update`, data);
export const deleteMypickApi = (data: MypickDeleteProps) => baseAxios.post("/mypick/delete", data);