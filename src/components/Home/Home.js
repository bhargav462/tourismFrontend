import React, { Component } from "react";
import Filter from './Filter/Filter';
import classes from './Home.module.css';
import homeImage from './../../assets/images/tajmahal.jpg'
import Product from './../products/products'

class Home extends Component{

    render() {
        return (
             <>
                <div className={classes["Filter-wrapper"]}>
                    <div className={classes["demo-wrap"]}>
                        <img
                            className={classes["demo-bg"]}
                            src={homeImage}
                            alt=""
                        />
                        <div class={classes["demo-content"]}>
                            <Filter />
                        </div>
                    </div>
                </div>
                <div className="demoPackages">
                    <h1 style={{textAlign:"center"}}>Packages</h1>
                    <Product />
                </div>
            </>
        );
    }
}

export default Home;

