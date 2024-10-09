// cart.component.ts
import { Component } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'] // Đảm bảo bạn đã sử dụng styleUrls thay vì styleUrl
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      name: 'Điện thoại A',
      price: 10000000,
      quantity: 1
    },
    {
      name: 'Điện thoại B',
      price: 15000000,
      quantity: 2
    }
  ];

  get totalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  updateCart(): void {
    // Thực hiện logic cập nhật giỏ hàng tại đây
    console.log('Giỏ hàng đã được cập nhật:', this.cartItems);
  }

  checkout(): void {
    // Thực hiện logic thanh toán tại đây
    console.log('Thanh toán thành công với tổng tiền:', this.totalAmount);
  }
}
