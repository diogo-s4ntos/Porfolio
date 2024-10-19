function openPhoneMenu(checkbox) {
    if (checkbox.checked) {
        document.body.style.overflowY = "hidden"
        document.getElementById('phone-menu').style.transform = 'translateX(0%)'
    } else {
        document.body.style.overflowY = "scroll"
        document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    }
}

function closeMenu() {
    document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    document.getElementById('menu-button').checked = false
    document.body.style.overflowY = "scroll"
}

const processScroll = () => {
    const { scrollTop, scrollHeight } = document.documentElement || document.body;
    const scrollPercent =
      (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  
    document
      .getElementById("expandingSpan")
      .style.setProperty("--scrollAmount", scrollPercent);
  };
  
  document.addEventListener("scroll", processScroll);

  function isSectionVisible(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    }
    return false;
  }

  function updateMenuColor() {
    const sections = ["home", "about", "projects", "testimonials", "contact"];
    const navLinks = document.querySelectorAll("nav ul li a");
    const phoneMenuLinks = document.querySelectorAll("div nav ul li a");

    sections.forEach((sectionId, index) => {
      const link = navLinks[index];
      const phoneMenuLink = phoneMenuLinks[index];
      if (this.isSectionVisible(sectionId)) {
        link.style.color = "var(--secondary)";
        phoneMenuLink.style.marginLeft = "1rem";
        if(sectionId == 'contact') {
            link.style.color = "var(--primary)";
            phoneMenuLink.style.color = "var(--primary)";
        } else {
            phoneMenuLink.style.color = "var(--secondary)";
        }
      } else {
        link.style.color = "var(--text)";
        phoneMenuLink.style.color = "var(--text)";
        phoneMenuLink.style.marginLeft = "0rem";
      }
    });
  }

    window.addEventListener("scroll", this.updateMenuColor);
    this.updateMenuColor();