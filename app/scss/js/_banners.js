// Funkce pro bezpečné přidání obsahu do elementu
function appendContent(selector, content) {
  var element = $(selector);
  if (element.length) {
    element.append(content);
  }
}

// Funkce pro bezpečné odstranění elementu
function removeElement(selector) {
  var element = $(selector);
  if (element.length) {
    element.remove();
  }
}

// Funkce pro změnu umístění obrázku na mobilních zařízeních
function moveImageForMobile() {
  if ($(window).width() < 768) {
    var image = $('.container-b .right-side img');
    if (image.length) {
      $('.container-b .right-side img').remove();
      $('.container-b .left-side div a').before(image);
    }
  }
}

var bannerContent1 = `
  <div class="container-a">
    <div class="background"></div>
    <div class="left-side">
      <img src="https://www.etapo.cz/user/documents/upload/assets/etapo_singlovka_portret-min.jpg" alt="" />
      <h3 class="desc-img">
        SINGLOVKA je výjimečná a originální volba pro ženy, které <b>chtějí být nezaměnitelné.</b>
      </h3>
    </div>
    <div class="right-side">
      <div class="text">
        <h3>Vyber si jedinečnou SINGLOVKU namísto klasického páru náušnic a oživ svoji šperkovnici.</h3>
        <a href="/nausnice/singlovky">Vybrat si</a>
      </div>
      <div class="images">
        <div class="first-image">
          <img
            src="https://www.etapo.cz/user/documents/upload/assets/etapo_singlovka_klasik-min.jpg"
            alt=""
          />
        </div>
        <div class="second-image">
          <img
            src="https://www.etapo.cz/user/documents/upload/assets/etapo_singlovka_pecka-min.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>`;

var bannerContent2 = `
  <div class="container-b">
    <div class="left-side">
      <div>
        <h3>Přečtěte si, jak začalo naše zlaté dobrodružství.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate sit amet nisl sit amet luctus.
          Morbi consequat pretium turpis, vitae faucibus mi interdum vitae.
        </p>
        <a href="/pribeh/"> Přečíst celý příběh </a>
      </div>
    </div>
    <div class="right-side">
      <img src="https://www.etapo.cz/user/documents/upload/assets/vse_zacalo-min.png" alt="" />
    </div>
  </div>
`;
