function inputArray(length) {
    let tenInt = [];
    for (let i = 0; i < length; i++) {
        tenInt[i] = prompt("Nhap vao phan tu thu " + (i + 1) + ":");
    }
    return tenInt;
}

function ex1() {
    let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    let display = '';
    for (let i = 0; i < arr.length; i++) {
        display += "row" + i + "<br>";
        for (let j = 0; j < arr[i].length; j++) {
            display += arr[i][j] + "<br>";
        }
    }
    document.getElementById("displayEx1").innerHTML = display;
}

function ex2() {
    let arr = inputArray(10);
    let i, j;
    let temp;
    document.getElementById('displayArr').innerHTML = arr;
    document.getElementById('displayReverseArr').innerHTML = arr.reverse();
}

function ex3() {
    let arrLength = prompt("Input array length ")
    let arr = inputArray(arrLength);
    arr[3] = 4.6;
    arr[5] = 10;
    arr[1] = -1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") count++;
    }
    console.log(typeof arr[1]);
    document.getElementById('arrEx3').innerHTML = "Mang duoc tao : " + arr;
    document.getElementById('arrLength').innerHTML =
        "So ky tu so trong mang : " + count;
}

function ex4() {
    let string = prompt("Input 1 string : ");
    document.getElementById('string').innerHTML = string;
    document.getElementById('stringLength').innerHTML = string.length;
}

function ex5() {
    let string1 = prompt("Input string 1 : ");
    let string2 = prompt("Input  string 2 ");
    document.getElementById("firstString").innerHTML = string1;
    document.getElementById("secondString").innerHTML = string2;

    if (string1 === string2) {
        alert("Two strings are the same");
        document.getElementById("resultEx5").innerHTML = "Two strings are the same";
    } else {
        alert("Two strings are not the same");
        document.getElementById("resultEx5").innerHTML = "Two strings are not the same";
    }
}

function ex6() {
    let arrLength = prompt("Input array length ")
    let arr = inputArray(arrLength);
    document.getElementById('arrayEx6').innerHTML = arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-") arr[i] = "_";
    }
    document.getElementById('resultEx6').innerHTML = arr;

}