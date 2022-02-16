// selection submit btn
const submitButton = document.getElementById('detail-submit-btn');
console.log(submitButton);
// selection add btn 
const addButton = document.getElementById('add-details-btn');
console.log(addButton);
// submit btn event handler
submitButton.addEventListener('click',function(){
const detailsInput = document.getElementById('buyer-details-input');
const detailsInputValue = detailsInput.value;
if(detailsInputValue.length > 0){
    document.getElementById('buyer-info').innerText = detailsInputValue;
    detailsInput.value = "";
}else{
    alert('Please enter your information!');
}

});
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    input.value = '';
    return inputValue;
}
// add btn event handler 
addButton.addEventListener('click',function(){
    const tableValue = document.getElementById('info-table');
    // getInputValue('item-name-input');
    const itemName = getInputValue('item-name-input')
    const itemPrice = getInputValue('item-price-input');
    const itemQuantity = getInputValue('item-quantity-input');
    // condition 
    if(itemName.length > 0 && itemQuantity.length > 0 &&itemPrice.length > 0){
    const tr = document.createElement('tr');
    const totalPrice = itemPrice * itemQuantity;

    const tableData = `
            <th >${itemName}</th>
            <td>${itemPrice}</td>
            <td>${itemQuantity}</td>
            <td class ="total-price">${totalPrice}</td>
    `;
    tr.innerHTML = tableData;
    tableValue.appendChild(tr);
    // subTotal calling 
    const subTotal = document.getElementById('sub-total');
    const subTotalValues = getSubTotal();
    subTotal.innerText = subTotalValues;
    console.log('subtotal',subTotalValues);
    // tax 
    const tax =  document.getElementById('tax');
    const taxValue = (subTotalValues * .2).toFixed(2);
    console.log('tax',taxValue);

    tax.innerText = taxValue;
    // total grand value 
    const grand= document.getElementById('grand-total');
    const taxConvert = parseFloat(taxValue)

    const grandTotal = subTotalValues + taxConvert ;
    grand.innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = grandTotal;

    }else{
        alert("please field the input value!")
    }

})
// suba total calculation function 
function getSubTotal(){
     // sub total calculation 
     const  totalPriceValue = document.getElementsByClassName('total-price');
    //  const totalPriceValuesText = totalPriceValues.innerText;
     
     let sum = 0;
     for(let i=0; i < totalPriceValue.length; i++){
         let element = totalPriceValue[i];
         const cost = parseFloat(element.innerText);
         sum = sum + cost;
        //  console.log(subTotalConvert);
        }
        console.log('sum',sum);
        return sum;
}