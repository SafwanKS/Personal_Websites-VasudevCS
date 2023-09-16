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