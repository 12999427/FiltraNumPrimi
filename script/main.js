//const { performance } = require('perf_hooks'); //bah volevo misurare il tempo che ci mettevo

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
        if (numPrimo(e)){
            res.push(e);
        }
    });
    return res;
}

function numPrimo (n) {
    if (n<=1) { return false; }
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}

function trova () {
    let max = parseInt(document.getElementById("maxn").value);
    if (isNaN(max) || max<=1) {
        return;
    } 
    let p = document.getElementById("outputmaxn"); //no scherzo nnon così perchè aggiornare il DOM ci mette un'eternità quindi lo si deve fare una volta alla fine
    //const startTime = performance.now()

    let out = []

    for (let i = 2; i<=max; i++) {
        if (numPrimo(i)) {
            out.push(i);
        }
    }

    document.getElementById("outputmaxn").innerText = out;

    //const endTime = performance.now()
    //console.log(`L'eseguzione ci ha messo ${endTime - startTime} millisecondi`)
}