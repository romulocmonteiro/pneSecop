import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener'; 
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleDetailPage } from '../people-detail/people-detail';


@IonicPage()

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  public json_people = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileOpener: FileOpener ) {

    this.json_people = [
      {
        'name': 'Bruno de Lima Pereira',
        'job': 'Presidente',
        'avatar': 'avatar-bruno.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'bruno.pereira@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Elson Leite Cordeiro',
        'job': 'Diretor de Operações',
        'avatar': 'avatar-elson.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'elson.cordeiro@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Mario Carvalho Sophia',
        'job': 'Diretor Comercial e Desenvolvimento de Soluções',
        'avatar': 'avatar-mario.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'mario.sophia@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Alberto Teixeira Neto',
        'job': 'Gerente de Desenvolvimento de Soluções',
        'avatar': 'avatar-alberto.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'alberto.neto@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Andre Rodrigues Castanheira',
        'job': 'Líder de Projetos',
        'avatar': 'avatar-castanheira.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'andre.castanheira@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Kate Cristina Muniz Rocha',
        'job': 'Analista de Projetos',
        'avatar': 'avatar-kate.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'kate.rocha@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Andre de Siqueira e Melo',
        'job': 'Comercial',
        'avatar': 'avatar-andremelo.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'andre.melo@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Daniel Jose de Salles e Silva',
        'job': 'Comercial',
        'avatar': 'avatar-daniel.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'daniel.salles@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Roberto Jose Baptista Dubeux Junior',
        'job': 'Arquiteto de Soluções',
        'avatar': 'avatar-dubeux.jpg',
        'profile': 'Roberto (Dubeux) é um gerentes sênior de projetos que atua como principal arquiteto de soluções da Petronect, garantindo uma visão técnica unificada de todas as soluções Petronect e demais integração com os ambientes de clientes e parceiros.',
        'email': 'roberto.junior@petronect.com.br',
        'linkedin': 'Definir'
      },
      {
        'name': 'Rômulo Cunha Monteiro',
        'job': 'Arquiteto de Soluções Digitais',
        'avatar': 'avatar-romulo.jpg',
        'profile': 'Rômulo é um gerente de projetos atuando na Petronect como arquiteto de soluções digitai, integrando as tradicionais funcionalidades de compras da Petronect com novos produtos do universo digital da Petronect. Atualmente vem liderando os projetos de evolução do App Mobile, Assinatura Eletrônica e demais projetos de integração de novas soluções Petronect ao processo Procurement to Pay da Petrobras.',
        'email': 'romulo.monteiro@petronect.com.br',
        'linkedin': 'romulocmonteiro'
      },
      {
        'name': 'Carlos Camargo',
        'job': 'Líder de Projetos / Consultor Funcional',
        'avatar': 'avatar-camargo.jpg',
        'profile': 'Definir texto do perfil',
        'email': 'carlos.camargo@petronect.com.br',
        'linkedin': 'Definir'
      },
    
    ]

  }

  openPeopleDetailPage(people) {
    this.navCtrl.push(PeopleDetailPage, { people: people });
  }

  openFileFormProduct(product) {
    this.fileOpener.open(product.PDFpath, 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    console.log(this.json_people);
  }

}