"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Layers,
  Wrench,
  CalendarRange,
  Hammer,
  ClipboardCheck,
  LineChart,
  FileCheck2,
  Boxes,
  Mail,
  Phone,
  MapPin,
  Heart,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Public assets
const logo = "/assets/AXYCAD-2.1.png";
const clashVideo = "/videos/clash-detection.mp4";
const viaductVideo = "/videos/mini-viaduct.mp4";
const reelVideo = "/assets/reel-of-the-day.mp4";

// Accreditation logos (place matching files in /public/assets/logos)
const accreditationLogos = {
  constructionline: "/assets/logos/constructionline-gold.png",
  ssip: "/assets/logos/ssip-once-for-all.png",
  socialValue: "/assets/logos/social-value.png",
  scssSilver: "/assets/logos/scss-silver.png",
  disabilityConfident: "/assets/logos/disability-confident-committed.png",
  risqs: "/assets/logos/risqs-registered.png",
  ico: "/assets/logos/ico-registered.png",
};

// Email recipients for enquiries
const RECIPIENTS = ["office@axycad.co.uk", "darius@axycad.co.uk"];

const brand = {
  bg: "from-slate-950 via-slate-900 to-slate-800",
  panel: "bg-slate-900/60 backdrop-blur",
  accent: "text-cyan-300",
  accentBg: "bg-cyan-500",
  ring: "ring-1 ring-white/10",
};
const storyVideos = {
  s1: "/videos/segment-1-construction-changing.mp4",
  s2: "/videos/segment-2-data-blueprint.mp4",
  s3: "/videos/segment-3-ai-estimating.mp4",
  s4: "/videos/segment-4-4d-5d-planning.mp4",
  s5: "/videos/segment-5-eci.mp4",
  s6: "/videos/segment-6-vision-to-handover.mp4",
};
const Section = ({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 md:mb-12">
        {kicker && (
          <p className="uppercase tracking-widest text-xs md:text-sm text-white/60 mb-2">
            {kicker}
          </p>
        )}
        <h2 className="text-2xl md:text-4xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="
      relative
      text-sm md:text-base
      text-white/70
      hover:text-cyan-300
      transition-colors
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      hover:after:w-full
      after:bg-cyan-400
      after:rounded-full
      after:transition-all
      after:duration-300
    "
  >
    {label}
  </a>
);

const ServiceCard = ({
  icon: Icon,
  title,
  bullets,
}: {
  icon: any;
  title: string;
  bullets: string[];
}) => (
  <Card className={`${brand.ring} ${brand.panel} rounded-2xl shadow-xl`}>
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center gap-3 text-white">
        <span className="p-2 rounded-xl bg-white/5">
          {Icon && <Icon className="h-5 w-5" />}
        </span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-1" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div
    className="
      text-center px-4 py-2 rounded-2xl
      bg-white/5 border border-white/5
      hover:border-cyan-400/60 hover:bg-white/10
      transition-colors duration-200
    "
  >
    <div className="text-3xl md:text-4xl font-semibold text-white">
      {value}
    </div>
    <div className="text-white/60 mt-1 text-sm md:text-base">
      {label}
    </div>
  </div>
);

const Logo = () => (
  <a
    href="#top"
    className="flex items-center gap-3 group"
    aria-label="AXYCAD home"
  >
    <div className="relative">
      <img
        src={logo}
        alt="AXYCAD Logo"
        className="
          h-12 md:h-16 w-auto rounded-md
          shadow-lg shadow-cyan-500/30
          transition-transform transition-shadow duration-300
          group-hover:scale-105 group-hover:shadow-cyan-400/60
        "
      />
      {/* soft glow behind the logo */}
      <div
        className="
          pointer-events-none absolute inset-0
          blur-xl rounded-xl
          bg-cyan-500/10 opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />
    </div>

    {/* Desktop tagline – hidden on small screens */}
    <span
      className="
        hidden sm:inline-block
        text-[0.7rem] md:text-xs tracking-[0.35em]
        uppercase font-semibold
        text-white/50
        group-hover:text-cyan-300
        transition-colors duration-300
      "
    >
      Integrated Construction Solutions
    </span>
  </a>
);

export default function AxycadHome() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("topnav");
      if (!nav) return;
      if (window.scrollY > 10)
        nav.classList.add(
          "backdrop-blur",
          "bg-slate-950/70",
          "border-b",
          "border-white/10"
        );
      else
        nav.classList.remove(
          "backdrop-blur",
          "bg-slate-950/70",
          "border-b",
          "border-white/10"
        );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      icon: FileSpreadsheet,
      title: "Estimating & Take-Offs",
      bullets: [
        "Fully measured BoQs (CESMM / NRM / client formats)",
        "2D/3D take-offs from IFC/CAD/BIM",
        "Package scoping, supplier enquiries & benchmarked rates",
        "Tender adjudications and value-engineering notes",
      ],
    },
    {
      icon: FileText,
      title: "Bid Writing & Strategy",
      bullets: [
        "Compelling method statements and win themes",
        "Social value, carbon & quality submissions",
        "Prelims build-ups, risk registers & programme narratives",
        "Client interview coaching and decks",
      ],
    },
    {
      icon: Layers,
      title: "Early Contractual Involvement (ECI)",
      bullets: [
        "Constructability & phasing reviews",
        "RFI/TQ management and change strategy (NEC/JCT)",
        "Temporary works concepts & optioneering",
        "Logistics and stakeholder modelling",
      ],
    },
    {
      icon: Wrench,
      title: "Temporary Works Design",
      bullets: [
        "Formwork, falsework, propping & access",
        "Cranage studies and equipment selection (BS7121)",
        "Foundations, excavation support & working platforms",
        "Category 1–3 checks with independent reviewers",
      ],
    },
    {
      icon: CalendarRange,
      title: "4D/5D Programme Development",
      bullets: [
        "P6 / MS Project / Synchro Pro baselines",
        "Linked cost/time (5D) with cashflow curves",
        "Progress tracking dashboards & EVM",
        "Scenario modelling and risk allowances",
      ],
    },
    {
      icon: Hammer,
      title: "FRC Construction & Groundworks",
      bullets: [
        "Rafts, walls, cores, capping beams & abutments",
        "Earthworks, drainage, utilities and RC frames",
        "Methodology, TWD/TMP and ITP roll-out",
        "Self-delivery crews and specialist partners",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Quality, Engineering & Handover",
      bullets: [
        "ITPs, checklists, test plans & records",
        "Survey control, setting-out, as-builts & redlines",
        "O&M compilation, asset data and COBie",
        "Digital handover rooms with structured metadata",
      ],
    },
  ];

  const tools = [
    { name: "Primavera P6", icon: LineChart },
    { name: "MS Project", icon: FileCheck2 },
    { name: "Synchro Pro 4D", icon: Boxes },
  ];

  // Mailto fallback to send to both recipients
  function handleEnquirySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const message = String(fd.get("message") || "");

    const subject = `AXYCAD — Proposal Request from ${name || "Website Visitor"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      "Scope:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${RECIPIENTS.join(",")}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b ${brand.bg} text-white`}>
      {/* Top Navigation */}
      <header
        id="topnav"
        className="
          fixed inset-x-0 top-0 z-50
          bg-gradient-to-b from-slate-950/80 to-slate-950/40
          backdrop-blur-sm
          border-b border-white/5
          shadow-[0_12px_30px_rgba(15,23,42,0.75)]
          transition-all duration-300
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <Logo />

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#services" label="Services" />
              <NavLink href="#programmes" label="Planning" />
              <NavLink href="#quality" label="Quality" />
              <NavLink href="#accreditations" label="Compliance" />
              <NavLink href="#case-studies" label="Projects" />
              <NavLink href="#community" label="Community" />
              <NavLink href="#contact" label="Contact" />
            </nav>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20"
                onClick={() => setOpen(!open)}
              >
                Menu
              </Button>
            </div>

            {/* DESKTOP CTA */}
            <a href="#contact" className="hidden md:inline-block">
              <Button
                className="
                  bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400
                  text-slate-950 font-semibold
                  rounded-full px-7 py-2.5
                  shadow-lg shadow-cyan-500/40
                  hover:shadow-cyan-400/80 hover:-translate-y-[2px]
                  active:translate-y-0
                  transition-all duration-200
                "
              >
                Start a Project
              </Button>
            </a>
          </div>

          {/* MOBILE NAV MENU */}
          {open && (
            <div className="md:hidden mt-4 grid gap-3 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              {[
                ["#services", "Services"],
                ["#programmes", "4D / 5D"],
                ["#quality", "Quality"],
                ["#accreditations", "Compliance"],
                ["#case-studies", "Projects"],
                ["#community", "Community"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="py-2 text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          {/* Left column: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-xs md:text-sm text-white/60 mb-3">
              Precision. Performance. Partnership.
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              Integrated Construction Solutions — from Vision to Handover.{" "}
              <span className={brand.accent}>Shaping smarter ways to build.</span>
            </motion.h1>

            <p className="mt-5 text-white/80 max-w-xl">
              AXYCAD partners with main contractors and developers to plan, price
              and deliver complex civil engineering and concrete works. From
              early-stage constructability and tender support to site execution,
              digital QA and handover — we make programmes buildable and
              profitable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* Explore Services */}
              <a href="#services">
                <Button
                  className="
                    bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400
                    text-slate-950 font-semibold
                    rounded-full px-7 py-2.5
                    shadow-lg shadow-cyan-500/30
                    hover:shadow-cyan-400/70 hover:-translate-y-[2px]
                    active:translate-y-0
                    transition-all duration-200
                  "
                >
                  Explore Services
                </Button>
              </a>

              {/* Start a Project */}
              <a href="#contact">
                <Button
                  className="
                    bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400
                    text-slate-950 font-semibold
                    rounded-full px-7 py-2.5
                    shadow-lg shadow-cyan-500/40
                    hover:shadow-cyan-400/80 hover:-translate-y-[2px]
                    active:translate-y-0
                    transition-all duration-200
                  "
                >
                  Start a Project
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="£40m+" label="Projects supported" />
              <Stat value="30+" label="Projects Involved" />
              <Stat value="15% avg" label="Bid savings found" />
            </div>
          </motion.div>

          {/* Right column: Clash detection (Segment 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className={`${brand.ring} rounded-3xl p-4 md:p-6 bg-slate-950/80 shadow-[0_18px_45px_rgba(8,47,73,0.85)] group`}
            >
              <div className="rounded-2xl bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white/80 text-sm">
                    Construction is Changing
                  </div>
                  <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    INTRO
                  </div>
                </div>

                {/* Enhanced video frame – Segment 1 */}
                <div
                  className="
                    mt-3 rounded-2xl
                    bg-gradient-to-br from-cyan-500/70 via-sky-500/60 to-blue-500/70
                    p-[2px]
                    shadow-[0_0_35px_rgba(56,189,248,0.45)]
                    group-hover:shadow-[0_0_55px_rgba(56,189,248,0.9)]
                    transition-shadow duration-300
                  "
                >
                  <div
                    className="
                      rounded-2xl overflow-hidden
                      h-56 md:h-64
                      transform group-hover:scale-[1.02]
                      transition-transform duration-300
                    "
                  >
                    <video
                      src={storyVideos.s1}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Timeline bar */}
                <div className="mt-3">
                  <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 bg-cyan-400/80" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                    <span>Complexity ↑</span>
                    <span>Clarity enabled</span>
                    <span>0–10s</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Data is the New Blueprint */}
      <Section
        id="data-blueprint"
        title="Data is the New Blueprint"
        kicker="Digital foundations"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left: Video – Segment 2 */}
          <div className="rounded-2xl overflow-hidden bg-black/40 border border-cyan-500/40 shadow-[0_0_40px_rgba(56,189,248,0.45)]">
            <video
              src={storyVideos.s2}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4">
            <p className="text-white/80 text-sm md:text-base">
              Data is the new blueprint — long before plant arrives on site,
              models, programmes and quantities determine what is possible.
            </p>
            <ul className="space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Centralised project information and traceable decisions.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Design, quantities and programme linked from the outset.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Risks understood and mitigated before construction starts.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* AI Estimating & Commercial Intelligence */}
      <Section
        id="ai-estimating"
        title="AI Estimating & Commercial Intelligence"
        kicker="Pricing with confidence"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left: Text */}
          <div className="space-y-4">
            <p className="text-white/80 text-sm md:text-base">
              AI-supported estimating helps you move faster without sacrificing rigour.
              We still apply engineering judgment — we just get to the right answer quicker.
            </p>
            <ul className="space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Automated take-offs aligned to the method of construction.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Benchmarking, sensitivities and risk allowances in minutes.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-300" />
                <span>Commercial confidence from first proposal to final account.</span>
              </li>
            </ul>
          </div>

          {/* Right: Video – Segment 3 */}
          <div className="rounded-2xl overflow-hidden bg-black/40 border border-cyan-500/40 shadow-[0_0_40px_rgba(56,189,248,0.45)]">
            <video
              src={storyVideos.s3}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        title="Services built for main contractors & developers"
        kicker="What we do"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programmes & Tools */}
      <Section
        id="programmes"
        title="Programme development, tracking & 4D/5D"
        kicker="Controls that drive performance"
      >
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Controls & Reporting */}
          <Card className={`${brand.ring} ${brand.panel} rounded-2xl`}>
            <CardHeader>
              <CardTitle className="text-white">Controls & Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white/80 text-sm">
                {[
                  "WBS setup, coding & calendars across P6/MSP/Synchro",
                  "EVM and S-curve dashboards; progress and look-aheads",
                  "Change control aligned to NEC events and CEAs",
                  "Cost loading and 5D cashflow; procurement linking",
                ].map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80">
                    <t.icon className="h-4 w-4" />
                    <span className="text-sm">{t.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample 4D/5D Clip – MINI VIADUCT VIDEO */}
          <Card className={`${brand.ring} ${brand.panel} rounded-2xl`}>
            <CardHeader>
              <CardTitle className="text-white">Sample 4D/5D Clip</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="
                  rounded-2xl
                  bg-gradient-to-br from-cyan-500/60 via-sky-500/50 to-blue-500/60
                  p-[2px]
                  shadow-[0_0_30px_rgba(56,189,248,0.45)]
                  hover:shadow-[0_0_50px_rgba(56,189,248,0.9)]
                  transition-shadow duration-300
                "
              >
                <div className="rounded-2xl overflow-hidden h-56 md:h-64">
                  <video
                    src={storyVideos.s4}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 text-white/70 text-sm">Example 4D sequence</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Quality */}
      <Section id="quality" title="Quality & close-out you can trust" kicker="Assurance">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "ITPs & Records",
              d: "Discipline-specific ITPs, hold/witness points, checklists and test records prepared to ISO 9001 & client specs.",
            },
            {
              t: "Digital Handover",
              d: "Drawings (redlines / as-builts), certificates, concrete pour records and delivery tickets, and COBie/asset data — organised in an indexed handover room for streamlined client acceptance.",
            },
            {
              t: "Safety & Compliance",
              d: "WPPs, RAMS, lift plans, methodology development, permits and competence matrices.",
            },
          ].map((q, i) => (
            <Card key={i} className={`${brand.ring} ${brand.panel} rounded-2xl`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{q.t}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{q.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Compliance & Accreditations */}
      <Section
        id="accreditations"
        title="Compliance, Accreditation & Assurance"
        kicker="Standards you can trust"
      >
        <div className="space-y-6 text-white/80 text-sm md:text-base">
          <p>
            AXYCAD maintains rigorous standards across health &amp; safety, quality,
            sustainability, social value and data protection — ensuring that every
            project is delivered responsibly, transparently and to the highest
            professional level.
          </p>

          {/* Accreditation Logos Strip */}
          <div className="flex flex-wrap items-center gap-6 mt-6 opacity-90">
            <img
              src={accreditationLogos.constructionline}
              alt="Constructionline Gold"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.ssip}
              alt="SSIP Once For All"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.socialValue}
              alt="Social Value"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.scssSilver}
              alt="Supply Chain Sustainability School Silver"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.disabilityConfident}
              alt="Disability Confident Committed"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.risqs}
              alt="RISQS Registered Supplier"
              className="h-12 w-auto"
            />
            <img
              src={accreditationLogos.ico}
              alt="ICO Registered"
              className="h-12 w-auto"
            />
          </div>

          {/* Descriptions */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Constructionline Gold Member</h3>
              <p>
                Verified to enhanced prequalification standards covering health &amp;
                safety, quality, environmental management, social value and
                governance.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">SSIP – Once For All Health &amp; Safety</h3>
              <p>
                Certified under SSIP Core Criteria and CDM 2015 as a contractor
                with 5+ employees.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Social Value Certification</h3>
              <p>
                Demonstrates our commitment to community benefit, ethical
                procurement and local impact.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">
                Supply Chain Sustainability School — Silver
              </h3>
              <p>
                Recognition of our sustainability, carbon awareness and
                responsible sourcing capabilities.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Disability Confident Committed</h3>
              <p>
                Supporting inclusive recruitment, equal opportunity and
                accessible workplace practices.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">RISQS Registered (Audit Submitted)</h3>
              <p>
                Registered rail supplier with full audit submitted and
                progressing towards accreditation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">ICO Registered</h3>
              <p>
                Fully compliant with UK GDPR for secure and lawful handling of
                project and personal data.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Early Contractor Involvement */}
      <Section
        id="eci"
        title="Early Contractor Involvement"
        kicker="Shaping decisions earlier"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left: Video */}
          <div className="rounded-2xl overflow-hidden bg-black/40 border border-emerald-400/50 shadow-[0_0_40px_rgba(16,185,129,0.45)]">
            <video
              src={storyVideos.s5}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4">
            <p className="text-white/80 text-sm md:text-base">
              Early contractor involvement brings buildability, programme and
              logistics thinking into the room while designs are still flexible —
              not once they're fixed.
            </p>
            <ul className="space-y-2 text-white/70 text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-emerald-300" />
                <span>Sequencing and temporary works input before final design.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-emerald-300" />
                <span>Realistic programmes and logistics plans from day one.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-emerald-300" />
                <span>Risk and value engineering embedded early, not bolted on.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" title="Selected experience" kicker="Case studies">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              h: "HS2 — FRC & Temporary Works",
              p: "FRC works and associated TWD – from pile caps, capping beams, abutments, suspended slabs, decks, ITP packs and handover packs (QRPs / redline drawings / as-builts).",
            },
            {
              h: "National Highways Bridges & Footbridges",
              p: "Early contractual involvement – take-offs, BoQs, construction programmes, logistics and buildability plans, review and RFI of the permanent design to improve buildability, programme and reduce H&S risks. VR for structure packages with logistics modelling and risk allowances.",
            },
            {
              h: "Data Centre — Programme & QA",
              p: "Construction programme, coordination reviews and digital QA for right-first-time delivery, 4D sequencing and resource allocation/planning.",
            },
          ].map((cs, i) => (
            <Card key={i} className={`${brand.ring} ${brand.panel} rounded-2xl`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{cs.h}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{cs.p}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
   {/* Community */}
<Section id="community" title="Community" kicker="Together for Anisia">
  <div
    className="
      relative max-w-5xl mx-auto
      rounded-3xl overflow-hidden
      border border-cyan-500/25
      bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
      shadow-[0_24px_70px_rgba(15,23,42,0.9)]
    "
  >
    {/* soft cyan glow */}
    <div
      className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_60%)]
      "
    />

    <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center p-8 md:p-10">
      {/* LEFT SIDE – TEXT & CTA */}
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300/80 uppercase mb-2">
            Building Hope
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Supporting Batten Disease Awareness
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
            AXYCAD stands alongside Anisia and her family in raising awareness and
            vital funds for Batten Disease. Your support helps fund treatment,
            research and specialist care.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.justgiving.com/crowdfunding/togetherforanisia?utm_term=PN8gV4Bkx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
                bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400
                text-slate-950 font-semibold
                rounded-full px-8 py-2.5
                shadow-lg shadow-cyan-500/50
                hover:shadow-cyan-400/90 hover:-translate-y-[2px]
                active:translate-y-0
                transition-all duration-200
              "
            >
              Donate Today
            </Button>
          </a>

          <p className="text-xs md:text-sm text-white/60 max-w-xs">
            100% of donations go to Anisia&apos;s treatment and Batten Disease support.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — CLICKABLE LOGO */}
      <div className="flex justify-center md:justify-end">
        <a
          href="https://www.justgiving.com/crowdfunding/togetherforanisia?utm_term=PN8gV4Bkx"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/assets/building-hope.png"
            alt="Building Hope - Batten Disease Awareness"
            className="
              w-full max-w-xs md:max-w-sm
              rounded-2xl
              shadow-lg shadow-cyan-500/60
              hover:scale-[1.03]
              transition-transform duration-300
            "
          />
        </a>
      </div>

    </div>
  </div>
