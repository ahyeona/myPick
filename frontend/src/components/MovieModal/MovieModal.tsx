import type { MovieType, MypickType } from "../../types";
import { addMypickApi, deleteMypickApi, getMypickDetailkApi, updateMypickApi } from "../../services/mypickApi";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import AuthRoute from "../../router/AuthRoute";
import { ButtonFlexDiv, CloseBtn, GenreName, ModalContainer, MovieDetail, MypickDetail, Overlay, Overview, Title } from "./MovieModal.style";
import Button from "../Button/Button";

type MovieModalProps = {
  movie: MovieType,
  onClose: () => void,
  refresh?: () => void
}

const MovieModal = ({ movie, onClose, refresh }: MovieModalProps) => {
  const [loading, setLoading] = useState(false);

  const [mypickDetail, setMypickDetail] = useState<{ isMypick: true, mypick: MypickType } | null>(null);
  const [addMode, setAddMode] = useState(false);

  const [isWatched, setIsWatched] = useState(false);
  const [memo, setMemo] = useState("");

  if (!movie) return null;

  const addMypick = async () => {
    try {
      const { data } = await addMypickApi({ movie, is_watched: isWatched, memo });
      console.log(data);
      alert("추가되었습니다.");
      onClose();
    } catch (error) {
      console.log(error);
      alert("실패했습니다.");
    }
  }

  const updateMypick = async () => {
    if (!mypickDetail?.mypick.id) return;
    if (!confirm("수정하시겠습니까?")) return;
    let updateDto: {
      isWatched: boolean | null;
      memo: string | null;
    } = {
      isWatched: null,
      memo: null
    }
    if (mypickDetail.mypick.is_watched !== isWatched) {
      updateDto.isWatched = isWatched;
    }
    if (mypickDetail.mypick.memo !== memo) {
      updateDto.memo = memo;
    }

    try {
      const { data } = await updateMypickApi({ mypick_id: mypickDetail.mypick.id, is_watched: updateDto.isWatched, memo: updateDto.memo });
      console.log(data);
      alert("수정되었습니다.");
      if (refresh) refresh();
      onClose();
    } catch (error) {
      console.log(error);
      alert("실패했습니다.");
    }
  }

  const deleteMypick = async () => {
    if (!mypickDetail?.mypick.id) return;
    if (!confirm("삭제하시겠습니까?")) return;

    try {
      const props = {
        mypick_id: mypickDetail.mypick.id
      }
      const { data } = await deleteMypickApi(props);
      console.log(data?.data);
      alert("삭제되었습니다.");
      if (refresh) refresh();
      onClose();
    } catch (error) {
      console.log(error);
      alert("실패했습니다.");
    }
  }

  const getMypickDetail = async () => {
    if (!movie.id) return;
    const props = {
      movie_id: movie.id
    }
    setLoading(true);
    const { data } = await getMypickDetailkApi(props);
    setLoading(false);
    console.log(data?.data);
    if (data?.data) {
      setMypickDetail(data?.data);
      setIsWatched(data?.data.mypick.is_watched);
      setMemo(data?.data.mypick.memo);
    };
  }

  useEffect(() => {
    console.log("movie", movie);
    getMypickDetail();
  }, []);

  return (
    <Overlay>
      <ModalContainer>
        <AuthRoute>
          <>
            {loading && <Loading />}

            <CloseBtn onClick={onClose}>X</CloseBtn>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                <img src={movie.imgUrl} />
              </div>
              <MovieDetail>
                <Title>{movie.title}</Title>
                <div>{movie.genres?.map((genre) => { return <GenreName>{genre}</GenreName> })}</div>
                <span>개봉일 : {movie.release_date}</span>
                <Overview>{movie.overview}</Overview>

                {
                  mypickDetail?.isMypick ?
                    <MypickDetail>
                      <label><input type="checkbox" defaultChecked={mypickDetail.mypick.is_watched} onChange={(e) => { setIsWatched(e.target.checked) }} />나의 시청여부</label>
                      <textarea onChange={(e) => { setMemo(e.target.value) }}>{mypickDetail.mypick.memo}</textarea>
                      <ButtonFlexDiv>
                        <Button text="수정" onClick={updateMypick} width="100px" background="blue" />
                        <Button text="삭제" onClick={deleteMypick} width="100px" background="red" />
                      </ButtonFlexDiv>
                    </MypickDetail>
                    :
                    <Button text="mypick 추가" onClick={() => { setAddMode(!addMode) }} background="black" width="100px" />
                }
                {
                  addMode && (
                    <MypickDetail>
                      <label><input type="checkbox" onChange={(e) => { setIsWatched(e.target.checked) }} />나의 시청여부</label>
                      <textarea placeholder="메모" onChange={(e) => { setMemo(e.target.value) }}></textarea>
                      <Button text="저장" onClick={addMypick} width="100px" background="blue" />
                    </MypickDetail>
                  )
                }
              </MovieDetail>
            </div>
          </>
        </AuthRoute>
      </ModalContainer>
    </Overlay>
  )
}

export default MovieModal