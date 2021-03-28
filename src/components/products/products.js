import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classes from './product.module.css';
import land1 from './../../assets/images/tajmahalp1.jpg';
import land2 from './../../assets/images/tajmahalp2.jpg';
import land3 from './../../assets/images/tajmahalp3.jpg';
import land4 from './../../assets/images/tajmahalp1.jpg';
import Dropdown from './../../utils/dropdown/dropdown'

class CardLayout extends Component{

    itemList = ["Agra","Jaipur","Delhi"];

    render() {
        return (
            <div className={classes["container"]}>

                <div className={classes["filter"]}>
                    <div className={classes["city"]}>
                        <select className={classes["dropdown"]}>
                            {
                                this.itemList.map((item,index) => {
                                    return <option key={index}>{item}</option>;
                                })
                            }
                        </select>
                        <input min="0" placeholder="No. of days(min)" className={[classes["input"],classes["number"]].join(' ')} type="number" required />
                        <input min="0" placeholder="No. of days(max)" className={[classes["input"],classes["number"]].join(' ')} type="number" required />
                        <input placeholder="Month of Travel" className={classes["input"]} type="number" required />
                        <button className={classes["searchButton"]}>Search</button>
                    </div> 
                </div>

            <main className={classes.CardLayout}>
                <article>
                    <Link to="/package/agra/details">
                        <div className={classes.ImageContainer}>
                            <img src={land1} alt="Unable to load" />
                        </div>
                    </Link>
                    <div class={classes.content}>
                        <h3>TajMahal</h3>
                        <h4>2D/3N</h4>
                        <h4>Price : Rs 300.00/-</h4>
                    </div>
                </article>
                <article>
                    {/* <Link to="/land/land4"> */}
                        <div className={classes.ImageContainer}>
                            <img src={land2} alt="Unable to load" />
                        </div>
                    {/* </Link> */}
                    <div class={classes.content}>
                        <h3>TajMahal</h3>
                        <h4>2D/3N</h4>
                        <h4>Price : Rs 300.00/-</h4>
                    </div>
                </article>
                <article>
                    {/* <Link to="/land/land4"> */}
                        <div className={classes.ImageContainer}>
                            <img src={land3} alt="Unable to load" />
                        </div>
                    {/* </Link> */}
                    <div class={classes.content}>
                        <h3>TajMahal</h3>
                        <h4>2D/3N</h4>
                        <h4>Price : Rs 300.00/-</h4>
                    </div>
                </article>
                <article>
                    {/* <Link to="/land/land4"> */}
                        <div className={classes.ImageContainer}>
                            <img src={land4} alt="Unable to load" />
                        </div>
                    {/* </Link> */}
                    <div class={classes.content}>
                        <h3>TajMahal</h3>
                        <h4>2D/3N</h4>
                        <h4>Price : Rs 300.00/-</h4>
                    </div>
                </article>
            </main>
          </div>
        );
    }
}

export default CardLayout;