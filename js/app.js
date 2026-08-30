// ==========================================================
// SUNFEED ECOSOLUTIONS - MAIN APPLICATION LOGIC
// ==========================================================

let currentPage = 'home';
let heroInterval = null;
let heroSlideIndex = 0;
let testimonialInterval = null;
let testimonialIndex = 0;
let bannerDismissed = false;
let mobileMenuOpen = false;

// ==========================================================
// INITIALIZATION
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initScrollProgress();
  initNavScroll();
  initStickyBar();
  initAdvisoryBanner();
  renderPage('home');

  // Modal close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // Escape key for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeImageModal();
      document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    }
  });

  // ROI Estimator button
  document.getElementById('btn-roi-estimator')?.addEventListener('click', () => openModal('roi-modal'));
  document.getElementById('btn-ai-visualizer')?.addEventListener('click', () => openModal('ai-modal'));

  // Mobile menu toggle
  document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileMenu);
});

// ==========================================================
// NAVIGATION
// ==========================================================
function navigateTo(page, subSection) {
  currentPage = page;
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Render page content
  setTimeout(() => {
    renderPage(page);
    lucide.createIcons();
    initScrollAnimations();

    if (subSection) {
      setTimeout(() => {
        const el = document.getElementById(subSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, 50);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================
// SCROLL PROGRESS BAR
// ==========================================================
function initScrollProgress() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = progress + '%';
  });
}

// ==========================================================
// NAVBAR SCROLL EFFECT
// ==========================================================
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ==========================================================
// STICKY MOBILE BAR
// ==========================================================
function initStickyBar() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('sticky-mobile-bar');
    if (window.scrollY > 300 && currentPage !== 'contact') {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  });
}

// ==========================================================
// ADVISORY BANNER
// ==========================================================
function initAdvisoryBanner() {
  window.addEventListener('scroll', () => {
    if (bannerDismissed || currentPage === 'contact') return;
    if (window.scrollY > 1200) {
      document.getElementById('advisory-banner').classList.remove('hidden');
    }
  });
}

function dismissAdvisory() {
  bannerDismissed = true;
  document.getElementById('advisory-banner').classList.add('hidden');
}

// ==========================================================
// DROPDOWN MENUS
// ==========================================================
function showDropdown(name) {
  const menu = document.getElementById('dropdown-' + name);
  if (menu) menu.classList.add('show');
}

function hideDropdown(name) {
  const menu = document.getElementById('dropdown-' + name);
  if (menu) menu.classList.remove('show');
}

// ==========================================================
// MOBILE MENU
// ==========================================================
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  if (mobileMenuOpen) {
    menu.classList.add('open');
    icon.setAttribute('data-lucide', 'x');
  } else {
    menu.classList.remove('open');
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  menu.classList.remove('open');
  icon.setAttribute('data-lucide', 'menu');
  lucide.createIcons();
}

// ==========================================================
// MODALS
// ==========================================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Focus trap
    setTimeout(() => {
      const focusable = modal.querySelector('input, button, select, textarea');
      if (focusable) focusable.focus();
    }, 50);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================
// ROI CALCULATOR
// ==========================================================
function calculateROI() {
  const qty = parseInt(document.getElementById('roi-quantity').value) || 100;
  const watt = parseInt(document.getElementById('roi-wattage').value) || 30;
  const hours = parseInt(document.getElementById('roi-hours').value) || 10;
  const rate = parseFloat(document.getElementById('roi-rate').value) || 8;

  const dailyKWh = (qty * watt * hours) / 1000;
  const annualKWh = dailyKWh * 365;
  const annualSavings = annualKWh * rate;
  const fiveYearSavings = annualSavings * 5;

  const results = document.getElementById('roi-results');
  results.classList.remove('hidden');
  results.innerHTML = `
    <h4>Estimated Solar Savings</h4>
    <p><strong>Daily Energy Offset:</strong> ${dailyKWh.toFixed(1)} kWh</p>
    <p><strong>Annual Energy Savings:</strong> ${annualKWh.toFixed(0).toLocaleString()} kWh</p>
    <p><strong>Annual Cost Savings:</strong> ₹${annualSavings.toFixed(0).toLocaleString()}</p>
    <p><strong>5-Year Savings:</strong> ₹${fiveYearSavings.toFixed(0).toLocaleString()}</p>
    <p style="margin-top:8px;font-size:11px;color:#6B7280;">*Estimates based on grid replacement. Actual savings depend on site conditions and tariff structure.</p>
  `;
}

// ==========================================================
// AI LAYOUT CALCULATOR
// ==========================================================
function calculateAILayout() {
  const length = parseInt(document.getElementById('ai-length').value) || 500;
  const spacing = parseInt(document.getElementById('ai-spacing').value) || 30;
  const area = document.getElementById('ai-area').value;

  const poles = Math.ceil(length / spacing);
  const areaLabels = { road: 'Village Road', highway: 'Highway', campus: 'Campus', junction: 'Junction' };

  const results = document.getElementById('ai-results');
  results.classList.remove('hidden');
  results.innerHTML = `
    <h4>Layout Estimate: ${areaLabels[area]}</h4>
    <p><strong>Road/Area Length:</strong> ${length}m</p>
    <p><strong>Recommended Poles:</strong> ${poles} units</p>
    <p><strong>Pole Spacing:</strong> ${spacing}m</p>
    <p><strong>Recommended Wattage:</strong> ${area === 'highway' || area === 'junction' ? '40W LED' : '30W LED'}</p>
    <p><strong>Battery:</strong> LiFePO4 ${area === 'highway' ? '60Ah' : '40Ah'} / 12.8V</p>
    <p style="margin-top:8px;font-size:11px;color:#6B7280;">*This is a preliminary estimate. A formal site survey is recommended for accurate BOQ.</p>
  `;

  document.getElementById('ai-request-survey').classList.remove('hidden');
}

// ==========================================================
// HERO CAROUSEL
// ==========================================================
function initHeroCarousel() {
  if (heroInterval) clearInterval(heroInterval);
  heroSlideIndex = 0;
  updateHeroSlide();

  heroInterval = setInterval(() => {
    heroSlideIndex = (heroSlideIndex + 1) % HERO_SLIDES.length;
    updateHeroSlide();
  }, 5000);
}

function updateHeroSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const textEl = document.getElementById('hero-text-content');
  const slide = HERO_SLIDES[heroSlideIndex];

  slides.forEach((s, i) => s.classList.toggle('active', i === heroSlideIndex));
  dots.forEach((d, i) => d.classList.toggle('active', i === heroSlideIndex));

  if (textEl) {
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(16px)';
    setTimeout(() => {
      textEl.innerHTML = `
        <h1>${slide.title} <span class="highlight">${slide.highlight}</span></h1>
        <p>${slide.description}</p>
      `;
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
    }, 200);
  }
}

