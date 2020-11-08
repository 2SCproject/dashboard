import { Component, OnInit, ɵConsole } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import{ActivatedRoute}from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public productId;
  public p;
  public d;
  public q;
  public n;

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  products=[];
  userFile ;
  public message: string;
  public imagePath;
  imgURL: any;

  ngOnInit() {
    var id=this.route.snapshot.paramMap.get('id');
    this.productId=id;
    this.s.getProductById(id)
    .subscribe(res => {this.p=res.price;this.d=res.descreption;this.n=res.name ;this.q=res.quantity}
      );

  }

  OnSubmitAddProduct(product:Product){
    console.log("ggg");
    
    this.s.addProduct(product)
                 .subscribe(resnextProduct=>this.products.push(resnextProduct));
                 this.router.navigate(['/products']);
                 console.log(product)
                
   }
  onSubmit() {
      this.addData();    
    }
   addData() {
  const formData = new  FormData();
  const product = this.s.dataForm.value;
  formData.append('product',JSON.stringify(product));
  formData.append('file',this.userFile);
  this.s.createData(formData).subscribe( data => {
  
    this.router.navigate(['/products']);
  });
}
   onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      console.log("image only");
      return;
      
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  
  }}

}
