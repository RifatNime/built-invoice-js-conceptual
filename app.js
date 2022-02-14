const detailsButton = document.getElementById('detail-submit-btn'); //button er

detailsButton.addEventListener('click', function(){
    const buyerDetails = document.getElementById('buyer-details-input');//input place er id
    console.log(buyerDetails);
    document.getElementById('buyer-info').innerText = buyerDetails.value//submit er por input er value ta invoice er info te dilam
    buyerDetails.value='';
});

//Add button part tbody te genarate korbo
const addProductBtn = document.getElementById('add-details-btn');

addProductBtn.addEventListener('click',function(){
    const infoTable = document.getElementById('info-table');//tbody er id k dhorlam

    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');
    // console.log(itemName.value, itemPrice.value, itemQuantity.value);
if (itemName.value == '' || itemPrice.value  < 0 || itemQuantity.value  < 0 || itemPrice.value  == '' || itemQuantity.value  < 0 ){
    console.log('Sorry');
    return
}



{/* <tr>
    <th >1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td> //td3
</tr> */}
    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    // const tr = document.createElement('tr'); //tr first line create korlam
    const tr = element("tr");
    // const th = document.createElement('th');//2nd line
    const th = element("th");

    const td1 = document.createElement('td');//3rd line
    const td2 = document.createElement('td');//4thline
    const td3 = document.createElement('td');//5th line

    td3.classList.add('item-total'); //class add korar akta way  //td3
    th.innerText = itemName.value; //<th >Onion</th>
    td1.innerText = itemPrice.value; //<td>1</td>
    td2.innerText = itemQuantity.value; //<td>Otto</td>
    td3.innerText = totalPrice; // <td>@mdo</td>
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
//bundle korbo 38-41
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    totalCalculation();

});
 //29 , 31 line
function element(parameter) {
    return document.createElement(parameter);
  }




function totalCalculation(){
    const subTotal = calculateSubTotal();
    const subTotalToDisplay = document.getElementById('sub-total');
    subTotalToDisplay.innerText = subTotal;

    const tax = subTotal * .2;
    document.getElementById('tax').innerText = tax.toFixed(2);

    document.getElementById('grand-total').innerText = subTotal + tax;
    document.getElementById('grand-total-2').innerText = subTotal + tax;

}





function calculateSubTotal(){
    let subTotal = 0;
    const cost = document.getElementsByClassName('ite m-total');
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i]; //<td class='item-total'>35</td>
        const price = parseInt(element.innerText);

        subTotal = subTotal + price;
         
    }
    return subTotal;

    
}


