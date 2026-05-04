import {Injectable, signal} from '@angular/core';
import {Product} from '../products/product';

@Injectable({
  providedIn: 'root',
})

export class CartService {

  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product){
    this.cartItems.update((items) => [...items, product]);
  }
}
