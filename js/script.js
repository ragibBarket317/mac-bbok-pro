function configuration(clickButton, dollar) {
    const bestPrice = document.getElementById(clickButton);
    bestPrice.innerText = dollar;
    totalPrice()
}
function totalPrice() {
    const lowMemory = document.getElementById('best-price');
    const memoryText = parseInt(lowMemory.innerText);
    const highMemory = document.getElementById('highest-memory-price');
    const highMemoryText = parseInt(highMemory.innerText);
    const ssdStorage = document.getElementById('ssd-price');
    const ssdStorageText = parseInt(ssdStorage.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeText = parseInt(deliveryCharge.innerText);

    const total = memoryText + highMemoryText + ssdStorageText + deliveryChargeText;


    const totalAmount = document.getElementById('total-amount').innerText = total;
    const finalTotalAmount = document.getElementById('final-total').innerText = total;
    return finalTotalAmount;
}
// Cupon code function
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

document.getElementById('lowest-memory').addEventListener('click', function () {
    configuration('highest-memory-price', '0')
});
document.getElementById('highest-memory').addEventListener('click', function () {
    configuration('highest-memory-price', '180')
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