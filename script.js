function addToCart(productName) {
    alert(productName + " has been added to your cart!");
  }
  <div class="faq">
    <button class="faq-question">Question here <span>+</span></button>
    <div class="faq-answer">
        <p>Answer here</p>
    </div>
</div>
document.addEventListener('DOMContentLoaded', function() {
  function addIcon(elementId, iconUrl) {
      const link = document.getElementById(elementId);
      const icon = document.createElement('img');
      icon.src = iconUrl;
      icon.alt = '';
      icon.style.width = '20px';
      icon.style.height = '20px';
      icon.style.verticalAlign = 'middle';
      icon.style.marginRight = '5px';
      link.prepend(icon);
  }