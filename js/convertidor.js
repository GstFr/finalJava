
let  today = new Date();
let anio = today.getFullYear();
let mes = today.getMonth() + 1 ;
let dia = today.getDate();


let cotiWeb = '{"oficial":{"value_avg":174.50,"value_sell":179.00,"value_buy":170.00},"blue":{"value_avg":318.00,"value_sell":320.00,"value_buy":316.00}," oficial_euro":{"value_avg":188.00,"value_sell":193.00,"value_buy":183.00},"blue_euro":{"value_avg":342.00,"value_sell":344.00,"value_buy":340.00},"last_update" :"2022-12-14T19:55:25.406855-03:00"}';
let dolarWeb = JSON.parse(cotiWeb.blue);

console.log(dolarWeb.blue);

class Divisa {
    constructor (nombre, valor){
        this.nombre = nombre
        this.valor = valor
    };
};

const divisas = []

divisas.push (new Divisa ('dolarCompra', dolarWeb.value_buy));
divisas.push ( new Divisa ('dolarVenta', dolarWeb.value_sell));

let compraDolar =  divisas[0].valor; 
let ventaDolar =   divisas[1].valor ;
let fecha = document.getElementById("cotiFecha");
fecha.innerText = (dia + ' / ' + mes +' / '+ anio + ' ')

let cotizacion = document.getElementById("cotiPrecio");
cotizacion.innerText = 'Pagamos '+ compraDolar +' por dolar y los vendemos a  '+ ventaDolar +' ' ;
let boton = document.getElementById('boton')
let mensaje = document.getElementById('mensajeFinal');

let check1 = document.getElementById('check1')
let check2 = document.getElementById('check2')
let check3 = document.getElementById('check3')
let check4 = document.getElementById('check4')

localStorage.setItem('fecha',today)
localStorage.setItem('cotizacionCompra',compraDolar)
localStorage.setItem('cotizacionVenta',ventaDolar)

function compra(importe,compraDolar){
        let totalCompra = importe * compraDolar;
        
        mensaje.innerText = ("Debes abonar $ "+ totalCompra +"  ")
    };
    function venta(importe,ventaDolar){
        let totalVenta = importe * ventaDolar;
        
        mensaje.innerText =( "Recibiras $ "+ totalVenta +" ")
    };

 function compraOnline (importe,compraDolar){
        let totalCompraOnline = (importe * compraDolar) * 1.05;
        
        mensaje.innerText = ("Debes abonar $ "+ totalCompraOnline +" ")
    };

    function ventaOnline (importe,ventaDolar){
        let totalVentaOnline = (importe * ventaDolar) / 1.05 ;
        
        mensaje.innerText =( "Recibiras $ "+ totalVentaOnline +" ")
    };

boton.addEventListener('click', function () {
    
    let importe = document.getElementById("importe").value;
    if (check1.checked) { compra(importe, compraDolar)} 
    else if (check2.checked) { venta(importe,ventaDolar)} 
    else if (check3.checked) {compraOnline(importe,compraDolar)} 
        else if (check4.checked) {ventaOnline(importe,ventaDolar)} 
    else {}

 Swal.fire({
  position: 'top',
  icon: 'success',
  title: 'Bien hecho !!',
  showConfirmButton: false,
  timer: 1500
})
})




