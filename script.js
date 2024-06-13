// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
Console.log(header)
Window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        Header.classList.add('navbarDark');
    }
    else {
        Header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
