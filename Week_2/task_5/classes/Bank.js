class Bank{
    
    constructor(code, address){
        this.code = code;
        this.address = address;
    }

    manages(){
	}
    maintains(){
	}
}
class ATM extends Bank{
    constructor(loction,managedBy){
		this.location = location;
		this.managedBy = managedBy;
	}
    idenfies(){}
    transaction(){}
}
class Customer extends Bank{
    constructor(name,address,dob,cardNumber,pin){
	this.name= name;
	this.address = address;
	this.dob = dob;
	this.cardNumber= cardNumber;
	this.pin= pin;
	}
    
    verifyPassword(){}
}

class Account extends Bank{
    constructor(number,balance){
	this.number = number;
	this.balance = balance;
	}
    deposit(){}
    withdraw(){}
    createTransaction(){}
}

class ATM_Transaction{
   constructor( transactionId,date,type,amount,postBalance){
   this.transaction= transaction;
   this.date=date;
   this.type=type;
   this.amount=amount;
   this.postBalance=postBalance;
   }
    modifies(){}
}

class CurrentAccount extends Account{
constructor(account_no,balance){
this.account_no=account_no;
this.balance=balance;
}
withdraw(){}
}

class SavingAccount extends Account{
constructor(account_no,balance){
this.account_no=account_no;
this.balance=balance;
}
    
}
