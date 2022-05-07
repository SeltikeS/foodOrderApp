import { CartItem } from './cartitem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    return this.items.reduce((total: number, item) => total + item.price, 0);
  }
}
