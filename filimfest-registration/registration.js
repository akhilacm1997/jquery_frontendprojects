
function checkuserName1() {
    function checkuserName1()
   {
       var uname1=document.getElementById("name");
     var msg1=document.getElementById("name1");

     if(uname1.value.length<5)
     {
       msg1.textContent="min 5 characters";
     }
     else {
       msg1.textContent="";
     }
   }
    
}