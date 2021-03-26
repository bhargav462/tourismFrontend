import React from 'react';
import classes from './dropdown.module.css';

function dropdown({width,items}){
    console.log("items",items);
    return(
        <>
            <select className={classes["dropdown"]}>
                {
                    items.map((item,index) => {
                        return <option key={index}>{item}</option>;
                    })
                }
            </select>
        </>
    )
}

export default dropdown;