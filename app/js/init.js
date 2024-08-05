// RESET.JS

// (function () {
//   // Funkce pro odstranění nežádoucích elementů
//   function removeUnwantedElements() {
//     let elements = document.querySelectorAll(
//       'script[src*="assets.slusarcik.cz"], link[href*="assets.slusarcik.cz"]',
//     );
//     elements.forEach((element) => element.remove());
//   }

//   // Zkontrolujte, zda je stránka načtena na localhostu
//   if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
//     // Odstraníme existující nežádoucí elementy
//     removeUnwantedElements();

//     // Sledujeme změny v DOM a odstraníme nové nežádoucí elementy
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === 'childList') {
//           mutation.addedNodes.forEach((node) => {
//             if (node.nodeType === 1) {
//               // Element node
//               let src = node.getAttribute('src') || '';
//               let href = node.getAttribute('href') || '';

//               if (src.includes('assets.slusarcik.cz') || href.includes('assets.slusarcik.cz')) {
//                 node.remove();
//               }
//             }
//           });
//         }
//       });
//     });

//     // Konfigurace observeru
//     observer.observe(document.body, { childList: true, subtree: true });
//   }
// })();

// BANNERS.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    appendContent('#homepageProducts6', bannerContent1);
    appendContent('#homepageProducts12', bannerContent2);
    removeElement('.foter');
    removeElement('.foto-l');
    removeElement('.text-alert');
    moveImageForMobile();
  }
});

// CAROUSELS.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    updateButtonText();
    updateH2Text();
    updatePrices();
    adjustProductWidths();
    reInitCarouselOnHomepage();

    // Při změně velikosti okna
    $(window).resize(function () {
      updateButtonText();
    });
  }
});

// HEADER.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    addInstagramLink();
    addSvgIcons();
    moveNavigationButtons();
    addNavigationToggle();
    // removeSubmenuArrow();
  }
});

// CARE-ARTICLE.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    if (isCurrentUrlContains('pece-o-sperky')) {
      var content = createContentCare();
      updateArticleContent('article[itemscope][itemtype="https://schema.org/Article"]', content);
    }
  }
});

// ABOUT-US.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    if (isCurrentUrlContains('nas-pribeh')) {
      var content = createContentMaintenance();
      updateArticleContent('article[itemscope][itemtype="https://schema.org/Article"]', content);
    }
  }
});

// NEWSLETTER.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    var newsletterContent = createNewsletterContent();
    insertNewsletterBeforeFooter('#footer', newsletterContent);
  }
});

// PRODUCT-ARTICLE.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    var articleContent = createArticleContent();
    insertArticleAfterElement('.shp-tabs-wrapper.p-detail-tabs-wrapper', articleContent);
  }
});

// PRODUCT-DESCRIPTION.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    removeLastParagraph('.basic-description');
    prependHeaderToDescription('.basic-description', $('.p-detail-inner-header h1').text());
    removeShortParagraphs('.basic-description');
    replaceDetailParameters();
  }
});

// PRODUCT-DETAIL.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    insertFasteningRow();
    insertAmountSelection();
    hideSelectElements();
    handleOptionClick();
    removeShortParagraphs('.p-short-description p');
    // updatePriceText();
    updateButtonText('.add-to-cart-button', 'Přidat do košíku');
    updateButtonText('.link-icon.chat', 'Nebo se nás zeptejte');
    handleWindowResize();
  }
});

// TOP BANNER.JS

$(document).ready(function () {
  if (jQuery('body').hasClass('admin-logged')) {
    // Inicializace funkcí
    createSigns();
  }
});

jQuery('body').addClass('admin-logged');
