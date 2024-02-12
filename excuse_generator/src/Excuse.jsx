
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (category) => {
  const response = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`);
  return response.data[0].excuse;
};

const Excuse = () => {
  const { data } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetchData(''),
    config: { staleTime: 5000 },
  });
  
  return (
    <div>
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchData('party')}>Party</button>
      <button onClick={() => fetchData('family')}>Family</button>
      <button onClick={() => fetchData('office')}>Office</button>
      <p>{data}</p>
    </div>
  );
};

export default Excuse;