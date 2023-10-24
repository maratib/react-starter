import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getPokemon } from '../api';


type Props = {
  name?: string;
};

export const Home: FC<Props> = ({ name }) => {

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

    </div>
  );
};