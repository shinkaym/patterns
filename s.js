class Order {
  constructor(userId) {
    this.userId = userId
    this.timeOrder = Date.now()
    this.products = []
  }
}

class OrderManager {
  constructor() {
    this.order = null
  }

  createOrder(userId) {
    this.order = new Order(userId)
    return this.order;
  }

  addProduct(product) {
    this.order.products.push(product);
  }

  getOrder() {
    return this.order;
  }

  isValid() {
    return !!this.order.products.length;
  }

  sendOrder() {
    if(this.isValid) {
      this.orderSendMail = new SendEmailOrder()
      return this.orderSendMail.sendMail(this.order);
      // console.log(`SendEmail TO https://ecommerce.com/api/orders success::`, this.order)
    }

    return 1;
  }
}

class SendEmailOrder {
  sendMail(order) {
      console.log(`SendEmail TO https://ecommerce.com/api/orders success::`, order)
  }
}

const orderManager = new OrderManager();
orderManager.createOrder('userId-1405')
orderManager.addProduct({productId: 101, quantity: 2, price: 1000, unit: 'USD'})
console.log(`Order Info:::`, orderManager.getOrder())
console.log(`SendEmail:::`, orderManager.sendOrder())
