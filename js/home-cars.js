function showCars(n) {
    var slideIndex = n;
    var i;
    var x = document.getElementsByClassName("show-cars");
    var y = document.getElementsByClassName("show-car-name");
    var z = document.getElementsByClassName("homepage-achievements-allachieve");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  

    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#40455f";  
    }
    y[slideIndex-1].style.backgroundColor = "#a4cc3c";

    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";  
    }
    z[slideIndex-1].style.display = "block";  
  }