
 var header = document.querySelector(".nav-wrapper");
 window.addEventListener('scroll', () => {
     header.classList.toggle("sticky", window.scrollY > 0);
 })
 
