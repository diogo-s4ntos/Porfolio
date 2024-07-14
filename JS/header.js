function openPhoneMenu(checkbox) {
    if (checkbox.checked) {
        document.body.style.overflow = "hidden"
        document.getElementById('phone-menu').style.transform = 'translateX(0%)'
    } else {
        document.body.style.overflow = "scroll"
        document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    }
}

function closeMenu() {
    document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    document.getElementById('menu-button').checked = false
    document.body.style.overflow = "scroll"
}