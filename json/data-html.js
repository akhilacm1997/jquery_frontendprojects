var xhr=new XMLHttpRequest();
xhr.onload=function()
{
    if(xhr.status===200){
    document.getElementById('content').innerHTML=xhr.responseText;
}
};
xhr.open('GET','data.html',true);  //calling datahtml page
xhr.send(null);