// src/data/products.ts
import black from '@/public/black.png'
import right from '@/public/RightMen.png'
import Jean from "@/public/JeansShirt.png"
import round from '@/public/round.png'
import shade from "@/public/shade.png"
import vintage from '@/public/vintage.png'

import { StaticImageData } from 'next/image';

export interface ProductCardProps {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  price: string;
  // rating: number;
  // reviews?: number;
  // label?: string;
  // Sizes?: string;
}

export interface CardProps {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  price: string;
}


  export const BestsellerCategories: CardProps [] =[
    {
      id: 1,
      imageUrl: black,
      title: 'H&M T-shirt',
       price:'$150'
      },
      {
        id: 2,
        imageUrl: right,
        title: 'H&M T-shirt',
         price:'$150'
      },
      {
        id: 3,
        imageUrl: Jean,
        title: 'H&M T-shirt',
        price:'$150'
      },
    //   {
    //     id: 4,
    //     imageUrl: Shirt,
    //   },
    //   {
    //     id: 5,
    //     imageUrl: earring,
    //   },
    //   {
    //     id: 6,
    //     imageUrl: packedShirt,
    //   },
    //   {
    //     id: 7,  
    //     imageUrl: trainersShoe,
    //   },
    //   {
    //     id: 8,
    //     imageUrl: blender
    //   }

  ]
  
  export const products: ProductCardProps[] = [
    {
      id: 1,
      imageUrl: vintage,
      title: 'HAND-MADE TURKEY CASUAL',
   price:'$150'
  
    },
    {
      id: 2,
      imageUrl: round,
      title: 'PEACH SILK BLOUSE',
     price:'$150'
    },
    {
      id: 3,
      imageUrl: right,
      title: 'VINTAGE HANDMADE BLOUSE',
     price:'$150'
    },
    {
      id: 4,
      imageUrl: shade,
      title: 'unisex T-Shirt',
     price:'$150'
    },


    // Add more products as needed
  ];

//   export const womenProducts: ProductCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Gown,
//       title: 'LACE DESIGNERS GOWN',
//       price: 350000,
//       rating: 4.4,
//       reviews: 198,
//       label: 'Bestseller',
//       Sizes:' XS S M L XL XXL',
//     },
//     {
//       id: 2,
//       imageUrl: VintageDress,
//       title: 'vintage designers (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL',
//     },
//     {
//       id: 3,
//       imageUrl: vintage,
//       title: 'SUNSHINE SERENADE (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },
//     {
//       id: 4,
//       imageUrl: Japanese,
//       title: 'japanese youtan (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },


//     // Add more products as needed
//   ];

  

//   export interface LaunchCardProps {
//     id: number;
//     imageUrl: string;
//     title: string;
//     price: number,
//     // rating: number;
//     // reviews?: number;
//     label?: string;
//     Sizes?: string;
//   }

    
//   export const launched: LaunchCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Nigeria,
//       title: 'CUSTOM MADE Nigerian Native Attire (men)',
//       price: 350000,
//       // rating: 4.4,
//       Sizes: 'All Sizes',
//       // reviews: 198,
//       // label: 'Bestseller',
//     },
//     {
//       id: 2,
//       imageUrl: Jeans,
//       title: 'CASUAL JEANS',
//       price: 250000,
   
//       Sizes: 'XS S M L XL XXL',
//       // rating: 4.9,
//       // reviews: 691,
//       label: 'Bestseller',
//     },
//     {
//       id: 3,
//       imageUrl: soso,
//       title: 'CUSTOM MADE SENATOR WEARS',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       // label: 'Bestseller',
//     },
//     {
//       id: 4,
//       imageUrl: Menshoe,
//       title: 'MENS SHOE',
//       price: 250000,
//       Sizes: '41 42 44 45',
//       // rating: 4.9,
//       // reviews: 691,
//       // label: 'Bestseller',
//     },


//     // Add more products as needed
//   ];
  