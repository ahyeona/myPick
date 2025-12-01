import { useEffect, useState } from 'react'
import { Loading, MovieList } from '../components';
import { listApi } from '../services/mypickApi';

const Mypick = () => {
  const [mypicks, setMypicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMypicks = async () => {
      setLoading(true);
      const { data } = await listApi();
      setMypicks(data.data);
      setLoading(false);
    };

    useEffect(()=>{
      getMypicks();
    }, [])

  return (
    <>
      {loading && <Loading />}


      {!loading && (
        <MovieList caption="mypicks" movies={mypicks} />
      )}
    </>
  )
}

export default Mypick