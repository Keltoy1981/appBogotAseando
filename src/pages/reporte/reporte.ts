import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'

@IonicPage()
@Component({
  selector: 'page-reporte',
  templateUrl: 'reporte.html',
})
export class ReportePage {

	public fotos:any;
	public base64Image:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl:AlertController) {
  }

  ngOnInit(){
  	this.fotos = [];
  }

  tomarFoto(){
  	const options: CameraOptions = {
	  quality: 50,
	  destinationType: this.camera.DestinationType.FILE_URI,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64 (DATA_URL):
	 this.base64Image = 'data:image/jpeg;base64,' + imageData;
	 this.fotos.push(this.base64Image);
	 this.fotos.reverse();
	}, (err) => {
	 // Handle error
	});
  }

  borrarFoto(index){
  	 const confirm = this.alertCtrl.create({
      title: '¿Desea eliminar la foto?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.fotos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();

  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportePage');
  }

}
