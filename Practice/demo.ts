//Encapsulation: Encapsulation is a process binding a data into single unit.
//we can achieve the encapsulation by daclaring properties as a private.
// use a getter and setter method to modified the value of properties.

class Test{

    private AccountNo:number=1234556;
    private accountHolder:string="Vikas Chavan";

    public setAccountNo(AccountNo:number){
         this.AccountNo=AccountNo;
    }
    public getAccountNo():number{
        return this.AccountNo;
    }

    public setAccountHolder(accountHolder:string){
        this.accountHolder=accountHolder;
    }
    public getccountHolder():string{
        return this.accountHolder;
    }

}
let t=new Test();
// console.log(t.getAccountNo());
// console.log(t.getccountHolder());

t.setAccountHolder("Vikram Bhoite");
t.setAccountNo(987654332);

console.log(t.getAccountNo());
console.log(t.getccountHolder());











