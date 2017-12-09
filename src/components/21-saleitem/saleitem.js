import React from "react";
import "./saleitem.css";
import T4k from "../../img/1200/TV-A.png";
import Prime from "../../img/prime.png"


export default (props) => (
    <div className="sale-item">
        <h5 className="sale-item__tag">{props.tag}</h5>
        <img className="sale-item__image" src={props.image.src} alt={props.image.alt}/>
        <h3 className="sale-item__timer">Acaba em {props.timer}</h3>
        <h4 className="sale-item__title">{props.title}</h4>
        <p className="sale-item__infull">1x no cartão de crédito por:</p>
        <p className="sale-item__price">R$ {props.price}</p>
        <img className="sale-item__prime" src={Prime}/>
        <p className="sale-item__payment-options">{props.paymentOptions.installments}x de R${props.paymentOptions.value} sem juros.</p>
    </div>
);