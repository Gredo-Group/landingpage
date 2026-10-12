"use client";

import { FormEvent, useState } from "react";
import { submitWeb3Form } from "@/src/lib/web3forms";

const SUPPORT_EMAIL = "info@gredogroup.com";

type SubmitState = "idle" | "loading" | "success" | "error";

export function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !confirm || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    const message = [
      "Account deletion request from gredoex.com/delete-account",
      "",
      `Account email: ${email.trim()}`,
      `Phone / account ID: ${phone.trim() || "(not provided)"}`,
      `Additional notes: ${reason.trim() || "(none)"}`,
      "",
      "User confirmed they understand deletion is permanent.",
    ].join("\n");

    try {
      await submitWeb3Form({
        subject: "GredoEx account deletion request",
        from_name: "GredoEx Website",
        email: email.trim(),
        phone: phone.trim() || "Not provided",
        message,
        botcheck,
      });

      setStatus("success");
      setEmail("");
      setPhone("");
      setReason("");
      setConfirm(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  }

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
                <div className="badge text-uppercase text-primary bg-primary-subtle">Account &amp; data</div>
                <h1 className="hero_title text-white mt-3 mb-3">
                  Delete your <span className="text-primary">GredoEx</span> account
                </h1>
                <p className="text-white mb-0 mx-auto gx-subpage-lead">
                  Request deletion of your GredoEx mobile app account and the personal data linked to it. This page supports Google Play Data safety requirements and users who no longer have the app installed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature_section section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="heading_block style_2">
                  <div className="badge text-uppercase text-dark bg-dark-subtle">How it works</div>
                  <h2 className="heading_text">How to request deletion</h2>
                </div>
                <ul className="iconlist_block unordered_list_block mb-0 gx-delete-steps">
                  <li>
                    <span className="iconlist_icon">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </span>
                    <span className="iconlist_label">
                      <strong>In the GredoEx app:</strong> open help or settings and follow the account deletion option when available, or contact support from inside the app while signed in.
                    </span>
                  </li>
                  <li>
                    <span className="iconlist_icon">
                      <i className="fa-solid fa-globe"></i>
                    </span>
                    <span className="iconlist_label">
                      <strong>From this website:</strong> submit the form below. We will verify ownership of the account, then process the request.
                    </span>
                  </li>
                  <li>
                    <span className="iconlist_icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="iconlist_label">
                      Or email{" "}
                      <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("GredoEx account deletion request")}`}>
                        {SUPPORT_EMAIL}
                      </a>{" "}
                      from the email on your GredoEx account, subject <strong>GredoEx account deletion request</strong>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-8">
                <div className="comment_form gx-delete-panel">
                  <div className="heading_block">
                    <h2 className="heading_text">Submit a deletion request</h2>
                    <p className="heading_description mb-0">
                      No app login is required. We use these details only to locate and delete your account.
                    </p>
                  </div>

                  {status === "success" ? (
                    <p className="heading_description mb-0" role="status">
                      Your deletion request was sent. We will follow up at the email you provided after verifying ownership of the account.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="gx-honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        checked={Boolean(botcheck)}
                        onChange={(event) => setBotcheck(event.target.checked ? "1" : "")}
                        aria-hidden="true"
                      />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" htmlFor="delete_email">
                              Account email<sup>*</sup>
                            </label>
                            <input
                              id="delete_email"
                              className="form-control"
                              type="email"
                              name="email"
                              autoComplete="email"
                              required
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              placeholder="Email registered on GredoEx"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" htmlFor="delete_phone">
                              Phone or account ID
                            </label>
                            <input
                              id="delete_phone"
                              className="form-control"
                              type="text"
                              name="phone"
                              value={phone}
                              onChange={(event) => setPhone(event.target.value)}
                              placeholder="Optional"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="input_title" htmlFor="delete_reason">
                              Additional notes
                            </label>
                            <textarea
                              id="delete_reason"
                              className="form-control"
                              name="message"
                              value={reason}
                              onChange={(event) => setReason(event.target.value)}
                              placeholder="Anything that helps us locate your account (optional)"
                            />
                          </div>
                          <div className="form-group form-check">
                            <input
                              id="delete_confirm"
                              className="form-check-input"
                              type="checkbox"
                              checked={confirm}
                              onChange={(event) => setConfirm(event.target.checked)}
                              required
                            />
                            <label className="form-check-label" htmlFor="delete_confirm">
                              I understand that deleting my GredoEx account is permanent and that I will lose access to wallets, cards, and transaction history after deletion is completed.
                            </label>
                          </div>

                          {status === "error" ? (
                            <p className="gx-form-error" role="alert">
                              {errorMessage} You can also email{" "}
                              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                            </p>
                          ) : null}

                          <button
                            className="btn text-dark"
                            type="submit"
                            disabled={!email.trim() || !confirm || status === "loading"}
                          >
                            <span className="btn_label">
                              {status === "loading" ? "Sending…" : "Submit deletion request"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_trush_bin.svg" alt="" />
                  </div>
                  <h3 className="iconbox_title">What we delete</h3>
                  <ul className="iconlist_block unordered_list_block mb-0">
                    <li><span className="iconlist_text">KYC / profile details held by GredoEx</span></li>
                    <li><span className="iconlist_text">Email and phone contact info</span></li>
                    <li><span className="iconlist_text">Wallet labels, preferences, settings</span></li>
                    <li><span className="iconlist_text">Account-linked usage data not required by law</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_lock.svg" alt="" />
                  </div>
                  <h3 className="iconbox_title">What we may retain</h3>
                  <p className="mb-0">
                    Limited records may be kept for security, fraud prevention, disputes, accounting, or legal / AML compliance. Retained data is restricted and not used for marketing. Freezing an account is not deletion.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_calendar.svg" alt="" />
                  </div>
                  <h3 className="iconbox_title">Timeline &amp; support</h3>
                  <p>
                    We aim to confirm within a few business days and complete deletion within <strong>30 days</strong> of verifying your identity, unless law requires longer retention.
                  </p>
                  <p className="mb-0">
                    App: <strong>GredoEx</strong><br />
                    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
                    <a href="tel:+2348034444781">+234 803 444 4781</a>
                  </p>
                </div>
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
