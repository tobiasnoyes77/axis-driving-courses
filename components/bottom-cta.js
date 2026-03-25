// Shared Bottom CTA Banner Component
// Usage: <script src="components/bottom-cta.js"></script>

(function() {
  const ctaHTML = `
  <div class="bottom-cta">
    <div class="bottom-cta-inner">
      <h2>Ready to Become a <span>Confident Driver?</span></h2>
      <div class="bottom-cta-actions">
        <a href="index.html#courses" class="btn-primary">
          View Our Courses
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="contact.html" class="btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Contact Us
        </a>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', ctaHTML);
})();
