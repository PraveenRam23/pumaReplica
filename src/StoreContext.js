
import { createContext,useContext, useState } from "react";
import img1 from './Images/Home/shoe2.jpg'
import img2 from './Images/Home/puma shoe.jpg'
import img3 from './Images/Home/shoe3.jpg'
import img4 from './Images/Home/shoe4.jpg'
import img5 from './Images/Home/Game-Women-Sneakers.jpg'
import img6 from './Images/Home/RS-X-Geek-Unisex-Sneakers.jpg'
import img7 from './Images/Home/Suede-Classic-XXI-Unisex-Sneakers.jpg'
import img8 from './Images/Home/X-Ray-2-Square-Unisex-Sneakers.jpg'
import img9 from './Images/Men/1PUMA-x-one8-Shuffle-Better-V3-Mens-Sneakers.avif'
import img10 from './Images/Men/2Puma-Alfarun-Mens-Sneakers.avif'
import img11 from './Images/Men/3Shuffle-Mid-one8-Better-V2-Mens-Sneakers.avif'
import img12 from './Images/Men/4Suede-Classic-XXI-Unisex-Sneakers.avif'
import img13 from './Images/Men/5Deviate-NITRO™-2-Mens-Running-Shoes.avif'
import img14 from './Images/Men/6Conduct-Pro-Unisex-Running-Shoes.avif'
import img15 from './Images/Men/7SOFTRIDE-Symmetry-Unisex-Running-Shoes.avif'
import img16 from './Images/Men/8SOFTRIDE-Rift-Bold-Mens-Slip-On-Walking-Shoes.avif'
import img17 from './Images/Men/9Puma-SOFTRIDE-Seave-Unisex-Sandals.avif'
import img18 from './Images/Men/10SOFTRIDE-Pure-Unisex-Sandals.avif'
import img19 from './Images/Men/11Softride-Seave-Proplex-Mens-Sandals.avif'
import img20 from './Images/Men/12Zeal-Mens-Sandals.avif'
import img21 from './Images/Men/13BMW-M-Motorsport-Leadcat-2.0-Ren-Unisex-Slides.jpg'
import img22 from './Images/Men/14Cool-Cat-2.0-BX-Unisex-Slides.jpg'
import img23 from './Images/Men/15Cool-Cat-2.0-Metallic-Shine-Mens-Slides.jpg'
import img24 from './Images/Men/16Mercedes-AMG-Petronas-F1®-Leadcat-2.0-Graphic-Youth-Slides.jpg'
import img25 from './Images/Men/17BMW-MMS-Softride-Seave-Mens-Flip-Flops.avif'
import img26 from './Images/Men/18Eezay-Mens-Flip-Flops.avif'
import img27 from './Images/Men/19Puma-SOFTRIDE-Seave-Unisex-Flip-Flops.avif'
import img28 from './Images/Men/20Caper-V3-Mens-Flipflops.avif'
import img29 from './Images/Women/1Mayze-Glam-Womens-Sneakers.avif'
import img30 from './Images//Women/2RS-X-Efekt-Lux-Womens-Sneakers.avif'
import img31 from './Images/Women/3Agile-Trip-Womens-Sneakers.avif'
import img32 from './Images/Women/4Adelina-Space-Metallics-Womens-Shoes.avif'
import img33 from './Images/Women/5Softride-Remi-Slip-On-Knit-Womens-Running-Shoes.avif'
import img34 from './Images/Women/6SOFTRIDE-Enzo-Evo-Unisex-Running-Shoes.avif'
import img35 from './Images/Women/7Flair-Unisex-Running-Shoes.avif'
import img36 from './Images/Women/8SOFTRIDE-Pro-Metallic-Womens-Training-Shoes.avif'
import img37 from './Images/Women/9Royalcat-Comfort-Softride-Womens-Floral-Slides.avif'
import img38 from './Images/Women/10Nitrocat-V-Unisex-Slides.avif'
import img39 from './Images/Women/11Royalcat Softride-Cara-Womens-Flip-Flops.avif'
import img40 from './Images/Women/12PUMA-Coscon-Womens-Sandals.avif'
import img41 from './Images/Women/13Popcat-Chrome-Womens-Slides.avif'
import img42 from './Images/Women/14PUMA-x-SPONGEBOB-RS-Slide-Unisex-Slides.avif'
import img43 from './Images/Women/15PWR-XX-NITRO™-Womens-Training-Shoes.avif'
import img44 from './Images/Women/16Royalcat-Comfort-Softride-Womens-Floral-9Slides.avif'
import img45 from './Images/Women/17Enlighten-Strap-Womens-Training-Shoes.avif'
import img46 from './Images/Women/18PUMA-Melanite-Slip-On-Womens-Shoes.avif'
import img47 from './Images/Women/19BMW-MMS-RS-Puls-Womens-Motorsport-Sneakers.avif'
import img48 from './Images/Women/20PUMA-x-NFS-Maco-SL-Unisex-Sneakers.avif'
import img49 from './Images/Kids/1.PUMA-x-TROLLS-Kids-Graphic-T-shirt.avif'
import img50 from './Images/Kids/2.BASKETBALL-BLUEPRINT-Youth-T-shirt.avif'
import img51 from './Images/Kids/3.LOGO-LAB-Youth-Tee.avif'
import img52 from './Images/Kids/4.MID-90s-Youth-T-shirt.avif'
import img53 from './Images/Kids/5.Classics-Unisex-Regular-Fit-T-Shirt.avif'
// import img54 from './Images/Kids/6.BASKETBALL-Dylan-Boys-Relaxed-Fit-T-shirt.avif'
import img55 from './Images/Kids/7.Softride-Enzo-Nxt-Youth-Running-Shoes.avif'
import img56 from './Images/Kids/9.Flyer-Runner-Youth-Shoes.avif'
// import img57 from './Images/Kids/10.PUMA-x-TROLLS-Kids-T7-Track-Jacket.avif'
import img58 from './Images/Kids/11.FUTUREVERSE-Graphic-Youth-Hoodie.avif'
// import img59 from './Images/Kids/12.PUMA-x-one8-Boys-Woven-Training-Pants.avif'
import img60 from './Images/Kids/13.Multicolor-Graphic-Youth-Regular-Fit-Pants.avif'



