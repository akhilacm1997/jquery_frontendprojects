$('nav a').on('click', function(e) {                 
    e.preventDefault();                                
    var url = this.href;                              
  
    $('nav a.current').removeClass('current');        
    $(this).addClass('current');                       
  
    $('#container').remove(); 
    console.log(url);                         
    $('#content').load(url + ' #container').hide().fadeIn('slow'); 
  });
 
  function startTime() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('txt').innerHTML =
   h + ":" + m + ":" + s;
   var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
  }