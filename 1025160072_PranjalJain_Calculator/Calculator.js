
const Sci = document.getElementById("Calculator");
const display = document.getElementById("display");



function factorial(n) {
    if (n < 0)
        return NaN;
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
        return result;
}

function AppendToDisplay(input) {
    display.value+=input;
}

function Clear() {
    display.value="";
}

function Result() {

    try{
        let visual = display.value;

        visual = visual.replace(/\^/g,'**');
        visual = visual.replace(/(\d+)!/g, "factorial($1)");
        visual = visual.replace(/\bSin\(/gi, 'Math.sin(');
        visual = visual.replace(/\bCos\(/gi, 'Math.cos(');
        visual = visual.replace(/\bTan\(/gi, 'Math.tan(');
        visual = visual.replace(/\bLog\(/gi, 'Math.log10(');
        visual = visual.replace(/\bLn\(/gi, 'Math.log(');
        visual = visual.replace(/\bSqrt\(/gi, 'Math.sqrt(');

        display.value=eval(visual)
    }
    catch(error){
        display.value="Error"
    }
}


let Scientific=false

function SciMode() {
    Scientific = !Scientific;
    if (Scientific) {
        Sci.classList.add('Sci');
    }
    else {
        Sci.classList.remove('Sci')
    }
}
