let today = new Date();
let anio = today.getFullYear();
let mes = today.getMonth() + 1;
let dia = today.getDate();

let buy;
let sell;

const url = "https://api.bluelytics.com.ar/v2/latest";
fetch(url)
  .then((res) => res.json())

  .then((data) => {
    buy = data.blue.value_buy;
    sell = data.blue.value_sell;

    datos(buy, sell);

    let compraDolar = divisas[0].valor;
    let ventaDolar = divisas[1].valor;

    compra(importe, compraDolar);
    venta(importe, ventaDolar);
    compraOnline(importe, compraDolar);
    ventaOnline(importe, ventaDolar);
    inicioLeyenda();
    
    let cotizacion = document.getElementById("cotiPrecio");
    cotizacion.innerText =
      "Pagamos " +
      compraDolar +
      " por dolar y los vendemos a  " +
      ventaDolar +
      " ";

    boton.addEventListener("click", function () {
      let importe = document.getElementById("importe").value;
      if (check1.checked) {
        compra(importe, compraDolar);
      } else if (check2.checked) {
        venta(importe, ventaDolar);
      } else if (check3.checked) {
        compraOnline(importe, compraDolar);
      } else if (check4.checked) {
        ventaOnline(importe, ventaDolar);
      } else {
      }

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Bien hecho !!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    localStorage.setItem("fecha", today);
    localStorage.setItem("cotizacionCompra", compraDolar);
    localStorage.setItem("cotizacionVenta", ventaDolar);
  });

const datos = (buy, sell) => {
  divisas.push(new Divisa("dolarCompra", buy));
  divisas.push(new Divisa("dolarVenta", sell));
};

const compra = (importe, compraDolar) => {
  let totalCompra = importe * compraDolar;

  mensaje.innerText = "Debes abonar $ " + totalCompra + "  ";
};
const venta = (importe, ventaDolar) => {
  let totalVenta = importe * ventaDolar;

  mensaje.innerText = "Recibiras $ " + totalVenta + " ";
};

const compraOnline = (importe, compraDolar) => {
  let totalCompraOnline = importe * compraDolar * 1.05;

  mensaje.innerText = "Debes abonar $ " + totalCompraOnline + " ";
};

const ventaOnline = (importe, ventaDolar) => {
  let totalVentaOnline = (importe * ventaDolar) / 1.05;

  mensaje.innerText = "Recibiras $ " + totalVentaOnline + " ";
};
const inicioLeyenda = () => {
  mensaje.innerText = null;
};
class Divisa {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}
const divisas = [];

let fecha = document.getElementById("cotiFecha");
fecha.innerText = dia + " / " + mes + " / " + anio + " ";

let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensajeFinal");

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
