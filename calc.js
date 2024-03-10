function calci() {
    event.preventDefault();
    var num1 = document.form1.num1.value
    num1 = parseInt(num1)
    var num2 = document.form1.num2.value
    num2 = parseInt(num2)
    var operation = document.form1.operation.value

    console.log(num1 + " and " + num2 + " operation: " + operation)
    var out = document.getElementById("output_window")
    var val = undefined 
    
    switch (operation) {
        case "+":
            val = num1 + num2
            break;
        case "-":
            val = num1 - num2
            break;
        case "*":
            val = num1 * num2
            break;
        case "/":
            val = num1 / num2
            break;
        default:
            console.log("invalid operation")
            break;
    }
    out.innerHTML = "output: " + val
}