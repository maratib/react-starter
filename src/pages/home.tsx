import React, { FC } from 'react';

type Props = {
  name?: string;
};

const Home: FC<Props> = ({ name = 'Pokemon' }) => {


  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;