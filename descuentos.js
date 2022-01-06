function calcularPrecioDescuento (precio,descuento){
    const porcentajeDescuento = (1- (descuento/100));
    
    const precioDescuento = precio * porcentajeDescuento;
    return precioDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputPrice.value;
    const precioConDescuento = calcularPrecioDescuento(priceValue,discountValue);

    const rescultP =document.getElementById("ResultP");
    rescultP.innerText = "El precio con descuento es $" + precioConDescuento;

}