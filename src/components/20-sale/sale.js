import React from "react";
import SaleItem from "../21-saleitem/saleitem";
import "./sale.css";


function items(products) {
    var components =  [];

    for (var i = 0; i < products.length; i++) {
        components.push(<SaleItem image={products[i].image} timer={products[i].timer} title={products[i].title} price={products[i].price} paymentOptions={products[i].paymentOptions} />);
    }

    return components;
}

export default (props) => (
    <section className="section-sale">
        <div className="section-sale__items">
            {items(props.products)}
        </div>
    </section>
);

// sale-item-image - <img src={props.image.src} alt={props.image.alt}/>
// sale-item-info__timer - {props.timer}
// info-description__title - {props.title}
// info-description-price - {props.price}
// info-description__payment-options - {props.paymentOptions.installments}-{props.paymentOptions.value}