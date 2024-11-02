let sidebar = document.querySelector('.sidebar');
let sidebarNav = document.querySelector('.sidebar-nav');


function hideToggler() {
    sidebarNav.classList.toggle('move');
    sidebar.classList.toggle('hide');
}