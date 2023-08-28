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
let doubleCheeseBurgerPlus = document.getElementById('double-cheese-burger-plus');
let doubleCheeseBurgerMinus = document.getElementById('double-cheese-burger-minus');
let normalBurgerPlus = document.getElementById('normal-burger-plus');
let normalBurgerMinus = document.getElementById('normal-burger-minus');
let tbody = document.getElementById('tbody');
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
        ordersBar.style.left = '-390px';
        showlist.innerHTML = 'عرض القائمة';
        moode = 0;
    }

}

//------------------- التشيز برجر----------------------------- \\



// ---------------- زرار الاضافة في التشيز برجر-------------------\\

doubleCheeseBurgerAdd.onclick = ()=>{
    doubleCheeseBurgerAdd.style.background = 'blue';
    doubleCheeseBurgerAdd.style.display = 'none';
    doubleCheeseBurgerRemove.style.display = 'block';
    result1 =  (+doubleCheeseBurgerQuantity.value * +doubleCheeseBurgerActualPrice.innerHTML);
    actualTotal.innerHTML = Math.abs(result1 + +actualTotal.innerHTML);
    doubleCheeseBurgerCounter.style.display = 'none';
    
    }

    //--------- زراير الزائد والناقص في الدبل تشيز برجر ------- \\

    doubleCheeseBurgerPlus.onclick = ()=>{
        let resPlus = (+doubleCheeseBurgerQuantity.value + 1)
        doubleCheeseBurgerQuantity.value = resPlus;
        if(doubleCheeseBurgerQuantity.value > 0){
            doubleCheeseBurgerMinus.style = 'display: block;';
        }
    }
    
    doubleCheeseBurgerMinus.onclick = ()=>{
        let resMinus = (+doubleCheeseBurgerQuantity.value - 1)
        doubleCheeseBurgerQuantity.value = resMinus;
        if(doubleCheeseBurgerQuantity.value < 1){
            doubleCheeseBurgerMinus.style = 'display: none;';
        }
    }

    // ----------------------ادخال التشيز برجر في القائمة------------\\

    
    let doubleCheeseBurgerObject = {
        quantity: doubleCheeseBurgerQuantity.value,
        name: 'دبل تشيز برجر',
        price: result1,
    }
    let DCBtable = `
        <tr>
            <td>x${doubleCheeseBurgerObject.quantity}</td>
            <td>${doubleCheeseBurgerObject.name}</td>
            <td>${doubleCheeseBurgerObject.price}</td>
        </tr>
    `
    tbody.innerHTML += DCBtable;
};


// -----------------زرار ازالة العنصر-------------- \\

doubleCheeseBurgerRemove.onclick = ()=>{
    doubleCheeseBurgerAdd.style.background = 'green';
    doubleCheeseBurgerAdd.innerText ='اضافة الى طلباتك';
    doubleCheeseBurgerRemove.style.display = 'none';
    result1 = (+doubleCheeseBurgerActualPrice.innerHTML * +doubleCheeseBurgerQuantity.value);
    actualTotal.innerHTML = Math.abs(result1 - +actualTotal.innerHTML);
    doubleCheeseBurgerCounter.style.display = 'flex';
    doubleCheeseBurgerAdd.style.display = 'block';
}



//-------------------------------------------------------------------\\
//-------------------------------------------------------------------\\
//-------------------------------------------------------------------\\


// ---------------------البرجر العادي----------------------------- \\


// ---------------- زراير اضافة البرجر العادي -------------------\\

normalBurgerAdd.onclick = ()=>{
    normalBurgerAdd.style.background = 'blue';
    normalBurgerAdd.innerText = 'تم اضافة العنصر بنجاح';
    normalBurgerRemove.style.display = 'block';
    normalBurgerAdd.style.display = 'none';
    result2 = (+normalBurgerQuantity.value * +normalBurgerActualPrice.innerHTML);
    actualTotal.innerHTML = Math.abs(result2 + +actualTotal.innerHTML);
    normalBurgerCounter.style.display = 'none';


    //--------------- زرار ازالة البرجر العادي --------------------\\
    
normalBurgerRemove.onclick = ()=>{
    normalBurgerAdd.style.background = 'green';
    normalBurgerAdd.innerText = 'اضافة الى طلباتك';
    normalBurgerRemove.style.display = 'none';
    normalBurgerAdd.style.display = 'block';
    result2 = (+normalBurgerActualPrice.innerHTML * +normalBurgerQuantity.value);
    actualTotal.innerHTML = Math.abs(result2 - +actualTotal.innerHTML);
    normalBurgerCounter.style.display = 'flex';
}
        // ----------------ادخال البرجر العادي في القائمة--------\\

    let normalBurgerObject = {
        quantity: normalBurgerQuantity.value,
        name: 'برجر عادي',
        price: result2,
        }
    
    
        let table = `
            <tr>
                <td>x${normalBurgerObject.quantity}</td>
                <td>${normalBurgerObject.name}</td>
                <td>${normalBurgerObject.price}</td>
            </tr>
        `
        tbody.innerHTML += table;
    };


//---------------- زراير الزائد والناقص للبرجر العادي ----------- \\


normalBurgerPlus.onclick = ()=>{
    let resPlus = (+normalBurgerQuantity.value + 1)
    normalBurgerQuantity.value = resPlus;
    if(normalBurgerQuantity.value > 0){
        normalBurgerMinus.style = 'display: block;';
    }
}

normalBurgerMinus.onclick = ()=>{
    let resMinus = (+normalBurgerQuantity.value - 1)
    normalBurgerQuantity.value = resMinus;
    if(normalBurgerQuantity.value < 1){
        normalBurgerMinus.style = 'display: none;';
    }
}

//-------------------------------------------------------------------\\
//-------------------------------------------------------------------\\
//-------------------------------------------------------------------\\

