// ==========================================================
// SUNFEED ECOSOLUTIONS - PAGE RENDERER
// ==========================================================

function renderPage(page) {
  const main = document.getElementById('main-content');

  // Clear intervals
  if (heroInterval) { clearInterval(heroInterval); heroInterval = null; }
  if (testimonialInterval) { clearInterval(testimonialInterval); testimonialInterval = null; }

  switch (page) {
    case 'home': main.innerHTML = renderHomePage(); initHeroCarousel(); initTestimonialCarousel(); break;
    case 'about': main.innerHTML = renderAboutPage(); break;
    case 'solutions': main.innerHTML = renderSolutionsPage(); break;
    case 'government': main.innerHTML = renderGovernmentPage(); break;
    case 'clients': main.innerHTML = renderClientsPage(); break;
    case 'technology': main.innerHTML = renderTechnologyPage(); break;
    case 'leadership': main.innerHTML = renderLeadershipPage(); break;
    case 'quality': main.innerHTML = renderQualityPage(); break;
    case 'careers': main.innerHTML = renderCareersPage(); break;
    case 'faq': main.innerHTML = renderFAQPage(); break;
    case 'certifications': main.innerHTML = renderCertificationsPage(); break;
    case 'contact': main.innerHTML = renderContactPage(); break;
    default: main.innerHTML = renderHomePage(); initHeroCarousel(); initTestimonialCarousel();
  }

  main.classList.remove('page-enter');
  void main.offsetWidth; // Trigger reflow
  main.classList.add('page-enter');
}

