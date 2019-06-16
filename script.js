function getResult() {
    return document.getElementById("current").innerText;
}

function gethistory() {
    return document.getElementById("history").innerText;
}

function PrintHistory(x) {
    document.getElementById("history").innerText = x;
}

function PrintResult(x) {
    document.getElementById("current").innerText = x;
}

var number = document.getElementsByClassName("num");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = getResult();
        output = output + this.id;
        PrintResult(output);

    })

}

var operator = document.getElementsByClassName("op");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "c") {
            PrintHistory("");
            PrintResult("");


        } else if (this.id == "del") {
            var x = getResult();
            x = x.substr(0, x.length - 1);
            PrintResult(x);

        } else {
            var result = getResult();
            var history = gethistory();

            if (this.id == "eq") {
                history = history + result;
                result = eval(history);
                PrintResult(result);
                PrintHistory(history);
            } else {
                if (result != "") {
                    history = result + this.id;
                    PrintHistory(history);
                    PrintResult("");
                } else if (result == "") {
                    history = history.substr(0, history.length - 1);
                    history = history + this.id;
                    PrintHistory(history);
                }


            }
        }


    })

}