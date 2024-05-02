function openPhoneMenu(checkbox) {
    if (checkbox.checked) {
        document.body.style.overflow = "hidden";
        document.getElementById('phone-menu').style.transform = 'translateX(0%)'
    } else {
        document.body.style.overflow = "scroll";
        document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    }
}