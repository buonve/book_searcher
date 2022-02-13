import { book_type } from '../models/book';
import * as React from 'react';
import PopAp from './Popap'

interface Props {
  items: any[];
  end: number;
  i_per_page: number
}

export default function RenderGrid({ items, end, i_per_page }: Props) {
	const [popUp, setPopUp] = React.useState(false);
	const [itemId, setItemId] = React.useState('');
	function openPopUp(e: any, item: book_type) {
		if(itemId === '') {
		  setItemId(item.id)
		  setPopUp(true);
		  console.log('eccoci')
		}
		else
		   return
	  
	}
  if (!items) return <>Loading...</>;

  return (
    <div className="card-deck">
      <>
        {items.map((bookT: book_type, i) => (
          <div className="col-sm-3" key={bookT.id}>
            <div className="card card_style mt-3">
              <img
                src={
                  bookT.volumeInfo?.imageLinks?.smallThumbnail
                    ? bookT.volumeInfo?.imageLinks?.smallThumbnail
                    : '/NOT_FOUND.png'
                }
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h6>{i + end + 1 - i_per_page}</h6>
                <h5 className="card-title">{bookT.volumeInfo?.title}</h5>
                <p className="card-text multi-line-4">
                  {!bookT.volumeInfo?.description
                    ? 'No decription Available'
                    : bookT.volumeInfo?.description}
                </p>
                <p className="card-text">
                    <button type="button" className="btn btn-dark" onClick={(e) => {
                      openPopUp(e, bookT);
                    }}>
                      MORE INFO
                    </button>
					{popUp && itemId === bookT.id?  
                    <PopAp item={bookT} popUpStatus={setPopUp} setItemId={setItemId}/> : <></>
                	}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
