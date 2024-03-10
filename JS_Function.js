function msg() {
    alert("I hate JavaScript!! someone help me!!")
}

function getcube(x) {
    event.preventDefault(); // this prevents the browser from auto refreshing the moment we hit submit
    if (x == null || x == undefined) {
        var x = document.form1.num1.value;
    }
    if (x == 0) {
        alert("the value cannot be zero")
    } else {
        console.log("input: "+ x)
        var cube = x*x*x
        document.getElementById("output").innerHTML = "the cube of " + x + " is " + cube
    }
}

function checkval() {
    event.preventDefault();
    var user_name = document.getElementsByName("username")[0].value
    var user_password = document.getElementsByName("password")[0].value
    console.log(user_name+ " " + user_password)

    if (user_name == "" || user_name == " ") {
        alert("user_name cannot be empty")
        console.log("invalid user_name")
    }

    if (user_password.length < 4) {
        alert("you are dumb")
    }
}

function changecolor(num) {
    const element = document.body;
    if(num == 1) {
        element.style.backgroundColor = 'blue';
    } else if (num == 2) {
        element.style.backgroundColor = 'white'
    } else if (num == 3) {
        element.style.backgroundColor = 'yellow'
    }
}

function takeinput() {
    let input = prompt("please enter the number");
    getcube(input);
    obj1 = {name: "jainil", age: 19, marks: {physics: 100, english: 100}}
    console.log(obj1) 
}

function for_each_loops() {
    event.preventDefault()
    let fruits = ["mango", "sweetlime", "orange", "grapes", "apple", "pineapple", "guavava", "promogrante"];
    console.log(fruits.length);
    console.log(fruits);
    fruits.forEach(fruit => {
        console.log(fruit)
    });
}

let square = function(num) {
    return (num*num)
}
console.log(square(5))

function addSquare(a, b) {
    const sq_a = square(a);
    const sq_b = square(b);
    const result = sq_a + sq_b;
    function square(num) {
        return num*num
    }
    return result;
}
console.log(addSquare(3, 4))

const x = document.getElementById('b1');
console.log(x);