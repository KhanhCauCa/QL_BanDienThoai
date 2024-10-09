import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  products = [
    {
      name: 'Điện thoại 1',
      price: '5.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 2',
      price: '7.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },


    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },

    {
      name: 'Điện thoại 3',
      price: '8.000.000đ',
      image:
        'https://storage.googleapis.com/a1aa/image/SRXfs9w3IYypKifcY9XU4Z8Ijo0qAxn3eYBFKweVeLW8toacC.jpg',
    },
    // Thêm các sản phẩm khác ở đây
  ];

  pages = [1, 2, 3, 4]; // Thay đổi số trang tùy theo cần thiết
}
