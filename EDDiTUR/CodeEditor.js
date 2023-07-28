function run(){
    let HTMLCode =document.getElementById("HTML-CODE").value;
    let CSSCode =document.getElementById("CSS-CODE").value;
    let JSCode =document.getElementById("JAVASCRIPT-CODE").value;
    let output =document.getElementById("output");
    output.contentDocument.body.innerHTML = `${HTMLCode}<style>${CSSCode}<style>`;
    output.contentWindow.eval(JSCode);
}


