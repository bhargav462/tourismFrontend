import React, { Component } from 'react';
import classes from './Reviews.module.css'
import swal from 'sweetalert'
import ReactStars from 'react-rating-stars-component'

class Reviews extends Component
{

    state = {
        feedback: []
    }

    componentDidMount(){
        fetch(`https://major-project-back-end.herokuapp.com/feedback/get`,{
            method: 'get',
            headers:{
              'content-type': 'application/json'
            }
          }).then(ress => {
            return ress.json()
          })
          .then((response) => {
              console.log("response",response)
                if(response.error){
                  return swal(response.error)
                }
                this.setState({
                    feedback: response
                })
          }).catch((error) => {
            console.log("error",error)
          })
    }

    render(){
        return(<div className={classes["container"]}>
            <h1>Reviews</h1>
           <div className={classes["Reviews"]}>

                {
                  this.state.feedback.map((feedback,index) => {
                      console.log("feedback",feedback)
                      return(
                        <div key={index} className={classes["Review"]}>
                            <div className={classes["heading"]}>
                                <h2>{feedback.place}</h2>
                                <p>{feedback.name}</p>
                            </div>
                            <div className={classes["content"]}>
                                <p>{feedback.feedback}</p>
                            </div>
                            <div>
                              <ReactStars
                                count={5}
                                size={54}
                                isHalf={true}
                                value={feedback.rating}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                edit={false}
                              />
                            </div>
                        </div>
                      )
                  })
                }     
                        
           </div>
        </div>)
    }
}

export default Reviews