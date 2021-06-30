import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../models/seccion.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  secciones: Seccion[] = [
    {
      seccionName: 'Tablas y Combos',
      id: 1,
      menus: [
        {
          title: 'COMBOS',
          products: [
            {
              productTitle: 'COMBO ITALIA (16p)',
              price: 1080,
              productDetail:
                'Roll de langostinos, tomates secos, rucula, cubierto de verdeo picado y queso muzzarella en hebras. Hot roll de autor con piel de salmon, verdeo y phila.',
            },
            {
              productTitle: 'COMBO BRASIL (16p)',
              price: 990,
              productDetail:
                'Roll Buenos Aires, roll salmon al verdeo envuelto de mango y salsa maracuya con semillas.',
            },
            {
              productTitle: 'COMBO JAPON (12p)',
              price: 890,
              productDetail:
                '6 niguiries de Salmon Rosado, 6 tamago roll con salmon y queso phila.',
            },
            {
              productTitle: 'COMBO ARGENTINA (12p)',
              price: 750,
              productDetail:
                'Roll de salmon y queso phila coronado con batatas fritas y salsa maracuya, geishas de salmon rosado y phila.',
            },
            {
              productTitle: 'COMBO MEXICO (16p)',
              price: 890,
              productDetail:
                'Rolls de langostinos y queso phila coronado con guacamole y nachos, Rolls de salmon rosado y queso phila envuelto en finas capas de palta.',
            },
          ],
        },
        {
          title: 'COMBOS GRANDES',
          products: [
            {
              productTitle: 'COMBO LAS VEGAS 40 PIEZAS',
              price: 1485,
              productDetail:
                'New York roll salmon, makis salmon rosado y phila, roll langostinos apaltados. California roll, niguiris y geishas de salmon.',
            },
            {
              productTitle: 'COMBO HAWAII 50 PIEZAS',
              price: 1950,
              productDetail:
                'Roll de autor Ituya, roll New York salmon, makis salmon rosado y phila, roll Buenos Aires y Tuna Roll',
            },
            {
              productTitle: 'GRAN JB SUSHI 60 PIEZAS',
              price: 2100,
              productDetail:
                'Mascardi roll de autor, New York roll, makis salmon rosado y phila, roll langostinos apaltados, Sprint roll, California roll, niguiris y geishas.',
            },
          ],
        },
        {
          title: 'SELECCIONES DEL SUSHIMAN 24 PIEZAS',
          products: [
            {
              productTitle: 'TABLA SURTIDA JB',
              price: 900,
            },
            {
              productTitle: 'TABLA PREMIUM JB',
              price: 1020,
            },
            {
              productTitle: 'TABLA SALMON JB',
              price: 1150,
            },
            {
              productTitle: 'TABLA VEGGIE JB',
              price: 990,
            },
          ],
        },
        {
          title: 'ENTRADAS',
          products: [
            {
              productTitle: 'Arrolladitos Primavera (2u)',
              price: 160,
            },
            {
              productTitle: 'Ebi Furai (5u)',
              price: 360,
            },
            {
              productTitle: 'Porcion de rabas',
              price: 850,
            },
            {
              productTitle: 'Bastones de merluza',
              price: 450,
            },
          ],
        },
      ],
    },
    {
      seccionName: 'Makis y Rolls',
      id: 2,
      menus: [
        {
          title: 'ROLLS DE AUTOR (8 PIEZAS)',
          products: [
            {
              productTitle: 'Roll Iruya',
              price: 550,
              productDetail:
                'Roll de salmon rosado, tomates secos, verdeo y queso phila con sesamo tostado por fuera.',
            },
            {
              productTitle: 'Roll Ushuaia',
              price: 550,
              productDetail:
                'Roll de salmon rosado coronado en queso phila con un camaron entero por fuera',
            },
            {
              productTitle: 'Roll Alerces',
              price: 550,
              productDetail:
                'Roll de salmon grillado desmenuzado, verdeo con sesamo tostado por fuera y ralladura de queso en hebras.',
            },
            {
              productTitle: 'Roll Mendoza',
              price: 550,
              productDetail:
                'Roll de langostinos empanizados, queso phila envueltos con palta y salmon rosado por fuera.',
            },
            {
              productTitle: 'Roll Trevelin',
              price: 550,
              productDetail:
                'Roll de Salmon rosado grillado con piel y queso phila con lluvia de verdeo por fuera.',
            },
            {
              productTitle: 'Roll Tilcara',
              price: 550,
              productDetail:
                'Roll caliente empanizado en panko con kanikama, phila y batatas fritas por dentro.',
            },
            {
              productTitle: 'Roll Mascardi',
              price: 550,
              productDetail:
                'Roll totalmente rebozado relleno de piel de salmon rosado, verdeo y phila.',
            },
            {
              productTitle: 'Roll Calafate',
              price: 550,
              productDetail:
                'Roll de mejillones, verdeo y tomates secos cubierto de sesamo por fuera.',
            },
            {
              productTitle: 'Roll Tucuman (veggie)',
              price: 550,
              productDetail:
                'Maki gigante de hongos, morron asado y phila cubierto de alga nori.',
            },
            {
              productTitle: 'Roll Chalten',
              price: 550,
              productDetail:
                'Roll de zuccini, berenjena y palta coronado con batatas fritas.',
            },
            {
              productTitle: 'Roll Puerto Madryn',
              price: 550,
              productDetail:
                'Roll envuelto totalmente en queso philadelfia, relleno de langostinos y coronado con nueces confitadas.',
            },
          ],
        },
        {
          title: 'SALMON Y MARISCOS ROLLS (8 PIEZAS)',
          products: [
            {
              productTitle: 'New York roll',
              price: 450,
              productDetail: 'Salmon, palta y queso phila',
            },
            {
              productTitle: 'Sprint Roll',
              price: 450,
              productDetail: 'Salmon, queso phila cubierto con verdeo picado',
            },
            {
              productTitle: 'Philadelfia Roll',
              price: 450,
              productDetail: 'Salmon y queso phila',
            },
            {
              productTitle: 'Crocante Roll',
              price: 385,
              productDetail:
                'Salmon y queso phila coronado con batatas crocantes',
            },
            {
              productTitle: 'Doble Salmon',
              price: 385,
              productDetail: 'Salmon por dentro envuelto con mas salmon',
            },
            {
              productTitle: 'Sprint Langostinos',
              price: 450,
              productDetail: 'Langostinos con phila cubierto de verdeo picado',
            },
            {
              productTitle: 'Roll Apaltado',
              price: 450,
              productDetail:
                'Langostinos, queso phila envuelto en finas capas de palta',
            },
            {
              productTitle: 'Buenos Aires Roll',
              price: 450,
              productDetail:
                'Langostinos rebozados, queso phila, cubierto con salmon y salsa maracuya y batatas fritas',
            },
            {
              productTitle: 'Mexico Roll',
              price: 450,
              productDetail:
                'Langostinos, queso phila coronado con guacamole y nachos',
            },
          ],
        },
        {
          title: 'TAMAGO ROLLS (6 PIEZAS)',
          products: [
            {
              productTitle: 'Roll de tamago con salmon rosado y queso phila',
              price: 330,
            },
            {
              productTitle:
                'Roll de tamago con salmon rosado,queso phila y palta',
              price: 330,
            },
            {
              productTitle:
                'Roll de tamago con salmon rosado, queso phila y coronado con batatas',
              price: 330,
            },
          ],
        },
        {
          title: 'MAKIS (8 PIEZAS)',
          products: [
            {
              productTitle: 'Maki salmon rosado con queso phila',
              price: 450,
            },
            {
              productTitle: 'Maki salmon, palta y queso phila',
              price: 450,
            },
            {
              productTitle: 'Maki solo salmon',
              price: 450,
            },
            {
              productTitle: 'Maki kanikana, verdeo y queso phila',
              price: 450,
            },
            {
              productTitle: 'Maki zanahoria, palta y queso phila',
              price: 450,
            },
          ],
        },
      ],
    },
    {
      seccionName: 'Bebidas',
      id: 3,
      menus: [
        {
          title: 'CERVEZAS Y CHAMPANGE',
          products: [
            {
              productTitle: 'Porron Stella Artois',
              price: 100,
            },
            {
              productTitle: 'Lata Scheneider 473ml',
              price: 85,
            },
            {
              productTitle: 'Champange Murnm 187',
              price: 150,
            },
            {
              productTitle: 'Champange Chandom 187 ExBr.',
              price: 225,
            },
            {
              productTitle: 'Champange Salentein ExBrut',
              price: 560,
            },
            {
              productTitle: 'Champange Salentein BrutNat',
              price: 590,
            },
            {
              productTitle: 'Champange Baron B ExBrut',
              price: 1550,
            },
          ],
        },
        {
          title: 'VINOS',
          products: [
            {
              productTitle: 'Vino Alaris Malbec',
              price: 225,
              productDetail: 'BODEGA TRAPICHE ',
            },
            {
              productTitle: 'Vino Emilia Sauvignon Blanc',
              price: 390,
              productDetail: 'BODEGA NIETO SENETIER ',
            },
            {
              productTitle: 'Vino Niero Senetier Chardonay',
              price: 405,
              productDetail: 'BODEGA NIETO SENETIER ',
            },
            {
              productTitle: 'Vino tinto Trumpeter',
              price: 590,
              productDetail: 'BODEGA RUTINI',
            },
            {
              productTitle: 'Vino tinto Trumpeter Mal/Cab',
              price: 790,
              productDetail: 'BODEGA RUTINI',
            },
          ],
        },
      ],
    },
    {
      seccionName: 'Niguiris y Geishas',
      id: 4,
      menus: [
        {
          title: 'NIGUIRIS (1 UNIDAD)',
          products: [
            {
              productTitle: 'Niguiris de salmon rosado',
              price: 75,
            },
            {
              productTitle: 'Niguiris de morron asado',
              price: 65,
            },
          ],
        },
        {
          title: 'GEISHAS (1 UNIDAD)',
          products: [
            {
              productTitle: 'Geishas de salmon y queso phila',
              price: 70,
            },
            {
              productTitle: 'Geisha de salmon, palta y queso phila',
              price: 75,
            },
            {
              productTitle:
                'Geishas de salmon rosado, queso phila, con batatas fritas y salsa maracuya',
              price: 80,
            },
          ],
        },
      ],
    },
    {
      seccionName: 'Rolls Veggies',
      id: 5,
      menus: [
        {
          title: 'ROLLS VEGGIE (8 PIEZAS)',
          products: [
            {
              productTitle:
                'Roll de queso phila, zanahoria y palta cubierto de morron asado',
              price: 420,
            },
            {
              productTitle: 'Roll de zuccini, queso phila y tomates secos',
              price: 420,
            },
            {
              productTitle: 'Roll de berenjena, batatas y queso phila',
              price: 420,
            },
            {
              productTitle:
                'Roll de zapallitos, queso phila cubierto de verdeo',
              price: 420,
            },
            {
              productTitle: 'Geisha de morron rojo asado con palta',
              price: 420,
            },
            {
              productTitle: 'Niguiris de morrron asado',
              price: 420,
            },
            {
              productTitle: 'Niguiris de palta',
              price: 420,
            },
          ],
        },
      ],
    },
    {
      seccionName: 'Sushi Salad',
      id: 6,
      menus: [
        {
          title: 'SALSAS',
          products: [
            {
              productTitle: 'Wasabi',
              price: 40,
            },
            {
              productTitle: 'Jengibre',
              price: 40,
            },
            {
              productTitle: 'Salsa de soja extra',
              price: 40,
            },
            {
              productTitle: 'Salsa buenos aires',
              price: 50,
            },
            {
              productTitle: 'Salsa de maracuya',
              price: 50,
            },
          ],
        },
        {
          title: 'SUSHI SALAD',
          products: [
            {
              productTitle: 'Salmon rosado',
              price: 175,
            },
            {
              productTitle: 'Salmon grillado',
              price: 175,
            },
            {
              productTitle: 'Atun cocido',
              price: 160,
            },
            {
              productTitle: 'Camarones',
              price: 160,
            },
            {
              productTitle: 'Mejillones',
              price: 165,
            },
            {
              productTitle: 'Langostinos empanizados',
              price: 175,
            },
            {
              productTitle: 'Merluza empanizada',
              price: 160,
            },
            {
              productTitle: 'Kanikama',
              price: 160,
            },
            {
              productTitle: 'Queso philadelfia',
              price: 95,
            },
            {
              productTitle: 'Palta',
              price: 65,
            },
            {
              productTitle: 'Mango',
              price: 75,
            },
            {
              productTitle: 'Batatas fritas',
              price: 60,
            },
            {
              productTitle: 'Pepino',
              price: 55,
            },
            {
              productTitle: 'Cebolla de verdeo',
              price: 35,
            },
            {
              productTitle: 'Salsa de maracuya',
              price: 50,
            },
            {
              productTitle: 'Semillas de sesamo',
              price: 0,
            },
            {
              productTitle: 'Chia',
              price: 25,
            },
            {
              productTitle: 'Cibulet',
              price: 35,
            },
          ],
        },
      ],
    },
  ];
}
