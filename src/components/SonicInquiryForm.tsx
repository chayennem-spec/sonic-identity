import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2, Sparkles, ArrowUpRight } from "lucide-react";
import { CONTACT, CRM_CONFIG } from "../lib/constants";
import { postTrackingEvent } from "../lib/tracking";

export function SonicInquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    package: "The Instant Recognition Atelier",
    industry: "Coaching & Personal Brand",
    brandStory: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) return;

    setStatus("submitting");

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "sonic-identity-inquiry",
      formData: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        website: formData.website,
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Work / Brand Email",
        phone: "Direct Phone Number",
        organization: "Brand / Company Name",
        website: "Website or Social Link",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: CRM_CONFIG.trackingId,
      locationId: CRM_CONFIG.locationId,
      projectId: CRM_CONFIG.projectId,
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        source: "ai_studio",
        projectId: CRM_CONFIG.projectId,
        formName: "Sonic Identity Private Consultation Inquiry",
      },
    };

    const sent = await postTrackingEvent(trackingPayload, {
      customFields: {
        [CRM_CONFIG.customFields.package]: {
          value: formData.package,
          label: "Sonic Architecture Package",
        },
        [CRM_CONFIG.customFields.industry]: {
          value: formData.industry,
          label: "Brand Industry",
        },
        [CRM_CONFIG.customFields.brandStory]: {
          value: formData.brandStory,
          label: "Sonic Vision & Brand Story",
        },
      },
    });

    // Only confirm once GHL has actually accepted the inquiry.
    setStatus(sent ? "success" : "error");
  };

  return (
    <div id="inquiry" className="border border-border bg-card/80 p-8 sm:p-14 lg:p-16 relative">
      {/* Elementis-style section header */}
      <div className="flex items-center gap-3 text-stone mb-6">
        <svg
          width="12"
          height="15"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-xs font-mono uppercase tracking-[0.25em]">Inquiries</span>
      </div>

      {status === "success" ? (
        <div className="text-center py-16 space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-primary text-primary">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-foreground font-normal">
            Received. I’ll be in touch.
          </h3>
          <p className="max-w-md mx-auto text-muted-foreground text-sm leading-relaxed font-light">
            Thank you, {formData.firstName}. Chayenne reads every inquiry herself
            and will get back to you soon.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  organization: "",
                  website: "",
                  package: "The Instant Recognition Atelier",
                  industry: "Coaching & Personal Brand",
                  brandStory: "",
                });
              }}
              className="text-xs font-mono uppercase tracking-[0.25em] text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form method="post" onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal tracking-tight">
              Tell me about your brand
            </h3>
            <p className="text-sm text-muted-foreground font-light max-w-2xl leading-relaxed">
              A few details and I’ll come back to you personally with the right next step for your
              sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                First Name *
              </label>
              <input
                required
                type="text"
                placeholder="First name"
                name="first_name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                name="last_name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Email *
              </label>
              <input
                required
                type="email"
                placeholder="you@yourbrand.com"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Optional"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Brand name
              </label>
              <input
                type="text"
                placeholder="Your brand"
                name="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Brand Website / Instagram
              </label>
              <input
                type="text"
                placeholder="yourbrand.com or @handle"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                What you’re interested in
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="The Instant Recognition Atelier" className="bg-card text-foreground">
                  The Instant Recognition Atelier (done for you)
                </option>
                <option value="The Instant Recognition Anthem" className="bg-card text-foreground">
                  The Instant Recognition Anthem (signature song)
                </option>
                <option value="The Sonic Imprint guide" className="bg-card text-foreground">
                  The Sonic Imprint guide
                </option>
                <option value="Not sure yet" className="bg-card text-foreground">
                  Not sure yet
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
                Your world
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="Coaching &amp; Personal Brand" className="bg-card text-foreground">
                  Coaching &amp; Personal Brand
                </option>
                <option value="Founder-Led Business" className="bg-card text-foreground">
                  Founder-Led Business
                </option>
                <option value="Speaker, Stage &amp; Events" className="bg-card text-foreground">
                  Speaker, Stage &amp; Events
                </option>
                <option value="Beauty &amp; Wellness" className="bg-card text-foreground">
                  Beauty &amp; Wellness
                </option>
                <option value="Podcast &amp; Media" className="bg-card text-foreground">
                  Podcast &amp; Media
                </option>
                <option value="Other" className="bg-card text-foreground">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
              What should your brand feel like? (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="The feeling, the room, the launch coming up..."
              name="brand_story"
              value={formData.brandStory}
              onChange={(e) => setFormData({ ...formData, brandStory: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none resize-none transition-colors"
            />
          </div>

          {status === "error" && (
            <div
              role="alert"
              className="border border-brand-red/60 bg-brand-red/10 p-4 text-sm text-foreground leading-relaxed"
            >
              <p>
                That didn’t go through. Email{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sand underline underline-offset-4 hover:text-primary"
                >
                  {CONTACT.email}
                </a>{" "}
                and we’ll pick it up from there.
              </p>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[11px] font-mono text-muted-foreground/80">
              Your details stay private and are only used to reply to you.
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-3 border border-foreground px-8 py-4 text-xs font-mono uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background transition-all disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send inquiry</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
