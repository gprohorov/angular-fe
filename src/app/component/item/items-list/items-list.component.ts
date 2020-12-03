import { Component, OnInit } from '@angular/core';
import {ItemService} from 'src/app/service/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: any;
  currentIndex = -1;
  currentItem = null;


  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.extractItems();
  }

   extractItems(): void {
    this.service.getAll()
      .subscribe(data => {
        this.items = data;
        console.log(data);
        },
        error => {
        console.log(error)
        }
      );
  }





  deleteItem(id: string): void {
  }

  updateItem(): void {

  }

  setActiveItem(item: any, i: number): void {
    this.currentIndex = i;
    this.currentItem = item;

  }


}
