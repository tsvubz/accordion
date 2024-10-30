import { useState } from "react"
import data from "./data";
import './styles.css';


const Accordion = () => {

    const [selection, setSelection] = useState(null);

    const handleSelection = (getCurrentId) => {
        setSelection(getCurrentId === selection ? null : getCurrentId);
    }


  return (
    <div className="main">
        <div className="accordion">
            {
                data && data.length > 0 ?  
                data.map((dataItem) => (
                    <div className="item" key={dataItem.id}>
                        <div onClick={() => handleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selection === dataItem.id ?
                             <div className="answer">{dataItem.answer}</div>
                            : null
                        }                        
                    </div>
                ))
                :<div>Sorry No Data Found!</div>
            }
        </div>
    </div>
  )
}

export default Accordion