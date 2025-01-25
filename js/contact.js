const NavBar =()=>{
    let NavBar = `
    <nav>
         <div class="navbar-fixed" id="navbar">
          <img class="image-logo" src="./Picture/Logo_shop.png" alt="Error">
          <div class="icons">
          <a class="link-header" href="../index.html"><i class="fas fa-home"></i></a>
              <a class="link-header" href="#"><i class="fa-regular fa-user"></i></a>
              <a class="link-header" href="../cart.html"><i class="fa-brands fa-opencart"></i></a>
          </div>
         </div>
      </nav>
  `
  document.getElementById("header").innerHTML = NavBar;

}
NavBar()