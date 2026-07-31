"use client";

import { useEffect, useMemo, useState } from "react";

type Category = "All" | "Backend" | "Frontend" | "Full-stack" | "Systems";

const projects = [
  {
    index: "01", category: "Backend" as Category, featured: true,
    title: "Tourism Hotel Booking API",
    description: "A modular Spring Boot platform covering the full booking lifecycle—from discovery and availability to payments, notifications, and role-aware operations.",
    tags: ["Java 21", "Spring Boot", "JWT", "MySQL", "Docker", "AWS"],
    link: "https://github.com/hamooda12/hotel-management-monolith-backend",
    detail: "REST API · Modular monolith",
    visual: "api"
  },
  {
    index: "02", category: "Frontend" as Category, featured: true,
    title: "Hotel Management Frontend",
    description: "A responsive React booking experience with authentication, hotel exploration, reservation flows, account bookings, admin tools, and refresh-token handling.",
    tags: ["React 19", "Vite", "Axios", "Vitest", "Docker"],
    link: "https://github.com/hamooda12/hotel-mangement",
    detail: "Web application · Frontend",
    visual: "hotel"
  },
  {
    index: "03", category: "Full-stack" as Category,
    title: "Library System",
    description: "A database-backed library application for managing books, authors, borrowers, loans, publishers, sales, authentication, and administrative reports.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    link: "https://github.com/hamooda12/Libary-System-website",
    detail: "Management system · Full-stack",
    visual: "library"
  },
  {
    index: "04", category: "Full-stack" as Category,
    title: "Generic CRUD Dashboard",
    description: "A configurable database dashboard that connects through supplied credentials, discovers tables, and provides streamlined create, read, update, and delete operations.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    link: "https://github.com/hamooda12/CRDUSystem",
    detail: "Database tool · Full-stack",
    visual: "crud"
  },
  {
    index: "05", category: "Frontend" as Category,
    title: "To-do List",
    description: "A focused task-management interface built to practice clear state transitions, direct manipulation, and practical front-end fundamentals.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/hamooda12/ToDoList",
    detail: "Productivity UI · Frontend",
    visual: "todo"
  },
  {
    index: "06", category: "Systems" as Category,
    title: "Master Linux",
    description: "A hands-on systems repository documenting Linux administration through labs, production-style incidents, networking, permissions, services, Bash tooling, and troubleshooting.",
    tags: ["Linux", "Bash", "Networking", "SSH", "UFW", "systemd"],
    link: "https://github.com/hamooda12/master-linux",
    detail: "Learning system · Operations",
    visual: "linux"
  }
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function ProjectVisual({ type }: { type: string }) {
  if (type === "api") return <div className="project-visual screenshot-visual"><img src="./project-hotel-api.png" alt="Postman response from the deployed Hotel Booking API"/><span>Actual API response · AWS deployment</span></div>;
  if (type === "hotel") return <div className="project-visual screenshot-visual hotel-shot"><img src="./project-hotel-frontend.png" alt="Hotel image used in the booking frontend"/><div className="hotel-ui"><small>HOTELS&nbsp;&nbsp; MY BOOKINGS&nbsp;&nbsp; SIGN IN</small><strong>Book your next stay.</strong><p>Discover hotels and rooms for every journey.</p><b>Search destinations →</b></div><span>Interface recreated from the project source</span></div>;
  if (type === "library") return <div className="project-visual real-library"><aside><b>Library</b><i>Dashboard</i><i>Books</i><i>Borrowers</i><i>Loans</i></aside><section><h5>Dashboard</h5><div><b>1,500<small>Total books</small></b><b>20<small>Available</small></b><b>32<small>Borrowers</small></b></div><p/><p/></section><span>Interface recreated from the project source</span></div>;
  if (type === "crud") return <div className="project-visual real-crud"><h5>Islamic Database Setup</h5><p>Connect your MySQL database</p><label>Database Host <i>localhost</i></label><label>Database Username <i>root</i></label><b>Connect to Database</b><span>Interface recreated from the project source</span></div>;
  if (type === "todo") return <div className="project-visual real-todo" dir="rtl"><h5>📿 قائمة المهام اليومية</h5><p>وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</p><div><label>عنوان المهمة <i>أدخل عنوان المهمة هنا...</i></label><label>تاريخ التسليم <i>2026 / 07 / 31</i></label></div><b>＋ إضافة المهمة</b><span>Interface recreated from the project source</span></div>;
  return <div className="project-visual linux-visual"><span>$ systemctl status app</span><span className="ok">● active (running)</span><span>$ ss -tulpn</span><span className="cursor">_</span></div>;
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState<Category>("All");
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);

  useEffect(() => {
    const saved = localStorage.getItem("hamad-theme") as "dark" | "light" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(saved ?? preferred);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("hamad-theme", theme); }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .1 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hamad Tarawa, home">HT<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
        <div className="header-actions"><span className="system-status"><i /> Systems operational</span><button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}><span>{theme === "dark" ? "Light" : "Dark"}</span><b aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</b></button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span /> Hebron, Palestine</p><h1>Hamad<br />Tarawa</h1><p className="role">Software Engineer <em>•</em> DevOps &amp; Application Security</p><p className="statement">I build secure backend systems<br />and reliable delivery pipelines.</p><div className="hero-actions"><a className="button primary" href="#work">View selected work <Arrow /></a><a className="button secondary" href="./Hamad_Tarawa_CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div></div>
        <div className="portrait-frame"><div className="corner tl"/><div className="corner tr"/><img src="./hamad-tarawa.jpg" alt="Portrait of Hamad Tarawa"/><div className="portrait-meta"><span><i/> Available for new opportunities</span><span className="signal" aria-hidden="true"><b/><b/><b/><b/><b/></span></div></div>
      </section>

      <section className="capability-rail" aria-label="Core capabilities"><div><span className="rail-icon">◒</span><strong>Java / Spring</strong></div><div><span className="rail-icon">◎</span><strong>React</strong></div><div><span className="rail-icon">◇</span><strong>Docker / AWS</strong></div><div><span className="rail-icon">⬡</span><strong>Linux / K8s Security</strong></div></section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading reveal"><div><span className="section-index">01 / Work</span><h2>Selected<br/><em>systems.</em></h2></div><p>Projects across product engineering, backend architecture, and production operations.</p></div>
        <div className="project-filters reveal" role="group" aria-label="Filter projects">{(["All", "Backend", "Frontend", "Full-stack", "Systems"] as Category[]).map(item => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? "06" : String(projects.filter(p => p.category === item).length).padStart(2,"0")}</span></button>)}</div>
        <div className="project-grid">{visibleProjects.map(project => <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.title}><div className="project-topline"><span>{project.index}</span><span>{project.detail}</span></div><ProjectVisual type={project.visual}/><div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>View repository <Arrow/></a></div></article>)}</div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-heading reveal"><div><span className="section-index">02 / Experience</span><h2>From code<br/>to <em>operations.</em></h2></div><p>I work across the path a change takes—from application design to secure delivery and runtime reliability.</p></div>
        <div className="experience-grid reveal"><div className="experience-aside"><span>Current focus</span><div className="orbit"><i/><b>BUILD<br/>SECURELY</b></div></div><article><div className="job-meta"><span>Current role</span><span>Hebron, Palestine</span></div><h3>DevOps Engineer</h3><h4>AileaSoft</h4><p>Working with Linux-based environments, application deployment, delivery workflows, containers, and the operational practices that connect development with reliable production systems.</p><div className="job-points"><span>01 <b>Application deployment</b></span><span>02 <b>Linux operations</b></span><span>03 <b>CI/CD workflows</b></span><span>04 <b>Security-first delivery</b></span></div></article></div>
        <div className="learning-line reveal"><span>Continuously learning</span><p>Kubernetes security · OWASP Top 10 · Gitleaks · SAST / DAST · Dependency scanning · Secure SDLC</p></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-heading reveal"><div><span className="section-index">03 / Capabilities</span><h2>Technical<br/><em>range.</em></h2></div><p>A software engineering foundation strengthened by practical cloud, Linux, and application-security work.</p></div>
        <div className="skill-matrix reveal">
          <div><span>01</span><h3>Backend</h3><p>Java · Spring Boot · Spring Data JPA · REST APIs · Spring Security · JWT · roles &amp; permissions · PHP</p></div>
          <div><span>02</span><h3>Frontend</h3><p>React · Vite · JavaScript · HTML · CSS · React Router · reusable components · API integration</p></div>
          <div><span>03</span><h3>Cloud &amp; DevOps</h3><p>AWS ECS · RDS · Load Balancer · Docker · Docker Compose · GitHub Actions · Render deployments</p></div>
          <div><span>04</span><h3>Linux</h3><p>Filesystems · permissions · processes · systemd · networking · SSH · UFW · Bash · production troubleshooting</p></div>
          <div><span>05</span><h3>AppSec</h3><p>OWASP Top 10 · Kubernetes security concepts · Gitleaks · SAST · DAST · dependency scanning</p></div>
          <div><span>06</span><h3>Architecture</h3><p>Modular monoliths · microservices · Eureka · API Gateway · service communication · design patterns</p></div>
        </div>
      </section>

      <section className="about-section section-pad">
        <div className="about-number">83<span>credits earned</span></div><div className="about-copy reveal"><span className="section-index">04 / Foundation</span><h2>Software engineering,<br/>grounded in <em>practice.</em></h2><p>I’m pursuing a B.Sc. in Software Engineering at Bethlehem University. My work combines formal study in software construction, data structures, databases, networks, operating systems, and UX with hands-on product and infrastructure projects.</p><div className="education"><span>2023 — Present</span><strong>Bethlehem University</strong><small>B.Sc. Software Engineering · Honors, Fall 2025</small></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-status"><i/> Available for software engineering and DevOps opportunities</div><div className="contact-main"><span>Let’s build something<br/>that holds up.</span><a href="mailto:hamadtarawah@gmail.com">hamadtarawah@gmail.com <Arrow/></a></div><div className="contact-links"><a href="https://github.com/hamooda12" target="_blank" rel="noreferrer">GitHub <Arrow/></a><a href="./Hamad_Tarawa_CV.pdf" download>Download résumé <span>↓</span></a><a href="#top">Back to top <span>↑</span></a></div></section>
      <footer><span>Hamad Tarawa © 2026</span><span>Designed with intent. Built for the web.</span></footer>
    </main>
  );
}
