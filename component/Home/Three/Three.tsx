import React from 'react'
import Style from '../Home.module.css'
import Slider from './Slider'
import SliderTwo from './Slider_two'
const Three = () => {
    return (
        <div>
            <div className="row">
                <div className={Style.home_section_three}>
                    <div className={Style.head}>
                        <h2>
                            THE PLATFORM</h2>
                        <h1>Delivering Continuous and Scalable <span>Security Testing</span></h1>
                        <p>Expect an adversarial penetration testing experience that can be launched in days, not weeks, and reduces your risk over time.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Slider />
                        </div>
                        <div className="col-md-6">
                            <div className={Style.slider_right}>
                                <h2>Penetration Testing</h2>
                                <p>Expect an adversarial penetration testing experience that can be launched in days, not weeks, and reduces your risk over time.</p>

                            </div>
                        </div>

                    </div>

                    <div className="row">
                    <SliderTwo />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Three