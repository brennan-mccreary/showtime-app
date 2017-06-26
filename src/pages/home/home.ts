import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { MovieService } from '../../app/services/movie.service'

// @IonicPage({
//   segment: 'home'
// })
@Component({
  selector: 'home',
  templateUrl: 'home.html',
  providers: [MovieService]
})
export class HomePage {
  showtimes: any;

  constructor(
    public navCtrl: NavController,
    private movieService: MovieService,
    public modalCtrl: ModalController,
  ) {
    this.getDefaults();
  }

  getDefaults() {
    this.showtimes = [];
  }

  ngOnInit(){
    this.getShowtimes();
  }

  getShowtimes(){
    this.movieService.getShowtimes().subscribe(response => {
      this.showtimes = response;
      console.log(this.showtimes);
    });
  }

}
