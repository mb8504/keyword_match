const txt1 = document.getElementById('text_area1');
const btn1 = document.getElementById('submitBtn1');
const out1 = document.getElementById('text_area2');

let terms = [];

function matchType() {
    let userKeywords = out1.innerHTML = txt1.value;
    let arr = userKeywords.split('\n');

    console.log(arr);
}

btn1.addEventListener('click',matchType);






// let userKeywords = [];

// function matchType() {
//     userKeywords.push(out1.innerHTML = txt1.value);
//     console.log(userKeywords);
// }

// btn1.addEventListener('click',matchType);


