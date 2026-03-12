import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Droplets, Hammer, Mountain, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function BMWWGCWebsite() {
  const [activePage, setActivePage] = useState("home");

  const navItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: Droplets,
      title: "Water Supply Infrastructure",
      short: "Reliable water systems for communities, institutions, and industrial sites.",
      desc: "We deliver end-to-end civil works for water supply infrastructure including pipelines, reservoirs, pumping stations, distribution lines, intake structures, and supporting site works. Our focus is on durability, functionality, and long-term service performance.",
      points: [
        "Pipeline trenching and installation",
        "Reservoir and tank civil works",
        "Pump station and water point construction",
        "Urban, rural, and industrial water projects",
      ],
    },
    {
      icon: Hammer,
      title: "Civil Construction",
      short: "Strong execution for foundational and structural civil works.",
      desc: "From site preparation to concrete works and infrastructure support packages, BM WWGC executes civil construction with engineering discipline and field control. We approach every project with a practical delivery mindset, high workmanship standards, and clear operational accountability.",
      points: [
        "Earthworks and grading",
        "Concrete and structural packages",
        "Drainage and utility civil works",
        "Site preparation and access works",
      ],
    },
    {
      icon: Mountain,
      title: "Mining Support Works",
      short: "Civil and water-related works tailored for demanding mining environments.",
      desc: "Mining operations require rugged infrastructure and dependable site support. We provide civil works that help mining environments operate more efficiently, including access support, water-related infrastructure, heavy-duty site preparation, and operational civil packages built for difficult terrain and high-use conditions.",
      points: [
        "Mine site preparation and support works",
        "Water access and distribution systems",
        "Access roads and heavy-duty civil packages",
        "Operational infrastructure in remote environments",
      ],
    },
  ];

  const strengths = [
    "Engineering-led execution",
    "Reliable field delivery",
    "Safety and compliance focus",
    "Water-sector specialization",
    "Heavy-duty site capability",
    "Built for long-term impact",
  ];

  const projectPhotos = [
    {
      title: "Regional Water Pipeline Works",
      category: "Water Supply",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      desc: "Sample project imagery representing pipeline installation, trenching, and large-scale water infrastructure deployment.",
    },
    {
      title: "Reservoir & Utility Construction",
      category: "Civil Construction",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      desc: "Representative site visuals showing reinforced civil works, utility support structures, and project-area development.",
    },
    {
      title: "Mining Site Support Zone",
      category: "Mining",
      image:
        "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
      desc: "Sample imagery for mining-related infrastructure support, rugged terrain operations, and heavy-duty site work.",
    },
    {
      title: "Pump Station & Water Access",
      category: "Water Infrastructure",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      desc: "Example visual direction for pumping systems, access structures, and civil works that support water distribution reliability.",
    },
    {
      title: "Industrial Groundworks Package",
      category: "Construction",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      desc: "Representative image for excavation, preparation, access shaping, and durable civil execution on demanding sites.",
    },
    {
      title: "Remote Operations Infrastructure",
      category: "Mining Support",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      desc: "A sample visual showing the kind of remote-environment support projects BM WWGC can position itself to deliver.",
    },
  ];

  const projectPhases = [
    {
      title: "01. Planning & Site Review",
      desc: "We begin with site understanding, technical scope review, constraints analysis, and project execution planning.",
    },
    {
      title: "02. Mobilization & Ground Execution",
      desc: "Our teams move into the field with clear work packages, resource discipline, and operational coordination.",
    },
    {
      title: "03. Quality, Safety & Delivery",
      desc: "Execution is reinforced by workmanship checks, safety awareness, progress control, and completion accountability.",
    },
  ];

  const stats = useMemo(
    () => [
      ["Core Sectors", "Water, Construction, Mining"],
      ["Execution Style", "Practical and engineering-led"],
      ["Brand Promise", "Strong infrastructure, built to last"],
    ],
    []
  );

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutPage strengths={strengths} setActivePage={setActivePage} />;
      case "services":
        return <ServicesPage services={services} setActivePage={setActivePage} />;
      case "projects":
        return <ProjectsPage projectPhotos={projectPhotos} projectPhases={projectPhases} />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return (
          <HomePage
            services={services}
            stats={stats}
            strengths={strengths}
            setActivePage={setActivePage}
            projectPhotos={projectPhotos}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => setActivePage("home")} className="flex items-center gap-4 text-left">
            <div className="relative flex h-14 w-16 items-center justify-center overflow-hidden rounded-2xl bg-[#0A1F33] shadow-lg">
              <span className="text-3xl font-black tracking-tight text-white">BM</span>
              <div className="absolute left-[-10%] top-1/2 h-3 w-[120%] -translate-y-1/2 -rotate-12 rounded-full bg-gradient-to-r from-[#007BAA] via-sky-300 to-[#0A1F33]" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-black sm:text-xl">BELETE MEGERSA WWGC</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2B2E34] sm:text-xs">
                Shaping the Ground. Securing the Future.
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActivePage(item.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activePage === item.key
                    ? "bg-[#0A1F33] text-white"
                    : "text-[#2B2E34] hover:bg-slate-100 hover:text-[#007BAA]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {renderPage()}

      <footer className="bg-black py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} Belete Megersa WWGC. All rights reserved.</div>
          <div className="font-semibold uppercase tracking-[0.18em] text-white/90">Shaping the Ground. Securing the Future.</div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ services, stats, strengths, setActivePage, projectPhotos }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1F33]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,123,170,0.22),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Civil Construction • Water Supply • Mining
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Building essential infrastructure that powers communities and industry.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Belete Megersa WWGC delivers field-ready civil construction services with a strong focus on water supply projects and mining support works. Our approach combines engineering discipline, site reliability, and long-term durability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setActivePage("services")}
                className="rounded-2xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-black shadow-xl transition hover:-translate-y-0.5"
              >
                Explore Services
              </button>
              <button
                onClick={() => setActivePage("projects")}
                className="rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#007BAA]">Core Sector</div>
                  <div className="mt-3 text-2xl font-black text-[#0A1F33]">Water Supply</div>
                  <p className="mt-2 text-sm leading-6 text-[#2B2E34]">
                    Pipelines, water systems, reservoirs, pumping infrastructure, and supporting civil works.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#D4AF37] p-6 text-black">
                  <div className="text-sm font-bold uppercase tracking-[0.22em]">Operational Focus</div>
                  <div className="mt-3 text-2xl font-black">Mining Support</div>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    Rugged execution for high-demand environments requiring precision and resilience.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#007BAA] p-6 text-white sm:col-span-2">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-100">Brand Promise</div>
                  <div className="mt-3 text-3xl font-black">Shaping the Ground. Securing the Future.</div>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-sky-50/90">
                    Every project is built to serve people, strengthen operations, and stand up to real-world conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3 lg:px-8">
          {stats.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#007BAA]">{title}</div>
              <p className="mt-3 text-base leading-7 text-[#2B2E34]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#007BAA]">Welcome</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0A1F33] md:text-5xl">
              A modern infrastructure brand built around strength, discipline, and impact.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#2B2E34]">
              BM WWGC is positioned as a dependable civil construction company serving water supply and mining-related infrastructure needs. The brand identity communicates mass, movement, and resilience — aligning with the company’s mission to shape the ground and secure the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setActivePage("about")}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0A1F33] px-5 py-3 text-sm font-bold text-white"
              >
                Learn About Us <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setActivePage("contact")}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-[#0A1F33]"
              >
                Contact BM WWGC <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#D4AF37]">Why BM WWGC</div>
            <div className="mt-5 grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 text-[#007BAA]" size={18} />
                  <div className="text-base font-semibold text-[#2B2E34]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#007BAA]">Featured Services</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0A1F33] md:text-5xl">
                Specialized capability across critical project environments.
              </h2>
            </div>
            <button
              onClick={() => setActivePage("services")}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black"
            >
              See All Services <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A1F33] text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-[#0A1F33]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#2B2E34]">{service.short}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1F33] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#D4AF37]">Selected Visuals</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Project imagery that matches the BM WWGC field identity.
              </h2>
            </div>
            <button
              onClick={() => setActivePage("projects")}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#0A1F33]"
            >
              Open Projects Page <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectPhotos.slice(0, 3).map((project) => (
              <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">{project.category}</div>
                  <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage({ strengths, setActivePage }) {
  return (
    <>
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#007BAA]">About BM WWGC</div>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-[#0A1F33] md:text-6xl">
              Infrastructure built with strength, purpose, and long-term responsibility.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#2B2E34]">
              Belete Megersa WWGC is a civil construction company focused on water supply projects, general civil works, and mining support infrastructure. The company brand communicates mass, reliability, and forward movement — reflecting the nature of the work and the environments it serves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#0A1F33]">Who We Are</h2>
            <p className="mt-6 text-lg leading-8 text-[#2B2E34]">
              BM WWGC is built around dependable site execution. We aim to deliver work that not only meets project requirements, but also creates lasting value for communities, clients, and operations. Our focus on water supply and mining support places us in sectors where infrastructure must perform under real conditions, not just on paper.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#2B2E34]">
              We believe strong infrastructure begins with strong groundwork — planning well, executing carefully, and maintaining discipline throughout delivery. This philosophy informs how we approach civil works, field coordination, workmanship, and project accountability.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A1F33] p-8 text-white shadow-xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#D4AF37]">What We Stand For</div>
            <div className="mt-6 grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-base font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#007BAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[2rem] bg-white/10 p-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-100">Vision</div>
            <p className="mt-4 text-lg leading-8 text-sky-50">
              To be recognized as a trusted infrastructure partner in construction, water systems, and mining support works.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-100">Mission</div>
            <p className="mt-4 text-lg leading-8 text-sky-50">
              To deliver durable civil works through technical discipline, field reliability, and a commitment to long-term performance.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-sky-100">Promise</div>
            <p className="mt-4 text-lg leading-8 text-sky-50">
              Every project is approached with seriousness, accountability, and a practical understanding of site realities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight text-[#0A1F33]">Interested in our capabilities?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B2E34]">
            Explore our services in more detail or start a conversation about your next infrastructure project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setActivePage("services")} className="rounded-2xl bg-[#0A1F33] px-6 py-4 text-sm font-bold text-white">
              View Services
            </button>
            <button onClick={() => setActivePage("contact")} className="rounded-2xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-black">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage({ services, setActivePage }) {
  return (
    <>
      <section className="bg-[#0A1F33] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#D4AF37]">Services</div>
            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              Purpose-built services for infrastructure that must perform.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              BM WWGC serves clients that need dependable delivery across water supply, civil construction, and mining support works. Each service line is approached with technical care, practical field thinking, and long-term durability in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="grid gap-8 rounded-[2rem] border border-slate-200 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl ${index === 1 ? "bg-[#D4AF37] text-black" : "bg-[#0A1F33] text-white"}`}>
                    <Icon size={30} />
                  </div>
                  <div className="mt-6 text-sm font-extrabold uppercase tracking-[0.22em] text-[#007BAA]">Service {index + 1}</div>
                  <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0A1F33]">{service.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-[#2B2E34]">{service.desc}</p>
                </div>
                <div className="rounded-[2rem] bg-[#F8FAFC] p-8">
                  <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#D4AF37]">Scope Includes</div>
                  <div className="mt-5 grid gap-4">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                        <CheckCircle2 className="mt-0.5 text-[#007BAA]" size={18} />
                        <div className="text-base font-semibold text-[#2B2E34]">{point}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#007BAA] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Need a tailored scope for your project?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-sky-50">
            We can position our services around your site, sector, and infrastructure priorities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setActivePage("projects")} className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#0A1F33]">
              See Projects
            </button>
            <button onClick={() => setActivePage("contact")} className="rounded-2xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-black">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage({ projectPhotos, projectPhases }) {
  return (
    <>
      <section className="bg-[#0A1F33] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#D4AF37]">Projects</div>
            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              Representative project visuals and delivery approach.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              This page includes sample project photography to help communicate BM WWGC’s field identity and sector focus. These visuals can later be replaced with real company project photos, case studies, and site documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectPhotos.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#007BAA]">{project.category}</div>
                  <h3 className="mt-3 text-2xl font-black text-[#0A1F33]">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#2B2E34]">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-[#007BAA]">How We Deliver</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0A1F33] md:text-5xl">
              A project method built for clarity, control, and dependable execution.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projectPhases.map((phase, index) => (
              <div key={phase.title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${index === 1 ? "bg-[#D4AF37] text-black" : "bg-[#0A1F33] text-white"}`}>
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-black text-[#0A1F33]">{phase.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#2B2E34]">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="bg-[#007BAA] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-extrabold uppercase tracking-[0.26em] text-sky-100">Contact</div>
            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              Start the conversation about your next project.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-50">
              Whether you need water supply infrastructure, civil construction services, or mining support works, BM WWGC is ready to discuss your project requirements and delivery expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-[2rem] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-black tracking-tight text-[#0A1F33]">Company Details</h2>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <MapPin className="mt-1 text-[#007BAA]" size={20} />
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">Office</div>
                  <div className="mt-2 text-lg font-semibold text-[#0A1F33]">Belete Megersa WWGC</div>
                  <div className="text-base text-[#2B2E34]">Addis Ababa, Ethiopia</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <Mail className="mt-1 text-[#007BAA]" size={20} />
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">Email</div>
                  <div className="mt-2 text-lg font-semibold text-[#0A1F33]">info@bmwwgc.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <Phone className="mt-1 text-[#007BAA]" size={20} />
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">Phone</div>
                  <div className="mt-2 text-lg font-semibold text-[#0A1F33]">+251 XX XXX XXXX</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0A1F33] p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black tracking-tight">Send an Inquiry</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
              This is a sample inquiry form layout for the website. Your developer can connect it to email, CRM, or a backend endpoint.
            </p>
            <div className="mt-8 grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none" placeholder="Full name" />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none" placeholder="Email address" />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none" placeholder="Company / organization" />
              <textarea className="min-h-[160px] rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none" placeholder="Tell us about your project" />
              <button className="rounded-2xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-black">Submit Inquiry</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
