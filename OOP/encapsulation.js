console.log("Hello OOP!");

//Encapsulation
//Classes

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if ( this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient Balance');
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }

};

const myAccount = new BankAccount('12345678', 1000);
console.log(myAccount.getAccountInfo());
myAccount.deposit(5000);
console.log(myAccount.getAccountInfo());
myAccount.withdraw(6000);
console.log(myAccount.getAccountInfo());
