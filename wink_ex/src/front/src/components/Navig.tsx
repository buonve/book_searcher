import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RenderList from './List';
import './styles.css';
import RenderGrid from './Grid';

interface Props {
  book: string;
  setBook: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ book, setBook }) => {
  const [results, setResults] = useState<[]>([]);
  const [num, setNum] = useState(5);
  const [page, setPage] = useState(0);
  const [type, setType] = useState('list');

  useEffect(() => {
    async function getData() {
      if (!book) return;

      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${num}`
      )
        .then((res) => res.json())
        .then((res) => setResults(res.items));
    }
    getData();
  }, [book, num]);

  return (
    <div>
      <div className="row">
        <form className="input">
          <input
            type="input"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            placeholder="Search a Book"
            className="input_box"
          ></input>
        </form>
        <button onClick={(e) => setType('list')}>LIST</button>
        <button onClick={(e) => setType('grid')}>GRID</button>
      </div>
      {type === 'list' ? (
        <RenderList items={results} start={0} />
      ) : (
        <RenderGrid items={results} start={0} />
      )}
    </div>
  );
};

export default InputFeild;
