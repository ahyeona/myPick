import { useEffect, useState } from 'react'
import { Loading, MypickList } from '../../components';
import { getMypickApi } from '../../services/mypickApi';
import { MypickContainer } from './Mypick.style';

const Mypick = () => {
  const [mypicks, setMypicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMypicks = async () => {
    setLoading(true);
    const { data } = await getMypickApi();
    setMypicks(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getMypicks();
  }, [])

  return (
    <MypickContainer>
      {loading && <Loading />}

      {!loading && (
        <MypickList mypicks={mypicks} refresh={getMypicks} />
      )}
    </MypickContainer>
  )
}

export default Mypick