import React from "react";
import "./saleitem.css";
import Prime from "../../img/prime.png";


export default (props) => (
    <div className="sale-item">
        <div className="sale-item-image">
            <img src={props.image.src} alt={props.image.alt}/>
        </div>
        <div className="sale-item-info">
            <div className="sale-item-info__timer">
                <h3>Acaba em {props.timer}</h3>
            </div>
            <div className="sale-item-info-description">
                <div className="info-description__cut"></div>
                <h4 className="info-description__title">{props.title}</h4>
                <p className="info-description__infull">1x no cartão de crédito por:</p>
                <div className="info-description-price">
                    <p className="info-description-price__value">R$ {props.price}</p>
                    <img className="info-description-price__prime" src={Prime} alt="logo do Submarino Prime"/>
                </div>
                <p className="info-description__payment-options">{props.paymentOptions.installments}x de R${props.paymentOptions.value} sem juros.</p>
            </div>
        </div>
    </div>
);