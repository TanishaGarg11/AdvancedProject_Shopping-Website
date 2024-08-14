const shop=document.getElementById('productitems');


let basket=JSON.parse(localStorage.getItem('data'))||[]
let genshop=()=>
    {
        shop.innerHTML=shopitemsdetails.map((x) =>
            {
let{id,name,price,img}=x;
return `<div class="shop_item" id=product-id-${id}>
<img src='${img}' >

<div class="info">
<h5> ${name} </h5>
<p> <span> $ </span> ${price}  <sub class="text-secondary"> M.R.P<del> 1,999 </del> (50%
  off) </sub></p>
<div class="star text-center">
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
</div>
<button onclick="addtocart('${id}','${name}','${img}','${price}')"> Add to <i class="fa-solid  fa-cart-shopping"> </i> </button>


</div>
</div>`
  })
    }
    let addtocart=(id,name,img,price)=>
        {
basket.push({
    id:id,
    item:1,
    name:name,
    price:price,
    img:img})
    localStorage.setItem('data',JSON.stringify(basket))
    calculate();
        }
      let  calculate=()=>
        {
            let cart_icon=document.getElementById('cartamount')
            let cart_amount=basket.length;
            cart_icon.innerHTML=cart_amount
        }
        
        genshop();


