//Dehär är funktionon av sidenaven när den är ute så går den ut 250 pixlar och in så är den 0 px(Jag vet inte varför det finns två men orkar inte ta bort och kontrollera vad som har hänt)


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }