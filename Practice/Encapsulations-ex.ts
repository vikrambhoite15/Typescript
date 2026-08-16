
// class Test{

//     private MobNo:number=0;
//     private PanNo:string="";

//     public setMobNO(MobNo:number){
//         this.MobNo=MobNo;
//     };
//     public getMobNo():number{
//         return this.MobNo;
//     };

//     public setPanNo(PanNo:string){
//         this.PanNo=PanNo;
//     };

//     public getPanNo():string{
//         return this.PanNo;
//     };
// };

// const t= new Test();
// t.setMobNO(12345678);
// t.setPanNo("ABGF3456K");

// console.log(t.getMobNo());
// console.log(t.getPanNo());
//==========================================================================================
//ex-2

// class PersonalDetails {

//     private adharNo: number = 0;
//     private licence: number = 0;
//     private bankName: string = "";

//     public setAdharNo(adharNo: number) {
//         this.adharNo = adharNo;
//     };
//     public getAdharNo(): number {
//         return this.adharNo;
//     };

//     public setLicence(licence: number) {
//         this.licence = licence;
//     }
//     public getLicence(): number {
//         return this.licence;
//     }

//     public setBankName(bankName: string) {
//         this.bankName = bankName;
//     }

//     public getBankName(): string {
//         return this.bankName;
//     }

// };

// class show extends PersonalDetails {

//     setDetails() {
//         this.setAdharNo(9876544);
//         this.setLicence(12344566);
//         this.setBankName("HDFC Bank");
//     };

//     PrintDetails() {
//         console.log(this.getBankName());
//         console.log(this.getAdharNo());
//         console.log(this.getLicence());
//     }
// }
// const s = new show();
// s.setDetails();
// s.PrintDetails();

