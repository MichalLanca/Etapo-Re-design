function updateButtonText() {
  var btnPrimary = $('.btn-primary');
  if (btnPrimary.length) {
    if ($(window).width() > 768) {
      btnPrimary.html('<span>Do detailu</span> >');
    } else {
      btnPrimary.html('<span>Do detailu</span> >');
    }
  }
  removeElement('.slick-arrow');
  removeElement('.all__product-mobile');
}

function updateH2Text() {
  $('h2 a[href="/zlute-zlato/"]').each(function () {
    var h2 = $(this).parent();
    if (h2.length) {
      $(this).remove();
      h2.text('Nejprodávanější');
      h2.addClass('header');
    }
  });

  $('h2 a[href="/bile-zlato/"]').each(function () {
    var h2 = $(this).parent();
    if (h2.length) {
      $(this).remove();
      h2.text('Novinky');
    }
  });
}

function updatePrices() {
  $('.prices .price-final').each(function () {
    var priceContent = $(this).find('strong').text().trim();
    if (priceContent.length) {
      $(this).html('<p>' + priceContent + '</p>');
    }
  });
}

function adjustProductWidths() {
  $('#products-12 .product.slick-slide').each(function () {
    var width = $(this).width();
    if (width) {
      $(this).width(width / 2);
    }
  });
}

function reInitCarouselOnHomepage() {
  setTimeout(() => {
    jQuery('.products-block[class*=homepage-products-]').slick('destroy');
    $('.products-block[class*=homepage-products-]').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }, 500);
}
