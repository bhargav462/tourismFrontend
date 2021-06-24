import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './form.module.css';
import StarRating from 'react-rating-stars-component'

const AddCrop = () => {

        const submitForm = () => {
            console.log("Submit Form")
        }

        const {handleChange,handleRating,values,handleSubmit,errors,disabled} = useForm(submitForm,validate);

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
                        <textarea
                            id="feedback"
                            type="text"
                            name="feedback"
                            className={classes["formInput"]}
                            placeholder="Enter your feedback"
                            value={values.feedback}
                            onChange={handleChange}
                            rows="4"
                        />
                        {errors.feedback && <p className={classes["warning"]}>{errors.feedback}</p>}
                    </div>
                    <div>
                        <label htmlFor="feedback" >
                             <b style={{fontSize:'25px'}}>Feedback</b>
                        </label>
                        <StarRating
                            count={5}
                            onChange={handleRating}
                            size={54}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            name="rating"
                        />
                        {errors.rating && <p className={classes["warning"]}>{errors.rating}</p>}
                    </div>
                    

                    <button type="submit" className={classes["registerbtn"]} disabled={disabled}>
                        Submit
                    </button>

                </form>
            </div>
        );
}

export default AddCrop;