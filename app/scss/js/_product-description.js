function removeLastParagraph(selector) {
  var element = $(selector).find('p:last-child');
  if (element.length) {
    element.remove();
  }
}

function prependHeaderToDescription(selector, headerText) {
  var element = $(selector);
  if (element.length) {
    var h2 = $('<h2></h2>').text(headerText);
    element.prepend(h2);
  }
}

function removeShortParagraphs(selector) {
  $(selector)
    .find('p')
    .each(function () {
      var text = $(this).text().trim();
      if (text.length < 6) {
        $(this).remove();
      }
    });
}

function replaceDetailParameters() {
  var detailParameterWrapper = $('.detail-parameters-wrapper');
  if (detailParameterWrapper.length) {
    detailParameterWrapper.remove();

    var parameters = $(
      "<div class='basic-parametres'><div class='parametres-inner'><h2>Parametry</h2></div></div>",
    );
    $('.description-inner').append(parameters);
    $('.parametres-inner').append(detailParameterWrapper);
    $('.parametres-inner table').removeClass('detail-parameters');
  }
}
