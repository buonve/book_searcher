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
  const [page, setPage] = useState(1);
  const [type, setType] = useState('list');
  const [maxItems, setMaxItems] = useState('');

  useEffect(() => {
    let tmp: any;
    async function getData() {
      if (!book) {
        return;
      }
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${num}&startIndex=${
          num * page - num
        }`
      )
        .then((res) => res.json())
        .then((res) => (tmp = res))
        .then((res) => setResults(res.items));

      //console.log(tmp);
      setMaxItems(tmp.totalItems);
    }
    getData();
  }, [book, num, type, page]);

  useEffect(() => {
    setPage(1);
  }, [num]);

  return (
    <div>
      <div className="row">
        <input
          type="input"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Search a Book"
          className="input_box"
        ></input>
        <button onClick={(e) => setType('list')}>LIST</button>
        <button onClick={(e) => setType('grid')}>GRID</button>
        <button onClick={(e) => setNum(5)}>5</button>
        <button onClick={(e) => setNum(10)}>10</button>
        <button onClick={(e) => setNum(15)}>15</button>
        <button onClick={(e) => setNum(20)}>20</button>
      </div>
      {type === 'list' ? (
        <RenderList
          items={results}
          end={num * page}
          i_per_page={num}
        />
      ) : (
        <RenderGrid items={results} end={num * page} i_per_page={num} />
      )}
      <button
        onClick={(e) => (page - 1 <= 0 ? page : setPage(page - 1))}
      >
        Previous
      </button>
      <button
        onClick={(e) =>
          page * num <= Number(maxItems) ? setPage(page + 1) : page
        }
      >
        Next
      </button>
    </div>
  );
};

export default InputFeild;
