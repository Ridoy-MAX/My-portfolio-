import React from 'react'
import Style from '../Home.module.css'
import Link from 'next/link'
const Five = () => {
    return (
        <div className={Style.home_section_five}>
            <div className='container-fluid' >
                <div className="row">


                    <div className="col-md-2 d-flex justify-content-center">
                        <div className={Style.home_line_five}>




                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className={Style.content}>
                           
                            <h2>
                                Ready to get

                            </h2>
                            <h2> started?</h2>
                            <div className={Style.contact_button}>
                            <Link
                                href="/contact" >
                                      <h6 className='mb-0'>Contact </h6> 
                              </Link>
                           
                            

                            </div>

                      

                        </div>







                    </div>
                </div>
            </div>
        </div>
    )
}

export default Five