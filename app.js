//creo tres funciones (una por cada tipo de nota) donde se genera un select con las opciones

function notasSalida() {

    const notasSalida = document.getElementById('selectSalida');
    
    for (const elemento of listaNotasSalida){
        const opcionesSalida = document.createElement('option');
        opcionesSalida.innerHTML = elemento;
        notasSalida.appendChild(opcionesSalida);
        
    }
    notasSalida.addEventListener('change', 
    function(){
        const notaSalidaElegida = notasSalida.options[notasSalida.selectedIndex].text;
        console.log (notaSalidaElegida);
        document.getElementById('mensajeSalida').innerText = `Usted ha seleccionado
        ${notaSalidaElegida} como nota de salida`
        localStorage.setItem('NOTA_DE_SALIDA', notaSalidaElegida);
        
    })
    
}

notasSalida();


function notasCorazon() {

    const notasCorazon = document.getElementById('selectCorazon');
    
    for (const elemento of listaNotasCorazon){
        const opcionesCorazon = document.createElement('option');
        opcionesCorazon.innerHTML = elemento;
        notasCorazon.appendChild(opcionesCorazon);

    }
    notasCorazon.addEventListener('change', 
    function(){

        const notaCorazonElegida = notasCorazon.options[notasCorazon.selectedIndex].text;
        console.log (notaCorazonElegida);
        document.getElementById('mensajeCorazon').innerText = `Usted ha seleccionado
        ${notaCorazonElegida} como nota de corazón`
        localStorage.setItem('NOTA_DE_CORAZON', notaCorazonElegida);
        
    })
    
}

notasCorazon();
    

function notasFondo() {
    
    const notasFondo = document.getElementById('selectFondo');
    
    for (const elemento of listaNotasFondo){
        const opcionesFondo = document.createElement('option');
        opcionesFondo.innerHTML = elemento;
        notasFondo.appendChild(opcionesFondo);

    }

    notasFondo.addEventListener('change', 
    function (){
        
        const notaFondoElegida = notasFondo.options[notasFondo.selectedIndex].text;
        console.log (notaFondoElegida);
        document.getElementById('mensajeFondo').innerText = `Usted ha seleccionado
        ${notaFondoElegida} como nota de fondo`
        localStorage.setItem('NOTA_DE_FONDO', notaFondoElegida);
    })
};

notasFondo();

                                                                    
//función que crea un select con options para la medida

let medidaElegida = '';
function eleccionMedida(){                                                                    
    const seleccionaMedida = document.getElementById('contenedorMedida');
    for (const elemento of medida){
        const lista = document.createElement('option');
        lista.innerHTML = elemento;
        seleccionaMedida.append(lista);
    } 
    seleccionaMedida.addEventListener('change', 
    function opcionMedida(){
    
        let medidaElegida = seleccionaMedida.options[seleccionaMedida.selectedIndex].text;
        console.log (medidaElegida);
        
        document.getElementById('mensajeMedida').innerText = `Usted ha seleccionado
        ${medidaElegida} ml.`

        localStorage.setItem('MEDIDA', medidaElegida);

        return medidaElegida;
    })
    return medidaElegida;
} 


//ESTA ES LA FUNCIÓN QUE NO LEE EL VALOR DE MEDIDA ELEGIDA
//función para calcular el precio de acuerdo a la medida elegida
let precioMedida = 0;

function calculaPrecioMedida(){

    if (eleccionMedida ===  '30'){
        precioMedida = 2000;
        }
        else if (eleccionMedida === '50'){
            precioMedida = 4000
        }
        else {
        precioMedida = 6000
        }

    return precioMedida;  
}

eleccionMedida();

calculaPrecioMedida();



//función que crea un select con options para el tipo de concentración

let concentracionElegida = '';

function eleccionConcentracion(){                                                                    
    const seleccionaConcentracion = document.getElementById('contenedorConcentracion');
    for (const elemento of concentracion){
    const lista = document.createElement('option');
    lista.innerHTML = elemento;
    seleccionaConcentracion.append(lista);
    }  
    seleccionaConcentracion.addEventListener('change', 
    function(){
        let concentracionElegida = seleccionaConcentracion.options[seleccionaConcentracion.selectedIndex].text;
        console.log (concentracionElegida);
        document.getElementById('mensajeConcentracion').innerText = `Usted ha seleccionado la concentración
        ${concentracionElegida}`
        localStorage.setItem('CONCENTRACION', concentracionElegida);
        return concentracionElegida
        
    })

}   

eleccionConcentracion();

//ESTA ES LA FUNCIÓN QUE NO LEE EL VALOR DE LA CONCENTRACIÓN ELEGIDA
//función para calcular el precio de acuerdo a la concentración de fragancia elegida
let precioConcentracion = 0;

function calculaPrecioConcentracion(){
    if (eleccionConcentracion === 'EDT'){
        precioConcentracion = 1000;
    }
    else if (eleccionConcentracion === 'EDP'){
        precioConcentracion = 2000;
    }
    else {
        precioConcentracion = 4000;
    }
    return precioConcentracion;
}

calculaPrecioConcentracion();

//función que genera el button y ejecuta el evento cuando se hace click sobre el mismo. El evento consiste en mostrar el resumen de la compra
function finalizar(){

    const btnFin = document.createElement('button');
    btnFin.innerText = 'Finalizar y calcular'
    document.body.appendChild(btnFin);
    btnFin.addEventListener('click', ()=> calcularPrecio());
}

finalizar();

function calcularPrecio(){
    const totalPedido = (a, b)=> a + b;
    console.log (`El VALOR TOTAL del pedido es: $ ${totalPedido(precioMedida, precioConcentracion)}`);

    const resumenCompra = document.getElementById('resumen');
    resumenCompra.innerHTML = `<h3>El precio total del pedido es:</h3>
                                <p>$${totalPedido(precioMedida, precioConcentracion)}</p>`;

                           
}

