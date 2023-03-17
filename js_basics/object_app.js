let order_date = new Date("2022-12-31");

let order_first = {
  "order_id": 101,
  "order_date": order_date,
  "billing": "credit card",
  "shipping_address": "Besiktas, Istanbul",
  "purchased_products": [
    {
      "product_id": 5,
      "product_name": "iPhone 14 Pro",
      "product_url": "http://loremipsum.com/iphone-14-pro",
      "product_price": 40000 
    },

    {
      "product_id": 6,
      "product_name": "iPhone 14 Pro Max",
      "product_url": "http://loremipsum.com/iphone-14-pro-max",
      "product_price": 50000 
    }
  ],
  "customer": {
    "customer_id": 12
  },
  "seller": {
    "company_id": 34,
    "company_name": "Apple Turkey"
  }
}

let order_first_14p_price = order_first.purchased_products[0].product_price * 1.18
console.log(order_first_14p_price);
let order_first_14pm_price = order_first.purchased_products[1].product_price * 1.18
console.log(order_first_14pm_price);
let order_first_price = order_first_14pm_price + order_first_14p_price;
console.log(order_first_price);