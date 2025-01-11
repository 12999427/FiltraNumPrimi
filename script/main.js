function add () {
    let elemento = document.createElement("input");
    elemento.type = "number";
    elemento.name = "num";
    elemento.classList.add("campoinput");
    let br = document.createElement("br");
    document.getElementById("campiinput").appendChild(elemento);
    document.getElementById("campiinput").appendChild(br);
}

function remove () {
    let div = document.getElementById("campiinput");
    if (div.children.length > 1) {
        for (let i = 0; i<2; i++) {
            div.removeChild(
                div.lastChild
            );
        }
    }
}

function compute () {
    let input = [];
    let elementi = document.querySelectorAll("input[name='num']");
    elementi.forEach(elemento => {
        let n = parseInt(elemento.value);
        if ( !isNaN(n))  { input.push(n); }
    });
    console.log(input);
    let output = filtraNumPrimi(input)
    document.getElementById("output").innerText = output;
}

function filtraNumPrimi (a) {
    let res = [];
    a.forEach(e => {
        if (numPrimo(e) && e>1){
            res.push(e);
        }
    });
    return res;
}

function numPrimo (n) {
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (n%i == 0 || n == 1) {
            return false;
        }
    }
    return true;
}