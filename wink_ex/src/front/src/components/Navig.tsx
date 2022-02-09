import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenderList from './List';
import './styles.css';

interface Props {
  book: string;
  setBook: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ book, setBook }) => {
  const [results, setResults] = useState<[]>([]);
  const [num, setNum] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (book) {
      axios(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${num}`
      ).then((data) => {
        setResults(data.data.items);
      });
    }
  }),
    [book, num];

  return (
    <div>
      <form className="input">
        <input
          type="input"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Search a Book"
          className="input_box"
        ></input>
      </form>
      <RenderList items={results} />
    </div>
  );
};

export default InputFeild;
