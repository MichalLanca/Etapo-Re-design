function createNewsletterContent() {
  return `
    <div class="newsletter">
        <div class="news-container">
            <h2 class="news-header">
                Buďte u všeho s námi.
            </h2>
            <p>
                Nenech si ujít veškeré novinky, tipy a především doskladnění produktů.
            </p>
            <form action="" method="post">
                <input type="email" name="email" placeholder="Zadejte svůj email" required>
                <input type="submit" value="Staňte se součástí komunity">
            </form>
        </div>
    </div>`;
}

function insertNewsletterBeforeFooter(selector, content) {
  var footer = $(selector);
  if (footer.length) {
    $(content).insertBefore(footer);
  }
}
