import { book_type } from "../models/book";
import * as React from 'react';

interface Props {
  item: book_type;
  popUpStatus: boolean;
}

export default function PopAp(Props: {item: book_type}) {

	let isOpen:boolean = false
	const [close, setClose] = React.useState(isOpen)
	React.useEffect(() => {
		console.log(close)
		return
	}, [close])
	isOpen = close;

  return (
	  !isOpen ?
    <>
      <div
        className="modal"
        /*tabindex="-1"*/ role="dialog"
        style={{ display: 'flex', flex: '' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{Props.item.volumeInfo?.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close" onClick={(e) => setClose(true)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
