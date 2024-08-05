function createFasteningRow() {
  return `
            <tr class="variant-list variant-not-chosen-anchor variant-selected">
                <th>
                    Druh zapínání    
                </th>
                <td>
                    <div class="hidden-split-parameter parameter-id-18" id="parameter-id-18" data-parameter-id="18" data-parameter-name="Druh zapínání">
                        <label class="advanced-parameter">
                            <span class="advanced-parameter-inner show-tooltip fastening-a" title="" data-testid="" data-original-title="">
                                <img src="https://cdn.myshoptet.com/usr/www.etapo.cz/user/parameters/color__bile--zlato.png" alt="">
                            </span>
                            <input type="radio" name="parameterValueId[18]" value="18" checked="" data-preselected="true">
                            <span class="parameter-value"></span>
                        </label>
                    </div>
                    <div class="box__gold"><a href="">&nbsp;</a></div>
                </td>
            </tr>`;
}

function createAmountSelection() {
  return `
            <div class="button-wrapper">
                <button class="option" data-value="" style="display: none;">Zvolte variantu</button>
                <button class="option single" data-value="30">Singlovka</button>
                <button class="option pair" data-value="27">Pár</button>
            </div>
            <select name="parameterValueId[21]" class="hidden-split-parameter parameter-id-21" id="parameter-id-21" data-parameter-id="21" data-parameter-name="Množství" data-testid="selectVariant_21">
                <option value="" data-choose="true" data-index="0">Zvolte variantu</option>
                <option value="27" data-index="1">PÁR</option>
                <option value="30" data-index="2">SINGLOVKA</option>
            </select>`;
}

function insertFasteningRow() {
  var fastening = createFasteningRow();
  $('.variant-list').eq(0).after(fastening);
  $('.fastening-a').empty().append('<a href="#"></a>');
}

function insertAmountSelection() {
  var amount = createAmountSelection();
  var secondVariantList = $('.variant-list td').eq(2);
  if (secondVariantList.length) {
    secondVariantList.html(amount);
  }
}

function hideSelectElements() {
  $('select').hide();
}

function handleOptionClick() {
  $('.option').on('click', function () {
    var value = $(this).data('value');
    $('select').val(value).change();
  });
}

function updatePriceText() {
  $('.price-final-holder').each(function () {
    var priceText = $(this).text();
    if (priceText.includes(' od ')) {
      $(this).text(priceText.replace('od', ''));
    }
  });
}

function handleWindowResize() {
  $(window)
    .resize(function () {
      var currentImgWidth = $('.p-image #wrap a img').width();
      $('.row .col-sm-12.p-thumbnails-wrapper').width(currentImgWidth);
    })
    .resize();
}
