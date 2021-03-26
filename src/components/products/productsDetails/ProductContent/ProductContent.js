import React, { Component } from 'react';
import classes from './ProductContent.module.css';

class CardContent extends Component
{
    render() {
        return (
         <div className={classes.package}>
             <div className={classes.CardContent}>
                 <h1 className={classes["strong-color"]} style={{textAlign:"center"}}>Taj Mahal</h1>
                 <div className={classes["description"]}>
                    <p><strong className={classes["strong-color"]}>Package Duration:</strong> 2 Days</p>
                    <p><strong className={classes["strong-color"]}>Destination Covered:</strong> Delhi - Agra - Delhi</p>
                    <p>This is a special tour in the summer season for avoiding the extremely hot temperature 
                       in the afternoon so this tour is one of the best tours of the Taj Mahal. 
                       Starts early morning at 4:00 AM this romantic monument looks majestic as 
                       the first light of the day touches its surface. explore one of the best hours 
                       to visit the Taj Mahal.
                     </p>
                 </div>

                 <div className={classes["price"]}>
                     <p><strong className={classes["strong-color"]}>Price : </strong>Rs 10000 /- (Onwards per person)</p>
                 </div>

                 <br />
                 <h2 className={classes["strong-color"]}>Tour Itinerary</h2>
                 <br />
                 <div className={classes["day-data"]}>
                     <div className={classes["row_day"]}>
                        <div className={classes["day"]}>
                           Day 1
                        </div>
                        <div className={classes["row-desc"]}>
                           <p>Taj Mahal in Agra</p>
                        </div>
                     </div>
                     <div className={classes["content"]}>
                        <p><strong className={classes["strong-color"]}>02:30 PM</strong>  you will be picked up by our private driver with the private car at your
                           desired location New Delhi/Gurugram/Noida/Faridabad
                           On the way to Agra via Yamuna Expressway take 3 hours rest in air-conditioned
                           fully sensitized car.
                        </p>
                       <p>
                          <strong className={classes["strong-color"]}>5:30 PM</strong> you will be welcomed by our official licensed tour guide with whom you will
proceed to Taj Mahal one of the seven wonders of the world and world heritage UNESCO
site. our guide would make it more memorable by explaining its history and hidden
truths briefly at the monument and assist you to take the best pictures of the Tajmahal
from the spots of the monument.
Note: Tajmahal remains closed every Friday
                       </p>
                       <p>
                          <strong className={classes["strong-color"]}>8:00 PM</strong> Head to visit a huge Agra Fort another World heritage UNESCO site which used
to be the main residence of the Mughals made out of red sandstone and white marble.it
was built in 1565 A.D. by the great Mughal emperor Akbar the Great.
                       </p>
                       <p>
                           <strong className={classes["strong-color"]}>9:00 PM</strong> enjoy a meal break at a multi-cuisine Indian restaurant with delicious
traditional food.
                       </p>
                     </div>
                 </div>

                 <div className={classes["day-data"]}>
                     <div className={classes["row_day"]}>
                        <div className={classes["day"]}>
                           Day 2
                        </div>
                        <div className={classes["row-desc"]}>
                           <p>Return</p>
                        </div>
                     </div>
                     <div className={classes["content"]}>
                       <p><strong className={classes["strong-color"]}>10:30 AM</strong> After having the memorable tour of The Tajmahal and Agra fort you will back to
Delhi by the same private car and driver.</p>
                       <p><strong className={classes["strong-color"]}>13:30 PM</strong> After arriving in Delhi Our driver will drop u off at your desired location at
Airport/ Hotel or anywhere in Delhi NCR</p>
                     </div>
                 </div>

                 <div className={classes["included-excluded"]}>
                    
                    <h3 className={classes["strong-color"]}>Included</h3>

                    <div className={classes["included"]}>
                       <ul className={classes["ul"]}>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> The tour guide expert in English, Spanish, French, Russian, German, Chinese</li>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> Pick-up and Drop-off to anywhere in Delhi NCR</li>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> Complimentary water bottles and umbrellas</li>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> From starting till the end of the tour with private car</li>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> All applicable taxes parking fees, tolls, fuel, etc.</li>
                          <li><i style={{color:'green',fontSize:'12px'}} class="fa fa-check" aria-hidden="true"></i> All parking fees,tolls,fuel and taxes</li>
                       </ul>
                    </div>

                    <h3 className={classes["strong-color"]}>Excluded</h3>
                    
                    <div className={classes["excluded"]}>
                       <ul className={classes["ul"]}>
                          <li><i style={{color:'red',fontSize:'12px'}} class="fa fa-times" aria-hidden="true"></i> Monument Fees</li>
                          <li><i style={{color:'red',fontSize:'12px'}} class="fa fa-times" aria-hidden="true"></i> Any other meals and additional services</li>
                          <li><i style={{color:'red',fontSize:'12px'}} class="fa fa-times" aria-hidden="true"></i> Tips and Gratuities to guide or driver</li>
                       </ul>
                    </div>

                 </div>

                 <div className={classes["information"]}>
                    <h3 className={classes["strong-color"]}>Information</h3>
                    <p>Please carry valid ID proof.</p>
                    <p>If you are interested Fatehpur Sikri also can be part of the tour pay only
INR 1450 extra per person</p>
                    <p>Baby Tajmahal also can be added to the tour please tell your tour guide at the
day of the tour</p>
                    <p><strong className={classes["strong-color"]}>PICK-UP TIME</strong> - from 2:30 AM to 3:00 AM.</p>
                    <p><strong className={classes["strong-color"]}>PICK-UP</strong> - Hotel or airport anywhere in Delhi NCR.</p>
                    <p><strong className={classes["strong-color"]}>DROP-OFF</strong> - Hotel or airport anywhere in Delhi NCR.</p>
                    <p><strong className={classes["strong-color"]}>MONUMENTS YOU’LL VISIT</strong> - Tajmahal and Agra fort or Baby Taj.</p>
                    <p><strong className={classes["strong-color"]}>CANCELLATION</strong> - Free cancellation up to 24 hours before the activity starts</p>
                 </div>
             </div>

            <div className={classes["price-form"]}>
               <div className={classes["form-content"]}>
                  <form>
                     <h2 style={{textAlign:"center"}} className={classes["strong-color"]}>Book this tour</h2>
                        
                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Name</label>
                        </div>
                           
                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Email</label>
                        </div>
                        
                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Email</label>
                        </div>

                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Phone No</label>
                        </div>

                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Tour Date</label>
                        </div>

                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>No. of Adults</label>
                        </div>

                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>No. of child</label>
                        </div>

                        <div className={classes["group"]}>      
                           <input className={classes["input"]} type="text" required />
                           <span className={classes["highlight"]}></span>
                           <span className={classes["bar"]}></span>
                           <label className={classes["label"]}>Additional Info</label>
                        </div>

                  </form>
               </div>
            </div>
         </div>
        );
    }
}

export default CardContent;