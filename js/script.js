// Different Configuration Price Set
function configuration(clickButtonId, dollar) {
    const configurationPrice = document.getElementById(clickButtonId);
    configurationPrice.innerText = dollar;
    totalPrice()
}

//Convert String To Number
function differentConfigPrice(clickButtonId) {
    const specification = document.getElementById(clickButtonId);
    const specificationPriceNumber = parseInt(specification.innerText);
    return specificationPriceNumber;
}
// Calculate Total Price
function totalPrice() {
    const bestPrice = differentConfigPrice('best-price');
    const memoryPrice = differentConfigPrice('memory-price');
    const ssdStorage = differentConfigPrice('ssd-price');
    const deliveryCharge = differentConfigPrice('delivery-charge');
    //total
    const total = bestPrice + memoryPrice + ssdStorage + deliveryCharge;

    // total price
    const totalAmount = document.getElementById('total-amount').innerText = total;
    const finalTotalAmount = document.getElementById('final-total').innerText = total;
    return finalTotalAmount;
}

// Using Cupon code for discount
function discountPrice() {
    const useCupon = document.getElementById('use-cupon');
    const useCuponText = useCupon.value;
    const finalTotal = document.getElementById('final-total');
    const finalTotalAmount = totalPrice();

    // Cupon Code Matching
    if (useCuponText == 'stevekaku') {
        const parcent = finalTotalAmount * (20 / 100);
        const discount = finalTotalAmount - parcent;
        finalTotal.innerText = discount;
    }
    // Clear Input Field
    useCupon.value = '';
}

// Click Button One By One
document.getElementById('lowest-memory').addEventListener('click', function () {
    configuration('memory-price', '0')
});
document.getElementById('highest-memory').addEventListener('click', function () {
    configuration('memory-price', '180')
});
document.getElementById('low-storage').addEventListener('click', function () {
    configuration('ssd-price', '0');
});
document.getElementById('mid-storage').addEventListener('click', function () {
    configuration('ssd-price', '100');
});
document.getElementById('high-storage').addEventListener('click', function () {
    configuration('ssd-price', '180');
});
document.getElementById('free-delivery').addEventListener('click', function () {
    configuration('delivery-charge', '0');
});
document.getElementById('cost-delivery').addEventListener('click', function () {
    configuration('delivery-charge', '20');
});