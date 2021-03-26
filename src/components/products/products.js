import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classes from './product.module.css';
import land1 from './../../assets/images/tajmahalp1.jpg';
import land2 from './../../assets/images/tajmahalp2.jpg';
import land3 from './../../assets/images/tajmahalp3.jpg';
import land4 from './../../assets/images/tajmahalp1.jpg';

class CardLayout extends Component{
    render() {
        return (
            <div className={classes["container"]}>
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