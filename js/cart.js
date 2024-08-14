let shoppingcart=document.getElementById('shopping_cart')
let basket=JSON.parse(localStorage.getItem('data'))||[]
let label=document.getElementById('label')
let calculate=()=>
    {
        let carticon=document.getElementById('cartAmount')

        carticon.innerHTML=basket.length

    }
    let cartitem=()=>
        {
         if(basket.length!==0)
            {
                return(shoppingcart.innerHTML=basket.map((x)=>
                {
let{id,name,price,img}=x;
return `<div class='cart_item'>

<div class='cart_item_img'>
<img src='${img}'>
</div> 
<h6> ${name} </h6>
<p class='quantity'>
<i class="fa-solid fa-minus"></i>
<span> 0 </span>
<i class="fa-solid fa-plus"></i>
<p>
<span> $ </span> ${price} </p> 
<button onclick="removecart('${id}')">Remove</button>


</div>`
                })
            )
            }
           

        }
       
        cartitem();
        
    calculate();
    let removecart=(id)=>
        {
basket=basket.filter((x)=> x.id!=id)
    localStorage.setItem('data',JSON.stringify(basket))
    calculate();
    cartitem();
}
        let totalprice=()=>
            {
                let total_amount=0
                basket.map((item)=>
                {
                    total_amount+=item.item * item.price
                })
label.innerHTML=`
<div class="checkout">

<h2> Total Price : ${total_amount} </h2>
<button class="update" onclick=window.location.reload()> Update</button>

<button class="chkout">checkout</button>
</div>`
            }
            totalprice();