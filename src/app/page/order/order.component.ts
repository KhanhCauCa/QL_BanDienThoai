import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders = [
    {
      id: 1,
      date: '2022-01-01',
      status: 'Đang giao hàng',
      ship: 'Giao hàng tận nơi',
      price: 1000000,
      customerName: 'Nguyễn Văn A',
      phoneNumber: '0123456789',
      address: '123 Đường ABC',
      items: [
        { productName: 'Sản phẩm 1', price: 500000, quantity: 2 },
        { productName: 'Sản phẩm 2', price: 300000, quantity: 1 }
      ]
    },
    {
      id: 2,
      date: '2022-01-15',
      status: 'Đã giao hàng',
      ship: 'Giao hàng tận nơi',
      price: 2000000,
      customerName: 'Trần Thị B',
      phoneNumber: '0987654321',
      address: '456 Đường XYZ',
      items: [
        { productName: 'Sản phẩm 3', price: 1000000, quantity: 1 },
        { productName: 'Sản phẩm 4', price: 200000, quantity: 5 }
      ]
    },
    {
      id: 3,
      date: '2022-02-01',
      status: 'Đang giao hàng',
      ship: 'Giao hàng tận nơi',
      price: 3000000,
      customerName: 'Nguyễn Văn C',
      phoneNumber: '0123456789',
      address: '789 Đường QWE',
      items: [
        { productName: 'Sản phẩm 5', price: 1500000, quantity: 2 }
      ]
    },
  ];

  selectedOrder: any;
  showOrderDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewOrderDetails(order: any) {
    this.selectedOrder = order;
    this.showOrderDetails = true;
  }

  backToOrders() {
    this.showOrderDetails = false;
  }
}
