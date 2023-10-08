// products

let list_li = document.querySelectorAll('.btn');
let list_ul = document.querySelectorAll('.product');
let buttons = document.querySelectorAll('button');

// console.log(elem+" "+idx);
list_li.forEach((ele, index) => {
    // console.log(ele + " " + index);
    // let btns = ele.querySelector('.btn')
    let plus_btn = ele.querySelector('.plus-btn');
    let minus_btn = ele.querySelector('.minus-btn');
    // plus
    plus_btn.addEventListener('click', function () {
        const prodNo = ele.querySelector('.NoOfPrd');
        prodNo.value = parseInt(prodNo.value) + 1;
        // if (parseInt(prodNo.value) > 0) {
        //     let noMsg = document.querySelector('.no_cart');
        //     noMsg.style.display = 'none';
        // }
        update();
    })
    // minus
    minus_btn.addEventListener('click', function () {
        const prodNo = ele.querySelector('.NoOfPrd');
        if (parseInt(prodNo.value) > 0) {
            prodNo.value = parseInt(prodNo.value) - 1;
        }
        update();

    })

});

//cards
function update() {
  
    
    // card1
    let card1_amt = document.querySelector('.card1');
    card1_amt.innerHTML = document.querySelector('.item1').value;
    if (parseInt(card1_amt.innerHTML) > 0) {
        let card_1 = document.getElementById('prd_amt1')
        card_1.style.display = 'flex';
    } else {
        let card_1 = document.getElementById('prd_amt1')
        card_1.style.display = 'none';
    }
    // card2
    let card2_amt = document.querySelector('.card2');
    card2_amt.innerHTML = document.querySelector('.item2').value;
    if (parseInt(card2_amt.innerHTML) > 0) {
        let card_2 = document.getElementById('prd_amt2')
        card_2.style.display = 'flex';
    }
    // card3
    let card3_amt = document.querySelector('.card3');
    card3_amt.innerHTML = document.querySelector('.item3').value;
    if (parseInt(card3_amt.innerHTML) > 0) {
        let card_3 = document.getElementById('prd_amt3')
        card_3.style.display = 'flex';
    }
    // card4
    let card4_amt = document.querySelector('.card4');
    card4_amt.innerHTML = document.querySelector('.item4').value;
    if (parseInt(card4_amt.innerHTML) > 0) {
        let card_4 = document.getElementById('prd_amt4')
        card_4.style.display = 'flex';
    }
    // total amt
    let amt_c1 = document.querySelector('.amt1');
    let amt_c2 = document.querySelector('.amt2');
    let amt_c3 = document.querySelector('.amt3');
    let amt_c4 = document.querySelector('.amt4');
    let total_amt = (parseInt(card1_amt.innerHTML) * parseInt(amt_c1.innerHTML)) + (parseInt(card2_amt.innerHTML) * parseInt(amt_c2.innerHTML)) + (parseInt(card3_amt.innerHTML) * parseInt(amt_c3.innerHTML)) + (parseInt(card4_amt.innerHTML) * parseInt(amt_c4.innerHTML));
    let totalCostOfProducts = document.querySelector('.total_amt');
    totalCostOfProducts.innerText = total_amt;
    if (total_amt >= 0) {
        let noMsg = document.querySelector('.no_cart');
        noMsg.style.display = 'none';
    }

}
