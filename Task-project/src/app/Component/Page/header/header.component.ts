import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  formData: any = {}

  constructor(public countryService: CountryService){}

  ngOnInit(): void {
    this.countryService.behaviorSubject.subscribe((value) => {
    const formData = localStorage.getItem("formData");
    this.formData = JSON.parse(formData || "")
    });
  }

}
