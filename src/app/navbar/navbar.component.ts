import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../series/series.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('form',{static:false}) form: NgForm;

  constructor(private seriesService: SeriesService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.seriesService.getSearchedSeries(form.value.name);
    this.router.navigate(["/series/search"]);
    this.form.form.reset();
  }

}
