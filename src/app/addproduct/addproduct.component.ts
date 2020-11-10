import { ProductService } from './../service/product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  reactiveForm : any = FormGroup;
  public userFile : any =File

  public productId;
  public p;
  public d;
  public q;
  public n;

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService,private fb :FormBuilder,private productService: ProductService) {
    this.reactiveForm = this.fb.group({
      name : new FormControl(''),
      price : new FormControl(''),
      quantity: new FormControl(''),
      descreption : new FormControl('')
    })

   }
  products=[];
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


saveForm(submitForm:FormGroup){
  const product =submitForm.value
  
  const formData = new FormData()
  formData.append('product',product)
  formData.append('file',this.userFile)
  
  this.productService.saveProduct({'product':product,'file':this.userFile}).subscribe(res=>{
    console.log(res)
  });
}

onSelectFile(event) {
    const file = event.target.files[0]
    this.userFile
    console.log(event.target.files[0])
}

}


