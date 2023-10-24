import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  name?: string;
};

const Home: FC<Props> = ({ name = 'Pokemon' }) => {

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'], queryFn: getPokemon
  })

  if (isPending) { return "Pending ..." }
  if (isFetching) { return "Fetching ..." }


  return (
    <div>
      <h1>Hello {name}</h1>
      {data.map(result => {
        return <div key={result.name}>{result.name}</div>
      })}

      <ReactQueryDevtools initialIsOpen />

    </div>
  );
};

export default Home;