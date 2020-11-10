import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import { Category} from '../category';
import{ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryId;
  public cn;

  categories=[];

 

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }

  ngOnInit()  {
    var id=this.route.snapshot.paramMap.get('id');
    this.categoryId=id;
    this.s.getCategoryById(id)
    .subscribe(res => {this.cn=res.name }
      );



    this.s.getCategories().subscribe(resCategories => this.categories=resCategories);
  }

  OnSubmitAddCategory(category){
    console.log("avant");
    console.log(this.cn)
    this.s.addCategory(this.cn)
                 .subscribe(resnextCategory=>this.categories.push(resnextCategory));
                 console.log("apres");
                 this.router.navigate(['/categories']);
                
   }

}
