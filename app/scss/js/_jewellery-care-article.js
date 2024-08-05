function isCurrentUrlContains(substring) {
  return window.location.href.includes(substring);
}

function createContentCare() {
  return `
          <header itemprop="headline"><h1>Jak se starat o své šperky?</h1></header>
          <div itemprop="about">
              <p class="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate sit amet nisl sit amet luctus. Morbi consequat pretium turpis, vitae faucibus mi interdum vitae. Quisque quis imperdiet lorem.
              </p>
              <div class="feature-w-image">
                  <div class="feature-image">
                      <img
                          src="https://assets.slusarcik.cz/etapo/placeholder.png"
                          alt="placeholder" />
                  </div>
                  <div class="feature-content">
                      <h3>Jak předejít poškození?</h3>
                      <p class="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris vulputate sit amet nisl sit amet luctus. Morbi
                          consequat pretium turpis, vitae faucibus mi interdum vitae.
                          Quisque quis imperdiet lorem.
                      </p>
                  </div>
              </div>
              <div class="feature-w-image">
                  <div class="feature-image">
                      <img
                          src="https://assets.slusarcik.cz/etapo/placeholder.png"
                          alt="placeholder" />
                  </div>
                  <div class="feature-content">
                      <h3>Bezpečné uskladnění</h3>
                      <p class="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris vulputate sit amet nisl sit amet luctus. Morbi
                          consequat pretium turpis, vitae faucibus mi interdum vitae.
                          Quisque quis imperdiet lorem.
                      </p>
                  </div>
              </div>
              <div class="feature-w-image">
                  <div class="feature-image">
                      <img
                          src="https://assets.slusarcik.cz/etapo/placeholder.png"
                          alt="placeholder" />
                  </div>
                  <div class="feature-content">
                      <h3>Neprůstřelné čištění</h3>
                      <p class="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris vulputate sit amet nisl sit amet luctus. Morbi
                          consequat pretium turpis, vitae faucibus mi interdum vitae.
                          Quisque quis imperdiet lorem.
                      </p>
                  </div>
              </div>
          </div>`;
}

function updateArticleContent(selector, content) {
  var articleElement = $(selector);
  if (articleElement.length) {
    articleElement.empty().append(content);
  }
}
