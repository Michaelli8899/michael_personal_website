//////////////////////// 4. basic js statements /////////////////////////

let x = 5;
let y = 7;
let z = x + y;

console.log(z);

let A = "Hello "
let B = "world!"
let C = A + B;

console.log(C);

//////////////////////// 5. basic functions ////////////////////////

function SumNPrint(x1, x2) {
    let sum = x1 + x2;
    return sum;
}

console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));

//////////////////////// 6. conditional statements ////////////////////////

if (C.length > z) {
    console.log(C)
} else if (z > C.length) {
    console.log(z)
} else {
    console.log("good job!")
}

//////////////////////// 7. for loops ////////////////////////

let L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

function findBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (e == 'Banana') {
            window.alert(`found the banana in ${i}`);
        }
    }
}

// findBanana(L1);
// findBanana(L2);

//////////////////////// 8. forEach loops ////////////////////////

function findBanana2(e, i, arr) {
    if (e == 'Banana') {
        window.alert(`We found a banana in the first array`);
    }
}

// L1.forEach(findBanana2);

function findBanana3(arr1, arr2) {
    arr1.forEach((e) => {if (e == 'Banana') {window.alert(`We found a banana in the first array`)}});
    arr2.forEach((e) => {if (e == 'Banana') {window.alert(`We found a banana in the second array`)}});
}

// findBanana3(L1, L2);

//////////////////////// 9 & 10. date object and conditional greeting & manipluate the DOM ////////////////////////

function greetingFunc() {
    // define date object and variables
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greeting");
    let str = '';

    //check current time
    if (h < 12) {
        console.log("Good morning!");
        str = 'Good morning'
    } else if (12 < h && h < 18) {
        console.log("Good afternoon!");
        str = 'Good afternoon'
    } else if (18 < h && h < 20){
        console.log("Good evening!");
        str = 'Good evening'
    }else if ((20 < h && h< 24) || (0 < h && h < 5)){
        console.log("Good night!");
        str = 'Good night'
    }

    // change HTML
    E.innerHTML = `<h2>${str}, I'm Michael</h2>`
}

//////////////////////// 11. Debug ////////////////////////

let currFile = window.location.href.split("/").pop();
if (currFile == 'index.html') {
    greetingFunc();
}



//////////////////////// Lab 4 ////////////////////////


//////////////////////// Add the Current Year to the Footer ////////////////////////
function addYear() {
    let d = new Date();
    let year = d.getFullYear();
    let E = document.getElementById("copyYear");
    E.innerHTML = `Copyright © ${year}`;
}


//////////////////////// Show More Fun////////////////////////

function showList() {
    let E = document.getElementById("funList");
    let btn = document.getElementById("funShowMore");
    btn.style.display = 'none';
    E.style.display = 'block';
}

//////////////////////// See more Home ////////////////////////

$('#seeMore').click(function() {
    $('#seeMore').hide();
    $('#longIntro').show();
    $('#shortIntro').hide();
    $('#seeLess').show();
    
})

$('#seeLess').click(function() {
    $('#seeLess').hide();
    $('#longIntro').hide();
    $('#seeMore').show();
    $('#shortIntro').show();
})

//////////////////////// Form Validity ////////////////////////

function formCheck() {
    console.log('hi')

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    const error = document.getElementById('error');

    error.textContent = '';

    let valid = (nameInput.checkValidity() && emailInput.checkValidity() && commentInput.checkValidity());

    if (!valid) {
        error.textContent = 'Please fill out all fields correctly';
    }
    return valid;
}