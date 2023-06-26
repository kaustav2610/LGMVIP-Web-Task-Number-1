import React, { useState } from "react";
import List from "./List";

const App=()=>{
    const[inputList,setInputList]=useState("");
    const [items,setitems]=useState([])

    const itemEvent=(e)=>{
        setInputList(e.target.value);
    }
    const listOfItem=()=>{
        setitems((oldItems)=>{
            return [...oldItems,inputList]
        })
        setInputList("")
    }

    const deleteItems=(id)=>{

        setitems((oldItems)=>{
            return oldItems.filter((arrElm,index)=>{
                return index !== id;
            });
        });
    };



    return(
        <>
            <div className="main_div">
                <div className="centre_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input value={inputList} type="text" placeholder="Add a Item" onChange={itemEvent}/>
                <button onClick={listOfItem}>+</button>

                <ol>
                    
                    {items.map((itemval,index)=>{
                        return(
                            <List text={itemval}  id={index} key={index}  onSelect={deleteItems}/>
                            
                        )
                    })}
                </ol>

                </div>
            </div>
        </>
    )

}

export default App;
