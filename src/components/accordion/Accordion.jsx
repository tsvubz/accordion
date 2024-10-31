import { useState } from "react"
import data from "./data";
import './styles.css';


const Accordion = () => {

    const [selection, setSelection] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multipleSelection, setMultipleSelection] = useState([]);

    const handleSelection = (getCurrentId) => {
        setSelection(getCurrentId === selection ? null : getCurrentId);
    }

    const handleMultipleSelection = (getCurrentId) => {
        let copyMultiple = [...multipleSelection];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultipleSelection(copyMultiple);
    }


  return (
    <div className="main">
        <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)} className="button">
            {enableMultipleSelection ? <span>Enable Single Selection</span> : <span>Enable Multi-selection</span>}
        </button>
        
        <div className="accordion">
            {
                data && data.length > 0 ?  
                data.map((dataItem) => (
                    <div className="item" key={dataItem.id}>
                        <div onClick={enableMultipleSelection ? 
                                    () => handleMultipleSelection(dataItem.id) :
                                    () => handleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultipleSelection ? 
                            multipleSelection.indexOf(dataItem.id) !== -1 && <div className="answer">{dataItem.answer}</div>
                            : selection === dataItem.id && <div className="answer">{dataItem.answer}</div>
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