window.onscroll = function() {
    myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      
      
     document.getElementById('header').setAttribute("style", "background-image: url('back.png')");
     
        document.getElementById("headText").style.display = 'block';
        
    } else {
       
      document.getElementById('header').setAttribute("style", "background-image: url('')");
      
        document.getElementById("headText").style.display = 'none'
    }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function goPage(){
    window.open("drawings.html");
}
function openAd() {
            window.open('https://instagram.com/web__weaver?igshid=YWYwM2I1ZDdmOQ==')
        }
