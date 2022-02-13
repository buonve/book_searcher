import { book_type } from "../models/book";
import * as React from 'react';

interface Props {
  item: book_type;
  popUpStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setItemId: React.Dispatch<React.SetStateAction<string>>
}

export default function PopAp(Props: {item: book_type, popUpStatus:React.Dispatch<React.SetStateAction<boolean>>, setItemId: React.Dispatch<React.SetStateAction<string>>}) {

	const [close, setClose] = React.useState(false)
	function closePopUp() {
		setClose(true)
		console.log('QUII '+close)
		console.log('chiudo...')
		Props.popUpStatus(close);
		Props.setItemId('')

	}
	console.log("apro..."+close)

  return (
	  !close ?
    <>
      <div
        className="modal"
        /*tabindex="-1"*/ role="dialog"
        style={{ display: 'flex', flex: '', zIndex:1}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{Props.item.volumeInfo?.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close" onClick={(e) => closePopUp()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
				  <div className="text-center">
  					<img src={
                      Props.item.volumeInfo?.imageLinks?.smallThumbnail
                        ? Props.item.volumeInfo?.imageLinks?.smallThumbnail
                        : '/NOT_FOUND.png'
                    } className="rounded" alt="..."/>
				</div>
              <p>{Props.item.volumeInfo?.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                <a href={Props.item.volumeInfo.infoLink}>BUY</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      </> : <></>
  );
}
