"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { submitWeb3Form } from "@/src/lib/web3forms";

type SubmitState = "idle" | "loading" | "success" | "error";

const TRIGGER_SELECTOR = 'a[href="#waitlist"]';

export function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest(TRIGGER_SELECTOR);
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    if (window.location.hash === "#waitlist") setOpen(true);

    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    if (status === "success") setStatus("idle");
  }

  const canSubmit =
    firstName.trim() && lastName.trim() && email.trim() && phone.trim() && status !== "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitWeb3Form({
        subject: "New GredoEx waitlist signup",
        from_name: "GredoEx Website",
        name: `${firstName.trim()} ${lastName.trim()}`,
        "First name": firstName.trim(),
        "Last name": lastName.trim(),
        email: email.trim(),
        "Phone number": phone.trim(),
        botcheck: botcheck ? "1" : "",
      });

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (!open) return null;

  return (
    <div className="gx-modal" role="presentation" onClick={close}>
      <div
        className="comment_form gx-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gx-waitlist-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="gx-modal-close" type="button" onClick={close} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {status === "success" ? (
          <div className="heading_block mb-0">
            <h2 id="gx-waitlist-title" className="heading_text">
              You&apos;re on the list
            </h2>
            <p className="heading_description">
              Thanks for joining the GredoEx waitlist. We&apos;ll email you as soon as your access is ready.
            </p>
            <button className="btn text-dark w-100" type="button" onClick={close}>
              <span className="btn_label">Done</span>
            </button>
          </div>
        ) : (
          <>
            <div className="heading_block">
              <h2 id="gx-waitlist-title" className="heading_text">
                Join the Waitlist
              </h2>
              <p className="heading_description mb-0">
                Be first to get GredoEx — instant fiat, crypto swaps, and quick bills in one app.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                className="gx-honeypot"
                tabIndex={-1}
                autoComplete="off"
                checked={botcheck}
                onChange={(event) => setBotcheck(event.target.checked)}
                aria-hidden="true"
              />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="waitlist_first_name">
                      First name<sup>*</sup>
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="waitlist_first_name"
                      className="form-control"
                      type="text"
                      name="first_name"
                      autoComplete="given-name"
                      placeholder="Amina"
                      required
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="waitlist_last_name">
                      Last name<sup>*</sup>
                    </label>
                    <input
                      id="waitlist_last_name"
                      className="form-control"
                      type="text"
                      name="last_name"
                      autoComplete="family-name"
                      placeholder="Bello"
                      required
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="input_title" htmlFor="waitlist_email">
                      Email<sup>*</sup>
                    </label>
                    <input
                      id="waitlist_email"
                      className="form-control"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="amina@example.com"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_title" htmlFor="waitlist_phone">
                      Phone number<sup>*</sup>
                    </label>
                    <input
                      id="waitlist_phone"
                      className="form-control"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+234 800 000 0000"
                      required
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  {status === "error" ? (
                    <p className="gx-form-error" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <button className="btn text-dark" type="submit" disabled={!canSubmit}>
                    <span className="btn_label">
                      {status === "loading" ? "Joining…" : "Join the Waitlist"}
                    </span>
                  </button>
                  <p className="gx-modal-note">
                    By joining, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
