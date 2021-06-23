import React, { Component } from "react";
import classes from './Toolbar.module.css';

class Toolbar extends Component{

    render() {
        return (
             <>
                <div className={classes["header"]}>
                    <div className={classes["container"]}>
                        <input type="checkbox" name="" className={classes["check"]} />
                        
                        <div className={classes["logo-container"]}>
                            <h3 className={classes["logo"]}>Website<span className={classes["span"]}>Name</span></h3>
                        </div>

                        <div className={classes["nav-btn"]}>
                            <div className={classes["nav-links"]}>
                                <ul className={classes["ul"]}>
                                    <li className={classes["nav-link"]}>
                                        <a href="/" className={classes['a']}>Home</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="#">Packages<i className="fas fa-caret-down"></i></a>
                                        <div className={classes["dropdown"]}>
                                            <ul className={classes["ul"]}>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/package/agra">Agra</a>
                                                </li>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/package/delhi">Delhi</a>
                                                </li>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/package/jaipur">Jaipur</a>
                                                </li>
                                                <div className={classes["arrow"]}></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="#">About Us</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="#">Contact Us</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/reviews">Reviews</a>
                                    </li>
                                </ul>
                            </div>

                     
                        </div>

                        <div className={classes["hamburger-menu-container"]}>
                            <div className={classes["hamburger-menu"]}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Toolbar;

