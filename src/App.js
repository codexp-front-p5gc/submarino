import React from "react";
// import SectionProduct from "./components/SectionProduct/SectionProduct";
import Notebook from "./img/notebook.jpg";
import Chapinha from "./img/chapinha.jpg";
import Smartphone from "./img/smartphone.png";
import Assadeiras from "./img/assadeiras.jpg";
import Aparador from "./img/aparador.png";
import Livro from "./img/livro.jpg";
import Smarttv from "./img/smarttv.png";
import Game from "./img/game.png";
import "./App.css";
import SaleItem from "./components/21-saleitem/saleitem";
import Televisao4k from "./img/1200/TV-A.PNG";
import Prime from "./img/prime.png"


var products = [
    {
        image: {
            src: Chapinha, 
            alt: "Chapinha Prancha"
        },
        name: "Chapinha Prancha Profissional Nano Titanium",
        price: 42.99,
        offer: true
    },
    {
        image: {
            src: Notebook, 
            alt: "Notebook Acer"
        },
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        offer: true
    },
    {
        image: {
            src: Smartphone, 
            alt: "Smartphone Motorola"
        },
        name: "Smartphone Motorola Moto G 5s Plus Dual Chip Android 7.1.1",
        price: 1199.99,
        offer: true
    },
    {
        image: {
            src: Assadeiras, 
            alt: "Conjunto Assadeiras"
        },
        name: "Conjunto de Assadeiras de Vidro 10 Peças",
        price: 139.99,
        offer: true
    },
    {
        name: "Kit Aparador de Pelos Philips Multigroom",
        price: 88.99,
        image: {
            src: Aparador, 
            alt: "Kit Aparador"
        },
        bestSeller: true
    },
    {
        image: {
            src: Livro, 
            alt: "Livro Harry Potter"
        },
        name: "Livro Harry Potter e o Enigma do Príncipe",
        price: 21.90,
        bestSeller: true
    },
    {
        image: {
            src: Smarttv, 
            alt: "Smart TV LED"
        },
        name: "Smart TV LED Curva 49 Samsung 49MU6300",
        price: 2698.99,
        bestSeller: true
    },
    {
        image: {
            src: Game, 
            alt: "Game Call Of Duty"
        },
        name: "Game Call Of Duty: Infinite Warfare - PS4",
        price: 39.99,
        bestSeller: true
    },
];


function bestSeller() {
    var filtered = [];

    for (var indice = 0; indice < products.length; indice++) {
        if (products[indice].bestSeller) {
            filtered.push(products[indice]);
        }
    }

    return filtered;
}


function offer() {
    var filtered = [];

    for (var indice = 0; indice < products.length; indice++) {
        if (products[indice].offer) {
            filtered.push(products[indice]);
        }
    }

    return filtered;
}

var saleImage ={
    src: Televisao4k,
    alt: "Televisão 4K",
}

var product ={
    title: "Smart TV Led 49'LG com Conversor",
    price: 2499.00,
    paymentOptions: {
        installments: 10 ,
        value: 263.05
    }
}

export default () => (
  <div className="saleitem">
    <SaleItem image={saleImage} timer="14:34:59" title={product.title} price={product.price} paymentOptions={product.paymentOptions} />
  </div>
);