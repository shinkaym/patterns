class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment
  }

  payWithVisa(visaPayment) {
    const convertedPayment = this.convertToVisaPayment(this.momoPayment)
    visaPayment.pay(convertedPayment)
  }

  convertToVisaPayment(momoPayment) {
    const conversionRate = 23000
    const visaAmount = momoPayment.amount / conversionRate
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount
    }

    return visaPayment;
  }
}

class VisaPayment {
  pay(payment) {
    console.log(`Paying ${payment.amount} USD with Visa card ${payment.cardNumber}...`)
  }
}

class MomoPayment {
  constructor(cardNumber, expiryDate, cvv, visaAmount) {
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
    this.amount = visaAmount
  }
}

const momoPayment = new MomoPayment('123456789', '12/25', '123', '230000')
const momoAdapter = new MomoPaymentAdapter(momoPayment)
const visaPayment = new VisaPayment()
momoAdapter.payWithVisa(visaPayment)
