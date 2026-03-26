// Shared Navigation Component
// Usage: <script src="components/nav.js"></script>
// Optional: set data-active on the script tag to highlight active nav link
// e.g. <script src="components/nav.js" data-active="about"></script>

(function() {
  const script = document.currentScript;
  const active = script ? script.getAttribute('data-active') : null;

  // Determine if we're on the index page (links use # instead of index.html#)
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

  const coursesHref = isIndex ? '#courses' : 'index.html#courses';
  const logoHref = isIndex ? '#' : 'index.html';
  const contactMobileHref = isIndex ? '#contact' : 'contact.html';

  function activeClass(name) {
    return active === name ? ' class="active"' : '';
  }

  const navHTML = `
  <nav id="navbar">
    <a href="${logoHref}" class="nav-logo">
      <img src="images/logo.webp" alt="Axis Driving Courses" />
    </a>
    <ul class="nav-links">
      <li class="has-dropdown">
        <a href="${coursesHref}">Courses <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
        <ul class="nav-dropdown">
          <li><a href="driver-improvement-course.html">8 Hour Driver Improvement</a></li>
          <li><a href="radep-course.html">12 Hour RADEP</a></li>
          <li><a href="drivers-manual-course.html">8 Hour Driver Manual / Re-Examination</a></li>
          <li><a href="teen-behind-the-wheel.html">Behind-the-Wheel</a></li>
          <li><a href="private-driving-lessons.html">Private Lessons</a></li>
        </ul>
      </li>
      <li><a href="about.html"${activeClass('about')}>About</a></li>
      <li><a href="blog.html"${activeClass('blog')}>Blog</a></li>
      <li><a href="contact.html"${activeClass('contact')}>Contact</a></li>
      <li><a href="tel:+18046010480" class="nav-cta">(804) 601-0480</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <a href="#" class="mobile-dropdown-toggle" onclick="toggleMobileSub(event)">Courses <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></a>
    <div class="mobile-sub" id="mobileSub">
      <a href="driver-improvement-course.html" onclick="toggleMenu()">8 Hour Driver Improvement</a>
      <a href="radep-course.html" onclick="toggleMenu()">12 Hour RADEP</a>
      <a href="drivers-manual-course.html" onclick="toggleMenu()">8 Hour Driver Manual / Re-Examination</a>
      <a href="teen-behind-the-wheel.html" onclick="toggleMenu()">Behind-the-Wheel</a>
      <a href="private-driving-lessons.html" onclick="toggleMenu()">Private Lessons</a>
    </div>
    <a href="about.html" onclick="toggleMenu()">About</a>
    <a href="blog.html" onclick="toggleMenu()">Blog</a>
    <a href="${contactMobileHref}" onclick="toggleMenu()">Contact</a>
    <a href="tel:+18046010480" class="mobile-cta" onclick="toggleMenu()">(804) 601-0480</a>
  </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
