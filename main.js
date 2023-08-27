let doubleCheeseBurger = document.getElementById('double-cheese-burger');
let doubleCheeseBurgerAdd = document.getElementById('double-cheese-burger-add');
let doubleCheeseBurgerRemove = document.getElementById('double-cheese-burger-remove');
let normalBurger = document.getElementById('normal-burger');
let normalBurgerAdd = document.getElementById('normal-burger-add');
let normalBurgerRemove = document.getElementById('normal-burger-remove');
let actualTotal = document.getElementById('actual-total');
let doubleCheeseBurgerActualPrice = document.getElementById('double-cheese-burger-actual-price');
let doubleCheeseBurgerCounter = document.getElementById('double-cheese-burger-counter');
let normalBurgerCounter = document.getElementById('normal-burger-counter');
let doubleCheeseBurgerQuantity = document.getElementById('double-cheese-burger-quantity');
let totalReset = document.getElementById('total-reset');
let normalBurgerPrice = document.getElementById('normal-burger-price');
let normalBurgerActualPrice = document.getElementById('normal-burger-actual-price');
let normalBurgerQuantity = document.getElementById('normal-burger-quantity');
let showlist = document.getElementById('show-orders');
let ordersBar = document.getElementById('orders-bar');
// let result;

//----------------- زراير الناف بار السفلي -----------------\\

totalReset.onclick = ()=>{
    result = actualTotal.innerHTML - actualTotal.innerHTML;
    actualTotal.innerHTML = result;
    location.reload();
    window.open('index.html');
};

let moode = 0;
showlist.onclick = ()=>{
    if(moode == 0){
        showlist.innerHTML = 'اخفاء القائمة';
        ordersBar.style.left = '0';
        moode = 1;
    }else{
        ordersBar.style.left = '-360px';
        showlist.innerHTML = 'عرض القائمة';
        moode = 0;
    }
    

}
// ---------------- زراير الدبل تشيز برجر -------------------\\

doubleCheeseBurgerAdd.onclick = function getTotal(){
    doubleCheeseBurgerAdd.style.background = 'blue';
    doubleCheeseBurgerAdd.style.display = 'none';
    doubleCheeseBurgerRemove.style.display = 'block';
    result =  (+doubleCheeseBurgerQuantity.value * +doubleCheeseBurgerActualPrice.innerHTML);
    actualTotal.innerHTML = Math.abs(result + +actualTotal.innerHTML);
    doubleCheeseBurgerCounter.style.display = 'none';
};

doubleCheeseBurgerRemove.onclick = ()=>{
    doubleCheeseBurgerAdd.style.background = 'green';
    doubleCheeseBurgerAdd.innerText ='اضافة الى طلباتك';
    doubleCheeseBurgerRemove.style.display = 'none';
    result = (+doubleCheeseBurgerActualPrice.innerHTML * +doubleCheeseBurgerQuantity.value);
    actualTotal.innerHTML = Math.abs(result - +actualTotal.innerHTML);
    doubleCheeseBurgerCounter.style.display = 'flex';
    doubleCheeseBurgerAdd.style.display = 'block';
}

// ---------------- زراير البرجر العادي -------------------\\

normalBurgerAdd.onclick = ()=>{
    normalBurgerAdd.style.background = 'blue';
    normalBurgerAdd.innerText = 'تم اضافة العنصر بنجاح';
    normalBurgerRemove.style.display = 'block';
    normalBurgerAdd.style.display = 'none';
    result = (+normalBurgerQuantity.value * +normalBurgerActualPrice.innerHTML);
    actualTotal.innerHTML = Math.abs(result + +actualTotal.innerHTML);
    normalBurgerCounter.style.display = 'none';
    price.style.width = '100%';
    price.style.textAlign = 'center';
};
normalBurgerRemove.onclick = ()=>{
    normalBurgerAdd.style.background = 'green';
    normalBurgerAdd.innerText = 'اضافة الى طلباتك';
    normalBurgerRemove.style.display = 'none';
    normalBurgerAdd.style.display = 'block';
    result = (+normalBurgerActualPrice.innerHTML * +normalBurgerQuantity.value);
    actualTotal.innerHTML = Math.abs(result - +actualTotal.innerHTML);
    normalBurgerCounter.style.display = 'flex';
}

