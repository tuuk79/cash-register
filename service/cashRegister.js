
class CashRegister {
    constructor() {
      this.til = {total :0, moneybox: []}
    }

    get drawer() {
      return  { contains: function (money){
        return Number(money);
      }, total: this.til.total} ;
    }
    get typeof() {
        return "CashRegister";
    }
  }
  
  const cashRegister = new CashRegister();

module.exports = cashRegister;