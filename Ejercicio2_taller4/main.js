//3 usuarios entran a una heladería a comprar un helado, pero hay un problema: 
//los precios no están al lado de cada estante con su respectivo helado. “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
//Miguel tiene $1.000 
//Carlos tiene $2.000 
//Manuel tiene $500 
//Los precios de helados son los siguientes:
//Bonais: $400
//Palito de helado de agua: $1.000 
//Palito de helado de crema: $2.200
//Bombón helado con arequipe: $1.500
//Bombón helado con chispas de chocolate: $2.500
//Bombón helado con fresas: $2.800
//Medio litro de helado: $ 2.000
//El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
//Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
//El programa también tiene que poder dar los vueltos de su compra con su factura

let clien_1 = prompt(`Ingrese su nombre: `);
let dine_1 = parseInt(prompt(`Ingrese su dinero: `));


if (clien_1 == 'miguel' && dine_1 == 1000){
    let op_1 = parseInt(prompt(`Selecione un elemento de la lista. \n 
    Ingrese (1) para helado de agua, valor $1000. \n 
    Ingrese (2) para bonice, valor $400.`));
    switch (op_1){
        case 1:
            alert(`Su opcion es ${op_1}, helado de agua; entregando producto.`);
            alert(`No tiene mas saldo`);
            alert(`Generando factura a nombre de ${clien_1}\n
            Helado de agua valor de $1000`);
            alert(`Sin cambio. Vuelva pronto`); break;
        case 2:
            alert(`Su opcion es ${op_1}, bonice; entregando producto.`);
            alert(`Saldo disponible: $600.`);
            let op_2 = parseInt(prompt(`Desea seguir comprando. \n
            Ingrese (1) para continuar. \n
            Ingrese (2) para finalizar la compra.`))
            switch (op_2) {
                case 1:
                    alert(`Compro otro bonice, nuevo saldo $200.`);
                    alert(`Saldo insuficiente para mas compras.`);
                    alert(`Generando factura a nombre de ${clien_1}\n
                    Bonice x2 valor de $800`);
                    alert(`Regresando $200 de cambio. Vuelva pronto.`); break;
                case 2:
                    alert(`Generando factura a nombre de ${clien_1}\n
                     Bonice valor de $400`);
                    alert(`Regresando $600 de cambio. Vuelva pronto.`); break;
            }; break;
    } 



} else if (clien_1 == 'carlos' && dine_1 == 2000){
    let op_3 = parseInt(prompt(`Selecione un elemento de la lista. \n 
    Ingrese (1) para medio litro de helado, valor $2000. \n 
    Ingrese (2) para helado con arequipe, valor $1500. \n
    Ingrese (3) para helado de agua, valor $1000. \n
    Ingrese (4) para bonice, valor $400.`));
    switch (op_3){
        case 1:
            alert(`Su opcion es ${op_3}, medio litro de helado; entregando producto.`);
            alert(`No tiene mas saldo`);
            alert(`Generando factura a nombre de ${clien_1}\n
            Medio litro de helado valor de $2000`);
            alert(`Sin cambio. Vuelva pronto`); break;
        case 2:
            alert(`Su opcion es ${op_3}, helado con arequipe; entrengando producto.`);
            alert(`Saldo disponible: $500.`);
            let op_4 = parseInt(prompt(`Desea seguir comprando. \n
            Ingrese (1) para continuar. \n
            Ingrese (2) para finalizar la compra.`));
            switch (op_4){
                case 1:
                    alert(`Compro otro bonice, nuevo saldo $100.`);
                    alert(`Saldo insuficiente para mas compras.`);
                    alert(`Generando factura a nombre de ${clien_1}\n
                    Helado con arequipe valor de $1500\n
                    Bonice valor de $400.`);
                    alert(`Regresando $100 de cambio. Vuelva pronto.`); break;
                case 2:
                    alert(`Generando factura a nombre de ${clien_1}\n
                    Helado con arequipe valor de $1500`);
                    alert(`Regresando $500 de cambio. Vuelva pronto.`); break;
            }; break;
        case 3:
            alert(`Su opcion es ${op_3}, helado de agua; entregando producto.`);
            alert(`Saldo disponible: $1000.`);
            let op_5 = parseInt(prompt(`Desea seguir comprando. \n
            Ingrese (1) para continuar. \n
            Ingrese (2) para finalizar la compra.`));
            switch (op_5){
                case 1:
                    let op_6 = parseInt(prompt(`Selecione un elemento de la lista. \n 
                    Ingrese (1) para helado de agua, valor $1000. \n 
                    Ingrese (2) para bonice, valor $400.`));
                    switch (op_6){
                        case 1:
                            alert(`Su opcion es ${op_6}, helado de agua; entregando producto.`);
                            alert(`No tiene mas saldo`);
                            alert(`Generando factura a nombre de ${clien_1}\n
                            Helado de agua x2 valor de $2000`);
                            alert(`Sin cambio. Vuelva pronto`); break;
                        case 2:
                            alert(`Su opcion es ${op_6}, bonice; entregando producto.`);
                            alert(`Saldo disponible: $600.`);
                            let op_7 = parseInt(prompt(`Desea seguir comprando. \n
                            Ingrese (1) para continuar. \n
                            Ingrese (2) para finalizar la compra.`))
                            switch (op_7) {
                                case 1:
                                    alert(`Compro otro bonice, nuevo saldo $200.`);
                                    alert(`Saldo insuficiente para mas compras.`);
                                    alert(`Generando factura a nombre de ${clien_1}\n
                                    Helado de agua valor de $1000\n
                                    Bonice x2 valor de $800`);
                                    alert(`Regresando $200 de cambio. Vuelva pronto.`); break;
                                case 2:
                                    alert(`Generando factura a nombre de ${clien_1}\n
                                    Helado de agua valor de $1000\n 
                                    Bonice valor de $400`);
                                    alert(`Regresando $600 de cambio. Vuelva pronto.`); break;
                            }; break;
                    } break;
                case 2:
                    alert(`Generando factura a nombre de ${clien_1}\n
                    Helado de agua valor de $1000`);
                    alert(`Regresando $1000 de cambio. Vuelva pronto.`); break;
            }; break;
            case 4:
                alert(`Su opcion es ${op_3}, bonice; entregando producto.`);
                alert(`Saldo disponible: $1600.`);
                let op_8 = parseInt(prompt(`Desea seguir comprando. \n
                Ingrese (1) para continuar. \n
                Ingrese (2) para finalizar la compra.`))
                switch (op_8){
                    case 1:
                        alert(`XD`); break;
                    case 2:
                        alert(`Generando factura a nombre de ${clien_1}\n
                        Bonice valor de $400`);
                        alert(`Regresando $1600 de cambio. Vuelva pronto.`); break;
                }; break;
    }
        





} else if (clien_1 == 'manuel' && dine_1 == 500){
    alert(`Saldo disponible solo para un bonice.`);
    alert(`Generando factura a nombre de ${clien_1}\n
    Bonice valor de $400`);
    alert(`Regresando $100 de cambio. Vuelva pronto.`)
} else {
    alert(`Datos incorrectos, intente de nuevo`);

}
