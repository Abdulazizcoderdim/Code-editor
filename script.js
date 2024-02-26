function run(){
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output'); 
    
output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
output.contentWindow.eval(jsCode);


}