function check_smallest() {
    event.preventDefault()
    const num1 = document.form1.num1.value
    const num2 = document.form1.num2.value
    const num3 = document.form1.num3.value
    console.log(num1, num2, num3)

    if (num1 > num2) {
        if (num2 < num3) {
            console.log("num2 is smallest")
        } else {
            console.log("num3 is smallest")
        }
    } else {
        if (num1 < num3) {
            console.log("num1 is smallest")
        } else {
            console.log("num3 is smallest")
        }
    }
}

function last_letter_small() {
    event.preventDefault()
    const string1 = document.form1.str1.value
    console.log(string1)
    var splitted_strings = string1.split(" ")
    console.log(splitted_strings)
    for(i = 0 ; i < splitted_strings.length ; i++) {
        console.log(splitted_strings[i])
        console.log(splitted_strings[i].charAt(splitted_strings[i].length - 1).toLowerCase())
        splitted_strings[i] = splitted_strings[i].slice(0, splitted_strings[i].length - 1) +  splitted_strings[i].charAt(splitted_strings[i].length - 1).toLowerCase()
    }
    var new_string = splitted_strings.join(" ")
    console.log(new_string)
}

function convert_to() {
    event.preventDefault()
    const dist = document.form2.distance.value
    const op = document.form2.dist_unit.value
    console.log(dist, op)

    if (dist == null || dist == 0) {
        document.getElementById("result").innerHTML = `no value provided`
    }
    else if (op == "kilometers") {
        document.getElementById("result").innerHTML = `<b>${dist} miles = ${(dist * 1.60)} kilometers </b>`
    } else {
        document.getElementById("result").innerHTML = `<b>${dist} kilometers = ${(dist / 1.60)} miles </b>`
    }
}

function count_vowels() {
    event.preventDefault()
    const string1 = document.form1.str1.value
    var splitted_strings = string1.split(" ")
    let total_vowels = 0
    for(i = 0 ; i < splitted_strings.length ; i++) {
        var word = splitted_strings[i];
        var letters = word.split("")
        console.log(letters)
        for(j = 0 ; j < letters.length ; j++) {
            if (letters[j] == 'a' || letters[j] == 'e' || letters[j] == 'i' || letters[j] == 'o' || letters[j] == 'u') {
                total_vowels += 1;
            } else if (letters[j] == 'A' || letters[j] == 'E' || letters[j] == 'I' || letters[j] == 'O' || letters[j] == 'U') {
                total_vowels += 1;
            } else {
                continue;
            }
        }
    }
    document.getElementById("result").innerHTML = `total vowels in the string <b>'${string1}'</b> are ${total_vowels}`
}

