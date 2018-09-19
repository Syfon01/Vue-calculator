var app = new Vue({

    el: "#app",
    data :{
        current : ''
    },
    methods :{
        press: function(press){
            let key = event.target.innerText;
            if(
                key != '=' &&
                key != 'C' &&
                key != '*' &&
                key != '/' &&
                key != '+' &&
                key != '-' &&
                key != '√' &&
                key != 'x ²'
            ){
                app.current += key;
            } else if (key === '=') {
                    equals();
                } else if (key === 'C') {
                    clear();
                } else if (key === '*') {
                    multiply();
                } else if (key === '/') {
                    divide();
                } else if (key === '+') {
                    plus();
                } else if (key === '-') {
                    minus();
                } else if (key === '√') {
                    squareRoot();
                } else if (key === 'x ²') {
                    square();

            }

            function equals() {
if ((app.current).indexOf("^") > -1) {
var base = (app.current).slice(0, (app.current).indexOf("^"));
var exponent = (app.current).slice((app.current).indexOf("^") + 1);
app.current = eval("Math.pow(" + base + "," + exponent + ")");
} else {
app.current = eval(app.current)
}
}

//our ' C ' button
function clear() {
app.current = "";
}

//our ' <= ' button
function backspace() {
app.current = app.current.substring(0, app.current.length - 1);
}

//our ' * ' button
function multiply() {
app.current += "*";
}

//our ' / ' button
function divide() {
app.current +=  "/";
}

//our ' + ' button
function plus() {
app.current +=  "+";
}

//our ' - ' button
function minus() {
app.current +=  "-";
}

//our ' x ² ' button
function square() {
    app.current += "²";
    }
    
    //our ' √ ' button
    function squareRoot() {
    app.current +=  "√";
    }

//our ' sin ' button
function sin() {
app.current = Math.sin(app.current);
}

//our ' cos ' button
function cos() {
app.current = Math.cos(app.current);
}

//our ' tan ' button
function tan() {
app.current = Math.tan(app.current);
}

//our ' log ' button
function log() {
app.current = Math.log10(app.current);
}

        }

    }
});
