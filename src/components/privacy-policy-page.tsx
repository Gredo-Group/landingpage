const SUPPORT_EMAIL = "info@gredogroup.com";
const LAST_UPDATED = "August 25, 2026";

export function PrivacyPolicyPage() {
  return (
    <div className="page_wrapper">
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <header className="site_header header_layout_1">
        <div className="xb-header stricky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-5">
                <div className="site_logo">
                  <a className="site_link" href="/">
                    <img src="/assets/images/site_logo/gredoex_logo.png" alt="GredoEx" />
                    <img src="/assets/images/site_logo/gredoex_logo_dark.png" alt="GredoEx" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                    <ul className="main_menu_list unordered_list justify-content-center">
                      <li><a href="/#home">Home</a></li>
                      <li><a href="/#features">Features</a></li>
                      <li><a href="/#story">Story</a></li>
                      <li><a href="/#process">How it works</a></li>
                      <li><a href="/#reviews">Reviews</a></li>
                      <li><a href="/#app">App</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-3 col-5">
                <ul className="btns_group ob-header-btn p-0 unordered_list justify-content-end">
                  <li>
                    <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page_content">
        <section
          className="hero_section hero_online_banking overflow-hidden section_decoration bg-dark gx-subpage-hero"
          style={{ backgroundImage: "url('/assets/images/backgrounds/hero_bg_noise.webp')" }}
        >
          <div className="overlay" style={{ backgroundImage: "url('/assets/images/hero/hero_pattern.svg')" }}></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="badge text-uppercase text-primary bg-primary-subtle">Legal</div>
                <h1 className="hero_title text-white mt-3 mb-3">
                  Privacy <span className="text-primary">Policy</span>
                </h1>
                <p className="text-white mb-2 mx-auto gx-subpage-lead">
                  How GredoEx collects, uses, stores, and shares personal information when you use our mobile app and website.
                </p>
                <p className="text-white mb-0 opacity-75">Last updated: {LAST_UPDATED}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature_section section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <nav className="gx-legal-toc mb-5" aria-label="Privacy policy sections">
                  <div className="badge text-uppercase text-dark bg-dark-subtle mb-3">On this page</div>
                  <ul className="iconlist_block unordered_list_block mb-0">
                    <li><a href="#introduction"><span className="iconlist_text">1. Introduction</span></a></li>
                    <li><a href="#information-we-collect"><span className="iconlist_text">2. Information we collect</span></a></li>
                    <li><a href="#how-we-use"><span className="iconlist_text">3. How we use information</span></a></li>
                    <li><a href="#sharing"><span className="iconlist_text">4. How we share information</span></a></li>
                    <li><a href="#retention"><span className="iconlist_text">5. Retention</span></a></li>
                    <li><a href="#security"><span className="iconlist_text">6. Security</span></a></li>
                    <li><a href="#your-rights"><span className="iconlist_text">7. Your rights &amp; account deletion</span></a></li>
                    <li><a href="#children"><span className="iconlist_text">8. Children</span></a></li>
                    <li><a href="#changes"><span className="iconlist_text">9. Changes</span></a></li>
                    <li><a href="#contact"><span className="iconlist_text">10. Contact</span></a></li>
                  </ul>
                </nav>

                <article className="gx-legal-prose">
                  <section id="introduction" className="gx-legal-section">
                    <h2>1. Introduction</h2>
                    <p>
                      This Privacy Policy describes how <strong>GredoEx</strong> (operated by Gredo Group, Wuye, Abuja, Nigeria) (“we”, “us”, or “our”) handles personal information when you use the GredoEx mobile application, website at gredoex.com, and related services (collectively, the “Services”).
                    </p>
                    <p className="mb-0">
                      By creating an account or using the Services, you acknowledge this Policy. If you do not agree, please do not use the Services.
                    </p>
                  </section>

                  <section id="information-we-collect" className="gx-legal-section">
                    <h2>2. Information we collect</h2>
                    <p>Depending on how you use GredoEx, we may collect:</p>
                    <ul>
                      <li>
                        <strong>Account information</strong> — name, email address, phone number, password or authentication credentials, and profile details.
                      </li>
                      <li>
                        <strong>Identity / KYC information</strong> — government ID details, selfie or biometric checks, address, and other verification data required for compliance.
                      </li>
                      <li>
                        <strong>Financial &amp; transaction data</strong> — wallet balances, virtual account details, deposits, withdrawals, crypto-fiat swaps, OTC trades, bill payments, card activity, and related references.
                      </li>
                      <li>
                        <strong>Device &amp; usage data</strong> — device type, OS, app version, IP address, approximate location, crash logs, and how you interact with the Services.
                      </li>
                      <li>
                        <strong>Support communications</strong> — messages, call notes, and files you send to customer support.
                      </li>
                      <li>
                        <strong>Marketing preferences</strong> — newsletter signup and communication choices, where you opt in.
                      </li>
                    </ul>
                    <p className="mb-0">
                      We may also receive information from payment partners, identity verification providers, blockchain networks, and other service providers acting on our behalf.
                    </p>
                  </section>

                  <section id="how-we-use" className="gx-legal-section">
                    <h2>3. How we use information</h2>
                    <p>We use personal information to:</p>
                    <ul>
                      <li>Create and manage your account, wallets, virtual accounts, and cards</li>
                      <li>Process deposits, swaps, transfers, OTC trades, and bill payments</li>
                      <li>Verify identity and meet KYC / AML and other legal obligations</li>
                      <li>Detect, prevent, and investigate fraud, abuse, and security incidents</li>
                      <li>Provide customer support and service announcements</li>
                      <li>Improve product performance, reliability, and user experience</li>
                      <li>Send marketing only where permitted and where you have not opted out</li>
                    </ul>
                    <p className="mb-0">
                      We do not sell your personal information.
                    </p>
                  </section>

                  <section id="sharing" className="gx-legal-section">
                    <h2>4. How we share information</h2>
                    <p>We may share information with:</p>
                    <ul>
                      <li>
                        <strong>Service providers</strong> — hosting, analytics, KYC, banking / payment rails, card issuers, messaging, and customer support tools that process data on our instructions.
                      </li>
                      <li>
                        <strong>Business partners</strong> — where needed to complete a transaction you initiate (for example bill payment providers or liquidity partners).
                      </li>
                      <li>
                        <strong>Legal &amp; compliance</strong> — regulators, law enforcement, or other parties when required by law, court order, or to protect rights, safety, and integrity of the Services.
                      </li>
                      <li>
                        <strong>Corporate events</strong> — in connection with a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards.
                      </li>
                    </ul>
                    <p className="mb-0">
                      Blockchain transactions you broadcast may be publicly visible on the relevant network.
                    </p>
                  </section>

                  <section id="retention" className="gx-legal-section">
                    <h2>5. Retention</h2>
                    <p>
                      We keep personal information only as long as needed for the purposes above, including legal, accounting, dispute, and AML retention requirements. When information is no longer required, we delete or anonymize it where feasible.
                    </p>
                    <p className="mb-0">
                      Temporary deactivation or freezing an account is not the same as deletion. To request account and data deletion, use our{" "}
                      <a href="/delete-account">Delete Account</a> page.
                    </p>
                  </section>

                  <section id="security" className="gx-legal-section">
                    <h2>6. Security</h2>
                    <p>
                      We use administrative, technical, and organizational measures designed to protect personal information, including encrypted transport, access controls, and — for digital asset custody — Multi-Party Computation (MPC) infrastructure intended to reduce single points of failure.
                    </p>
                    <p className="mb-0">
                      No method of transmission or storage is completely secure. You are responsible for keeping your device, credentials, and recovery methods confidential.
                    </p>
                  </section>

                  <section id="your-rights" className="gx-legal-section">
                    <h2>7. Your rights &amp; account deletion</h2>
                    <p>
                      Subject to applicable law, you may request access to, correction of, or deletion of personal information we hold about you. You may also object to or restrict certain processing, and withdraw consent where processing is consent-based.
                    </p>
                    <p>
                      To delete your GredoEx account and associated personal data, visit{" "}
                      <a href="/delete-account">gredoex.com/delete-account</a> or email{" "}
                      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We may need to verify your identity before acting on a request. Some records may be retained where required for security, fraud prevention, or legal compliance, as described on the deletion page.
                    </p>
                    <p className="mb-0">
                      We aim to complete verified deletion requests within <strong>30 days</strong>, unless a longer period is required by law.
                    </p>
                  </section>

                  <section id="children" className="gx-legal-section">
                    <h2>8. Children</h2>
                    <p className="mb-0">
                      The Services are not directed to children under 18 (or the age of majority in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will take appropriate steps to delete it.
                    </p>
                  </section>

                  <section id="changes" className="gx-legal-section">
                    <h2>9. Changes</h2>
                    <p className="mb-0">
                      We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the Services after an update means you accept the revised Policy, where permitted by law. Material changes may be communicated in-app, by email, or on this page.
                    </p>
                  </section>

                  <section id="contact" className="gx-legal-section mb-0">
                    <h2>10. Contact</h2>
                    <p>Questions about this Privacy Policy or your personal information:</p>
                    <ul className="mb-0">
                      <li>
                        Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                      </li>
                      <li>
                        Phone: <a href="tel:+2348034444781">+234 803 444 4781</a>
                      </li>
                      <li>Office: Wuye, Abuja, Nigeria</li>
                      <li>
                        Account deletion: <a href="/delete-account">Delete Account</a>
                      </li>
                    </ul>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site_footer footer_layout_2 bg-secondary section_decoration section_space" style={{ backgroundImage: "url('/assets/images/backgrounds/hero_bg_noise.webp')" }}>
        <div className="overlay" style={{ backgroundImage: "url('/assets/images/hero/hero_pattern.svg')" }}></div>
        <div className="container">
          <div className="content_wrap pb-0">
            <div className="contact_info row">
              <div className="col-lg-4">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_email.svg" alt="Icon Email" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Write to us</h3>
                    <p className="mb-0">
                      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_calling_5.svg" alt="Icon Calling" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Call Us</h3>
                    <p className="mb-0">
                      <a href="tel:+2348034444781">+234 803 444 4781</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_map_mark.svg" alt="Icon Map Mark" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our Office</h3>
                    <p className="mb-0">Wuye, Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mb-0" />

            <div className="footer_bottom">
              <div className="row">
                <div className="col-lg-6">
                  <p className="copyright_text mb-0">
                    Copyright © 2026 GredoEx, All rights reserved.
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul className="iconlist_block mb-0 unordered_list justify-content-lg-end">
                    <li>
                      <a href="/delete-account">
                        <span className="iconlist_text">Delete Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy">
                        <span className="iconlist_text">Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="iconlist_text">Home</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
