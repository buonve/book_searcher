import React from "react"
import "./styles.css"

interface Props{
    book:string;
    setBook: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild:React.FC<Props> = ({book, setBook}) => {
    return(
        <form className='input'>
            <input type = 'input' 
            value= {book}
            onChange={(e)=>setBook(e.target.value)}
                placeholder= 'Search a Book' className='input_box'></input>
            <button className='input_submit' type='submit' >Go</button>
        </form>
    )
}

export default InputFeild