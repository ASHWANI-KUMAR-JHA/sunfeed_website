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
                <img src="images/govappepc.png" alt="Government Approved" class="benefit-logo" loading="lazy">
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
                <img src="images/lifePo4.png" alt="LiFePO4 Battery" class="benefit-logo" loading="lazy">
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
                <img src="images/smartiot.png" alt="Smart IoT" class="benefit-logo" loading="lazy">
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
                <img src="images/longterm.png" alt="O&M Support" class="benefit-logo" loading="lazy">
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
                  <div class="spec-row"><span>Warranty:</span><strong>3-5 Years</strong></div>
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
                  <div class="spec-row"><span>Warranty:</span><strong>3-5 Years</strong></div>
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
                  <div class="spec-row"><span>Warranty:</span><strong>5-10 Years</strong></div>
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
            <img src="images/breda_logo.png" alt="BREDA" loading="lazy" style="height:44px;object-fit:contain;margin:0 auto 8px;">
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
        </div>
        <div style="text-align:center;margin-top:24px;">
          <button type="button" class="btn-ghost" onclick="navigateTo('clients')">View All Clients & Partners <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    </section>

    <!-- Certifications on Home -->
    ${renderCertificationsSection()}

    <!-- Testimonials -->
    <section class="section section-warm" id="testimonial-container">
      <div class="container">
        <div class="section-header text-center" style="max-width:640px;margin:0 auto 40px;">
          <div class="badge"><i data-lucide="quote"></i> Project Experience</div>
          <h3 style="font-size:24px;font-weight:800;">Feedback from Nodal Deployments</h3>
          <p style="font-size:12px;color:var(--muted);">Sample feedback illustrative of state renewable energy agency execution standards.</p>
        </div>
        <div class="testimonial-card" id="testimonial-card"></div>
        <div class="testimonial-dots" style="display:flex;justify-content:center;gap:6px;margin-top:20px;">
          ${TESTIMONIALS.map((_, i) => `<div class="testimonial-dot ${i === 0 ? 'active' : ''}" onclick="setTestimonial(${i})"></div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Contact Compact -->
    <section class="section section-warm">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="badge"><i data-lucide="mail"></i> Direct Inquiry</div>
            <h2 style="font-size:30px;font-weight:800;">Connect with our Project Desk</h2>
            <p style="font-size:14px;color:var(--muted);line-height:1.7;">Whether you are planning a state nodal agency tender, municipal lighting project, or rooftop solar power plant, our engineering team is ready to assist.</p>
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="phone"></i></div>
              <div><span class="label">Landline</span><br><a href="tel:+911244072847">+91-124-4072847</a></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="mail"></i></div>
              <div><span class="label">Official Email</span><br><a href="mailto:info@sunfeed.in">info@sunfeed.in</a></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="building"></i></div>
              <div><span class="label">Corporate Office</span><br><span style="font-size:12px;color:var(--muted);font-weight:400;">527, 5th Floor, DLF Star Tower, Sector-30, Gurugram, Haryana - 122001</span></div>
            </div>
            <button type="button" class="btn-ghost" onclick="navigateTo('contact')">Go to Full Contact Page →</button>
          </div>
          <div>
            ${renderContactForm('compact')}
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
// SOLUTIONS PAGE
// ==========================================================
function renderSolutionsPage() {
  return `
    <!-- Solutions Banner - Premium White Design -->
    <div class="solutions-banner">
      <div class="container solutions-container">
        <!-- Left Content -->
        <div class="solutions-left">
          <div class="solutions-badge">WHAT WE DELIVER</div>
          
          <h1 class="solutions-headline">
            Solar solutions <span class="red-text">engineered</span> for every scale
          </h1>
          
          <p class="solutions-subheadline">
            Rooftop, ground-mount, hybrid and floating solar systems, each designed, procured and installed by an in-house EPC team, not subcontracted out.
          </p>
          
          <button type="button" class="solutions-cta" onclick="scrollToSection('services')">
            Explore our solutions <i data-lucide="arrow-right"></i>
          </button>
        </div>
        
        <!-- Right Visual -->
        <div class="solutions-right">
          <div class="solutions-visual">
            <div class="visual-card card-1">
              <div class="card-icon"><i data-lucide="sun"></i></div>
              <div class="card-label">Street Lighting</div>
            </div>
            <div class="visual-card card-2">
              <div class="card-icon"><i data-lucide="zap"></i></div>
              <div class="card-label">Solar PV</div>
            </div>
            <div class="visual-card card-3">
              <div class="card-icon"><i data-lucide="battery-charging"></i></div>
              <div class="card-label">Battery Storage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section class="section section-white">
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
                  <div class="spec-row"><span>Warranty:</span><strong>3-5 Years</strong></div>
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
                  <div class="spec-row"><span>Warranty:</span><strong>3-5 Years</strong></div>
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
                  <div class="spec-row"><span>Warranty:</span><strong>5-10 Years</strong></div>
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
  `;
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
    ${renderBanner('Government & Institutional Solar Projects', 'Active solar implementation partner for state nodal agencies including BREDA (Bihar), HAREDA (Haryana), and HIMURJA (Himachal Pradesh).', 'State Nodal Operations', 'Projects')}
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
    ${renderBanner('Government & Institutional Clients', 'State nodal agency partnerships for large-scale renewable energy infrastructure across Bihar, Haryana, Himachal Pradesh, and more.', 'Verified Partners', 'Clients')}

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
    ${renderBanner('Technology & Remote Monitoring Systems (RMS)', 'Real-time IoT telemetry, 4G LTE/GPRS cloud communication, LiFePO4 battery management systems (BMS), and precision optical engineering.', 'IoT Telemetry & Standards', 'Engineering')}
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
    ${renderBanner('Frequently Asked Questions (FAQ)', 'Detailed answers regarding our turnkey solar lighting, remote monitoring, state nodal procedures, warranties, and maintenance support.', 'Knowledge Base', 'Support')}
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
    ${renderBanner('Contact Us & Project Consultation', 'Get in touch with our engineering team for technical queries, feasibility discussions, tender RFPs, and official corporate consultations.', 'Direct Inquiry & Corporate Office', 'Contact')}
    <section class="section section-white">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h3 style="font-size:20px;font-weight:700;">Get in Touch</h3>
            <p style="font-size:14px;color:var(--muted);line-height:1.7;">Our project desk is available for BOQ estimations, site feasibility assessments, compliance documentation, and formal tender inquiries.</p>
           
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="phone"></i></div>
              <div><span class="label">Landline</span><br><a href="tel:+911244072847">+91-124-4072847</a></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="mail"></i></div>
              <div><span class="label">Official Email</span><br><a href="mailto:info.sunfeed@gmail.com">info.sunfeed@gmail.com</a></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon"><i data-lucide="map-pin"></i></div>
              <div><span class="label">Corporate Office</span><br><span style="font-size:12px;color:var(--muted);font-weight:400;">${COMPANY.address}</span></div>
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
            <option>Bihar</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Uttarakhand</option>
            <option>Tripura</option>
            <option>Other</option>
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
  const success = document.getElementById('form-success');
  if (success) {
    success.classList.remove('hidden');
    setTimeout(() => success.classList.add('hidden'), 5000);
  }
  e.target.reset();
}
