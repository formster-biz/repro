import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(    
    private storageService: StorageService
    ) { }

  ngOnInit() {
    console.log("item component starting...........");
  }

}
