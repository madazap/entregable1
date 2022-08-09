alert("Bienvenido, dejanos ayudarte con el calculo de interes monetario, por favor selecciona a continuacion el tipo de interes");

alert("1. Interes Fijo 5%  \n 2. Interes simple \n 3. Interes Compuesto");

let interes=prompt("Que tipo de interes tiene tu prestamo??");

const interes_evaluar=0.05;

let valor_prestamo;
let cuotas;
let total;

if (interes == null || interes == "") {
  text = "Lamentamos te vayas, buen dia";
} else {
    if(interes==1){
            //interes fijo

            valor_prestamo=parseInt(prompt("Valor del prestamo"));
            cuotas=parseInt(prompt("Cantidad de meses del prestamo"));
            total=valor_prestamo+(valor_prestamo*interes_evaluar*cuotas);
            alert("Al final del periodo deberas cancelar"+total);

    }
    if (interes == 2) {

        valor_prestamo = parseInt(prompt("Valor del prestamo"));
        cuotas = parseInt(prompt("Cantidad de meses del prestamo"));
        let interes_fijo=parseInt(prompt("Interes del prestamo"));
        total = valor_prestamo + (valor_prestamo * interes_fijo * cuotas);
        alert("Al final del periodo deberas cancelar" + total);

     
    }
    if (interes == 3) {

        valor_prestamo = parseInt(prompt("Valor del prestamo"));
        cuotas = parseInt(prompt("Cantidad de meses del prestamo"));
        let interes_fijo = parseInt(prompt("Interes anual del prestamo ?"));
        
        total = valor_prestamo * Math.pow(1 + interes_fijo / 100 / cuotas, 120) - valor_prestamo;
        alert("Al final del periodo deberas pagar en intereses" + total);

    }
    


} 