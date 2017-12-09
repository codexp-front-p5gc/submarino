import React from "react";
import "./saleitem.css";
import "../../img/1200/TV-A.PNG";


export default (props) => (
    <div className="sale-item">
        <h5 className="sale-item__tag">{props.tag}<h4>
        <img className="sale-item__image" src={props.image.src} alt={props.image.alt} />
        <h3 className="sale-item__timer">{props.timer}<h3>
        <h4 className="sale-item__title">{props.title}</h4>
        <p className="sale-item__infull">1x no cartão de crédito por:</p>
        <p className="sale-item__price">R$ {props.price}</p>
        <img className="sale-item__prime" src={props.prime.src} alt={props.prime.alt} />
        <p className="sale-item__payment-options">{props.payment-options.installments}x de R${props.payment-options.value} sem juros.</p>
    </div>
);