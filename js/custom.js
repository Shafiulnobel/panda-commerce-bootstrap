document.getElementById('caption').style.color = 'red';
document.getElementById('caption1').style.color = 'blue';
document.getElementById('button').style.backgroundColor = 'pink';
document.getElementById('caption1').style.backgroundColor = 'black';
document.getElementById('bd1').style.borderRadius = '30px';
document.getElementById('bd2').style.borderRadius = '30px';
document.getElementById('bd3').style.borderRadius = '30px';
document.getElementById('bd4').style.borderRadius = '30px';
document.getElementById('bd5').style.borderRadius = '30px';
document.getElementById('bd6').style.borderRadius = '30px';

function clicked() {
    alert('clicked');
}
const btn = document.getElementById('button');
const input = document.getElementById('in');
input.addEventListener('keyup', function () {
    if (input.value == 'email') {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', true);
    }
})

const items = document.getElementsByClassName('btn');
for (const item of items) {
    item.addEventListener('click', function () {
        item.parentNode.removeChild(item);
    })
}

const cng1 = document.getElementById('rmv1')
cng1.addEventListener('mouseover', function () {
    cng1.src = 'images/shoes/shoe-3.png';
})
const cng2 = document.getElementById('rmv2')
cng2.addEventListener('mouseover', function () {
    cng2.src = 'images/shoes/shoe-1.png';
})
const cng3 = document.getElementById('rmv3')
cng3.addEventListener('mouseover', function () {
    cng3.src = 'images/shoes/shoe-2.png';
})

const rmv = document.getElementById('Subscribe');

// rmv.setAttribute("style", "Background-color: !important");

rmv.addEventListener('dblclick', function () {
    rmv.classList.remove('bg-info');
    rmv.style.backgroundColor = 'black';
    rmv.style.color = 'white';
})
