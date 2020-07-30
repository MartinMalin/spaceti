import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadData().subscribe((data) => {
      console.log(data);
    });
  }
}
