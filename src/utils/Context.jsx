import React, { Children, createContext } from 'react'
export const productsContext = createContext()

const Context = ({ children }) => {
  const products = [
    {
      powerbrighteningline: [
        {
          productName: "Glow-Up Whip Wash",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontGlow-Wash1-min-002c6d36.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/PB-Wash-1-min.jpg"
        },
        {
          productName: "Glow-Up Toner Essence",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontGlow-Toner1-min-44d5d5b3.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/PB-Toner1-min.jpg"
        },
        {
          productName: "Aqua Moisturizer Glow",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontACGT1-min-c2f23d1c.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/PB_Aqua-copy-21-min.jpg"
        }
      ],
      acneskincareline: [
        {
          productName: "Acne+ Facial Wash",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontAcne-Wash1-min-b315e3dd.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/Acne-wash-min.jpg"
        },
        {
          productName: "Acne+ Toner Essence",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontAcne-Toner1-min-73bed7cd.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/Acne-Toner1-min.jpg"
        },
        {
          productName: "Acne+ Aqua Moisturizer",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontAcne-Moisturizer1-min-6e09f789.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/Acne-moisturizer1-min.jpg"
        }
      ],
      dailyskincareline: [
        {
          productName: "Aqua Moisturizer Whitening",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/act50-copy-2-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/ac50-min.jpg"
        },
        {
          productName: "Extra Pure Toner Essence",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/act50-copy1-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/ATT-min.jpg"
        },
        {
          productName: "Facial Wash Whitening Vita",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/08/act501-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/08/FWT-min.jpg"
        }
      ],
      porecare: [
        {
          productName: "Pore Purifying Balm",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/PPB1-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/Pore-min.png"
        },
        {
          productName: "The Original Nose Pack",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/NPT1-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/NPT-min.jpg"
        },
        {
          productName: "2 Minute Whitening Miracle Gel",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/2min-Sachet-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/2-Min-min.jpg"
        },
        {
          productName: "Matcha Ice Cream Wash-Off Mask",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/MICS-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/MICS1-min.jpg"
        },
        {
          productName: "Nose Pack: The Black Extractor",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/NPE1-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/NBE-min.jpg"
        },
        {
          productName: "Whitening Pack",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/WPS-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/WPS1-min.jpg"
        }
      ],
      skinbooster: [
        {
          productName: "Glow Booster Vitamin C Serum",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontVitC1-min-a5ee0808.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/VitCT-min.jpg"
        },
        {
          productName: "Acne+ Toner Essence",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontPRS1-min-0222e246.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontPRS1-min-0222e246.webp"
        }
      ],
      cloudseries: [
        {
          productName: "Rose Whitening Night Cream",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontRose1-min-e91dda49.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/RST-min-1.jpg"
        },
        {
          productName: "Whip Pro-Niacin Moisturizer",
          img1: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/WPNMT-min.jpg",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/WPNMT-min-1.jpg"
        }
      ],
      dayandbbbcreame: [
        {
          productName: "BB Holic (Light)",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontBBLT1-min-d20019f2.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/BBWT-min.jpg"
        },
        {
          productName: "Facial Cream",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontFC1-min-ea6ba5a5.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/FCT-min.jpg"
        },
        {
          productName: "BB Holic (Beige)",
          img1: "https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/Products-frontBBBT1-min-bb884737.webp",
          img2: "https://iwhitekorea.com.ph/wp-content/uploads/2021/09/BBBT-min.jpg"
        }
      ]
    }
  ]
  return (
    <productsContext.Provider value={products}>{children}</productsContext.Provider>
  )
}

export default Context