function createArticleContent() {
  return `
          <article itemscope="" itemtype="https://schema.org/Article">
              <header itemprop="headline"><h1></h1></header>
              <div itemprop="about">
                  <div class="feature-w-image">
                      <div class="feature-image">
                          <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="placeholder" />
                      </div>
                      <div class="feature-content">
                          <h3>Balení</h3>
                          <p class="">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                              Mauris vulputate sit amet nisl sit amet luctus. Morbi<br />
                              consequat pretium turpis, vitae faucibus mi interdum vitae.<br />
                              Quisque quis imperdiet lorem.
                          </p>
                      </div>
                  </div>
                  <div class="feature-w-image">
                      <div class="feature-content">
                          <h3>Materiál</h3>
                          <p class="">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                              Mauris vulputate sit amet nisl sit amet luctus. Morbi<br />
                              consequat pretium turpis, vitae faucibus mi interdum vitae.<br />
                              Quisque quis imperdiet lorem.
                          </p>
                      </div>
                      <div class="feature-image">
                          <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="placeholder" />
                      </div>
                  </div>
              </div>
          </article>`;
}

function insertArticleAfterElement(selector, content) {
  var element = $(selector);
  if (element.length) {
    element.after(content);
  }
}
