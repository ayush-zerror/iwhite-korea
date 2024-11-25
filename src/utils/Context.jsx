import React, { createContext } from 'react'
export const productsContext = createContext()



const Context = ({ children }) => {
  const products = [
    {
      name: "Acne+ Toner Essence",
      category: "acne skincare line",
      images: [
        "/products/asc1.jpg",
        "/products/asc2.jpg",
        "/products/asc3.jpg",
        "/products/asc4.jpg",
      ]
    },
    {
      name: "Acne+ Facial Wash",
      category: "acne skincare line",
      images: [
        "/products/asl1.jpg",
        "/products/asl2.jpg",
        "/products/asl3.jpg",
        "/products/asl4.jpg",
      ]
    },
    {
      name: "Acne+ Aqua Moisturizer",
      category: "acne skincare line",
      images: [
        "/products/asll1.jpg",
        "/products/asll2.jpg",
        "/products/asll3.jpg",
        "/products/asll4.jpg",
      ]
    },
    {
      name: "Facial Cream",
      category: "day and bbb creame",
      images: [
        "/products/bbc1.jpg",
        "/products/bbc2.jpg",
        "/products/bbc3.jpg",
        "/products/bbc4.jpg",
      ]
    },
    {
      name: "BB Holic (Light)",
      category: "day and bbb creame",
      images: [
        "/products/bbh1.png",
        "/products/bbh2.jpg",
        "/products/bbh3.jpg",
        "/products/bbh4.jpg",
      ]
    },
    {
      name: "BB Holic (Beige)",
      category: "day and bbb creame",
      images: [
        "/products/bbhb1.png",
        "/products/bbhb2.jpg",
        "/products/bbhb3.jpg",
        "/products/bbhb4.jpg",
      ]
    },
    {
      name: "Extra Pure Toner Essence",
      category: "daily skincare line",
      images: [
        "/products/dsc1.jpg",
        "/products/dsc2.jpg",
        "/products/dsc3.jpg",
        "/products/dsc4.jpg",
      ]
    },
    {
      name: "Aqua Moisturizer Whitening Vita",
      category: "daily skincare line",
      images: [
        "/products/dsl1.jpg",
        "/products/dsl2.jpg",
        "/products/dsl3.jpg",
        "/products/dsl4.jpg",
      ]
    },
    {
      name: "Facial Wash Whitening Vita",
      category: "daily skincare line",
      images: [
        "/products/dsll1.jpg",
        "/products/dsll2.jpg",
        "/products/dsll3.jpg",
        "/products/dsll4.jpg",
      ]
    },
  ];

  return (
    <productsContext.Provider value={products}>{children}</productsContext.Provider>
  )
}

export default Context