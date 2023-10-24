import React, { FC } from 'react';


type Props = {
  name?: string;
};

const NotFound: FC<Props> = ({ name = 'Pokemon' }) => {

  return (
    <div>
      <h1>404 : Not Found</h1>
    </div>
  );
};

export default NotFound;