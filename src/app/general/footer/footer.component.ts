import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public innerWidth: number;
  public wooInfo: Array<object> = [];
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.wooInfo = [
      {
        title: 'WHO WE ARE',
        subtitles : ['About','Team','Work With Us']
      },
      {
        title: 'WOOCOMMERCE',
        subtitles: ['Features','Payment','Marketing','Shipping','Extension Store','eCommerce blog','Development blog','Ideas board','Mobile App','Community','Style Guide','Email Newsletter']
      },            
      {
        title: 'OTHER PRODUCTS',
        subtitles: ['Storefront','WooSlider','Sensei','Sensei Extensions']
      },
      {
        title: 'SUPPORT',
        subtitles: ['Documentation','Customizations','Support Policy','Contact','COVID-19 Resources','Provacy Notice for','California Users']
      },          
      {
        title: 'WE RECOMMEND',
        subtitles: ['WooExperts','Hosting Solutions','Pre-sales FAQ','Success Stories','Design Feedback Group']
      }
    ]
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}
