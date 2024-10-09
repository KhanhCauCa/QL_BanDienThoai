import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  // Dữ liệu mẫu cho giỏ hàng
  cartItems = [
    {
      name: 'Sản phẩm 1',
      price: 100000,
      quantity: 1,
      imageUrl: 'https://storage.googleapis.com/a1aa/image/u8BVDWoX43YtO5oPGgpIGPZsZ7cyAQkfJomIGYUZ5smqBrxJA.jpg'
    },
    {
      name: 'Sản phẩm 2',
      price: 150000,
      quantity: 2,
      imageUrl: 'https://storage.googleapis.com/a1aa/image/u8BVDWoX43YtO5oPGgpIGPZsZ7cyAQkfJomIGYUZ5smqBrxJA.jpg'
    }
  ];

  get totalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  get shippingCost(): number {
    return 20000; // Ví dụ phí vận chuyển
  }

  get grandTotal(): number {
    return this.totalAmount + this.shippingCost;
  }

  placeOrder(): void {
    alert('Đặt hàng thành công!');
    // Logic xử lý đặt hàng
  }
}
