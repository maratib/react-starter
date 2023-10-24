import React, { FC } from 'react';


type Props = {
  name?: string;
};

const About: FC<Props> = ({ name = 'Pokemon' }) => {

  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
};

export default About;