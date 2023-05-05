import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Değişken tipleri 
  // String
  // Blooen 
  // Number 
  // Date 
  // Any 
  // Unknown

  title = 'angularapp';
  name:String = "samet";
  isUser:boolean = false;
  createDate:Date = new Date();
  names:String[] = ["samet","berna"];
  isUsers:boolean[] = [false,true,true];
  type:any = 5.6;
  type1:unknown = 5.6;

  constructor(){
    console.log(`name:${this.name}`);
    console.log(`isUser:${this.isUser}`);
    this.Deneme();
  
  }

   Deneme()
  {
    let i:Number = 0;
    console.log(`i : ${i}`);
    this.type.toFixed();
    (this.type1 as Number).toFixed();
  }
   // tanpımlanan değişkenler başlatılması lazım 
  
}
export class Product
{
  // fields
    protected name:String; // sadece extends edilen sınıf tarafından ulaşılabiliyor 
    public price:Number; // her yerden ulaşılabilir hale getiriyoruz 
    private category:Number; // sadece aynı class içerisinden ulaşılabilir hale getiriyoruz. 

  constructor(name:string, price:number, category:number){
    this.name = name;  
    this.price = price;
    this.category = category;

  }   
  Topla(a1:number, a2:number):number
  {
     return a1+a2;
  }  
} 

export class Product2 extends Product
{
  constructor(name:string, price:number, category:number){
    super(name, price, category);
  }

  method() {
    
    this.Topla(5,3);
  }

  method2()
  {
    var p = new Product2("samet", 5, 20);
    p.name; // sadece extends edilen sınıf tarafından ulaşılabiliyor 
    
  }
}
interface Product3
{
  Name:string;
  LastName:string;
  // SayHello:() =>String;
  // SayHello1():String;
}
class interfaceTest implements Product3
{
  Name: string;
  LastName:string;
  constructor(name:string, lastname:string)
  {
    this.Name  = name;
    this.LastName  =lastname; 
  }
  SayHello()
  {
      return "Hello Word !";  
  }
  SayHello1(): String {
      return "Hello Word 2 !";
  }

  product :Product3 = {Name: "samet", LastName: "atas"} // interfaces class gibi kullanabiliyoruz
}


