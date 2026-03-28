// Shared Footer Component
// Usage: <script src="components/footer.js"></script>

(function() {
  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <a href="index.html" class="footer-logo">
        <img src="images/logo.webp" alt="Axis Driving Courses" />
      </a>
      <div class="footer-center">
        &copy; 2026 Axis Driving Courses. All rights reserved. &nbsp;&bull;&nbsp; 555 Belaire Ave #210, Chesapeake, VA 23320
      </div>
      <div class="footer-right">
        <a href="tel:+18046010480">(804) 601-0480</a>
      </div>
    </div>
  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
