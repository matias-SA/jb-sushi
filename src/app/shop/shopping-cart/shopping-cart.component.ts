import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnChanges {
  @Input() cartProductList: any[];
  price: number;
  sum: number;
  hasSome;
  show: boolean = false;
  showButtonsCart: boolean = true;
  sumQuantity: number;
  totalQuantity;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes', changes);
    const cartProductListUpdated: any[] = changes.cartProductList.currentValue;

    this.price = this.getTotalPrice(cartProductListUpdated);

    this.hasSome = this.hasProduct(cartProductListUpdated);

    this.totalQuantity = this.getTotalProducts(cartProductListUpdated);

    console.log('cartProductListUpdated', cartProductListUpdated);
  }

  ngOnInit(): void {}

  lessQuantity(cartProductList, cartProductListUpdated) {
    console.log('cartProductList3', cartProductList);
    cartProductListUpdated = cartProductListUpdated.filter(
      (x) => x.productTitle === cartProductList.productTitle
    );
  }

  getTotalPrice(cartProductListUpdated: any[]): number {
    let sum = 0;
    cartProductListUpdated.forEach((x) => (sum += x.quantity * x.price));
    return sum;
  }
  hasProduct(cartProductListUpdated: any[]): boolean {
    let numberProducts = cartProductListUpdated.length;
    if (numberProducts === 0) {
      return (this.hasSome = false);
    } else {
      return (this.hasSome = true);
    }
  }
  getTotalProducts(cartProductListUpdated) {
    let sumQuantity = 0;
    cartProductListUpdated.forEach((x) => (sumQuantity += x.quantity));
    return sumQuantity;
  }
}
