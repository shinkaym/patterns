class Car {
  constructor({name = 'Ford Ranger 2023', doors = 4, price = '10 VND', customerInfo = {}}) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

class ServiceLogistics {
  transportClass = Car
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo)
  }
}

const carService = new ServiceLogistics()
console.log(`Carservice: ${carService.getTransport({customerInfo: {name: 'khoapham', cargoVolume: '100 kg'}})}`)

// Cach 1
class Truck {
  constructor({name = 'Container 2023', doors = 15, price = '100 VND', customerInfo = {}}) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

carService.transportClass = Truck
console.log(`TruckService::${carService.getTransport({customerInfo: {name: 'Phuong', cargoVolume: '1000 kg'}})}`)

// Cach 2 (nen lam)
class TruckService extends ServiceLogistics {
  transportClass = Truck
} 
const truckService = new TruckService()
console.log(`TruckService::Class:::${truckService.getTransport({customerInfo: {name: 'Phuong khun', cargoVolume: '1000.000 kg'}})}`)

