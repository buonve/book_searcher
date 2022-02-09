import { openStdin } from 'process';
import * as React from 'react';
import { book_type } from '../models/book';

interface Props {
  items: any[];
}

export default function RenderList({ items }: Props) {
  let b;
  items.map((bookT: book_type) => {
    b = bookT;
  });
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </a>
    </div>
  );
}