// ==========================================================
// HOME PAGE
// ==========================================================
function renderHomePage() {
  return `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-slides">
        ${HERO_SLIDES.map((s, i) => `
          <div class="hero-slide ${i === 0 ? 'active' : ''}">
            <img src="${s.image}" alt="${s.title}" ${i === 0 ? '' : 'loading="lazy"'} />
          </div>
        `).join('')}
      </div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text" id="hero-text-content" style="transition: opacity 0.4s ease, transform 0.4s ease;">
            <h1>${HERO_SLIDES[0].title} <span class="highlight">${HERO_SLIDES[0].highlight}</span></h1>
            <p>${HERO_SLIDES[0].description}</p>
          </div>
        </div>
      </div>
      <div class="hero-dots">
        ${HERO_SLIDES.map((_, i) => `<div class="hero-dot ${i === 0 ? 'active' : ''}"></div>`).join('')}
      </div>
    </section>

    <!-- Why Sunfeed -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="shield-check"></i> Proven Turnkey Delivery</div>
          <h2>Why State Agencies & Enterprises Partner with Sunfeed</h2>
          <p>Incorporated in 2016 (CIN: U40300HR2016PTC058410), Sunfeed Ecosolutions is a premier solar EPC delivering utility-grade solar public lighting, high-mast illumination towers, and remote IoT telemetry across India.</p>
        </div>
        <div class="grid-4">
          <div class="benefit-card shine-on-scroll">
            <div class="benefit-card-inner">
              <!-- Front Side - Logo Only -->
              <div class="benefit-card-front">
                <img src="images/govt-institute2.png" alt="Government Approved" class="benefit-logo" loading="lazy">
              </div>
              <!-- Back Side - Content -->
              <div class="benefit-card-back">
                <h3>Government-Approved EPC Expertise</h3>
                <p><strong>Turnkey solar lighting EPC solutions</strong> for state agencies, backed by proven experience across <strong>public-sector projects</strong> and large-scale installations nationwide.</p>
              </div>
            </div>
          </div>

          <div class="benefit-card shine-on-scroll">
            <div class="benefit-card-inner">
              <!-- Front Side - Logo Only -->
              <div class="benefit-card-front">
                <img src="images/life2.png" alt="LiFePO4 Battery" class="benefit-logo" loading="lazy">
              </div>
              <!-- Back Side - Content -->
              <div class="benefit-card-back">
                <h3>Advanced LiFePO₄ Battery Systems</h3>
                <p>High-performance <strong>lithium iron phosphate</strong> battery systems engineered for <strong>2,500+ cycles</strong>, ensuring long operational life with <strong>2–3 days backup power</strong> even in the most demanding conditions.</p>
              </div>
            </div>
          </div>

          <div class="benefit-card shine-on-scroll">
            <div class="benefit-card-inner">
              <!-- Front Side - Logo Only -->
              <div class="benefit-card-front">
                <img src="images/smart2.png" alt="Smart IoT" class="benefit-logo" loading="lazy">
              </div>
              <!-- Back Side - Content -->
              <div class="benefit-card-back">
                <h3>Smart IoT Monitoring Platform</h3>
                <p><strong>Real-time 4G cloud monitoring</strong> tracks battery status, charging efficiency, and energy performance with <strong>automatic fault alerts</strong> delivered through our intelligent IoT connectivity platform.</p>
              </div>
            </div>
          </div>

          <div class="benefit-card shine-on-scroll">
            <div class="benefit-card-inner">
              <!-- Front Side - Logo Only -->
              <div class="benefit-card-front">
                <img src="images/amc2.png" alt="O&M Support" class="benefit-logo" loading="lazy">
              </div>
              <!-- Back Side - Content -->
              <div class="benefit-card-back">
                <h3>Comprehensive O&M Support</h3>
                <p><strong>Dedicated 5-year AMC</strong> program with preventive servicing, <strong>48-hour emergency response</strong>, district-level service vans, and comprehensive long-term project maintenance assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section section-white" id="services">
      <div class="container">
        <div class="section-top">
          <div class="section-header" style="margin-bottom:0">
            <div class="badge"><i data-lucide="sun"></i> Turnkey Solutions</div>
            <h2>Our 6 Core Engineering Solutions</h2>
            <p>Complete renewable energy infrastructure with technical specifications, remote monitoring, and long-term maintenance support.</p>
          </div>
        </div>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;">
          <!-- Solar Street Light -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/solarstreet.png" alt="Solar Street Light" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">Solar Street Lighting</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="sun" style="width:20px;height:20px;"></i>
                  <h3>Solar Street Light Specifications</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>Solar PV:</span><strong>100W–900W</strong></div>
                  <div class="spec-row"><span>LED Wattage:</span><strong>20W–150W</strong></div>
                  <div class="spec-row"><span>Battery:</span><strong>LiFePO₄ 20Ah–60Ah</strong></div>
                  <div class="spec-row"><span>Pole Height:</span><strong>7m–12m Galvanized</strong></div>
                  <div class="spec-row"><span>Lighting Hours:</span><strong>10-12 hrs/night</strong></div>
                  <div class="spec-row"><span>Backup:</span><strong>2-3 days</strong></div>
                  <div class="spec-row"><span>Monitoring:</span><strong>4G GPS RMS</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>

          <!-- Solar High Mast -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/solarhigh.png" alt="Solar High Mast" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">Solar High Mast</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="tower-control" style="width:20px;height:20px;"></i>
                  <h3>Solar High Mast Specifications</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>Mast Height:</span><strong>9m–12m</strong></div>
                  <div class="spec-row"><span>LED Lights:</span><strong>4-8 units (50W-150W)</strong></div>
                  <div class="spec-row"><span>Solar Capacity:</span><strong>1kWp–2.5kWp</strong></div>
                  <div class="spec-row"><span>Battery:</span><strong>LiFePO₄ High Capacity</strong></div>
                  <div class="spec-row"><span>Coverage:</span><strong>Wide-area illumination</strong></div>
                  <div class="spec-row"><span>Structure:</span><strong>Hot-dip galvanized steel</strong></div>
                  <div class="spec-row"><span>Applications:</span><strong>Highways, parking, industrial</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>

          <!-- Solar PV -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/solarpv.png" alt="Solar PV Plant" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">Solar PV Plants</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="zap" style="width:20px;height:20px;"></i>
                  <h3>Solar PV Specifications</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>Capacity:</span><strong>1kWp–20MW+</strong></div>
                  <div class="spec-row"><span>Type:</span><strong>Rooftop & Ground-mounted</strong></div>
                  <div class="spec-row"><span>Grid:</span><strong>On-Grid, Off-Grid, Hybrid</strong></div>
                  <div class="spec-row"><span>Storage:</span><strong>Battery backup available</strong></div>
                  <div class="spec-row"><span>Sectors:</span><strong>Commercial, Industrial, Govt</strong></div>
                  <div class="spec-row"><span>Partners:</span><strong>HIMURJA & state agencies</strong></div>
                  <div class="spec-row"><span>Turnkey:</span><strong>Supply, install, commission</strong></div>
                  <div class="spec-row"><span>Support:</span><strong>Long-term O&M</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>

          <!-- Battery Storage -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/batterystorage.png" alt="Battery Storage" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">Battery Storage Systems</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="battery-charging" style="width:20px;height:20px;"></i>
                  <h3>Battery Storage Specifications</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>Technology:</span><strong>Lithium Iron Phosphate</strong></div>
                  <div class="spec-row"><span>Capacity:</span><strong>5kWh–100kWh+</strong></div>
                  <div class="spec-row"><span>Cycle Life:</span><strong>4,000–6,000+ cycles</strong></div>
                  <div class="spec-row"><span>BMS:</span><strong>Intelligent monitoring & balancing</strong></div>
                  <div class="spec-row"><span>Protection:</span><strong>Multi-level safety systems</strong></div>
                  <div class="spec-row"><span>Communication:</span><strong>CAN/RS485, remote monitoring</strong></div>
                  <div class="spec-row"><span>Applications:</span><strong>Residential, commercial, industrial</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>

          <!-- Remote Monitoring System -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/rms.png" alt="Remote Monitoring System" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">Remote Monitoring (RMS)</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="activity" style="width:20px;height:20px;"></i>
                  <h3>RMS Features & Capabilities</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>GPS Tracking:</span><strong>Real-time location</strong></div>
                  <div class="spec-row"><span>Light Status:</span><strong>ON/OFF monitoring</strong></div>
                  <div class="spec-row"><span>Battery Monitor:</span><strong>Voltage & SOC tracking</strong></div>
                  <div class="spec-row"><span>Charging:</span><strong>Solar charging status</strong></div>
                  <div class="spec-row"><span>Fault Alerts:</span><strong>Automatic alarm system</strong></div>
                  <div class="spec-row"><span>Platform:</span><strong>Web + Mobile app</strong></div>
                  <div class="spec-row"><span>Communication:</span><strong>GSM/4G wireless</strong></div>
                  <div class="spec-row"><span>Reports:</span><strong>Location-wise analytics</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>

          <!-- AMC / O&M Maintenance -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/factory_new.png" alt="AMC O&M Maintenance" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">CORE INFRASTRUCTURE</span>
                  <h3 class="solution-title">AMC / O&M Support</h3>
                  <p class="solution-hint">Hover to view technical specifications</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <i data-lucide="wrench" style="width:20px;height:20px;"></i>
                  <h3>Maintenance & Support Services</h3>
                </div>
                <div class="spec-content">
                  <div class="spec-row"><span>Maintenance:</span><strong>Preventive & corrective</strong></div>
                  <div class="spec-row"><span>Inspection:</span><strong>Regular system checks</strong></div>
                  <div class="spec-row"><span>Fault Detection:</span><strong>Troubleshooting & repair</strong></div>
                  <div class="spec-row"><span>Spare Parts:</span><strong>Replacement support</strong></div>
                  <div class="spec-row"><span>Monitoring:</span><strong>Performance tracking</strong></div>
                  <div class="spec-row"><span>Response:</span><strong>Rapid breakdown service</strong></div>
                  <div class="spec-row"><span>Duration:</span><strong>Long-term AMC contracts</strong></div>
                  <div class="spec-row"><span>Uptime:</span><strong>Maximum availability assurance</strong></div>
                </div>
                <button type="button" class="btn-outline btn-sm full-width" onclick="navigateTo('contact')" style="margin-top:12px;">Request Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header text-center" style="max-width:640px;margin:0 auto 56px;">
          <div class="badge"><i data-lucide="shield-check"></i> Disciplined Execution</div>
          <h2>Turnkey Execution Methodology</h2>
          <p>Professional project execution from survey through long-term maintenance.</p>
        </div>
        
        <div class="grid-3" style="gap:32px;">
          <!-- Step 1: Survey & Design -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/factory_ASSEMBLY_image.png" alt="Factory Assembly" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">STEP 01</span>
                  <h3 class="solution-title">Survey & Sizing Design</h3>
                  <p class="solution-hint">Hover to view details</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <div class="step-number">01</div>
                  <h3>Survey & Sizing Design</h3>
                </div>
                <div class="spec-content" style="text-align:left;">
                  <p style="font-size:13px;line-height:1.7;color:var(--slate);">
                    Site illumination analysis (lux mapping), geographical shading assessment, and optimal sizing of solar PV wattage and LiFePO4 battery capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Assembly & Installation -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/INSTALLATION & PROJECT EXECUTION TEAM_image.png" alt="Installation & Project Execution" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">STEP 02</span>
                  <h3 class="solution-title">Assembly & Installation</h3>
                  <p class="solution-hint">Hover to view details</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <div class="step-number">02</div>
                  <h3>Assembly & Installation</h3>
                </div>
                <div class="spec-content" style="text-align:left;">
                  <p style="font-size:13px;line-height:1.7;color:var(--slate);">
                    Precision battery pack assembly, hot-dip galvanized pole erection, civil foundation casting, and wiring with strict safety standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Testing & Telemetry -->
          <div class="solution-card shine-on-scroll">
            <div class="solution-card-inner">
              <div class="solution-card-front">
                <img src="images/QUALITY ASSURANCE_image.png" alt="Quality Assurance & Testing" class="solution-image" loading="lazy">
                <div class="solution-overlay">
                  <span class="solution-badge">STEP 03</span>
                  <h3 class="solution-title">Testing & 4G Telemetry</h3>
                  <p class="solution-hint">Hover to view details</p>
                </div>
              </div>
              <div class="solution-card-back">
                <div class="spec-header">
                  <div class="step-number">03</div>
                  <h3>Testing & 4G Telemetry</h3>
                </div>
                <div class="spec-content" style="text-align:left;">
                  <p style="font-size:13px;line-height:1.7;color:var(--slate);">
                    Joint nodal agency inspection, insulation testing, and activation of 4G cloud telemetry for real-time asset health monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Logo Grid -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header text-center" style="max-width:640px;margin:0 auto 40px;">
          <div class="badge"><i data-lucide="handshake"></i> Trusted Partners</div>
          <h3 style="font-size:24px;font-weight:800;">Government Clients & Partners</h3>
        </div>
        <div class="grid-4" style="gap:16px;">
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/breda_logo.png" alt="BREDA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;padding:8px;background:#F8FAFC;border-radius:8px;">
            <div style="font-size:13px;font-weight:700;">BREDA</div>
            <div style="font-size:11px;color:var(--muted);">Bihar</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/himurja_logo.png" alt="HIMURJA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">HIMURJA</div>
            <div style="font-size:11px;color:var(--muted);">Himachal Pradesh</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/hareda_logo.png" alt="HAREDA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">HAREDA</div>
            <div style="font-size:11px;color:var(--muted);">Haryana</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/treda_logo.png" alt="TREDA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">TREDA</div>
            <div style="font-size:11px;color:var(--muted);">Tripura</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/ureda_logo.png" alt="UREDA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">UREDA</div>
            <div style="font-size:11px;color:var(--muted);">Uttarakhand</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/indian_oil_iocl_logo.png" alt="IOCL" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">IOCL</div>
            <div style="font-size:11px;color:var(--muted);">PSU</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/l&t_logo.png" alt="L&T" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">L&T</div>
            <div style="font-size:11px;color:var(--muted);">Corporate</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/bccl_logo.png" alt="BCCL" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
            <div style="font-size:13px;font-weight:700;">BCCL</div>
            <div style="font-size:11px;color:var(--muted);">PSU</div>
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u1.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u2.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u3.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u4.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u5.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u6.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u7.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
          <div style="padding:16px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);text-align:center;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <img src="images/u8.png" alt="Client" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
          </div>
        </div>
        <div style="text-align:center;margin-top:24px;">
          <button type="button" class="btn-ghost" onclick="navigateTo('clients')">View All Clients & Partners <i data-lucide="arrow-right"></i></button>
        </div>

        <!-- State-wise Operations Map -->
        <div class="state-map-section">
          <div class="section-header text-center" style="max-width:640px;margin:0 auto 28px;">
            <div class="badge"><i data-lucide="map-pin"></i> Active Presence</div>
            <h3 style="font-size:24px;font-weight:800;">State-wise Project Operations</h3>
            <p style="font-size:13px;color:var(--muted);">Currently executing solar infrastructure projects across multiple Indian states through government nodal agency partnerships.</p>
          </div>
          <div class="state-map-wrapper scroll-scale">
            <img src="images/state_wise_map.png" alt="Sunfeed Ecosolutions — State-wise Project Operations Map across India" loading="lazy">
            <div class="state-map-caption">
              <i data-lucide="map-pin"></i>
              <span>Active operations in Bihar, Haryana, Himachal Pradesh, Uttarakhand & Tripura</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications on Home -->
    ${renderCertificationsSection()}

    <!-- Contact Section -->
    <section class="section section-warm" style="background-image:url('images/contact_bg.png');background-size:cover;background-position:center bottom;background-repeat:no-repeat;min-height:600px;">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h3 style="font-size:22px;font-weight:800;color:#0F172A;margin-bottom:16px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">Get in Touch</h3>
            <p style="font-size:15px;color:#1E293B;font-weight:600;line-height:1.7;margin-bottom:32px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">Our project desk is available for BOQ estimations, site feasibility assessments, compliance documentation, and formal tender inquiries.</p>
           
            <div class="contact-info-item" style="margin-bottom:28px;">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="phone"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">LANDLINE</span>
                <a href="tel:+911244072847" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">+91-124-4072847</a>
              </div>
            </div>
            <div class="contact-info-item" style="margin-bottom:28px;">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="mail"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">OFFICIAL EMAIL</span>
                <a href="mailto:info.sunfeed@gmail.com" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">info.sunfeed@gmail.com</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="help-circle"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">SUPPORT & QUERIES</span>
                <a href="mailto:support@sunfeed.in" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">support@sunfeed.in</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="map-pin"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">CORPORATE OFFICE</span>
                <span style="font-size:15px;color:#1E293B;font-weight:600;line-height:1.6;text-shadow:0 1px 2px rgba(255,255,255,0.8);">${COMPANY.address}</span>
              </div>
            </div>
          </div>
          <div>
            ${renderContactForm('full')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// ABOUT PAGE
// ==========================================================
function renderAboutPage() {
  return `
    ${renderBanner('About Sunfeed Ecosolutions', 'Established in 2016, Sunfeed is a dedicated renewable energy and solar infrastructure enterprise providing turnkey engineering, supply, installation, and long-term project support across India.', 'Corporate Overview & History', 'Company', 'images/about_banner.png')}
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="building"></i> Company Overview</div>
          <h2>About Sunfeed Ecosolutions India Pvt. Ltd.</h2>
        </div>
        <div class="grid-2" style="gap:48px;">
          <div>
            <p style="font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:16px;">
              Sunfeed Ecosolutions India Pvt. Ltd. is a renewable-energy and solar infrastructure company focused on delivering dependable solar solutions for government, institutional, infrastructure and community projects.
            </p>
            <p style="font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:16px;">
              The company's capabilities include solar street lighting, solar high-mast lighting, solar PV systems, lithium battery-based solutions, remote monitoring, installation, testing, commissioning and project support.
            </p>
            <p style="font-size:14px;color:var(--muted);line-height:1.8;">
              Sunfeed's approach combines appropriate technology, quality components, professional field execution and project-focused coordination to deliver reliable renewable-energy infrastructure.
            </p>
          </div>
          <div>
            <div style="padding:24px;background:var(--bg-warm);border-radius:var(--radius-lg);border:1px solid var(--border-warm);">
              <h4 style="font-size:14px;font-weight:700;margin-bottom:16px;">Company Details</h4>
              <div style="display:flex;flex-direction:column;gap:12px;font-size:13px;">
                <div><strong>Legal Name:</strong> ${COMPANY.name}</div>
                <div><strong>Established:</strong> ${COMPANY.established}</div>
                <div><strong>CIN:</strong> ${COMPANY.cin}</div>
                <div><strong>GSTIN:</strong> ${COMPANY.gstin}</div>
                <div><strong>Corporate Office:</strong> ${COMPANY.address}</div>
                <div><strong>Phone:</strong> ${COMPANY.phone}</div>
                <div><strong>Email:</strong> ${COMPANY.email}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Sunfeed Pillars -->
        <div style="margin-top:64px;">
          <div class="section-header">
            <div class="badge"><i data-lucide="shield-check"></i> Core Strengths</div>
            <h2>8 Pillars of Sunfeed's Approach</h2>
          </div>
          ${renderPillarsSection()}
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// SOLUTIONS PAGE — Detailed with unique content per solution
// ==========================================================
function renderSolutionsPage() {
  const solutions = getSolutionsData();
  return `
    <!-- Solutions Banner -->
    <div class="solutions-banner">
      <div class="container solutions-container">
        <div class="solutions-left">
          <div class="solutions-badge">WHAT WE DELIVER</div>
          <h1 class="solutions-headline">
            Solar solutions <span class="red-text">engineered</span> for every scale
          </h1>
          <p class="solutions-subheadline">
            From street-level lighting to multi-megawatt power plants, each system is designed, procured and installed by our in-house EPC team — never subcontracted out.
          </p>
        </div>
        <div class="solutions-right">
          <div class="solutions-visual">
            <div class="visual-card card-1"><div class="card-icon"><i data-lucide="sun"></i></div><div class="card-label">Street Lighting</div></div>
            <div class="visual-card card-2"><div class="card-icon"><i data-lucide="zap"></i></div><div class="card-label">Solar PV</div></div>
            <div class="visual-card card-3"><div class="card-icon"><i data-lucide="battery-charging"></i></div><div class="card-label">Battery Storage</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky solution nav tabs -->
    <div class="sol-tab-bar" id="sol-tab-bar">
      <div class="container">
        <div class="sol-tabs-scroll">
          ${solutions.map((s, i) => `<button type="button" class="sol-tab${i === 0 ? ' active' : ''}" data-target="sol-${s.id}" onclick="scrollToSolution('sol-${s.id}')"><i data-lucide="${s.icon}"></i><span>${s.shortName}</span></button>`).join('')}
        </div>
      </div>
    </div>

    <!-- Detailed Sections -->
    ${solutions.map((s, i) => `
    <section class="sol-detail-section ${i % 2 === 0 ? 'section-white' : 'section-warm'}" id="sol-${s.id}">
      <div class="container">
        <!-- Section header -->
        <div class="sol-section-header">
          <div class="sol-number">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <div class="badge"><i data-lucide="${s.icon}"></i> ${s.badge}</div>
            <h2 class="sol-section-title">${s.title}</h2>
          </div>
        </div>

        <!-- Hero image + overview -->
        <div class="sol-hero-grid">
          <div class="sol-hero-img-wrap">
            <img src="${s.image}" alt="${s.title}" loading="lazy" onclick="openImageModal('${s.image}','${s.title}')">
            ${s.image2 ? `<img src="${s.image2}" alt="${s.title} diagram" loading="lazy" class="sol-hero-img-secondary" onclick="openImageModal('${s.image2}','${s.title} — Diagram')">` : ''}
          </div>
          <div class="sol-hero-text">
            <p class="sol-overview">${s.overview}</p>
            ${s.highlights.map(h => `<div class="sol-highlight-item"><i data-lucide="check-circle" style="width:18px;height:18px;color:#16A34A;flex-shrink:0;"></i><span>${h}</span></div>`).join('')}
            <button type="button" class="btn-primary" onclick="navigateTo('contact')" style="margin-top:20px;">Get a Quote <i data-lucide="arrow-right"></i></button>
          </div>
        </div>

        <!-- Specs table -->
        <div class="sol-specs-card">
          <h3><i data-lucide="clipboard-list" style="width:20px;height:20px;"></i> Technical Specifications</h3>
          <div class="sol-specs-grid">
            ${s.specs.map(sp => `<div class="sol-spec-item"><span class="sol-spec-label">${sp.label}</span><span class="sol-spec-value">${sp.value}</span></div>`).join('')}
          </div>
        </div>

        <!-- Applications + Benefits -->
        <div class="sol-two-col">
          <div class="sol-col-card">
            <h3><i data-lucide="target" style="width:18px;height:18px;color:#D42027;"></i> Key Applications</h3>
            <ul class="sol-app-list">
              ${s.applications.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
          <div class="sol-col-card">
            <h3><i data-lucide="trending-up" style="width:18px;height:18px;color:#D42027;"></i> Benefits & Advantages</h3>
            <ul class="sol-app-list sol-benefits-list">
              ${s.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>

        ${s.howItWorks ? `
        <!-- How It Works -->
        <div class="sol-how-it-works">
          <h3><i data-lucide="settings" style="width:18px;height:18px;color:#D42027;"></i> How It Works</h3>
          <div class="sol-steps-row">
            ${s.howItWorks.map((step, si) => `
            <div class="sol-step-card">
              <div class="sol-step-num">${si + 1}</div>
              <h4>${step.title}</h4>
              <p>${step.desc}</p>
            </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </section>
    `).join('')}

    <!-- CTA Section -->
    <section class="section section-warm">
      <div class="container" style="text-align:center;max-width:700px;margin:0 auto;">
        <div class="badge"><i data-lucide="phone-call"></i> Ready to Start?</div>
        <h2 style="margin:16px 0;">Let's Engineer Your Solar Project</h2>
        <p style="color:var(--muted);margin-bottom:24px;">Submit your project requirements and our engineering team will provide a detailed feasibility assessment, BOQ, and competitive proposal within 48 hours.</p>
        <button type="button" class="btn-primary" onclick="navigateTo('contact')">Submit Project RFP <i data-lucide="arrow-right"></i></button>
      </div>
    </section>
  `;
}

// ==========================================================
// SOLUTIONS DATA — Rich unique content for each solution
// ==========================================================
function getSolutionsData() {
  return [
    {
      id: 'street-lighting',
      shortName: 'Street Lighting',
      title: 'Solar Street Lighting Systems',
      icon: 'sun',
      badge: 'Core Infrastructure',
      image: 'images/solarstreet.png',
      image2: 'images/solar_street_light_image.png',
      overview: 'Solar street lighting systems are self-contained, off-grid luminaires powered by photovoltaic panels and backed by lithium iron phosphate (LiFePO₄) battery storage. Each unit operates autonomously with dusk-to-dawn automation, eliminating grid dependency and recurring electricity costs. Sunfeed designs, supplies, installs and commissions these systems for state nodal agencies, gram panchayats, highway corridors and urban municipalities across India. With over 58,000 systems deployed under MGSSLY and other government schemes, our street lights are engineered for Indian climatic conditions — from the extreme heat of Bihar to the cold-altitude terrain of Himachal Pradesh.',
      highlights: [
        'Fully autonomous off-grid operation with dusk-to-dawn automation',
        'LiFePO₄ batteries provide 2–3 days backup even during consecutive cloudy days',
        '4G GPS-enabled Remote Monitoring System (RMS) for real-time asset tracking',
        'Hot-dip galvanized steel poles (IS 2062 / IS 4759) with 25+ year structural life',
        'MNRE benchmark compliant — meets Ministry specifications for government tenders',
        '58,000+ units deployed across Bihar, Haryana, Himachal Pradesh and more',
      ],
      specs: [
        { label: 'Solar Panel', value: '100W – 900W Mono PERC' },
        { label: 'LED Luminaire', value: '20W – 150W (Bridgelux / Lumileds chip)' },
        { label: 'Battery', value: 'LiFePO₄ 12.8V, 20Ah – 60Ah' },
        { label: 'Pole Height', value: '7m – 12m Hot-dip Galvanized' },
        { label: 'Lighting Duration', value: '10 – 12 hours per night' },
        { label: 'Backup Autonomy', value: '2 – 3 consecutive rainy days' },
        { label: 'Charge Controller', value: 'MPPT with overcharge protection' },
        { label: 'Monitoring', value: '4G LTE / GPS RMS with cloud dashboard' },
        { label: 'Lumen Output', value: '130 – 160 lm/W high-efficiency LEDs' },
        { label: 'Operating Temp', value: '-10°C to +60°C' },
        { label: 'Protection Rating', value: 'IP65 luminaire, IP67 battery enclosure' },
      ],
      applications: [
        'Village roads and gram panchayat pathways under MGSSLY and state solar schemes',
        'National and state highways — median and shoulder lighting for road safety',
        'Urban municipality streets, parks, and pedestrian zones',
        'Institutional campuses — schools, hospitals, government offices',
        'Railway station approach roads and bus depot perimeters',
        'Border area and defense establishment peripheral lighting',
      ],
      benefits: [
        'Zero electricity bills — operates entirely on solar energy',
        'Rapid deployment — no trenching, cabling, or grid connection required',
        'Low maintenance — LiFePO₄ batteries last 5–7 years with minimal upkeep',
        'Environmentally sustainable — reduces carbon emissions by ~1.5 tons/unit/year',
        'Improves community safety — well-lit roads reduce accidents and crime',
        'Government subsidy eligible under MNRE and state renewable energy programs',
      ],
      howItWorks: [
        { title: 'Solar Charging', desc: 'During daylight hours, the mono-crystalline PV panel converts sunlight into DC electricity. The MPPT charge controller regulates voltage and current to optimally charge the LiFePO₄ battery pack.' },
        { title: 'Energy Storage', desc: 'The lithium iron phosphate battery stores harvested solar energy with over 95% round-trip efficiency. Built-in BMS manages cell balancing, temperature protection, and deep-discharge prevention.' },
        { title: 'Dusk-to-Dawn Lighting', desc: 'At sunset, an intelligent photosensor triggers the LED luminaire. Adaptive dimming profiles reduce power after midnight to extend backup autonomy while maintaining adequate illumination.' },
        { title: 'Remote Monitoring', desc: 'Each unit transmits real-time data — battery SoC, charging current, GPS location, and fault alerts — via 4G LTE to a centralized cloud dashboard accessible by state nodal agencies.' },
      ],
    },
    {
      id: 'high-mast',
      shortName: 'High Mast',
      title: 'Solar High Mast Lighting Systems',
      icon: 'tower-control',
      badge: 'Wide-Area Illumination',
      image: 'images/solarhigh.png',
      image2: 'images/solar_high_mast_light_system_diagram.png',
      overview: 'Solar high mast lighting towers provide elevated, wide-area illumination for locations where conventional street lights cannot offer sufficient coverage. These 9m to 12m polygonal steel structures support 4 to 8 multi-directional LED floodlights, each powered by a roof-mounted solar array and high-capacity LiFePO₄ battery bank. Sunfeed\'s high mast systems are engineered to withstand wind speeds up to 150 km/h (as per IS 875 Part 3) and are deployed at highway junctions, toll plazas, railway crossings, public squares, industrial yards, and defense installations. The entire assembly is hot-dip galvanized to IS 2629 / IS 4759 for corrosion protection and a structural life exceeding 25 years.',
      highlights: [
        '9m–12m octagonal/polygonal mast with motorized lowering mechanism',
        '4–8 LED floodlights (50W–150W each) for 360° illumination coverage',
        'High-capacity LiFePO₄ battery bank (100Ah–200Ah) for extended autonomy',
        'Wind-rated structural design (up to 150 km/h per IS 875 Part 3)',
        'Hot-dip galvanized to IS 2629 — minimum 86 micron zinc coating',
        'Ideal for junctions, toll plazas, stadiums, industrial campuses, and border areas',
      ],
      specs: [
        { label: 'Mast Height', value: '9m – 12m Polygonal Steel' },
        { label: 'LED Floodlights', value: '4 – 8 units × 50W–150W each' },
        { label: 'Total Lumens', value: '40,000 – 120,000 lm coverage' },
        { label: 'Solar Array', value: '1 kWp – 2.5 kWp Mono PERC' },
        { label: 'Battery Bank', value: 'LiFePO₄ 100Ah – 200Ah, 48V' },
        { label: 'Wind Rating', value: 'Up to 150 km/h (IS 875 Pt 3)' },
        { label: 'Galvanization', value: 'Hot-dip IS 2629 (≥86 μm)' },
        { label: 'Foundation', value: 'M20 RCC with anchor bolt cage' },
        { label: 'Lowering System', value: 'Motorized winch / manual' },
        { label: 'Coverage Area', value: '1,500 – 3,000 sq.m per mast' },
        { label: 'Protection', value: 'IP66 floodlights, IP67 battery' },
      ],
      applications: [
        'Highway junctions, interchanges, and cloverleaf intersections',
        'Toll plazas and weigh bridges on national/state highways',
        'Railway level crossings and station approach areas',
        'Public squares, parade grounds, and festival venues',
        'Industrial yards, logistics parks, and warehouse perimeters',
        'Sports facilities, stadiums, and large parking areas',
      ],
      benefits: [
        'Single mast replaces 6–10 conventional street lights — reducing civil costs',
        'Wide-area 360° illumination eliminates dark pockets at critical junctions',
        'Off-grid operation — no recurring electricity or cabling expenditure',
        'Motorized lowering system enables safe, ground-level maintenance',
        'Corrosion-resistant galvanized structure withstands harsh environments',
        'Compliant with Central and State Public Works Department specifications',
      ],
      howItWorks: [
        { title: 'Elevated Solar Array', desc: 'A high-efficiency mono PERC solar array is mounted at the top of the mast using a tilt-adjustable frame, capturing maximum irradiance throughout the day and feeding the charge controller.' },
        { title: 'Battery Bank Charging', desc: 'A high-capacity 48V LiFePO₄ battery bank stores energy in a weather-sealed ground-level enclosure. The intelligent BMS balances cells and protects against overcharge, deep discharge, and thermal runaway.' },
        { title: 'Multi-Directional Lighting', desc: 'At dusk, 4–8 LED floodlights mounted on the crown assembly illuminate a coverage area of 1,500–3,000 sq.m. Programmable dimming profiles optimize energy use during low-traffic hours.' },
        { title: 'Lowering for Maintenance', desc: 'The motorized winch mechanism allows the entire crown (lights + solar panels) to be lowered to ground level for safe, quick maintenance without scaffolding or aerial platforms.' },
      ],
    },
    {
      id: 'solar-pv',
      shortName: 'Solar PV',
      title: 'Solar PV / Power Plant Systems',
      icon: 'zap',
      badge: 'Clean Power Generation',
      image: 'images/solarpv.png',
      image2: 'images/solar_plan_diagram_image.png',
      overview: 'Sunfeed designs and delivers turnkey solar photovoltaic power plants ranging from small 1 kWp rooftop installations to large multi-megawatt ground-mounted utility-scale projects. Our systems use Tier-1 mono PERC modules with 21%+ cell efficiency paired with high-performance string or central inverters and optional LiFePO₄ battery hybrid storage. We handle the complete project lifecycle — site assessment, system design, structural engineering, procurement, installation, grid synchronization, DISCOM net-metering approvals, testing, and commissioning. Our portfolio spans commercial, industrial, institutional, and government facilities, with active projects executed through state agencies like HIMURJA, HAREDA, and BREDA.',
      highlights: [
        'Turnkey EPC from 1 kWp rooftop to 20+ MW ground-mount utility scale',
        'Tier-1 mono PERC modules with 21%+ cell efficiency',
        'On-Grid, Off-Grid, and Hybrid configurations with optional battery storage',
        'Complete DISCOM coordination for net-metering and grid synchronization',
        'Real-time generation monitoring via cloud-based portal and mobile app',
        'Projects executed under HIMURJA, HAREDA, BREDA, and KUSUM schemes',
      ],
      specs: [
        { label: 'Capacity Range', value: '1 kWp – 20+ MW' },
        { label: 'Module Technology', value: 'Mono PERC 540W – 580W (Tier-1)' },
        { label: 'Cell Efficiency', value: '21% – 22.5%' },
        { label: 'Inverter', value: 'String / Central (ABB, Growatt, Huawei)' },
        { label: 'Mounting', value: 'Rooftop / Ground-mount / Carport' },
        { label: 'Grid Type', value: 'On-Grid, Off-Grid, Hybrid' },
        { label: 'Storage Option', value: 'LiFePO₄ 5 kWh – 500 kWh' },
        { label: 'Degradation', value: '< 0.55% per year (25-year linear)' },
        { label: 'Monitoring', value: 'WiFi / 4G cloud portal + mobile app' },
        { label: 'Standards', value: 'IEC 61215, IEC 61730, MNRE specs' },
        { label: 'Net Metering', value: 'Full DISCOM coordination' },
      ],
      applications: [
        'Commercial and industrial rooftop installations for captive consumption',
        'Government buildings, schools, hospitals, and public offices',
        'Ground-mounted solar farms on barren or non-agricultural land',
        'Agricultural solar pump stations under PM-KUSUM component-A and component-C',
        'EV charging station solar canopy and carport structures',
        'Hybrid solar + diesel replacement for telecom towers and remote sites',
      ],
      benefits: [
        'Reduces electricity costs by 40–70% through captive solar generation',
        'Net metering provides bill credits for excess power exported to the grid',
        'Payback period of 3–5 years with 25+ years of free generation thereafter',
        'Carbon footprint reduction — 1 MW offsets ~1,400 tons CO₂ annually',
        'Government subsidies and accelerated depreciation tax benefits available',
        'Increases property value and demonstrates corporate sustainability commitment',
      ],
      howItWorks: [
        { title: 'Site Assessment & Design', desc: 'Our engineering team conducts shadow analysis, structural load assessment, and energy yield simulation (PVsyst/Helioscope) to design an optimally tilted and spaced array layout.' },
        { title: 'Procurement & Installation', desc: 'Tier-1 modules, inverters, cables, and mounting structures are procured through approved supply chains. Certified technicians install the system following IEC and MNRE installation guidelines.' },
        { title: 'Grid Sync & Net Metering', desc: 'After installation, we coordinate with the local DISCOM for bi-directional meter installation, safety inspection, and grid synchronization approval for net-metering benefits.' },
        { title: 'Monitoring & O&M', desc: 'A cloud-based monitoring portal tracks daily generation, performance ratio, and system health. Our O&M team provides periodic cleaning, thermal scanning, and preventive maintenance.' },
      ],
    },
    {
      id: 'battery-storage',
      shortName: 'Battery Storage',
      title: 'LiFePO₄ Battery Storage Systems',
      icon: 'battery-charging',
      badge: 'Energy Storage',
      image: 'images/batterystorage.png',
      image2: 'images/life.png',
      overview: 'Lithium Iron Phosphate (LiFePO₄) battery technology is at the core of every Sunfeed solar deployment. Unlike conventional lead-acid batteries, LiFePO₄ cells deliver over 4,000 deep-discharge cycles, maintain stable voltage throughout discharge, and operate safely across a wide temperature range (-10°C to +60°C) without thermal runaway risk. Sunfeed assembles battery packs in-house at our Mandsaur facility with multi-tier BMS integration, ensuring cell-level balancing, overcurrent protection, and remote health monitoring. Our battery systems power solar street lights, high mast towers, telecom backup, EV charging buffers, and residential/commercial energy storage — from 5 kWh residential walls to 500+ kWh containerized industrial banks.',
      highlights: [
        'LiFePO₄ chemistry — inherently safe with zero thermal runaway risk',
        '4,000–6,000+ deep-discharge cycles at 80% DoD — 3× longer than lead-acid',
        'In-house pack assembly with multi-tier BMS at Mandsaur manufacturing facility',
        'Operating temperature range: -10°C to +60°C — ideal for Indian climatic extremes',
        'Scalable from 5 kWh residential to 500+ kWh industrial containerized banks',
        'Communication via CAN bus / RS485 / 4G for integration with RMS platforms',
      ],
      specs: [
        { label: 'Chemistry', value: 'Lithium Iron Phosphate (LiFePO₄)' },
        { label: 'Voltage', value: '12.8V / 25.6V / 48V / 51.2V packs' },
        { label: 'Capacity Range', value: '20Ah – 200Ah per module' },
        { label: 'Energy Range', value: '5 kWh – 500+ kWh scalable' },
        { label: 'Cycle Life', value: '4,000 – 6,000+ cycles @ 80% DoD' },
        { label: 'Round-trip Efficiency', value: '> 95%' },
        { label: 'BMS', value: 'Cell balancing, OVP, UVP, OCP, OTP' },
        { label: 'Communication', value: 'CAN bus / RS485 / 4G telemetry' },
        { label: 'Operating Temp', value: '-10°C to +60°C' },
        { label: 'Self-discharge', value: '< 3% per month' },
        { label: 'Enclosure', value: 'IP67 weather-sealed housing' },
      ],
      applications: [
        'Solar street light and high mast battery packs (12.8V – 48V)',
        'Residential energy storage walls for power backup and solar self-consumption',
        'Commercial and industrial peak-shaving and load-shifting systems',
        'Telecom tower backup replacing diesel generators',
        'EV charging station buffer storage for grid demand management',
        'Off-grid and micro-grid deployments in remote and rural areas',
      ],
      benefits: [
        '3× longer cycle life than lead-acid — dramatically lower lifetime cost',
        'Flat discharge curve maintains stable voltage throughout the cycle',
        'No acid, no fumes, no maintenance — environmentally friendly and safe',
        '70% lighter and 50% smaller than equivalent lead-acid capacity',
        'In-house assembly ensures quality control and customization flexibility',
        'Intelligent BMS enables remote health monitoring and predictive maintenance',
      ],
      howItWorks: [
        { title: 'Cell Selection & Grading', desc: 'Grade-A prismatic LiFePO₄ cells are incoming-inspected for capacity, internal resistance, and voltage consistency. Only matched cells are grouped into series/parallel configurations for optimal pack performance.' },
        { title: 'Pack Assembly & BMS', desc: 'Cells are assembled into packs with nickel bus-bar welding, temperature sensors, and a multi-tier BMS that handles cell balancing, overcurrent/overvoltage/under-voltage protection, and thermal management.' },
        { title: 'Testing & Certification', desc: 'Each pack undergoes charge-discharge cycling, short-circuit testing, insulation resistance measurement, and environmental stress screening before dispatch. Packs are certified to relevant IEC/BIS standards.' },
        { title: 'Deployment & Monitoring', desc: 'Packs are installed in IP67-rated enclosures at the deployment site. The BMS communicates battery health data — SoC, temperature, cycle count — to the centralized RMS cloud dashboard via 4G.' },
      ],
    },
    {
      id: 'remote-monitoring',
      shortName: 'RMS / IoT',
      title: 'Remote Monitoring Systems (RMS)',
      icon: 'activity',
      badge: 'IoT Telemetry',
      image: 'images/rms.png',
      image2: 'images/solar_mentoring_monitot_screen.png',
      overview: 'Sunfeed\'s 4G LTE-enabled Remote Monitoring System (RMS) provides state nodal agencies and project stakeholders with complete real-time visibility into the health and performance of every deployed solar asset. Each RMS unit is a compact GSM/4G IoT module embedded within the solar controller housing that transmits GPS location, battery state-of-charge, charging current, luminaire ON/OFF status, and fault alerts to a centralized cloud dashboard. The platform supports district-wise filtering, location-based mapping, automated alarm dispatch, and exportable analytics reports. This telemetry infrastructure is mandatory for BREDA (MGSSLY), HAREDA, and HIMURJA government projects, and Sunfeed\'s RMS is fully compliant with the technical specifications laid down by these agencies.',
      highlights: [
        '4G LTE / GSM wireless communication for nationwide coverage',
        'Real-time GPS tracking and geo-fencing for every solar asset',
        'Battery SoC, voltage, charging current, and temperature monitoring',
        'Automated fault alerts via SMS, email, and dashboard notifications',
        'Web dashboard + Android/iOS mobile app for field teams and management',
        'Fully compliant with BREDA, HAREDA, and HIMURJA RMS specifications',
      ],
      specs: [
        { label: 'Communication', value: '4G LTE / 2G GSM fallback' },
        { label: 'GPS', value: 'Multi-GNSS (GPS + GLONASS)' },
        { label: 'Data Points', value: 'Battery V, I, SoC, Temp, Light status' },
        { label: 'Transmission', value: 'Every 15 min (configurable 1–60 min)' },
        { label: 'Platform', value: 'Cloud SaaS — web + mobile app' },
        { label: 'Alerts', value: 'SMS, email, push notification' },
        { label: 'Geo-fencing', value: 'Tamper / relocation detection' },
        { label: 'Reports', value: 'Daily, weekly, monthly analytics (CSV/PDF)' },
        { label: 'API', value: 'REST API for third-party integration' },
        { label: 'Data Retention', value: '5+ years cloud storage' },
        { label: 'Power', value: 'Parasitic draw < 0.5W from solar system' },
        { label: 'Compliance', value: 'BREDA / HAREDA / HIMURJA specs' },
      ],
      applications: [
        'Solar street light fleet monitoring for state nodal agency dashboards',
        'High mast tower performance and fault tracking',
        'Solar PV plant generation monitoring and performance ratio analysis',
        'Battery health and degradation trend analysis over multi-year periods',
        'District-wise and gram panchayat-level project progress tracking',
        'Historical operational data analysis for system validation',
      ],
      benefits: [
        'Complete fleet visibility — monitor thousands of assets from a single dashboard',
        'Automated fault detection reduces downtime from days to hours',
        'GPS tracking prevents theft and detects unauthorized asset relocation',
        'Data-driven maintenance scheduling extends system life and reduces costs',
        'Exportable reports satisfy government audit and compliance requirements',
        'Mobile app empowers field technicians with location-specific diagnostics',
      ],
      howItWorks: [
        { title: 'IoT Module Embedding', desc: 'A compact 4G IoT module with GPS antenna is embedded in the solar charge controller housing during manufacturing. It draws less than 0.5W from the solar system and operates 24/7.' },
        { title: 'Data Collection', desc: 'The module samples battery voltage, charging current, SoC, temperature, and luminaire status every minute. Aggregated data packets are transmitted to the cloud server every 15 minutes via 4G LTE.' },
        { title: 'Cloud Processing', desc: 'The cloud platform processes incoming telemetry, runs anomaly detection algorithms, and triggers automated alerts for fault conditions — low battery, charging failure, light malfunction, or GPS tamper.' },
        { title: 'Dashboard & Reporting', desc: 'Stakeholders access a responsive web dashboard and mobile app with live maps, asset-level drill-down, district-wise filtering, trend charts, and exportable CSV/PDF reports for compliance audits.' },
      ],
    },
    {
      id: 'amc-maintenance',
      shortName: 'AMC / O&M',
      title: 'Annual Maintenance & O&M Services',
      icon: 'wrench',
      badge: 'Long-Term Support',
      image: 'images/factory_new.png',
      image2: 'images/MAINTENANCE  O&M_image.png',
      overview: 'Sunfeed provides structured Annual Maintenance Contracts (AMC) and Operations & Maintenance (O&M) services for solar infrastructure deployed across India. Our maintenance framework is designed for large-scale government projects where uptime guarantees, rapid response times, and documented compliance are critical. We operate district-level maintenance hubs with equipped service vans, trained field technicians, and pre-positioned spare parts inventories. The maintenance program covers preventive inspection schedules, corrective breakdown response, component replacement, RMS-driven predictive maintenance, and comprehensive documentation for state nodal agency audits. With 58,000+ solar assets under active monitoring, our O&M team ensures sustained performance throughout the project lifecycle.',
      highlights: [
        'District-level maintenance hubs with dedicated service vans and spare parts',
        '48-hour emergency response SLA for critical breakdown situations',
        'Preventive maintenance schedules — quarterly cleaning, annual inspection',
        'RMS-driven predictive maintenance using real-time battery and system data',
        'Component replacement support — panels, batteries, LEDs, controllers',
        'Comprehensive compliance documentation for government audit and reporting',
      ],
      specs: [
        { label: 'Contract Duration', value: '1 – 7 years (extendable)' },
        { label: 'Response Time', value: '< 48 hours for critical faults' },
        { label: 'Preventive Schedule', value: 'Quarterly cleaning, bi-annual checkup' },
        { label: 'Coverage', value: 'PV, battery, LED, controller, structure' },
        { label: 'Spare Inventory', value: 'District-level pre-positioned stock' },
        { label: 'Field Teams', value: 'Trained technicians with service vans' },
        { label: 'Monitoring', value: 'RMS-integrated fault-driven dispatch' },
        { label: 'Documentation', value: 'Digital work orders, photo evidence' },
        { label: 'Reporting', value: 'Monthly uptime and performance reports' },
        { label: 'Escalation', value: 'L1 Field → L2 District → L3 HQ' },
        { label: 'Compliance', value: 'BREDA / HAREDA / HIMURJA norms' },
        { label: 'Uptime Target', value: '> 95% fleet operational availability' },
      ],
      applications: [
        'Post-installation maintenance for government solar lighting projects',
        'Extended AMC for 58,000+ solar street lights across Bihar',
        'High mast tower maintenance including motorized crown lowering and inspection',
        'Solar PV plant O&M — panel cleaning, inverter health checks, DC string testing',
        'Battery health monitoring and proactive replacement scheduling',
        'Emergency rapid-response for storm damage, vandalism, or component failure',
      ],
      benefits: [
        'Guaranteed uptime SLA protects government project performance metrics',
        'Preventive approach extends asset life and reduces total cost of ownership',
        'RMS integration enables proactive maintenance before failures occur',
        'District-level hubs ensure quick response even in remote rural locations',
        'Digital documentation satisfies audit and compliance requirements seamlessly',
        'Single-vendor accountability — same team that installed also maintains',
      ],
      howItWorks: [
        { title: 'RMS Alert Triage', desc: 'The RMS platform continuously monitors all assets. When anomalies are detected (low battery, charging failure, light outage), automated work orders are generated and dispatched to the nearest district maintenance hub.' },
        { title: 'Field Dispatch', desc: 'A trained technician with a pre-stocked service van is dispatched to the site. The mobile app provides GPS navigation, asset history, fault diagnosis, and a digital work-order checklist.' },
        { title: 'Repair & Replacement', desc: 'On-site diagnostics confirm the fault. The technician performs the repair or component replacement, documents the activity with timestamped photographs, and updates the digital work order.' },
        { title: 'Verification & Reporting', desc: 'Post-repair, the RMS confirms the asset is back online and operating normally. Monthly reports summarizing uptime, interventions, and component replacements are submitted to the nodal agency.' },
      ],
    },
  ];
}

// ==========================================================
// GOVERNMENT PROJECTS PAGE
// ==========================================================
function renderGovernmentPage() {
  const projectGalleries = {
    'HAREDA': [
      { src: 'images/hareda_project_images_1.png', label: 'HAREDA Installation — Site 1' },
      { src: 'images/hareda_project_images_2.png', label: 'HAREDA Installation — Site 2' },
      { src: 'images/hareda_project_images_3.png', label: 'HAREDA Installation — Site 3' },
    ],
    'HIMURJA': [
      { src: 'images/himurja_project_images_1.png', label: 'HIMURJA Installation — Site 1' },
      { src: 'images/himurja_project_images_2.png', label: 'HIMURJA Installation — Site 2' },
      { src: 'images/himurja_project_images_3.png', label: 'HIMURJA Installation — Site 3' },
      { src: 'images/himurja_project_images_4.png', label: 'HIMURJA Installation — Site 4' },
    ],
  };

  return `
    ${renderBanner('Government & Institutional Solar Projects', 'Active solar implementation partner for state nodal agencies including BREDA (Bihar), HAREDA (Haryana), and HIMURJA (Himachal Pradesh).', 'State Nodal Operations', 'Projects', 'images/government_banner.jpeg')}

    <!-- State-wise Operations Map -->
    <section class="section section-warm" style="padding:48px 0;">
      <div class="container">
        <div class="section-header text-center" style="max-width:640px;margin:0 auto 28px;">
          <div class="badge"><i data-lucide="map-pin"></i> Geographic Footprint</div>
          <h3 style="font-size:24px;font-weight:800;">State-wise Project Operations Map</h3>
          <p style="font-size:13px;color:var(--muted);">Active solar infrastructure deployments under state nodal agency partnerships across India.</p>
        </div>
        <div class="state-map-wrapper map-wide scroll-scale" style="margin:0 auto;">
          <img src="images/state_wise_map.png" alt="Sunfeed Ecosolutions — State-wise Project Operations Map across India" loading="lazy">
          <div class="state-map-caption">
            <i data-lucide="map-pin"></i>
            <span>BREDA (Bihar) · HAREDA (Haryana) · HIMURJA (Himachal Pradesh) · UREDA (Uttarakhand) · TREDA (Tripura)</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:32px;">
          ${STATE_AGENCIES.map(a => {
            const gallery = projectGalleries[a.code] || [];
            return `
            <div style="padding:32px;border-radius:var(--radius-xl);background:white;border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);">
              <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:16px;">
                ${a.code === 'BREDA' || a.code === 'HIMURJA' || a.code === 'HAREDA' ? `<img src="images/${a.code.toLowerCase()}_logo.png" alt="${a.code}" loading="lazy" style="height:40px;object-fit:contain;">` : ''}
                <span style="font-size:16px;font-weight:800;color:#C81E1E;">${a.code}</span>
                <span style="font-size:12px;color:var(--muted);">•</span>
                <span style="font-size:13px;font-weight:600;">${a.state}</span>
                <span style="font-size:11px;padding:2px 10px;border-radius:999px;background:rgba(220,38,38,0.08);color:#C81E1E;font-weight:600;">${a.status}</span>
              </div>
              <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;">${a.project}</h3>
              <p style="font-size:13px;color:var(--muted);margin-bottom:16px;line-height:1.6;">${a.description}</p>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:16px;">
                <div style="font-size:12px;"><strong>Quantity:</strong> ${a.quantity}</div>
                <div style="font-size:12px;"><strong>Year:</strong> ${a.year}</div>
                <div style="font-size:12px;"><strong>Districts:</strong> ${a.districts.join(', ')}</div>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:8px;">
                ${a.highlights.map(h => `<span style="font-size:11px;padding:4px 10px;border-radius:6px;background:#F0FDF4;color:#166534;font-weight:500;">${h}</span>`).join('')}
              </div>
              ${gallery.length > 0 ? `
              <div style="margin-top:20px;border-top:1px solid var(--border-warm);padding-top:16px;">
                <button type="button" onclick="toggleGallery(this)" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#C81E1E;cursor:pointer;background:none;border:none;padding:0;">
                  <i data-lucide="image" style="width:16px;height:16px;"></i>
                  Project Gallery (${gallery.length} images)
                  <i data-lucide="chevron-down" style="width:14px;height:14px;transition:transform 0.3s;"></i>
                </button>
                <div class="gallery-accordion" style="display:none;margin-top:16px;">
                  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
                    ${gallery.map(img => `
                      <div style="border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-warm);cursor:pointer;transition:all 0.25s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''" onclick="openImageModal('${img.src}','${img.label}')">
                        <img src="${img.src}" alt="${img.label}" loading="lazy" style="width:100%;height:140px;object-fit:cover;">
                        <div style="padding:8px;font-size:11px;color:var(--muted);">${img.label}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
              ` : ''}
            </div>
          `}).join('')}
        </div>
        <div style="text-align:center;margin-top:48px;">
          <button type="button" class="btn-primary" onclick="navigateTo('contact')">Submit Project Inquiry <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// CERTIFICATIONS SECTION (reusable)
// ==========================================================
function renderCertificationsSection() {
  return `
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="award"></i> Quality Assurance</div>
          <h2>Certifications & Registrations</h2>
          <p>ISO certified and professionally registered for solar energy solutions delivery.</p>
        </div>
        <div class="grid-3" style="gap:20px;">
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/ISO 90012015 – Quality Management System_certificate.png','ISO 9001:2015 Certificate')">
            <img src="images/ISO 90012015 – Quality Management System_certificate.png" alt="ISO 9001:2015" loading="lazy" style="width:100%;height:200px;object-fit:contain;background:#f8f8f8;padding:12px;">
            <div style="padding:14px;">
              <h3 style="font-size:14px;margin-bottom:4px;">ISO 9001:2015</h3>
              <p style="font-size:12px;color:var(--muted);">Quality Management System</p>
            </div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/Factory Licence – Haryana_certificate.png','Factory Licence – Haryana')">
            <img src="images/Factory Licence – Haryana_certificate.png" alt="Factory Licence" loading="lazy" style="width:100%;height:200px;object-fit:contain;background:#f8f8f8;padding:12px;">
            <div style="padding:14px;">
              <h3 style="font-size:14px;margin-bottom:4px;">Factory Licence</h3>
              <p style="font-size:12px;color:var(--muted);">Haryana — Valid up to Dec 2028</p>
            </div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/Import Export Code (IEC)_certificate.png','Import Export Code (IEC)')">
            <img src="images/Import Export Code (IEC)_certificate.png" alt="IEC Certificate" loading="lazy" style="width:100%;height:200px;object-fit:contain;background:#f8f8f8;padding:12px;">
            <div style="padding:14px;">
              <h3 style="font-size:14px;margin-bottom:4px;">Import Export Code (IEC)</h3>
              <p style="font-size:12px;color:var(--muted);">DGFT — IEC: AAWFS0001B</p>
            </div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/Trade Mark Registration_certificate.png','Trade Mark Registration')">
            <img src="images/Trade Mark Registration_certificate.png" alt="Trade Mark" loading="lazy" style="width:100%;height:200px;object-fit:contain;background:#f8f8f8;padding:12px;">
            <div style="padding:14px;">
              <h3 style="font-size:14px;margin-bottom:4px;">Trade Mark Registration</h3>
              <p style="font-size:12px;color:var(--muted);">Brand Identity Protection</p>
            </div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/UPSIC Registration_certificate.png','UPSIC Registration')">
            <img src="images/UPSIC Registration_certificate.png" alt="UPSIC" loading="lazy" style="width:100%;height:200px;object-fit:contain;background:#f8f8f8;padding:12px;">
            <div style="padding:14px;">
              <h3 style="font-size:14px;margin-bottom:4px;">UPSIC Registration</h3>
              <p style="font-size:12px;color:var(--muted);">Valid up to March 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// CLIENTS PAGE
// ==========================================================
function renderClientsPage() {
  return `
    ${renderBanner('Government & Institutional Clients', 'State nodal agency partnerships for large-scale renewable energy infrastructure across Bihar, Haryana, Himachal Pradesh, and more.', 'Verified Partners', 'Clients', 'images/clients.png')}

    <!-- Government Clients & Partners with Logos -->
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="building"></i> Trusted By</div>
          <h2>Government Clients & Partners</h2>
          <p>Partnering with state nodal agencies and leading public/private institutions across India.</p>
        </div>
        <div class="grid-4">
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/breda_logo.png" alt="BREDA" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">BREDA</h3>
            <p style="font-size:12px;color:var(--muted);">Bihar</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/himurja_logo.png" alt="HIMURJA" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">HIMURJA</h3>
            <p style="font-size:12px;color:var(--muted);">Himachal Pradesh</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/hareda_logo.png" alt="HAREDA" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">HAREDA</h3>
            <p style="font-size:12px;color:var(--muted);">Haryana</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/treda_logo.png" alt="TREDA" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">TREDA</h3>
            <p style="font-size:12px;color:var(--muted);">Tripura</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/ureda_logo.png" alt="UREDA" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">UREDA</h3>
            <p style="font-size:12px;color:var(--muted);">Uttarakhand</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/indian_oil_iocl_logo.png" alt="IOCL" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">IOCL</h3>
            <p style="font-size:12px;color:var(--muted);">PSU</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/l&t_logo.png" alt="L&T" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">L&T</h3>
            <p style="font-size:12px;color:var(--muted);">Corporate</p>
          </div>
          <div class="card" style="padding:24px;text-align:center;align-items:center;">
            <img src="images/bccl_logo.png" alt="BCCL" loading="lazy" style="height:60px;object-fit:contain;margin-bottom:12px;">
            <h3 style="font-size:16px;margin-bottom:4px;">BCCL</h3>
            <p style="font-size:12px;color:var(--muted);">PSU</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Agency Projects -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge green"><i data-lucide="briefcase"></i> Active Projects</div>
          <h2>State Nodal Agency Projects</h2>
        </div>
        <div class="grid-3">
          ${STATE_AGENCIES.map(a => `
            <div class="card" style="padding:28px;">
              <div>
                <div style="font-size:16px;font-weight:800;color:#C81E1E;margin-bottom:8px;">${a.code}</div>
                <h3 style="font-size:15px;margin-bottom:4px;">${a.name}</h3>
                <p style="font-size:12px;color:var(--muted);margin-bottom:12px;">${a.state} • State Nodal Agency</p>
                <p style="font-size:13px;color:var(--slate);margin-bottom:8px;"><strong>Project:</strong> ${a.project}</p>
                <p style="font-size:13px;color:var(--slate);"><strong>Scale:</strong> ${a.quantity}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- HAREDA Project Images -->
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="image"></i> Project Gallery</div>
          <h2>HAREDA — Haryana Project Images</h2>
          <p>Solar street lighting installations across Rewari, Panchkula, and Ambala districts.</p>
        </div>
        <div class="grid-3">
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/hareda_project_images_1.png','HAREDA Project 1')">
            <img src="images/hareda_project_images_1.png" alt="HAREDA Project 1" loading="lazy" style="width:100%;height:200px;object-fit:cover;">
            <div style="padding:12px;"><p style="font-size:12px;color:var(--muted);">HAREDA Installation — Site 1</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/hareda_project_images_2.png','HAREDA Project 2')">
            <img src="images/hareda_project_images_2.png" alt="HAREDA Project 2" loading="lazy" style="width:100%;height:200px;object-fit:cover;">
            <div style="padding:12px;"><p style="font-size:12px;color:var(--muted);">HAREDA Installation — Site 2</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/hareda_project_images_3.png','HAREDA Project 3')">
            <img src="images/hareda_project_images_3.png" alt="HAREDA Project 3" loading="lazy" style="width:100%;height:200px;object-fit:cover;">
            <div style="padding:12px;"><p style="font-size:12px;color:var(--muted);">HAREDA Installation — Site 3</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- BREDA Project Images -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="image"></i> Project Gallery</div>
          <h2>BREDA — Bihar Project Images</h2>
          <p>Solar street lighting installations across Bihar districts.</p>
        </div>
        <div class="grid-4">
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/b1.png','BREDA Project 1')">
            <img src="images/b1.png" alt="BREDA Project 1" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">BREDA Installation — Site 1</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/b2.png','BREDA Project 2')">
            <img src="images/b2.png" alt="BREDA Project 2" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">BREDA Installation — Site 2</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/b3.png','BREDA Project 3')">
            <img src="images/b3.png" alt="BREDA Project 3" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">BREDA Installation — Site 3</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/b4.png','BREDA Project 4')">
            <img src="images/b4.png" alt="BREDA Project 4" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">BREDA Installation — Site 4</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- HIMURJA Project Images -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="image"></i> Project Gallery</div>
          <h2>HIMURJA — Himachal Pradesh Project Images</h2>
          <p>High-altitude solar installations across Himachal Pradesh.</p>
        </div>
        <div class="grid-4">
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/himurja_project_images_1.png','HIMURJA Project 1')">
            <img src="images/himurja_project_images_1.png" alt="HIMURJA Project 1" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">HIMURJA — Site 1</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/himurja_project_images_2.png','HIMURJA Project 2')">
            <img src="images/himurja_project_images_2.png" alt="HIMURJA Project 2" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">HIMURJA — Site 2</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/himurja_project_images_3.png','HIMURJA Project 3')">
            <img src="images/himurja_project_images_3.png" alt="HIMURJA Project 3" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">HIMURJA — Site 3</p></div>
          </div>
          <div class="card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="openImageModal('images/himurja_project_images_4.png','HIMURJA Project 4')">
            <img src="images/himurja_project_images_4.png" alt="HIMURJA Project 4" loading="lazy" style="width:100%;height:180px;object-fit:cover;">
            <div style="padding:10px;"><p style="font-size:11px;color:var(--muted);">HIMURJA — Site 4</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    ${renderCertificationsSection()}
  `;
}

// ==========================================================
// TECHNOLOGY PAGE
// ==========================================================
function renderTechnologyPage() {
  return `
    ${renderBanner('Technology & Remote Monitoring Systems (RMS)', 'Real-time IoT telemetry, 4G LTE/GPRS cloud communication, LiFePO4 battery management systems (BMS), and precision optical engineering.', 'IoT Telemetry & Standards', 'Engineering', 'images/rms_pg.png')}
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="activity"></i> RMS Platform</div>
          <h2>Remote Monitoring System (RMS) Dashboard</h2>
          <p>Real-time 4G cloud telemetry providing complete visibility into distributed solar asset health, performance, and maintenance status.</p>
        </div>
        <div style="padding:32px;border-radius:var(--radius-xl);background:var(--bg-warm);border:1px solid var(--border-warm);margin-bottom:48px;">
          <div class="grid-4">
            <div style="text-align:center;">
              <div style="font-size:28px;font-weight:800;color:#C81E1E;">4G LTE</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px;">Communication</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:28px;font-weight:800;color:#C81E1E;">< 5m</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px;">GPS Accuracy</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:28px;font-weight:800;color:#C81E1E;">24/7</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px;">Cloud Monitoring</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:28px;font-weight:800;color:#C81E1E;">Auto</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px;">Fault Alerts</div>
            </div>
          </div>
        </div>

        <div class="section-header">
          <h2>Core Technology Stack</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px;margin-top:48px;">
          <!-- Solar PV Modules -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <img src="images/solarpv2.png" alt="Solar PV Modules" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">Solar PV Modules</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">High-efficiency monocrystalline and polycrystalline PV modules designed for reliable solar energy generation. Engineered for high energy yield, durability and long-term outdoor performance across utility, commercial and public infrastructure projects.</p>
            </div>
          </div>

          <!-- LED Luminaires -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
              <img src="images/led.png" alt="LED Luminaires" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">LED Luminaires</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">High-lumen optical LED luminaires delivering efficient, uniform illumination with efficacy of up to 140 lm/W. Designed with IP66-rated protection, robust outdoor construction and 50,000+ hours of operational life for reliable, low-maintenance lighting.</p>
            </div>
          </div>

          <!-- LiFePO₄ Batteries -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
              <img src="images/life.png" alt="LiFePO₄ Batteries" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">LiFePO₄ Batteries</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">High-performance Lithium Iron Phosphate (LiFePO₄) battery packs designed for reliable solar energy storage. With 3,000+ charge-discharge cycles, integrated Battery Management System (BMS) and strong thermal stability, these batteries deliver safe, durable and long-term performance.</p>
            </div>
          </div>

          <!-- MPPT Controllers -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
              <img src="images/mppt.png" alt="MPPT Controllers" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">MPPT Controllers</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">Intelligent MPPT charge controllers with up to 99% tracking efficiency, multi-stage charging and advanced battery protection for efficient and reliable solar energy management.</p>
            </div>
          </div>

          <!-- Galvanized Structures -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #30cfd0 0%, #330867 100%);">
              <img src="images/galvanized.png" alt="Galvanized Structures" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">Galvanized Structures</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">Hot-dip galvanized steel structures engineered for durability, corrosion resistance and high wind-load performance across solar lighting and PV installations.</p>
            </div>
          </div>

          <!-- IoT Telemetry -->
          <div class="card" style="padding:0;overflow:hidden;border-radius:var(--radius-lg);border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
            <div style="height:200px;overflow:hidden;background:linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
              <img src="images/iot.png" alt="IoT Telemetry" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:24px;">
              <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1E293B;">IoT Telemetry</h3>
              <p style="font-size:13px;line-height:1.7;color:#475569;">Smart 4G/GSM telemetry for real-time solar system monitoring, secure cloud communication, battery tracking and remote performance management through web and mobile dashboards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// PORTFOLIO PAGE
// ==========================================================
function renderPortfolioPage() {
  return `
    ${renderBanner('Project Portfolio & Field Deployments', 'Comprehensive gallery of commissioned and ongoing solar street lighting, high mast, and solar PV deployments across northern and eastern India.', 'Field Implementations', 'Projects')}
    <section class="section section-white">
      <div class="container">
        <div class="grid-3">
          ${STATE_AGENCIES.map(a => `
            <div class="card" style="padding:28px;">
              <div>
                <span style="font-size:11px;padding:3px 10px;border-radius:6px;background:rgba(220,38,38,0.08);color:#C81E1E;font-weight:600;">${a.status}</span>
                <h3 style="margin-top:12px;">${a.project}</h3>
                <p style="margin-top:8px;">${a.state} • ${a.code}</p>
                <p style="font-size:12px;color:var(--muted);margin-top:8px;">${a.quantity} • ${a.year}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:48px;">
          <p style="font-size:14px;color:var(--muted);margin-bottom:16px;">Additional project photography and site documentation available on request.</p>
          <button type="button" class="btn-primary" onclick="navigateTo('contact')">Request Detailed Portfolio <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// LEADERSHIP PAGE
// ==========================================================
function renderLeadershipPage() {
  const leaders = [
    {
      name: 'Paramvir Rana',
      designation: 'Director',
      image: 'images/paramvir.png',
      qualification: 'MBA',
      experience: '10 Years',
      summary: 'Provides overall leadership and strategic direction to Sunfeed Ecosolutions India Pvt. Ltd. Oversees key business, financial, operational and project-related decisions.',
      responsibilities: 'Strategic leadership, government project oversight, business development, stakeholder management, team leadership, financial & operational decisions, and driving long-term organizational growth.',
      achievements: 'Demonstrated strong leadership in business management, strategic planning, and organizational growth. Key role in managing government projects, project execution, and strengthening business relationships. Experience in strategic decision-making has contributed to strengthening project capabilities and overall growth.',
      vision: 'I envision Sunfeed becoming a trusted name in India\'s renewable-energy sector, recognized for reliable solar solutions, strong project execution and professional service. Our goal is to expand our presence across India, embrace new technologies and contribute meaningfully to the country\'s transition towards clean and sustainable energy.',
      message: 'At Sunfeed, we believe that successful renewable-energy projects are built on trust, quality and responsible execution. Our commitment is to understand the requirements of every project and deliver reliable solar solutions that create long-term value.'
    },
    {
      name: 'Aakriti Rana',
      designation: 'Director',
      image: 'images/akriti.png',
      qualification: 'MBA',
      experience: '10 Years',
      summary: 'Contributes to organizational development and people-focused initiatives. Brings strong expertise in communication, coordination, discipline, team engagement, and administration.',
      responsibilities: 'Organizational planning, effective team coordination, employee development, fostering positive work culture, enhancing operational efficiency, and supporting long-term growth initiatives.',
      achievements: 'Valuable professional experience from the education sector with strong expertise in communication, administration, coordination, and people management. Contributes to organizational development, employee engagement, team coordination, and maintaining a professional work environment.',
      vision: 'To build a responsible, innovative, and sustainable organization that contributes to India\'s transition towards clean and renewable energy. Creating meaningful environmental and social impact through quality solar solutions, strong teamwork, ethical business practices, and continuous improvement.',
      message: 'At Sunfeed, we believe that sustainable growth is built on responsibility, teamwork, innovation, and trust. Our goal is to contribute to a cleaner and greener future by promoting reliable renewable energy solutions while maintaining strong ethical and professional values.'
    }
  ];

  const teamMembers = [
    {
      name: 'Shambhu Jha',
      designation: 'Manager – Finance & Operation',
      image: 'images/shambhu.png',
      experience: '26 Years',
      summary: 'Oversees financial and accounting functions at Sunfeed. Manages taxation, statutory compliance, financial planning, MIS, and management reporting.',
      responsibilities: 'Finance & Accounts Management, Taxation & Statutory Compliance, MIS & Management Reporting, Financial Analysis & Decision Support, Project-Related Financial Coordination, Client Meetings & Relationship Coordination, Project Site Visits & Operational Support, Documentation & Commercial Review.',
      expertise: 'Financial planning, taxation, statutory compliance, management reporting, project coordination, client relationship management, problem solving, and handling critical assignments requiring financial expertise and timely decision-making.'
    },
    {
      name: 'Vishal Sehgal',
      designation: 'Sales & Marketing | Solar Projects & Field Operations',
      image: 'images/vishal_sehgal.png',
      experience: '10+ Years',
      summary: 'Experienced Sales & Marketing professional in the solar energy sector. Expertise in customer relationship management, business development, project coordination, and field-level solar installations.',
      responsibilities: 'Sales & Marketing of Solar Energy Solutions, Customer Relationship & Business Development, Himurja Project Handling, Solar Project Coordination, Field Installation & Site Work, Installation Supervision & Execution Support.',
      expertise: 'Complete solar project lifecycle knowledge — from customer interaction and project coordination to on-site installation, field supervision, and technical work. Hands-on approach to understanding customer requirements and practical field challenges.'
    },
    {
      name: 'Gaurav Thakur',
      designation: 'Accounts | Banking Operations | Administration',
      image: 'images/gaurav_thakur.png',
      experience: '12+ Years',
      summary: 'Key member responsible for managing accounts, banking-related activities, and day-to-day administrative operations.',
      responsibilities: 'Accounts Management & Financial Coordination, Banking & Bank-Related Work, Payments, Transactions & Financial Documentation, Office Administration & Daily Operations, Records & Documentation Management, Vendor & Office Coordination.',
      expertise: 'Strong financial coordination combined with efficient office administration. Manages accounting responsibilities, coordinates with banks and financial institutions, ensures financial and administrative processes are completed accurately and on time.'
    },
    {
      name: 'Quas Ahmad',
      designation: 'Project Management | Department Coordination',
      image: 'images/quas_ahmed.png',
      experience: '20+ Years',
      summary: 'Highly experienced professional in project management, departmental coordination, and operational activities. Key role in managing SUNFEED\'s projects across Bihar.',
      responsibilities: 'Bihar-Wide Solar Project Management, Project Planning & Execution, Departmental Work & Coordination, Government & Department-Related Processes, Project Documentation & Follow-up, Team & Field Coordination, Site & Project Monitoring.',
      expertise: 'Extensive understanding of project execution, coordination, documentation, and departmental processes. Handles projects efficiently from planning through implementation across multiple Bihar districts.'
    },
    {
      name: 'Rohit',
      designation: 'Plant Head | Lithium Battery Assembly & Operations',
      image: 'images/rohit.png',
      experience: '14+ Years',
      summary: 'Serves as Plant Head at SUNFEED. Responsible for overseeing plant operations and managing lithium battery assembly activities.',
      responsibilities: 'Plant Operations & Management, Lithium Battery Assembly, Battery Production & Process Management, Team Leadership & Workforce Management, Quality & Operational Supervision, Production Planning & Coordination.',
      expertise: 'Extensive hands-on experience in manufacturing and plant operations. Ensures battery-related processes are carried out efficiently, systematically, and with a strong focus on quality and operational discipline.'
    }
  ];

  return `
    ${renderBanner('Leadership & Our Team', 'Meet the leadership and professional team driving Sunfeed Ecosolutions\' mission of delivering reliable solar infrastructure across India.', 'Executive Leadership & Team', 'Company', 'images/about_banner.png')}

    <!-- Directors Section -->
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="crown"></i> Company Directors</div>
          <h2>Executive Leadership</h2>
          <p style="font-size:13px;color:var(--muted);">Hover or click on a card to learn more about our directors.</p>
        </div>
        <div class="grid-2" style="gap:32px;">
          ${leaders.map(l => `
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="${l.image}" alt="${l.name}" loading="lazy" />
                  <div class="flip-card-front-info">
                    <h3>${l.name}</h3>
                    <p class="flip-designation">${l.designation}</p>
                    <p class="flip-qualification">${l.qualification} • ${l.experience} Experience</p>
                    <p class="flip-summary">${l.summary}</p>
                    <div class="flip-hint"><i data-lucide="rotate-cw" style="width:14px;height:14px;"></i> Click to see details</div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-back-content">
                    <h3>${l.name}</h3>
                    <p class="flip-designation">${l.designation}</p>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="briefcase" style="width:14px;height:14px;"></i> Responsibilities</h4>
                      <p>${l.responsibilities}</p>
                    </div>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="trophy" style="width:14px;height:14px;"></i> Achievements</h4>
                      <p>${l.achievements}</p>
                    </div>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="eye" style="width:14px;height:14px;"></i> Vision</h4>
                      <p>${l.vision}</p>
                    </div>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="message-circle" style="width:14px;height:14px;"></i> Message</h4>
                      <p>${l.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="users"></i> Our Team</div>
          <h2>Professional Team</h2>
          <p style="font-size:13px;color:var(--muted);">Hover or click on a card to learn more about our team members.</p>
        </div>
        <div class="grid-3" style="gap:24px;">
          ${teamMembers.map(m => `
            <div class="flip-card flip-card-team" onclick="this.classList.toggle('flipped')">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="${m.image}" alt="${m.name}" loading="lazy" />
                  <div class="flip-card-front-info">
                    <h3>${m.name}</h3>
                    <p class="flip-designation">${m.designation}</p>
                    <p class="flip-qualification">${m.experience} Experience</p>
                    <p class="flip-summary">${m.summary}</p>
                    <div class="flip-hint"><i data-lucide="rotate-cw" style="width:14px;height:14px;"></i> Click for details</div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <div class="flip-card-back-content">
                    <h3>${m.name}</h3>
                    <p class="flip-designation">${m.designation}</p>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="briefcase" style="width:14px;height:14px;"></i> Responsibilities</h4>
                      <p>${m.responsibilities}</p>
                    </div>
                    <div class="flip-detail-section">
                      <h4><i data-lucide="star" style="width:14px;height:14px;"></i> Expertise</h4>
                      <p>${m.expertise}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// QUALITY PAGE
// ==========================================================
function renderQualityPage() {
  return `
    ${renderBanner('Why Sunfeed • Quality, Safety & Sustainability', 'Our 8 core competitive advantages, quality assurance protocol, safety protocols, and environmental commitment.', 'Pillars of Excellence', 'Company')}
    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <div class="badge"><i data-lucide="shield-check"></i> Competitive Advantages</div>
          <h2>8 Pillars of Sunfeed's Excellence</h2>
        </div>
        ${renderPillarsSection()}
      </div>
    </section>
  `;
}

// ==========================================================
// CAREERS PAGE
// ==========================================================
function renderCareersPage() {
  return `
    ${renderBanner('Careers at Sunfeed Ecosolutions', 'Build your career in renewable energy with opportunities across solar design, field engineering, IoT telemetry, quality assurance, and project management.', 'Join Our Mission', 'Careers')}
    <section class="section section-white">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${CAREERS.map(c => `
            <div style="padding:24px;border-radius:var(--radius-lg);background:white;border:1px solid var(--border-warm);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;">
              <div>
                <h3 style="font-size:16px;font-weight:700;margin-bottom:4px;">${c.title}</h3>
                <p style="font-size:12px;color:var(--muted);">${c.type} • ${c.location}</p>
                <p style="font-size:13px;color:var(--slate);margin-top:8px;">${c.desc}</p>
              </div>
              <button type="button" class="btn-outline" onclick="navigateTo('contact')">Apply / Inquire</button>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:48px;padding:24px;background:var(--bg-warm);border-radius:var(--radius-lg);border:1px solid var(--border-warm);text-align:center;">
          <p style="font-size:14px;color:var(--muted);margin-bottom:12px;">Don't see a matching role? Send us your resume for future opportunities.</p>
          <a href="mailto:info.sunfeed@gmail.com" class="btn-primary">Email Your Resume <i data-lucide="mail"></i></a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// FAQ PAGE
// ==========================================================
function renderFAQPage() {
  return `
    ${renderBanner('Frequently Asked Questions (FAQ)', 'Detailed answers regarding our turnkey solar lighting, remote monitoring, state nodal procedures, and maintenance support.', 'Knowledge Base', 'Support')}
    <section class="section section-white">
      <div class="container" style="max-width:800px;">
        ${FAQ_DATA.map(f => `
          <div class="faq-item">
            <button type="button" class="faq-question" onclick="toggleFAQ(this)">
              <span>${f.q}</span>
              <i data-lucide="chevron-down"></i>
            </button>
            <div class="faq-answer">${f.a}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// ==========================================================
// CERTIFICATIONS PAGE
// ==========================================================
function renderCertificationsPage() {
  return `
    ${renderBanner('Certifications & Statutory Registrations', 'Complete statutory compliance documentation, quality management certifications, and state nodal agency empanelment records.', 'Verified Credentials', 'Company', 'images/about_banner.png')}
    ${renderCertificationsSection()}
    <section class="section section-warm">
      <div class="container">
        <div class="section-header">
          <div class="badge green"><i data-lucide="shield-check"></i> Statutory Records</div>
          <h2>All Registrations</h2>
        </div>
        <div class="cert-grid">
          ${CERTIFICATIONS.map(c => `
            <div class="cert-card">
              <div class="cert-icon"><i data-lucide="shield-check"></i></div>
              <div>
                <h4>${c.title}</h4>
                <p>${c.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// CONTACT PAGE
// ==========================================================
function renderContactPage() {
  return `
    ${renderBanner('Contact Us & Project Consultation', 'Get in touch with our engineering team for technical queries, feasibility discussions, tender RFPs, and official corporate consultations.', 'Direct Inquiry & Corporate Office', 'Contact', 'images/contact.png')}
    <section class="section section-white" style="background-image:url('images/contact_bg.png');background-size:cover;background-position:center bottom;background-repeat:no-repeat;min-height:600px;">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h3 style="font-size:22px;font-weight:800;color:#0F172A;margin-bottom:16px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">Get in Touch</h3>
            <p style="font-size:15px;color:#1E293B;font-weight:600;line-height:1.7;margin-bottom:32px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">Our project desk is available for BOQ estimations, site feasibility assessments, compliance documentation, and formal tender inquiries.</p>
           
            <div class="contact-info-item" style="margin-bottom:28px;">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="phone"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">LANDLINE</span>
                <a href="tel:+911244072847" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">+91-124-4072847</a>
              </div>
            </div>
            <div class="contact-info-item" style="margin-bottom:28px;">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="mail"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">OFFICIAL EMAIL</span>
                <a href="mailto:info.sunfeed@gmail.com" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">info.sunfeed@gmail.com</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="help-circle"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">SUPPORT & QUERIES</span>
                <a href="mailto:support@sunfeed.in" style="font-size:16px;font-weight:700;color:#0F172A;text-shadow:0 1px 2px rgba(255,255,255,0.8);">support@sunfeed.in</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon" style="background:#FDECEC;color:#C41E2F;"><i data-lucide="map-pin"></i></div>
              <div>
                <span class="label" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#1E293B;display:block;margin-bottom:4px;text-shadow:0 1px 2px rgba(255,255,255,0.8);">CORPORATE OFFICE</span>
                <span style="font-size:15px;color:#1E293B;font-weight:600;line-height:1.6;text-shadow:0 1px 2px rgba(255,255,255,0.8);">${COMPANY.address}</span>
              </div>
            </div>
          </div>
          <div>
            ${renderContactForm('full')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================
// HELPER: PAGE BANNER
// ==========================================================
function renderBanner(title, subtitle, badge, category, bgImage) {
  return `
    <div class="page-banner${bgImage ? ' page-banner-img' : ''}" ${bgImage ? `style="background-image:url('${bgImage}');"` : ''}>
      <div class="banner-grid"></div>
      <div class="container" style="position:relative;z-index:10;">
        <div class="breadcrumb">
          <button type="button" onclick="navigateTo('home')"><i data-lucide="home"></i> Home</button>
          <i data-lucide="chevron-right"></i>
          ${category ? `<span>${category}</span><i data-lucide="chevron-right"></i>` : ''}
          <span class="current">${title}</span>
        </div>
        ${badge ? `<div class="banner-badge"><i data-lucide="shield-check"></i> ${badge}</div>` : ''}
        <h1>${title}</h1>
        <p class="banner-subtitle">${subtitle}</p>
      </div>
    </div>
  `;
}

// ==========================================================
// HELPER: 8 PILLARS SECTION
// ==========================================================
function renderPillarsSection(badge, heading) {
  return `
    <div class="pillars-layout">
      <div class="pillars-image-side">
        <img src="images/8_pillars image.png" alt="Sunfeed Workshop and Team" loading="lazy">
      </div>
      <div class="pillars-grid-side">
        ${WHY_SUNFEED.map((w, i) => `
          <div class="pillar-card">
            <span class="pillar-number">${String(i + 1).padStart(2, '0')}</span>
            <h3 class="pillar-title">${w.title}</h3>
            <p class="pillar-desc">${w.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================================
// HELPER: CONTACT FORM
// ==========================================================
function renderContactForm(variant) {
  return `
    <form onsubmit="handleContactSubmit(event)" style="padding:${variant === 'compact' ? '24px' : '32px'};border-radius:var(--radius-xl);background:white;border:1px solid var(--border-warm);box-shadow:var(--shadow-sm);">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:20px;">${variant === 'compact' ? 'Quick Inquiry' : 'Submit Project Inquiry / RFP'}</h3>
      <div class="form-row">
        <div class="form-group">
          <label for="cf-name">Full Name *</label>
          <input type="text" id="cf-name" required placeholder="Your full name" />
        </div>
        <div class="form-group">
          <label for="cf-org">Organization</label>
          <input type="text" id="cf-org" placeholder="Company / Agency name" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="cf-email">Email *</label>
          <input type="email" id="cf-email" required placeholder="you@example.com" />
        </div>
        <div class="form-group">
          <label for="cf-phone">Phone *</label>
          <input type="tel" id="cf-phone" required placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="cf-type">Project Type</label>
          <select id="cf-type">
            <option value="">Select project type</option>
            <option>Solar Street Lighting</option>
            <option>Solar High Mast Lighting</option>
            <option>Solar PV / Power Plant</option>
            <option>Battery Storage (LiFePO4)</option>
            <option>Remote Monitoring (RMS)</option>
            <option>AMC / O&M</option>
            <option>Other / General Inquiry</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cf-state">Target State</label>
          <select id="cf-state">
            <option value="">Select state</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
            <optgroup label="Union Territories">
              <option>Andaman & Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra & Nagar Haveli and Daman & Diu</option>
              <option>Delhi</option>
              <option>Jammu & Kashmir</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
            </optgroup>
          </select>
        </div>
      </div>
      ${variant !== 'compact' ? `
        <div class="form-row">
          <div class="form-group">
            <label for="cf-district">District</label>
            <input type="text" id="cf-district" placeholder="Project district" />
          </div>
          <div class="form-group">
            <label for="cf-qty">Estimated Quantity / Capacity</label>
            <input type="text" id="cf-qty" placeholder="e.g., 500 units / 100 kWp" />
          </div>
        </div>
      ` : ''}
      <div class="form-group">
        <label for="cf-notes">Project Notes</label>
        <textarea id="cf-notes" placeholder="Brief description of your requirement, tender reference, or technical notes..." rows="${variant === 'compact' ? '3' : '4'}"></textarea>
      </div>
      <button type="submit" class="btn-primary full-width" style="margin-top:8px;">
        Submit Inquiry <i data-lucide="arrow-right"></i>
      </button>
      <div id="form-success" class="hidden" style="margin-top:16px;padding:12px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:var(--radius-sm);font-size:13px;color:#166534;text-align:center;">
        ✓ Thank you! Your inquiry has been received. Our team will respond within 24-48 hours.
      </div>
    </form>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Collect form data
  const data = {
    name:         document.getElementById('cf-name')?.value?.trim() || '',
    organization: document.getElementById('cf-org')?.value?.trim() || '',
    email:        document.getElementById('cf-email')?.value?.trim() || '',
    phone:        document.getElementById('cf-phone')?.value?.trim() || '',
    projectType:  document.getElementById('cf-type')?.value || '',
    targetState:  document.getElementById('cf-state')?.value || '',
    district:     document.getElementById('cf-district')?.value?.trim() || '',
    quantity:     document.getElementById('cf-qty')?.value?.trim() || '',
    notes:        document.getElementById('cf-notes')?.value?.trim() || ''
  };

  // Disable button while submitting
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Submitting... <i data-lucide="loader"></i>';

  // ─── IMPORTANT: Replace this URL with your Google Apps Script Web App URL ───
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzuU--elG4XRTAeFVuY0VatOlNDu8J29boRoGLWe8d86WDJMUWmky2HvX6X1xVQ48e_Zw/exec';

  if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
    console.warn('⚠️ Google Sheets integration not configured. Replace GOOGLE_SHEET_URL in pages.js with your Apps Script Web App URL.');
    showContactSuccessPopup(data.name);
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Submit Inquiry <i data-lucide="arrow-right"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(() => {
    showContactSuccessPopup(data.name);
    form.reset();
  })
  .catch(err => {
    console.error('Form submission error:', err);
    alert('Something went wrong. Please try again or contact us directly at info@sunfeed.in');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Submit Inquiry <i data-lucide="arrow-right"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });
}

// Show success popup after form submission
function showContactSuccessPopup(name) {
  const popup = document.getElementById('contact-success-popup');
  if (!popup) return;
  const nameEl = document.getElementById('popup-user-name');
  if (nameEl) nameEl.textContent = name || 'there';
  popup.classList.add('open');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeContactSuccessPopup() {
  const popup = document.getElementById('contact-success-popup');
  if (popup) popup.classList.remove('open');
}
