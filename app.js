const txt1 = document.getElementById('text_area1');
const btn1 = document.getElementById('submitBtn1');
const out1 = document.getElementById('text_area2');

function matchType() {
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click',matchType);


