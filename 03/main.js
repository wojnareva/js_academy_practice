// ---- MAIN PROGRAM
let locale = 'cz';
let subtotal = 124.55;

subtotal = Number(subtotal.toFixed(2));

subtotal += 10;
subtotal -=100;

if (locale == 'cz') {
    subtotal = subtotal + ' Kč';subtotal = subtotal.replace('.', ',');
}
else if (locale == 'us'){
    subtotal = '$'+subtotal;
}
else {
    subtotal = subtotal + '€';
};

console.log(subtotal);



