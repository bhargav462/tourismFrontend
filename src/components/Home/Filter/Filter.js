import React, { Component } from 'react';
import classes from './Filter.module.css';
import Dropdown from './../../../utils/dropdown/dropdown'
import DatePicker from '../../../utils/Datepicker/datepicker'

class Filter extends Component{

    itemList = ["Agra","Jaipur","Delhi"];

    render(){
        return(
            <>
              <div className={classes["container"]}>
                  <h1 style={{marginBottom: '10px'}}>Choose Your destination</h1>

                  <div className={classes["city"]}>
                     <Dropdown width="300px" items={this.itemList} />
                  </div>
                  
                  <div className={classes["days"]}>
                      <input min="0" placeholder="No. of days(min)" className={[classes["input"],classes["number"]].join(' ')} type="number" required />
                      <input min="0" placeholder="No. of days(max)" className={[classes["input"],classes["number"]].join(' ')} type="number" required />
                      <DatePicker />
                  </div>
                   
                  <div className={classes["search"]}>
                        <button className={classes["searchButton"]}>Search</button>
                  </div> 

              </div>
            </>
        )
    }
}

export default Filter;