import { book_type } from '../models/book';

interface Props {
  items: any[];
  start: number;
}

export default function RenderGrid({ items, start }: Props) {
  if (!items) return <>Loading...</>;

  return (
    <div className="card-deck">
      <>
        {items.map((bookT: book_type) => (
          <div className="col-sm-3" key={bookT.id}>
            <div className="card card_style mt-3">
              <img
                src={bookT.volumeInfo?.imageLinks?.smallThumbnail}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{bookT.volumeInfo?.title}</h5>
                <p className="card-text multi-line-4">
                  {!bookT.volumeInfo?.description
                    ? 'No decription Available'
                    : bookT.volumeInfo?.description }
                </p>
                <p className="card-text">
                  <a href={bookT.volumeInfo.infoLink}>
                    <button type="button" className="btn btn-dark">
                      MORE INFO
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
