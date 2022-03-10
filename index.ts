import products from './products';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const productName: string = 'fanny pack';
const shippingAddress: string = '575 Broadway, New York City, New York';

const product = products.filter((product) => product.name === productName)[0];
console.log(product);

if (product.preOrder === true) {
	console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) >= 25) {
	console.log('There will be free shipping.');
	shipping = 0;
} else {
	shipping = 5;
}

if (shippingAddress.match('New York')) {
	taxPercent = 0.1;
} else {
	taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(productName);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(shipping);
console.log(total);
