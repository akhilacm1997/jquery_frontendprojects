
function compile()
{
var h=document.getElementById('txt');
var c=document.getElementById('t2');
var j=document.getElementById('t3');
var code=document.getElementById('frame').contentWindow.document;
console.log(code);
document.body.onkeyup = function(){
  code.open();
     code.writeln(h.value+"<style>"+c.value+"</style>"+"<script>"+j.value+"</script>");
     code.close();
};
};
compile();
