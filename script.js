function inputValue(id) {
    let a = document.getElementById(id).value
    return a
}


function triangleArea() {
    let b = inputValue("triangleBase");
    let h = inputValue("triangleHeight");
    let area = 0.5 * b * h;
    document.getElementById("output").innerText = area;
    document.getElementById("triangleAreaOutput").innerText = area;
}

function rectangleArea() {
    let w = inputValue("rectangleWidth");
    let l = inputValue("rectangleLength");
    let area = w * l;

    document.getElementById("output").innerText = area;
    document.getElementById("rectangleAreaOutput").innerText = area;
}

function parallelogramArea() {
    let b = inputValue("parallelogramBase");
    let h = inputValue("parallelogramHeight");
    let area = b * h;

    document.getElementById("output").innerText = area;
    document.getElementById("parallelogramAreaOutput").innerText = area;
}



