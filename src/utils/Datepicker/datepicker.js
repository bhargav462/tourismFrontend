import React from 'react'
import classes from './datepicker.module.css'

function datePicker(){
    let maxDate = getMaxDate(6);

    function getMaxDate(m){
        let date = new Date();
        console.log(date.getFullYear() + " " + date.getMonth())
        let month = date.getMonth() + m;
        console.log(typeof(month))
        let year = date.getFullYear();
        if(month >= 12)
        {
           month = month%12 + 1;
           year++;
        }

        if(month < 10){
            month = "0" + month;
        }

        return `${year}-${month}-28`
    }

    return(
        <input  min={new Date().toISOString().split('T')[0]} placeholder="Month of Travel" type="date"
                max={maxDate}
                className={classes["input"]}
                required />
    )
}

export default datePicker;