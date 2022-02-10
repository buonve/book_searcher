import { openStdin } from 'process';
import * as React from 'react';
import { book_type } from '../models/book';
import './styles.css';
import  PopAp  from './Popap';

interface Props {
  items: any[];
  end: number;
  i_per_page: number;
  totalItems: string;
}

export default function RenderList({ items, end, i_per_page }: Props) {
  if (!items) return <>Loading...</>;
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Short Description</th>
          <th scope="col">More Info</th>
        </tr>
      </thead>
      <tbody>
        {items.map((bookT: book_type, i) => {
          return (
            <tr key={bookT.id}>
              <td>{i + end + 1 - i_per_page}</td>
              <th scope="col">
                <img
                  src={
                    bookT.volumeInfo?.imageLinks?.smallThumbnail
                      ? bookT.volumeInfo?.imageLinks?.smallThumbnail
                      : '/NOT_FOUND.png'
                  }
                  className="img-thumbnail"
                  alt=""
                />
              </th>
              <td>{bookT.volumeInfo?.title}</td>
              <td className="multi-line-2">
                {bookT.volumeInfo?.description === undefined
                  ? 'No description Available!'
                  : bookT.volumeInfo.description}
              </td>
              <td>
                <button type="button" className="btn btn-dark" onClick={<PopAp item={bookT}/>}>
                  MORE INFO
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
