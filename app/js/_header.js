function createSvgElement(svgString) {
  return $(svgString);
}

function appendElement(selector, content) {
  var element = $(selector);
  if (element.length) {
    element.append(content);
  }
}

function prependElement(selector, content) {
  var element = $(selector);
  if (element.length) {
    element.prepend(content);
  }
}

function addInstagramLink() {
  var instagramIcon = createSvgElement(`
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
              <g id="Instagram" transform="translate(-3.063 -3.063)">
                  <g id="Group_28" data-name="Group 28" transform="translate(3.063 3.063)">
                      <path id="Path_13" data-name="Path 13" d="M25.426,29.063H6.7a3.637,3.637,0,0,1-3.637-3.637V6.7A3.637,3.637,0,0,1,6.7,3.063H25.426A3.637,3.637,0,0,1,29.063,6.7V25.426a3.637,3.637,0,0,1-3.637,3.637ZM6.7,4.518A2.182,2.182,0,0,0,4.518,6.7V25.426A2.182,2.182,0,0,0,6.7,27.608H25.426a2.182,2.182,0,0,0,2.182-2.182V6.7a2.182,2.182,0,0,0-2.182-2.182Z" transform="translate(-3.063 -3.063)" fill="#4a4a4a" stroke="#000" stroke-width="0"/>
                      <path id="Path_14" data-name="Path 14" d="M13.86,20.318a6.457,6.457,0,1,1,6.464-6.456A6.457,6.457,0,0,1,13.86,20.318Zm0-11.514a5.052,5.052,0,1,0,5.059,5.059A5.052,5.052,0,0,0,13.86,8.8Z" transform="translate(-0.859 -0.863)" fill="#4a4a4a" stroke="#000" stroke-width="0"/>
                      <circle id="Ellipse_5" data-name="Ellipse 5" cx="1.62" cy="1.62" r="1.62" transform="translate(18.749 3.897)" fill="#4a4a4a" stroke="#000" stroke-width="0"/>
                  </g>
              </g>
          </svg>
      `);

  var instagramLink = $('<a>')
    .attr('href', 'https://www.instagram.com/etapo_cz/')
    .append(instagramIcon);
  var instagramLogoDiv = $('<div>').addClass('instagram-logo').append(instagramLink);
  prependElement('.logo-sem', instagramLogoDiv);
}

function addSvgIcons() {
  var cart = createSvgElement(`
          <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 24.262 26.5">
              <path id="Path_12" data-name="Path 12" d="M19.311,12.827V7.058a4.808,4.808,0,1,0-9.615,0v5.769m14.559-2.555,1.619,15.385a1.441,1.441,0,0,1-1.435,1.594H4.568a1.442,1.442,0,0,1-1.436-1.594L4.752,10.272A1.442,1.442,0,0,1,6.187,8.981H22.82A1.442,1.442,0,0,1,24.255,10.272ZM10.177,12.827a.481.481,0,1,1-.481-.481A.481.481,0,0,1,10.177,12.827Zm9.615,0a.481.481,0,1,1-.481-.481A.481.481,0,0,1,19.792,12.827Z" transform="translate(-2.372 -1.5)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
      `);
  var login = createSvgElement(`
          <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 20.729 26.5">
              <path id="Path_11" data-name="Path 11" d="M18.923,7.058A4.808,4.808,0,1,1,14.115,2.25a4.808,4.808,0,0,1,4.808,4.808ZM4.5,25.158a9.615,9.615,0,1,1,19.229,0,23.137,23.137,0,0,1-19.229,0Z" transform="translate(-3.751 -1.5)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
      `);
  var search = createSvgElement(`
          <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 26.811 26.811">
              <path id="Path_10" data-name="Path 10" d="M28,28l-7.218-7.218m0,0a10.417,10.417,0,1,0-14.731,0A10.417,10.417,0,0,0,20.781,20.781Z" transform="translate(-2.249 -2.249)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
      `);
  var nav = createSvgElement(`
          <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="16.089" viewBox="0 0 21.5 16.089">
              <path id="Path_23" data-name="Path 23" d="M3.75,9.8h20m-20,7.362h20m-20,7.227h20" transform="translate(-3 -9.047)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
      `);

  appendElement('.toggle-window.cart-count', cart);
  appendElement('.toggle-window.login-link', login);
  appendElement(".toggle-window[data-target='search']", search);
  appendElement(".toggle-window[data-target='navigation']", nav);
}

function moveNavigationButtons() {
  var navigationButtons = $('.navigation-buttons');
  if (navigationButtons.length) {
    navigationButtons.appendTo('.logo-sem');
  }
}

function addNavigationToggle() {
  $(".toggle-window[data-target='navigation']").click(function (event) {
    event.preventDefault();
    var navigation = $('#navigation');
    if (navigation.length) {
      if (navigation.width() === 0) {
        navigation.width('100%');
      } else {
        navigation.width(0);
      }
    }
  });
}

function removeSubmenuArrow() {
  removeElement('.submenu-arrow');
}

function wrapHeaderWithNavigation() {
  // Najdeme elementy header a .logo-sem
  const header = document.querySelector('header');
  const logoSem = document.querySelector('.logo-sem');

  if (header && logoSem) {
    // Vytvoříme nový div s třídou wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('sticky-header');

    // Umístíme wrapper před header
    header.parentNode.insertBefore(wrapper, header);

    // Přesuneme header a .logo-sem do wrapperu
    wrapper.appendChild(logoSem);
    wrapper.appendChild(header);
  }
}

function makeHeaderSticky() {
  var header = document.querySelector('header');
  var sticky = header.offsetTop;

  if (window.scrollY > sticky) {
    header.classList.add('scrolled').slideDown();
    header.attr('display', 'fixed');
  } else {
    header.classList.remove('scrolled').slideUp();
    header.style.display = 'none';
  }
}

if (window.matchMedia('(min-width: 768px)').matches && jQuery('body').hasClass('admin-logged')) {
  window.onscroll = function () {
    makeHeaderSticky();
  };
}

$(function () {
  // wrapHeaderWithNavigation();
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(min-width: 768px)').matches && jQuery('body').hasClass('admin-logged')) {
    // Selektor pro sledované prvky
    const menuLevel1 = document.querySelector('.menu-level-1');

    // Funkce pro odstranění třídy 'splitted'
    function removeSplittedClass(element) {
      if (element.classList.contains('splitted')) {
        element.classList.remove('splitted');
      }
    }

    // Nastavení MutationObserver pro sledování změn atributů třídy a přidání nových elementů
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          removeSplittedClass(mutation.target);
        }
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === 1 && node.matches('li')) {
              observer.observe(node, { attributes: true, attributeFilter: ['class'] });
              removeSplittedClass(node);
            }
          });
        }
      });
    });

    // Možnosti pro observer
    const observerOptions = {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true,
    };

    // Přidáme observer k rodičovskému prvku .menu-level-1
    if (menuLevel1) {
      observer.observe(menuLevel1, observerOptions);
      // Přidáme observer ke všem existujícím prvkům .menu-level-1 > li
      menuLevel1.querySelectorAll('li').forEach(function (item) {
        observer.observe(item, { attributes: true, attributeFilter: ['class'] });
        removeSplittedClass(item);
      });
    }
  }
});