</Section>
      {/* Contact (with REEL beside the form, portrait) */}
      <Section id="contact" title="Tell us about your project" kicker="Contact">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Form */}
          <Card className={`${brand.ring} ${brand.panel} rounded-2xl`}>
            <CardHeader>
              <CardTitle className="text-white">Request a proposal</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={handleEnquirySubmit}>
                <input
                  name="name"
                  className="
                    rounded-xl
                    bg-slate-900/40
                    border border-white/20
                    px-4 py-3
                    text-white
                    placeholder-white/50
                    outline-none
                    focus:border-cyan-400/80
                    focus:ring-2 focus:ring-cyan-400/60
                    transition-colors
                  "
                  placeholder="Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="
                    rounded-xl
                    bg-slate-900/40
                    border border-white/20
                    px-4 py-3
                    text-white
                    placeholder-white/50
                    outline-none
                    focus:border-cyan-400/80
                    focus:ring-2 focus:ring-cyan-400/60
                    transition-colors
                  "
                  placeholder="Email"
                  required
                />
                <input
                  name="company"
                  className="
                    rounded-xl
                    bg-slate-900/40
                    border border-white/20
                    px-4 py-3
                    text-white
                    placeholder-white/50
                    outline-none
                    focus:border-cyan-400/80
                    focus:ring-2 focus:ring-cyan-400/60
                    transition-colors
                  "
                  placeholder="Company"
                />
                <textarea
                  name="message"
                  rows={5}
                  className="
                    rounded-xl
                    bg-slate-900/40
                    border border-white/20
                    px-4 py-3
                    text-white
                    placeholder-white/50
                    outline-none
                    focus:border-cyan-400/80
                    focus:ring-2 focus:ring-cyan-400/60
                    transition-colors
                  "
                  placeholder="Tell us about your scope (programme, estimating, TWD, QA, etc.)"
                />
                <Button
                  type="submit"
                  className={`${brand.accentBg} text-slate-950 rounded-xl flex items-center gap-2`}
                >
                  Submit
                </Button>
              </form>
              <p className="mt-3 text-xs text-white/50">
                Submitting opens your email client to send your enquiry directly to{" "}
                {RECIPIENTS.join(" & ")}.
              </p>
            </CardContent>
          </Card>

          {/* Right: Contact details + Portrait Reel stacked */}
          <div className="grid gap-4">
            <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
              <div className="text-white/70 text-sm">Direct</div>
              <div className="mt-2 flex items-center gap-2 text-white">
                <Mail className="h-4 w-4" /> office@axycad.co.uk
              </div>
              <div className="mt-1 flex items-center gap-2 text-white">
                <Phone className="h-4 w-4" /> +44 7403 831 178
              </div>
              <div className="mt-1 flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4" /> Northamptonshire, United Kingdom
              </div>
            </div>

            {/* Landscape Reel */}
            <Card className={`${brand.ring} ${brand.panel} rounded-2xl`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="h-5 w-5" /> From Vision to Handover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br from-cyan-500/60 via-sky-500/50 to-blue-500/60
                    p-[2px]
                    shadow-[0_0_30px_rgba(56,189,248,0.45)]
                    hover:shadow-[0_0_50px_rgba(56,189,248,0.9)]
                    transition-shadow duration-300
                  "
                >
                  <div className="rounded-2xl overflow-hidden h-40 md:h-52">
                    <video
                      src={reelVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <p className="mt-2 text-xs text-white/60">
                  AXYCAD — supporting your project from first sketch to digital handover.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <Logo />
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} AXYCAD Ltd. All rights reserved.
          </p>
          <div className="text-white/50 text-xs">Privacy • Terms • Cookies</div>
        </div>
      </footer>
    </div>
  );
}
