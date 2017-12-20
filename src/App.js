import React from "react";
import Sale from "./components/20-sale/sale";
import TelevisaoSamsung from "./img/1200/TV-A.PNG";
import SmartphoneMoto from "./img/1200/celular-F.PNG";
import SmartphoneAsus from "./img/1200/celular-D.PNG";
import NotebookDell from "./img/1200/notebook-A.PNG";
import "./App.css";


var products = [

    {
        image: {
            src: TelevisaoSamsung,
            alt: "Televisão 4K Samsung"
        },
        timer: "14:34:59",
        title: "Smart TV Led 49'LG 49UJ6525 com Conversor",
        price: 2499.00,
        paymentOptions: {
            installments: 10,
            value: 263.05,
        },
    },
    {
        image: {
            src: SmartphoneMoto,
            alt: "Smartphone Motorola Moto X4 Dual Cam Android 7.0"
        },
        timer: "14:34:59",
        title: "Smartphone Motorola Moto X4 Dual Cam Android 7.0",
        price: 1231.99,
        paymentOptions: {
            installments: 10,
            value: 139.99
        }
    },
    {
        image: {
            src: NotebookDell,
            alt: "Notebook Dell Inspiron i15 5567 D40B Inter Core 7 i7"
        },
        timer: "14:34:59",
        title: "Notebook Dell Inspiron i15 5567 D40B Inter Core 7 i7",
        price: 2659.99,
        paymentOptions: {
            installments: 10,
            value: 279.99
        }
    },
    {
        image: {
            src: SmartphoneAsus,
            alt: "Smartphone Asus Zenfone 3 Dual Chip Android 6 Tela"
        },
        timer: "14:34:59",
        title: "Smartphone Asus Zenfone 3 Dual Chip Android 6 Tela",
        price: 1034.10,
        paymentOptions: {
            installments: 10,
            value: 114.90
        }
    }
]

function almostdone() {
    var filtered = [];

    for (var indice = 0; indice < products.length; indice++) {
        if (products[indice].timer="14:34:59") {
            filtered.push(products[indice]);
        }
    }

    return filtered;
}

export default () => (
    <div className="App">
        <Sale products={products}/>
    </div>
);


