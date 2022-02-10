import { openStdin } from 'process';
import * as React from 'react';
import { book_type } from '../models/book';
import './styles.css';

interface Props {
  items: any[];
  start: number;
}

export default function RenderList({ items, start }: Props) {
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
        {items.map((bookT: book_type) => {
          return (
            <tr key={bookT.id}>
              <td>{start + 1}</td>
              <th scope="col">
                <img
                  src={bookT.volumeInfo?.imageLinks?.smallThumbnail}
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
                <a href={bookT.volumeInfo.infoLink}>
                  <button type="button" className="btn btn-dark">
                    MORE INFO
                  </button>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
