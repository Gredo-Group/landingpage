"use client";

import { WorldGlobe } from "@/src/components/world-globe";
import { ScrollEffects } from "@/src/components/scroll-effects";

export function LandingPage() {
  return (
    <>
{/* Body Wrap - Start */}
    <div className="page_wrapper">
      <ScrollEffects />

      {/* Back To Top - Start */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
      {/* Back To Top - End */}

      {/* Site Header - Start
      ================================================== */}
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
                      <li className="active"><a href="#home">Home</a></li>
                      <li><a href="#features">Features</a></li>
                      <li><a href="#story">Story</a></li>
                      <li><a href="#process">How it works</a></li>
                      <li><a href="#reviews">Reviews</a></li>
                      <li><a href="#app">App</a></li>
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
      {/* Site Header - End
      ================================================== */}

      {/* Main Body - Start
      ================================================== */}
      <main className="page_content">

        {/* Hero Section - Start
        ================================================== */}
        <section id="home" className="hero_section hero_online_banking overflow-hidden section_decoration bg-dark has-globe" style={{ backgroundImage: "url('/assets/images/backgrounds/hero_bg_noise.webp')" }}>
          <div className="overlay" style={{ backgroundImage: "url('/assets/images/hero/hero_pattern.svg')" }}></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="badge text-uppercase text-primary bg-primary-subtle wow fadeInUp" data-wow-delay=".1s">Powering Your Financial Freedom</div>
                <h1 className="hero_title text-white wow fadeInUp" data-wow-delay=".2s">
                  Instant Fiat.<span className="text-primary"> Crypto Swaps.</span> <span className="text-primary">Quick Bills.</span>
                </h1>
                <p className="pe-lg-5 text-white wow fadeInUp" data-wow-delay=".3s">
                  The ultimate financial engine for instant fiat deposits, automated bill payments, and bank-grade crypto trading. Build your wealth without borders.
                </p>
                <ul className="btns_group appp_btn unordered_list justify-content-lg-start wow fadeInUp" data-wow-delay=".4s">
                  <li>
                    <a className="btn bg-secondary text-white rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-apple"></i></span>
                      <span className="btn_label">Apple iOS</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn bg-secondary text-white rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-android"></i></span>
                      <span className="btn_label">Android</span>
                    </a>
                  </li>
                  <li>
                    <div className="rating_block">
                      <div className="rating_content">
                        <div className="rating_icons">
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                          </span>
                          <strong className="text-white ps-2">4.8</strong>
                        </div>
                        <div className="rating_counter text-white">26 Reviews</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gx-hero-visual">
            <div className="hero_shape_image">
              <img src="/assets/images/hero/hero_shape_1.svg" alt="" />
            </div>
            <div className="hero_hand_image wow fadeInRight" data-wow-delay=".2s">
              <img src="/assets/images/hero/hero_hand_image.png" alt="GredoEx app on phone" />
            </div>
          </div>
          <div className="ob_hero_img">
            <div className="wow fadeInRight" data-wow-delay=".2s"> 
              <img src="/assets/images/hero/card.png" alt="" />
            </div>
          </div>
          <div className="container">
            <div className="clients_logo_carousel swiper gx-asset-ticker">
              <div className="badge text-uppercase text-primary bg-primary-subtle">Currencies · Cryptos</div>
              <div className="swiper-wrapper">
                {[
                  { code: "USD", icon: "fa-solid fa-dollar-sign" },
                  { code: "NGN", icon: "fa-solid fa-naira-sign" },
                  { code: "EUR", icon: "fa-solid fa-euro-sign" },
                  { code: "GBP", icon: "fa-solid fa-sterling-sign" },
                  { code: "GHS", icon: "fa-solid fa-cedi-sign" },
                  { code: "BTC", icon: "fa-brands fa-bitcoin" },
                  { code: "ETH", icon: "fa-brands fa-ethereum" },
                  { code: "USDT", icon: "tether" },
                  { code: "USDC", icon: "usdc" },
                  { code: "USD", icon: "fa-solid fa-dollar-sign" },
                  { code: "NGN", icon: "fa-solid fa-naira-sign" },
                  { code: "EUR", icon: "fa-solid fa-euro-sign" },
                  { code: "GBP", icon: "fa-solid fa-sterling-sign" },
                  { code: "GHS", icon: "fa-solid fa-cedi-sign" },
                  { code: "BTC", icon: "fa-brands fa-bitcoin" },
                  { code: "ETH", icon: "fa-brands fa-ethereum" },
                  { code: "USDT", icon: "tether" },
                  { code: "USDC", icon: "usdc" },
                ].map((asset, index) => (
                  <div className="swiper-slide" key={`${asset.code}-${index}`}>
                    <div className="image_block border gx-asset-chip">
                      {asset.icon === "tether" ? (
                        <span className="gx-asset-mark gx-asset-mark-usdt" aria-hidden="true">₮</span>
                      ) : asset.icon === "usdc" ? (
                        <span className="gx-asset-mark gx-asset-mark-usdc" aria-hidden="true">$</span>
                      ) : (
                        <i className={asset.icon} aria-hidden="true"></i>
                      )}
                      <span>{asset.code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="decoration_item icon_star_1">
            <img src="/assets/images/icons/icon_star_4.svg" alt="Icon Star" />
          </div>
          <div className="decoration_item icon_star_2">
            <img src="/assets/images/icons/icon_star_3.svg" alt="Icon Star" />
          </div>
          <div className="decoration_item shape_shadow_1">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 1" />
          </div>
          <div className="decoration_item shape_shadow_2">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 2" />
          </div>
          <div className="decoration_item shape_shadow_3">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 3" />
          </div>
          <div className="decoration_item shape_shadow_4">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 4" />
          </div>
        </section>
        {/* Hero Section - End
        ================================================== */}

        {/* Feature Section - Start
        ================================================== */}
        <section id="features" className="feature_section section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="heading_block style_2 text-center">
                  <div className="badge text-uppercase text-dark bg-dark-subtle">CORE FEATURES</div>
                  <h2 className="heading_text mb-0">
                    Financial services reimagined.
                  </h2>
                </div>
              </div>
            </div>

            <div className="row online_banking_features">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="imagebox_block pb-0 bg-primary">
                  <div className="imagebox_content">
                    <div className="imagebox_icon">
                      <img src="/assets/images/icons/icon_wallet.svg" alt="Icon Wallet" />
                    </div>
                    <h3 className="imagebox_title">
                      Instant Bill Payments
                    </h3>
                    <p className="mb-0">
                      Top up your airtime, buy data, or recharge your prepaid meter seamlessly.
                    </p>
                  </div>
                  <div className="image_block">
                    <img src="/assets/images/features/ob_feature_image_1.png" alt="Feature Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="imagebox_block pb-0 bg-success">
                  <div className="imagebox_content">
                    <div className="imagebox_icon">
                      <img src="/assets/images/icons/icon_chart_2.svg" alt="Icon Chart 2" />
                    </div>
                    <h3 className="imagebox_title">
                      Crypto-to-Fiat Swaps
                    </h3>
                    <p className="mb-0">
                      Convert your Bitcoin, USDT, or Ethereum directly into your local bank account instantly.
                    </p>
                  </div>
                  <div className="image_block pb-4">
                    <img src="/assets/images/features/ob_feature_image_2.webp" alt="Feature Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="imagebox_block pb-0 bg-warning">
                  <div className="imagebox_content">
                    <div className="imagebox_icon">
                      <img src="/assets/images/icons/icon_global_search.svg" alt="Icon Global Search" />
                    </div>
                    <h3 className="imagebox_title">
                      Secure OTC Trading
                    </h3>
                    <p className="mb-0">
                      Need to move massive volume? Deep liquidity for large-scale transactions.
                    </p>
                  </div>
                  <div className="image_block pb-4">
                    <img src="/assets/images/features/ob_feature_image_3.webp" alt="Feature Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="imagebox_block pb-0 bg-light">
                  <div className="imagebox_content">
                    <div className="imagebox_icon">
                      <img src="/assets/images/icons/icon_color_swatch.svg" alt="Icon Color Swatch" />
                    </div>
                    <h3 className="imagebox_title">
                      Dollar Cards That Work
                    </h3>
                    <p className="mb-0">
                      Spend USD on subscriptions, travel, and online payments with a card that actually goes through.
                    </p>
                  </div>
                  <div className="image_block">
                    <img src="/assets/images/features/ob_feature_image_4.svg" alt="Feature Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="imagebox_block pb-0 bg-info">
                  <div className="imagebox_content">
                    <div className="imagebox_icon">
                      <img src="/assets/images/icons/icon_bitcoin.svg" alt="Icon Bitcoin" />
                    </div>
                    <h3 className="imagebox_title">
                      MPC Vault Security
                    </h3>
                    <p className="mb-0">
                      Digital assets secured by Multi-Party Computation, eliminating single points of failure.
                    </p>
                  </div>
                  <div className="image_block pt-3">
                    <img src="/assets/images/features/ob_feature_image_5.svg" alt="Feature Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section - End
        ================================================== */}

        {/* About Section - Start
        ================================================== */}
        <section id="story" className="about_section section_space pb-0 bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5">
                <div className="heading_block style_2">
                  <div className="badge text-uppercase text-dark bg-dark-subtle">Our Story</div>
                  <h2 className="heading_text">
                    Redefining digital finance for the modern era.
                  </h2>
                  <p className="heading_description mb-0">
                    Founded with a vision to eliminate the friction in everyday payments, GredoEx was built for a market that never stops moving. We believe that converting crypto to local fiat, paying utility bills, and executing large-volume trades shouldn't be complicated or slow.
                  </p>
                </div>
                <div className="row online_banking_funfact">
                  <div className="col-md-6">
                    <div className="funfact_block left_layout">
                      <div className="funfact_icon bg-dark">
                        <img src="/assets/images/icons/icon_maximize.svg" alt="Icon Maximize" />
                      </div>
                      <div className="funfact_content">
                        <div className="funfact_value">
                          <span className="odometer" data-count="9">0</span>
                          <span>M+</span>
                        </div>
                        <h4 className="funfact_title mb-0">Daily Transactions</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="funfact_block left_layout">
                      <div className="funfact_icon bg-dark">
                        <img src="/assets/images/icons/icon_dollar_3.svg" alt="Icon Dollar" />
                      </div>
                      <div className="funfact_content">
                        <div className="funfact_value">
                          <span>+</span>
                          <span className="odometer" data-count="9">0</span>
                          <span>%</span>
                        </div>
                        <h4 className="funfact_title mb-0">Unlimited Cashback</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <WorldGlobe />
              </div>
            </div>
          </div>
        </section>
        {/* About Section - End
        ================================================== */}

        {/* Funfact Section - Start
        ================================================== */}
        <section className="funfact_section section_space bg-light">
          <div className="container">
            <div className="heading_block style_2">
              <div className="row align-items-lg-end justify-content-lg-between">
                <div className="col-lg-6">
                  <div className="badge text-uppercase text-dark bg-dark-subtle">Why people stay</div>
                  <h2 className="heading_text mb-0">
                    Manage fiat, settle large trades, and automate your bills.
                  </h2>
                </div>
                <div className="col-lg-5">
                  <p className="heading_description mb-0">
                    Less hopping between apps and merchants. One place to fund, move, and spend — with support when something needs a human.
                  </p>
                </div>
              </div>
            </div>

            <div className="row section_decoration">
              <div className="col-lg-4">
                <div className="funfact_block style_2" style={{ backgroundImage: "url('/assets/images/shapes/funfact_bg_1.svg')" }}>
                  <div className="funfact_value">
                    <span>Centralized</span>
                  </div>
                  <h4 className="funfact_title mb-0">
                    One wallet for deposits, swaps, cards, and everyday payments — without juggling three apps.
                  </h4>
                </div>
                <div className="funfact_block style_2" style={{ backgroundImage: "url('/assets/images/shapes/funfact_bg_2.svg')" }}>
                  <div className="funfact_value">
                    <span>Local</span>
                  </div>
                  <h4 className="funfact_title mb-0">
                    Built around the currencies and corridors you already use, including NGN, GHS, USD, EUR, and GBP.
                  </h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="money_transactions_card bg-dark" style={{ backgroundImage: "url('/assets/images/shapes/shape_line.svg')" }}>
                  <div className="image_block">
                    <img src="/assets/images/about/transactions_card_image.svg" alt="Transactions Card" />
                  </div>
                  <a className="btn bg-primary text-dark" href="#app">
                    <span className="btn_label">Get the App</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="funfact_block style_2" style={{ backgroundImage: "url('/assets/images/shapes/funfact_bg_3.svg')" }}>
                  <div className="funfact_value">
                    <span>Transparent</span>
                  </div>
                  <h4 className="funfact_title mb-0">
                    Straightforward pricing on swaps and transfers — no surprise deductions after the fact.
                  </h4>
                </div>
                <div className="funfact_block style_2" style={{ backgroundImage: "url('/assets/images/shapes/funfact_bg_4.svg')" }}>
                  <div className="funfact_value">
                    <span>24/7</span>
                  </div>
                  <h4 className="funfact_title mb-0">
                    Support around the clock — live chat or call when something needs a human, not a ticket loop.
                  </h4>
                </div>
              </div>

              <div className="decoration_item shape_circle_image">
                <img src="/assets/images/shapes/shape_circle_3.svg" alt="Circle Image" />
              </div>
            </div>
          </div>
        </section>
        {/* Funfact Section - End
        ================================================== */}

        {/* Online Banking Process Section - Start
        ================================================== */}
        <section id="process" className="ob_process_section section_space section_decoration overflow-hidden" style={{ backgroundImage: "url('/assets/images/backgrounds/hero_bg_noise.webp')" }}>
          <div className="overlay" style={{ backgroundImage: "url('/assets/images/hero/hero_pattern.svg')" }}></div>
          <div className="container">
            <div className="heading_block style_2 text-center">
              <div className="badge text-uppercase text-primary bg-primary-subtle">GREDOEX</div>
              <h2 className="heading_text mb-0 text-white">
                Ready to take control of your money?
              </h2>
            </div>
            <ul className="online_banking_process unordered_list">
              <li>
                <div className="serial_number">/01</div>
                <div className="icon">
                  <img src="/assets/images/icons/icon_pen.svg" alt="Icon Pen" />
                </div>
                <h3 className="title">
                  Create Your GredoEx Account
                </h3>
                <p className="mb-0">
                  Start your journey by registering for an account on the GredoEx app.
                </p>
              </li>
              <li>
                <div className="serial_number">/02</div>
                <div className="icon">
                  <img src="/assets/images/icons/icon_web_design.svg" alt="Icon Web Design" />
                </div>
                <h3 className="title">
                  Get Your Virtual Account
                </h3>
                <p className="mb-0">
                  Every verified user receives a dedicated virtual bank account to fund instantly.
                </p>
              </li>
              <li>
                <div className="serial_number">/03</div>
                <div className="icon">
                  <img src="/assets/images/icons/icon_pen.svg" alt="Icon Pen" />
                </div>
                <h3 className="title">
                  Swap, Transfer and Pay Bills
                </h3>
                <p className="mb-0">
                  Convert crypto to fiat, pay utilities, airtime, and lifestyle subscriptions.
                </p>
              </li>
              <li className="bg-primary">
                <div className="content_wrap">
                  <h3 className="title text-dark">
                    Get the App
                  </h3>
                  <p className="text-dark">
                    Download GredoEx and start moving money the way you already live — crypto, fiat, and everyday payments.
                  </p>
                </div>
                <ul className="btns_group appp_btn unordered_list justify-content-center pt-0">
                  <li>
                    <a className="btn bg-dark rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-apple"></i></span>
                      <span className="btn_label">Apple iOS</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn bg-dark rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-android"></i></span>
                      <span className="btn_label">Android</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="decoration_item shape_shadow_1">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow" />
          </div>
          <div className="decoration_item shape_shadow_2">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow" />
          </div>
          <div className="decoration_item shape_shadow_3">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow" />
          </div>
          <div className="decoration_item shape_shadow_4">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow" />
          </div>
          <div className="decoration_item shape_shadow_5">
            <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow" />
          </div>
        </section>
        {/* Online Banking Process Section - End
        ================================================== */}

        {/* Review Section - Start
        ================================================== */}
        <section id="reviews" className="review_section">
          <div className="container">
            <div className="online_banking_review bg-dark">
              <div className="row">
                <div className="col-lg-6">
                  <div className="heading_block style_2 text-white">
                    <div className="badge text-uppercase text-primary bg-primary-subtle">Stories of Success</div>
                    <h2 className="heading_text mb-0">
                      What clients say about us
                    </h2>
                  </div>
                  <ul className="btns_group pt-0 pb-lg-0 unordered_list justify-content-start">
                    <li>
                      <div className="rating_block flex-column align-items-start">
                        <div className="rating_admin">
                          <img src="/assets/images/clients/client_logo_9.webp" alt="Client Logo" />
                        </div>
                        <div className="rating_content">
                          <div className="rating_icons">
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star-half-stroke"></i>
                            </span>
                            <strong className="text-white ps-2">5.0</strong>
                          </div>
                          <div className="rating_counter text-light text-uppercase">26 Reviews</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="rating_block flex-column align-items-start">
                        <div className="rating_admin">
                          <img src="/assets/images/clients/client_logo_10.webp" alt="Client Logo" />
                        </div>
                        <div className="rating_content">
                          <div className="rating_icons">
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star-half-stroke"></i>
                            </span>
                            <strong className="text-white ps-2">4.8</strong>
                          </div>
                          <div className="rating_counter text-light text-uppercase">26 Reviews</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="review_carousel_2 swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="review_block_2">
                          <div className="flex_content">
                            <div className="authorbox_block">
                              <div className="author_image gx-avatar-initials" aria-hidden="true">OE</div>
                              <div className="author_info">
                                <h3 className="author_name text-white">Obinna Eze</h3>
                                <span className="author_designation text-light">Logistics & Imports</span>
                              </div>
                            </div>
                            <div className="rating_block gap-2">
                              <div className="rating_icons">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <strong className="text-white">5.0</strong>
                            </div>
                          </div>
                          <p className="review_comment mb-0">
                            "The OTC desk is a game changer for my business. I buy large volume USDT to pay my international suppliers instantly. The spread rates are phenomenal."
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="review_block_2">
                          <div className="flex_content">
                            <div className="authorbox_block">
                              <div className="author_image gx-avatar-initials" aria-hidden="true">AB</div>
                              <div className="author_info">
                                <h3 className="author_name text-white">Amina Bello</h3>
                                <span className="author_designation text-light">Freelance Designer</span>
                              </div>
                            </div>
                            <div className="rating_block gap-2">
                              <div className="rating_icons">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <strong className="text-white">5.0</strong>
                            </div>
                          </div>
                          <p className="review_comment mb-0">
                            "GredoEx is the most intuitive app I've used. Swapping my crypto directly to my local bank account takes seconds. No more dealing with sketchy P2P merchants."
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="review_block_2">
                          <div className="flex_content">
                            <div className="authorbox_block">
                              <div className="author_image gx-avatar-initials" aria-hidden="true">TA</div>
                              <div className="author_info">
                                <h3 className="author_name text-white">Tunde Adeyemi</h3>
                                <span className="author_designation text-light">Software Engineer</span>
                              </div>
                            </div>
                            <div className="rating_block gap-2">
                              <div className="rating_icons">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <strong className="text-white">5.0</strong>
                            </div>
                          </div>
                          <p className="review_comment mb-0">
                            "Paying my prepaid meter and buying data takes literally 5 seconds from my fiat wallet. I don't miss logging into bank apps that always hang when you need them most."
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_arrows">
                      <button type="button" className="rc2-swiper-button-prev">
                        <i className="fa-regular fa-arrow-left-long"></i>
                      </button>
                      <span className="line"></span>
                      <button type="button" className="rc2-swiper-button-next">
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Section - End
        ================================================== */}

        {/* Integrated Section - Start
        ================================================== */}
        <section className="integrated_section section_space">
          <div className="container">
            <div className="heading_block style_2 text-center">
              <div className="badge text-uppercase text-dark bg-dark-subtle">Ready now</div>
              <h2 className="heading_text mb-0">
                Mobile wallet integrations
              </h2>
              <p className="heading_description mb-0 mt-3">
                Production-ready rails you can use today — bills, swaps, cards, and custody in one wallet.
              </p>
            </div>

            <div className="integrated_wrapper">
              <ul className="unordered_list justify-content-center">
                <li>
                  <span className="gx-integration-chip">Airtime</span>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">Mobile Data</span>
                  <svg width="194" height="74" viewBox="0 0 194 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M168.5 73.5V26C168.5 25.4477 168.052 25 167.5 25H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M193 73.5V2C193 1.44772 192.552 1 192 1H0.5" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                </li>
                <li>
                  <svg width="194" height="74" viewBox="0 0 194 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M25.5 73.5V26C25.5 25.4477 25.9477 25 26.5 25H194" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M1 73.5V2C1 1.44772 1.44772 1 2 1H193.5" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">Electricity</span>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path_2" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path_2" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">Internet</span>
                </li>
              </ul>
              <ul className="unordered_list justify-content-center">
                <li>
                  <span className="gx-integration-chip">Crypto Swaps</span>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <div className="site_logo">
                    <a className="site_link" href="/">
                      <img src="/assets/images/site_logo/gredoex_logo.png" alt="GredoEx" />
                    </a>
                  </div>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path_2" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path_2" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">OTC Desk</span>
                </li>
              </ul>
              <ul className="unordered_list justify-content-center">
                <li>
                  <span className="gx-integration-chip">Dollar Cards</span>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">Virtual Accounts</span>
                  <svg width="194" height="73" viewBox="0 0 194 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M168.5 0V47.5C168.5 48.0523 168.052 48.5 167.5 48.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M193 0V71.5C193 72.0523 192.552 72.5 192 72.5H0.5" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                </li>
                <li>
                  <svg width="194" height="73" viewBox="0 0 194 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" d="M25.5 0V47.5C25.5 48.0523 25.9477 48.5 26.5 48.5H194" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path" d="M1 0V71.5C1 72.0523 1.44772 72.5 2 72.5H193.5" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">Multi-currency</span>
                  <svg width="193" height="25" viewBox="0 0 193 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="path_2" d="M192.5 1H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                    <path className="path_2" d="M192.5 24.5H0" stroke="#DBDBDB" strokeDasharray="6 6"/>
                  </svg>
                  <span className="gx-integration-chip">MPC Vault</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Integrated Section - End
        ================================================== */}

        {/* App Store Section - Start
        ================================================== */}
        <section id="app" className="appstore_section section_decoration" style={{ backgroundImage: "url('/assets/images/backgrounds/app_store_bg_1.webp')" }}>
          <div className="container">
            <div className="row justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="heading_block style_2">
                  <div className="badge text-uppercase text-dark bg-dark-subtle"><i className="fa-solid fa-fire"></i> GredoEx App <b>NEW</b></div>
                  <h2 className="heading_text">
                    Download and enjoy the experience
                  </h2>
                  <p className="heading_description mb-0 text-dark">
                    GredoEx is a crypto and global payment platform that lets users send, receive, and swap major cryptocurrencies and make fast cross-border transfers.
                  </p>
                </div>
                <ul className="btns_group appp_btn unordered_list justify-content-start pt-0">
                  <li>
                    <a className="btn bg-dark rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-apple"></i></span>
                      <span className="btn_label">Apple iOS</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn bg-dark rounded-pill" href="#!">
                      <span className="btn_icon"><i className="fa-brands fa-android"></i></span>
                      <span className="btn_label">Android</span>
                    </a>
                  </li>
                </ul>
              </div>  
              <div className="col-lg-6">
                <div className="app_image">
                  <img src="/assets/images/about/about_image.svg" alt="App Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* App Store Section - End
        ================================================== */}

      </main>
      {/* Main Body - End
      ================================================== */}

      {/* Site Footer - Start
      ================================================== */}
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
                      <a href="mailto:info@gredogroup.com">info@gredogroup.com</a>
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
                    <h3 className="iconbox_title"> Call Us</h3>
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
                    <p className="mb-0">
                      Wuye, Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row justify-content-lg-between">
              <div className="col-lg-4">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">Newsletter</h2>
                  <p className="pe-lg-5">
                    Sign up to GredoEx weekly newsletter to get the latest updates.
                  </p>
                  <form className="footer_newslatter_2" action="#">
                    <label htmlFor="footer_mail_input">
                      <img src="/assets/images/icons/icon_email.svg" alt="Mail SVG Icon" />
                    </label>
                    <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li className="facebook"><a href="#!">Facebook</a></li>
                    <li className="twitter"><a href="#!">Twitter</a></li>
                    <li className="linkdin"><a href="#!">Linkdin</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h3 className="footer_info_title">Solutions</h3>
                <ul className="iconlist_block unordered_list_block mb-0">
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Instant Fiat</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Crypto Swaps</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Quick Bills</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">OTC Trading</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Virtual Accounts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">MPC Security</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h3 className="footer_info_title">Products</h3>
                <ul className="iconlist_block unordered_list_block mb-0">
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Wallet</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Fiat Deposits</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Transfers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Bill Payments</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Airtime & Data</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="iconlist_text">Cross-border</span>
                    </a>
                  </li>
                </ul>
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
                      <a href="#!">
                        <span className="iconlist_text">Terms & Conditions</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="iconlist_text">Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="decoration_item shape_shadow_1">
          <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 1" />
        </div>
        <div className="decoration_item shape_shadow_2">
          <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 2" />
        </div>
        <div className="decoration_item shape_shadow_3">
          <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 3" />
        </div>
        <div className="decoration_item shape_shadow_4">
          <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 4" />
        </div>
        <div className="decoration_item shape_shadow_5">
          <img src="/assets/images/shapes/shape_circle_2.svg" alt="Shape Shadow 5" />
        </div>
      </footer>
      {/* Site Footer - End
      ================================================== */}

    </div>
    {/* Body Wrap - End */}
    </>
  );
}
