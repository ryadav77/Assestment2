export class employee{
    id :number;
    name :string;
    dob: string;
    address: string;
    phone: string;
    degree: string;
    marks:number;
    stream:string;
    college:string;
    constructor(id:number,name:string,dob:string,address:string,phone:string,degree:string,marks:number,stream:string,college:string){
        this.id=id;
        this.name=name;
        this.dob=dob;
        this.address=address;
        this.phone=phone;
        this.degree=degree;
        this.stream=stream;
        this.marks=marks;
        this.college=college;


}
}