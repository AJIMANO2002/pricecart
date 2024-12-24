import React from 'react'

function Plan({ plan }) {


    return (

        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                        {plan.plan}
                    </h5>
                    <h6 className="card-price text-center">
                        ${plan.price}
                        <span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                        {
                            plan.features.map((feature, i) => {
                                return<Listitems key={i} feature={feature} />
                            })}
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">
                            Button
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Listitems({feature}) {
    console.log(feature);
    
    return (
        <li className={feature.isEnabled ? "" : "text-muted"}>
            <span className="fa-li">
                <i className={feature.isEnabled ? "fas fa-check" : "fas fa-times"}></i>
            </span>
            {feature.isBold ? <b>{feature.feature}</b> : feature.feature}
        </li>
    )
}

export default Plan