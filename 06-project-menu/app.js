const menu = [
  {
    id: 1,
    title: "chicken biryani",
    category: "breakfast",
    price: 15.29,
    img: "./images/img1.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  },
  {
    id: 2,
    title: "pani puri",
    category: "lunch",
    price: 20.29,
    img: "./images/img2.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  },
  {
    id: 3,
    title: "egg roll",
    category: "dinner",
    price: 11.29,
    img: "./images/img3.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  },
  {
    id: 4,
    title: "pizza & burger",
    category: "breakfast",
    price: 14.29,
    img: "./images/img4.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  },
  {
    id: 5,
    title: "chowmin",
    category: "breakfast",
    price: 10.29,
    img: "./images/img5.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  },
  {
    id: 6,
    title: "dosha",
    category: "breakfast",
    price: 12.29,
    img: "./images/img6.jpg",
    desc: `near joy entreaties much ten thanks him humoured really guest Not assured jennings means through yet favourable departure `,
  }
];


const sectionCenter=document.querySelector(".section-center");

const filterBtn=document.querySelectorAll(".filter-button");


//when items load
window.addEventListener("DOMContentLoaded",()=>{
  
  displayMenuItems(menu);
});

filterBtn.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    // console.log(e.currentTarget.dataset.id)

    const filterItems=menu.filter((menuObj)=>{

      if(e.currentTarget.dataset.id==="all")
        return 1;
      else
        return menuObj.category===e.currentTarget.dataset.id;
    })

    displayMenuItems(filterItems)

  })
})






function displayMenuItems(menuItems){
  
  let displayMenu=menuItems.map((item)=>{
      
    return `<article class="menu-item">
    <img src=${item.img} alt="image1" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$ ${item.price}</h4>
      </header>
      <p>
        ${item.desc}
      </p>
    </div>
  </article>`;
  });

  displayMenu=displayMenu.join("");
  sectionCenter.innerHTML=displayMenu;

}