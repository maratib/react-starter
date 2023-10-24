import { FC } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

type Props = {
  name?: string;
};

const Book: FC<Props> = ({ name }) => {
  const { id } = useParams();
  const { hello } = useOutletContext();

  return (
    <div>
      <h1>This is Book {id} - {hello}</h1>
    </div>
  );
};

export default Book;