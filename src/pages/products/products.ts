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
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'Compr@-e',
        'icon': 'md-cart',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'e-Formulário',
        'icon': 'md-list-box',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'GDF-e',
        'icon': 'md-cash',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'GMC',
        'icon': 'md-document',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'Lei 13.303 (Sessão Pública)',
        'icon': 'md-paper',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'Process Mining + Analytics',
        'icon': 'md-analytics',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'APP Petronect',
        'icon': 'md-phone-portrait',
        'description': 'No novo App Petronect é possível encontrar funcionalidades para acompanhar as licitações públicas do Sistema Petrobras, conferir materiais atualizados para orientação no processo de compras e ficar por dentro das novidades, além de conhecer um pouco mais sobre a Petronect.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },      
      {
        'title': 'Assinatura Digital / Eletrônica',
        'icon': 'md-create',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'Cadastro de Fornecedores',
        'icon': 'md-filing',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },
      {
        'title': 'Cotações + RPA',
        'icon': 'md-pricetags',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
      },    
      {
        'title': 'GED (Pastas Eletrônicas)',
        'icon': 'md-folder',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum euismod mi, sed egestas risus. Nunc tempor enim nec felis suscipit, vitae maximus dolor placerat. Vivamus mollis elit vel dolor eleifend pharetra faucibus eu diam. Suspendisse tristique, dui vel eleifend ultrices, mauris diam accumsan justo, id pharetra magna augue quis ligula. Proin aliquam a odio viverra scelerisque. Maecenas tincidunt euismod aliquet. Praesent dapibus fringilla lorem ac porta. Vivamus pellentesque mi ante, pretium vulputate libero consectetur vitae. Phasellus eu ultricies mauris. Sed ipsum neque, rhoncus a aliquam a, commodo a turpis. Nullam volutpat erat ante, in aliquam sapien iaculis a. Aenean cursus congue tortor, in suscipit nisi sagittis et.',
        'slide01img': 'assets/images/pne_logo.png',
        'slide01sub': 'Rodapé 01',
        'slide02img': 'assets/images/pne_logo.png',
        'slide02sub': 'Rodapé 02'
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