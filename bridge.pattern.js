class PaymentProcess {
  payment(amount) {

  }
}

class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super()
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
  }

  pay(amount) {
    console.log(`Paying ${amount} USD with visa card ${this.cardNumber}...`)
  }
}

class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super()
    this.phoneNumber = phoneNumber
  }

  pay(amount) {
    console.log(`Paying ${amount} VND with momo card ${this.phoneNumber}...`)
  }
}

class MemberRegistration {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  register() {
    const amount = 100
    this.paymentProcessor.pay(amount)
    console.log(`Registered for Utube membership`)
  }
}

const visaPaymentProcessor = new VisaPaymentProcess('1234.3456.xxx', '12/25', '123')
const membership = new MemberRegistration(visaPaymentProcessor)
membership.register()

const momoPaymentProcessor = new MomoPaymentProcess('0909691405')
const membershipMomo = new MemberRegistration(momoPaymentProcessor)
membershipMomo.register()

