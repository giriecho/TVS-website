import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const inquiryTypes = ["Feature Film", "Post-Production", "Audio / Sound", "General Collaboration"];
const GOOGLE_SCRIPT_URL = "https://script.google.com/a/macros/tritrontech.com/s/AKfycbwsjZq2zbaPFmQbJQeRUS_HiNIJ0uuxncdN4-8jb1OuzkpMhllqQmn256ZKDuD05Tdr/exec";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        inquiryType: formData.inquiryType,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // Note: With no-cors mode, we can't read the response
      // Assume success if no error is thrown
      setSent(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        inquiryType: inquiryTypes[0],
        message: "",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to send message. Please try again or email us directly at Info@trishulvisionarystudios.in");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Get In Touch</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
            Let's build something <span className="text-gradient-gold">visionary</span> together.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Whether you have a script ready for production, need high-end post-production
            support, or want to discuss a creative collaboration — our doors are open.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Corporate Office", body: "Kavuri Hills\nHyderabad, India" },
              { icon: Mail, title: "Email", body: "Info@trishulvisionarystudios.in" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/60 p-6 transition-all hover:border-primary/60">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{item.title}</p>
                    <p className="mt-2 whitespace-pre-line font-medium">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Studio Hours</p>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <p className="flex justify-between"><span>Monday – Friday</span><span className="text-foreground">10:00 – 19:00</span></p>
                <p className="flex justify-between"><span>Saturday</span><span className="text-foreground">By appointment</span></p>
                <p className="flex justify-between"><span>Sunday</span><span>Closed</span></p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 sm:p-10"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-up">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-glow">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl">Message received</h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Thank you for reaching out. Our team will be in touch within 2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl">Project Inquiry</h2>
                  <p className="mt-2 text-sm text-muted-foreground">All fields are used for internal review only.</p>

                  {error && (
                    <div className="mt-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}

                  <div className="mt-8 grid gap-5">
                    <Field label="Name">
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="input"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        disabled={loading}
                      />
                    </Field>
                    <Field label="Company / Production Banner">
                      <input
                        type="text"
                        placeholder="Optional"
                        className="input"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        disabled={loading}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="input"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={loading}
                      />
                    </Field>
                    <Field label="Type of Inquiry">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {inquiryTypes.map((t) => (
                          <label key={t} className="cursor-pointer">
                            <input
                              type="radio"
                              name="inquiry"
                              value={t}
                              checked={formData.inquiryType === t}
                              onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                              disabled={loading}
                              className="peer sr-only"
                            />
                            <span className="block rounded-lg border border-border bg-background/40 px-3 py-2.5 text-center text-xs font-medium transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
                              {t}
                            </span>
                          </label>
                        ))}
                      </div>
                    </Field>
                    <Field label="Message / Project Outline">
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project…"
                        className="input resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        disabled={loading}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>

            <style>{`
              .input {
                width: 100%;
                background-color: color-mix(in oklab, var(--background) 60%, transparent);
                border: 1px solid var(--border);
                border-radius: 0.75rem;
                padding: 0.75rem 1rem;
                font-size: 0.875rem;
                color: var(--foreground);
                transition: all 200ms;
                outline: none;
              }
              .input::placeholder { color: var(--muted-foreground); }
              .input:focus {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
              }
              .input:disabled {
                opacity: 0.5;
                cursor: not-allowed;
              }
            `}</style>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
