class Property {
  constructor(address) {
    this.address = address;
    this.tenants = [];
    this.pets = [];
  }

  addToPets(arr) {
    this.pets = [...this.pets, ...arr];
  }

  addToTenants(arr) {
    this.tenants = [...this.tenants, ...arr];
  }
}

module.exports = Property;
