//1.	Pregunto si quiere el huevo frito.
//Si me dice que si, lo frio, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal 
//y después lo sirvo en el plato.


let op_1 = parseInt(prompt(`Quiere huevo frito? \n Ingrese (1) para si. \n Ingrese (2) para no.`));

switch (op_1){
    case 1:
        alert(`Su opcion es ${op_1} y se esta fritando el huevo`);
        alert(`El huevo esta frito`);
        break;
    case 2:
        alert(`Su opcion es ${op_1} y se esta hirviendo el huevo`);
        alert(`El huevo esta hervido`);
        break;
}

let op_2 = parseInt(prompt(`Quiere sal? \n Ingrese (1) para si. \n Ingrese (2) para no.`));

switch (op_2){
    case 1:
        alert(`Su opcion es ${op_2} y se esta echando una pizca de sal`);
        alert(`El huevo esta con sal y servido en su plato`);
        alert(`Buen provecho`)
        break;
    case 2:
        alert(`Su opcion es ${op_2} y se sirve en el plato sin sal`);
        alert(`Buen provecho`)
        break;
}



