function updateProductNumber(product, price, isIncreasing){
    const ProductInput = document.getElementById(product + '-number');
    let ProductNumber = ProductInput.value;
    if(isIncreasing == true){
        ProductNumber = parseInt(ProductNumber) + 1;
    }else if(ProductNumber > 0){
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    ProductInput.value = ProductNumber;

    //update case total
    const ProductTotal = document.getElementById(product + '-total');
    ProductTotal.innerText = ProductNumber*price;

    //calculate total
    calculateTotal();
   
}
// function for creat sub total tax amount and total price
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;  
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    //update in html
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = tax;
    document.getElementById('total-price').innerHTML = totalPrice;
    //document.getElementById('')
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    updateProductNumber('case', 59, false);
    // caseInput.value = parseInt(caseNumber) - 1;
})