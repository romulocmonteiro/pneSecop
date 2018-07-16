import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener'; 
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';


@IonicPage()

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public json_products = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileOpener: FileOpener ) {

    this.json_products = [
      {
        'title': 'Pregão e Leilão',
        'icon': 'md-hammer',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'Compr@-e',
        'icon': 'md-cart',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Compr@e é a solução de punch-out da Petronect que permite aos usuários a realização de suas compras utilizando soluções integradas de marketplaces com todas as aprovações necessároas, segurança e conformidade ao processo.',
        'slide_desc_02': [
          'Redução das interfaces entregando para o usuário do produto a oportunidade de escolher a melhor especificação que atenda a sua demanda.',
          'O pagamento pode ser realizado com faturamento mensal ou produto a produto.'
        ],
        'slide_desc_03': [
          'Redução do custo com o processo de compras ao inserir o comprador diretamente no processo de compra, selecionando o produto e eliminando a etapa de cotação.',
          'Redução de gastos ao usufruir de descontos ofertados a pessoas físicas.'
        ],
      },
      {
        'title': 'e-Formulário',
        'icon': 'md-list-box',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'GDF-e',
        'icon': 'md-cash',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'GMC',
        'icon': 'md-document',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'Lei 13.303 (Sessão Pública)',
        'icon': 'md-paper',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'Process Mining + Analytics',
        'icon': 'md-analytics',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'APP Petronect',
        'icon': 'md-phone-portrait',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },      
      {
        'title': 'Assinatura Digital / Eletrônica',
        'icon': 'md-create',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'Cadastro de Fornecedores',
        'icon': 'md-filing',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },
      {
        'title': 'Cotações + RPA',
        'icon': 'md-pricetags',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      },    
      {
        'title': 'GED (Pastas Eletrônicas)',
        'icon': 'md-folder',
        'img': [
          'assets/images/no-image.png',
          'assets/images/no-image.png',
          'assets/images/no-image.png'
        ],
        'slide_desc_01': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus.',
        'slide_desc_02': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ], 
        'slide_desc_03': [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Proin condimentum euismod mi, sed egestas risus.',
          'Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat.'
        ],
      }
    
    ]

  }

  openProductDetailPage(product) {
    this.navCtrl.push(ProductDetailPage, { product: product });
  }

  openFileFormProduct(product) {
    this.fileOpener.open(product.PDFpath, 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    console.log(this.json_products);
  }

}