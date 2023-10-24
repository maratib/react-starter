import { FC } from 'react';

type Props = {
  name?: string;
};

const NewBook: FC<Props> = ({ name }) => {


  return (
    <div>
      <h1>This is New Book</h1>
    </div>
  );
};

export default NewBook;