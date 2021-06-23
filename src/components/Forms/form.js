import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './form.module.css';

const AddCrop = () => {

        const submitForm = () => {
            console.log("Submit Form")
        }

        const {handleChange,values,handleSubmit,errors,disabled} = useForm(submitForm,validate);
        
        return (
            <div className={`${classes["register-container"]} ${classes.check}`} >
                <form onSubmit={handleSubmit} className={classes["form"]}>
                    <h1 style={{textAlign:"center"}}>Feeback Form</h1>
                    <hr className={classes["hr"]}/>
                    <div>
                        <label htmlFor="Name"  >
                             <b style={{fontSize:'25px'}}>Name</b>
                        </label>
                        <input
                            id="Name"
                            type="text"
                            name="Name"
                            className={classes["formInput"]}
                            placeholder="Enter your Name"
                            value={values.Name}
                            onChange={handleChange}
                        />
                        {errors.Name && <p className={classes["warning"]}>{errors.Name}</p>}
                    </div>
                    <div>
                        <label htmlFor="place" >
                             <b style={{fontSize:'25px'}}>Place</b>
                        </label>
                        <input
                            id="place"
                            type="text"
                            name="place"
                            className={classes["formInput"]}
                            placeholder="Enter the place you have visited"
                            value={values.place}
                            onChange={handleChange}
                        />
                        {errors.place && <p className={classes["warning"]}>{errors.place}</p>}
                    </div>
                    <div>
                        <label htmlFor="feedback" >
                             <b style={{fontSize:'25px'}}>Feedback</b>
                        </label>
                        <input
                            id="feedback"
                            type="text"
                            name="feedback"
                            className={classes["formInput"]}
                            placeholder="Enter your feedback"
                            value={values.feedback}
                            onChange={handleChange}
                        />
                        {errors.feedback && <p className={classes["warning"]}>{errors.feedback}</p>}
                    </div>
                    

                    <button type="submit" className={classes["registerbtn"]} disabled={disabled}>
                        Submit
                    </button>

                </form>
            </div>
        );
}

export default AddCrop;