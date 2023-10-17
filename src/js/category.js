// Nav Bar Profile icon appearence 

if (isUserLoggedIn()) {
    // User is logged in, hide the button
    document.getElementById("navbar_container-profile").style.display = "none";
  } else {
    // User is not logged in, show the button
    document.getElementById("navbar_container-profile").style.display = "block";
    document.getElementById("navbar_container-signinup").style.display = "none";
  }


  function searchCategory(i) {
    sessionStorage.clear();
    const category = document.getElementById(`cat-button${i}`).value.toLowerCase();
    sessionStorage.setItem('category', category);
    window.location.href = "src/html/catalog.html";
  }
  
  document.getElementById('cat-button0').addEventListener('click', function () {
    searchCategory('0');
  });
  
  document.getElementById('cat-button1').addEventListener('click', function () {
    searchCategory('1');
  });
  
  document.getElementById('cat-button2').addEventListener('click', function () {
    searchCategory('2');
  });
  
  document.getElementById('cat-button3').addEventListener('click', function () {
    searchCategory('3');
  });
  
  document.getElementById('cat-button4').addEventListener('click', function () {
    searchCategory('4');
  });