// ==========================================================
// TESTIMONIAL CAROUSEL
// ==========================================================
function initTestimonialCarousel() {
  if (testimonialInterval) clearInterval(testimonialInterval);
  testimonialIndex = 0;
  updateTestimonial();

  const container = document.getElementById('testimonial-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
    container.addEventListener('mouseleave', () => {
      testimonialInterval = setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
        updateTestimonial();
      }, 7000);
    });
  }

  testimonialInterval = setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
    updateTestimonial();
  }, 7000);
}

function updateTestimonial() {
  const card = document.getElementById('testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  const t = TESTIMONIALS[testimonialIndex];

  if (card) {
    card.style.opacity = '0';
    setTimeout(() => {
      card.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <i data-lucide="quote" style="width:32px;height:32px;color:#FECACA;"></i>
          <span style="font-size:10px;font-weight:700;background:#FEF3C7;color:#92400E;padding:2px 10px;border-radius:999px;">Sample Testimonial</span>
        </div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-footer">
          <div>
            <div class="testimonial-author">${t.author}</div>
            <div class="testimonial-role">${t.role} • ${t.location}</div>
          </div>
        </div>
      `;
      card.style.opacity = '1';
      lucide.createIcons();
    }, 150);
  }

  dots.forEach((d, i) => d.classList.toggle('active', i === testimonialIndex));
}

function setTestimonial(idx) {
  testimonialIndex = idx;
  updateTestimonial();
}

// ==========================================================
// FAQ ACCORDION
// ==========================================================
function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  const isOpen = el.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));

  if (!isOpen) {
    el.classList.add('open');
    answer.classList.add('open');
  }
  lucide.createIcons();
}

// ==========================================================
// FULLSCREEN IMAGE MODAL
// ==========================================================
function openImageModal(src, alt) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('image-modal-img');
  if (modal && img) {
    img.src = src;
    img.alt = alt || 'Full view';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close image modal on overlay click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('image-modal');
  if (modal && modal.classList.contains('open')) {
    if (e.target === modal || e.target.closest('#image-modal') && !e.target.closest('img') && !e.target.closest('.modal-close')) {
      closeImageModal();
    }
  }
});

// ==========================================================
// GALLERY ACCORDION TOGGLE
// ==========================================================
function toggleGallery(btn) {
  const accordion = btn.nextElementSibling;
  const chevron = btn.querySelector('[data-lucide="chevron-down"]');
  if (!accordion) return;

  const isOpen = accordion.style.display !== 'none';
  accordion.style.display = isOpen ? 'none' : 'block';
  if (chevron) {
    chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
  }
  // Re-render icons for newly visible content
  if (!isOpen) lucide.createIcons();
}

// ==========================================================
// SCROLL ANIMATIONS - SHINE ON SCROLL EFFECT
// ==========================================================
function initScrollAnimations() {
  // Use setTimeout to ensure DOM is fully rendered
  setTimeout(() => {
    // Remove shine-on-scroll from solution cards to prevent CSS animations
    // from creating stacking contexts that break backface-visibility / 3D flip
    document.querySelectorAll('.solution-card.shine-on-scroll').forEach(card => {
      card.classList.remove('shine-on-scroll');
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Optional: unobserve after animation completes
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with shine-on-scroll class
    const elements = document.querySelectorAll('.shine-on-scroll');
    console.log('Found shine-on-scroll elements:', elements.length);
    elements.forEach(element => {
      observer.observe(element);
    });

    // Add click flip functionality for mobile
    document.querySelectorAll('.benefit-card, .solution-card').forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
  }, 100);
}
