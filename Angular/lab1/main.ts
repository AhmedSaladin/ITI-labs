class Account {
  acc_no: number;
  balance: string;
  debitAmount() {
    return `debitAmount`;
  }
  creditAmount() {
    return `creditAmount`;
  }
  getBalance() {
    return this.balance;
  }
}
interface _Account {
  Date_of_opening: Date;
  addCustomer();
  removeCustomer();
}

class Current_Account extends Account implements _Account {
  Date_of_opening: Date;
  addCustomer() {
    return `Customer added`;
  }
  removeCustomer() {
    return `Customer removed`;
  }
  iInterest_rate() {
    return `Interest_rate`;
  }
}

class Saving_Account extends Account implements _Account {
  Date_of_opening: Date;
  addCustomer() {
    return `Customer added`;
  }
  removeCustomer() {
    return `Customer removed`;
  }
  min_Balance() {
    return `min_Balance`;
  }
}