const Store = createContext();



function StoreContext({children}){

const[name,setName]=useState("hk");



const[cart,setCart]=useState([]);
const [cartprd,setCartprd]=useState([
  {id:1,name:"Unisex Shoe",price:2999,image: img1},
    {id:2,name:"Sprinter",price:3999,image: img2},
    {id:3,name:"BMW Edition",price:7999,image: img3},
    {id:4,name:"Black soft",price:5999,image: img4},
    {id:5,name:"Game Women Sneakers",price:1999,image: img5},
    {id:6,name:"RS-X-Geek",price:4999,image: img6},
    {id:7,name:"black puma ",price:5999,image: img7},
    {id:8,name:"RS-XI-Geek",price:8999,image: img8},
]);
 
const[menprod,setMenprod]=useState([
  {id:1,name:"PUMA-x-one8-Shuffle-V3",price:2999,image: img9},
  {id:2,name:"Puma-Alfarun",price:2999,image: img10},
  {id:3,name:"Shuffle-Mid-one8-V2",price:2999,image: img11},
  {id:4,name:"Suede-Classic-XXI",price:2999,image: img12},
  {id:5,name:"Deviate-NITRO",price:2999,image: img13},
  {id:6,name:"Conduct-Pro-Running",price:2999,image: img14},
  {id:7,name:"SOFTRIDE-Symmetry-Running",price:2999,image: img15},
  {id:8,name:"Rift-Bold-Slip-On",price:2999,image: img16},
  {id:9,name:"Seave-Sandals",price:2999,image: img17},
  {id:10,name:"SOFTRIDE-Pure-Sandals",price:2999,image: img18},
  {id:11,name:"Softride-Seave-Proplex",price:2999,image: img19},
  {id:12,name:"Zeal-Mens-Sandals",price:2999,image: img20},
  {id:13,name:"BMW-M-Motorsport-Leadcat",price:2999,image: img21},
  {id:14,name:"Cool-Cat-2.0-BX",price:2999,image: img22},
  {id:15,name:"Cool-Cat-2.0-Metallic",price:2999,image: img23},
  {id:16,name:"Mercedes-AMG-Petronas-F1",price:2999,image: img24},
  {id:17,name:"BMW-MMS-Softride-Seave",price:2999,image: img25},
  {id:18,name:"Eezay-Flip-Flops",price:2999,image: img26},
  {id:19,name:"Puma-SOFTRIDE-Seave",price:2999,image: img27},
  {id:20,name:"Caper-V3",price:2999,image: img28},

]);

const[womenprod,setWomenprod]=useState([
  {id:1,name:"Mayze-Glam",price:2999,image: img29},
  {id:2,name:"RS-X-Efekt-Lux",price:2999,image: img30},
  {id:3,name:"Agile-Trip",price:2999,image: img31},
  {id:4,name:"Adelina-Space-Metallics",price:2999,image: img32},
  {id:5,name:"Softride-Remi-Slip-On-Knit",price:2999,image: img33},
  {id:6,name:"SOFTRIDE-Enzo-Evo",price:2999,image: img34},
  {id:7,name:"Flair-Running",price:2999,image: img35},
  {id:8,name:"SOFTRIDE-Pro-Metallic",price:2999,image: img36},
  {id:9,name:"Royalcat-Comfort-Softride",price:2999,image: img37},
  {id:10,name:"Nitrocat-V-Slides",price:2999,image: img38},
  {id:11,name:"Royalcat-Softride-Cara-Flip-Flops",price:2999,image: img39},
  {id:12,name:"PUMA-Coscon-Sandals",price:2999,image: img40},
  {id:13,name:"Popcat-Chrome-Slides",price:2999,image: img41},
  {id:14,name:"PUMA-x-SPONGEBOB-RS-Slides",price:2999,image: img42},
  {id:15,name:"PWR-XX-NITRO",price:2999,image: img43},
  {id:16,name:"Royalcat-Comfort-Softride",price:2999,image: img44},
  {id:17,name:"Enlighten-Strap",price:2999,image: img45},
  {id:18,name:"PUMA-Melanite-Slip-On",price:2999,image: img46},
  {id:19,name:"BMW-MMS-RS-PulsMotorsport",price:2999,image: img47},
  {id:20,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img48},
])

const[kidsprod,setKidsprod]=useState([
  {id:1,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img49},
  {id:2,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img50},
  {id:3,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img51},
  {id:4,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img52},
  {id:5,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img53},
  // {id:6,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img54},
  {id:7,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img55},
  {id:8,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img56},
  // {id:9,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img57},
  {id:10,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img58},
  // {id:11,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img59},
  {id:12,name:"PUMA-x-NFS-Maco-SL",price:2999,image: img60},
])

  return(
    <Store.Provider value={{
        name,setName,cart,setCart,cartprd,setCartprd,menprod,setMenprod,womenprod,setWomenprod,kidsprod,setKidsprod
      }}>
        {children}
    </Store.Provider>
  )
    
}
export const StoreState=()=>{
    return useContext(Store);
};
export default StoreContext;