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


        }

        if(this.id=="del"){
        	var x=getResult();
        	x=x.substr(0,x.length-1);
        	PrintResult(x);

        }


    })

}