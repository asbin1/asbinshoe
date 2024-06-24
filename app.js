


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 169,
    colors: [
      {
        code: "black",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air.png?raw=true",
      },
      {
        code: "darkblue",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air2.png?raw=true",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/jordan.png?raw=true",
      },
      {
        code: "green",
        img:"https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/jordan2.png?raw=true",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer.png?raw=true",
      },
      {
        code: "green",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer2.png?raw=true",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater.png?raw=true",
      },
      {
        code: "lightgray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater2.png?raw=true",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie.png?raw=true",
      },
      {
        code: "black",
        img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie2.png?raw=true",
      },
    ],
  },
];



const wrapper=document.querySelector(".slideWrapper")
const menuItm=document.querySelectorAll(".menuItm")

const productsizes=document.querySelector(".sizes")

const productTitle=document.querySelector("#productTitle")
const productPrice=document.querySelector("#productPrice")
const productimg=document.querySelector(".productimg")
const productColor=document.querySelectorAll(".color")
const productSizes=document.querySelectorAll(".size")

let choosenProduct=products[0]

menuItm.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`
        
        // console.log(item)
        choosenProduct=products[index]
        console.log(choosenProduct)

        productTitle.textContent=choosenProduct.title
        productPrice.textContent='$'+choosenProduct.price
        productimg.src=choosenProduct.colors[0].img
        
        productColor.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code
        })

    })
})

productColor.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        productimg.src=choosenProduct.colors[index].img
        style.transition='all 1s ease'
    })
})


productSizes.forEach((size,index)=>{
   size.addEventListener('click',()=>{
    productSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color='black'
    
    })
   size.style.backgroundColor="black";
    size.style.color='white'
   })
   
})


productColor.forEach((size,index)=>{
    size.addEventListener('click',()=>{
     productColor.forEach((size)=>{
         size.style.scale="1";
        //  size.style.scale="1.3";
         
     
     })
    size.style.scale='1.2'
     
    })
    
})

const payment=document.querySelector(".payment")
const productbtn=document.querySelector(".btn")
const close=document.querySelector(".close")
const productWhol=document.querySelector('.productDetail  ')

close.addEventListener('click',()=>{
  payment.style.display='none'
  
  productWhol.style.opacity=1
  productimg.style.opacity=2

})


productbtn.addEventListener('click',()=>{
    payment.style.display='flex'
    productWhol.style.opacity=0
    productimg.style.opacity=0
    
})

