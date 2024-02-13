const wrapper= document.querySelector(".sliderWrapper")
// console.log("wrapper")
// wrapper.style.backgroundColor='blue'
const slides=document.querySelectorAll(".menuitem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 7+","+999,
      colors: [
        {
          code: "black",
          img: "images/air.png"
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 10+","+999,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 8+","+999,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 9+","+999,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 7+","+500,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

let choice = products[0]

const currentProductImg=document.querySelector(".productimg")
const currentProductTitle=document.querySelector(".productTitle")
const currentProductPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")

slides.forEach((item,index)=>{
    item.addEventListener("click", () =>{
        //to change the slide
        wrapper.style.transform = `translateX(${-100* index}vw)`; 
        // 0,1,2,3..indices
        //to change the choice
        choice=products[index]

    //change texts of current slide
    currentProductTitle.textContent=choice.title
    currentProductPrice.textContent="₹"+choice.price
    currentProductImg.src=choice.colors[0].img

    //assigning colors
    currentProductColors.forEach((colors,index)=>{
        colors.style.backgroundColor=choice.colors[index].code;

    });
    });
});

currentProductColors.forEach((colors,index)=>{
    colors.addEventListener("click",() => {    
        currentProductImg.src=choice.colors[index].img;
    });
});
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productButton.addEventListener("click",()=>{
    payment.style.display="flex";
  })
  close.addEventListener("click",()=>{
    payment.style.display="none";
  })
  
  