/* When the user clicks on the button,
toggle between hiding and showing the dropup content */
function myFunction() {
    document.getElementById("myDropup").classList.toggle("show");
  }
  
  // Close the dropup menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropups = document.getElementsByClassName("dropup-content");
      var i;
      for (i = 0; i < dropups.length; i++) {
        var openDropup = dropups[i];
        if (openDropup.classList.contains('show')) {
          openDropup.classList.remove('show');
        }
      }
    }
  }