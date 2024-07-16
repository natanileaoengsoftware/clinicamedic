function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent .content");
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].classList.add("ativo");
  accordionList[0].nextElementSibling.classList.add("ativo");

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo"); //acessar o próximo elemento irmão
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
initAccordion();

function initScrollSuave() {
  const LinksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector("href");
    const topo = section.offsetTop;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  LinksInternos.forEach((link) => {
    // para acessar cada link interno
    link.addEventListener("click, scrollToSection"); //fazer o scroll diretamente na secao do link
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.queryselectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
