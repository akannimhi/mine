/* ===== DATA ===== */
const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Services", "Contact"];

const SKILLS = [
  { name: "JavaScript", level: 92, color: "#F7DF1E" },
  { name: "css", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 80, color: "#3178C6" },
  { name: "Node.js", level: 82, color: "#339933" },
  { name: "HTML", level: 95, color: "#E34F26" },

];

const PROJECTS = [
  { title: "AI Chatbot", desc: "Full-stack AI-powered assistant with real-time streaming responses, context memory, and multi-model support.", tags: ["React", "Node.js", "OpenAI", "WebSockets"], color: "#A855F7", icon: "🤖" },
  { title: "Banking App", desc: "Secure digital banking platform with transaction history, fund transfers, and real-time notifications.", tags: ["React", "Express.js", "MongoDB", "JWT"], color: "#22D3EE", icon: "🏦" },
  { title: "E-commerce Platform", desc: "Scalable online store with cart management, Stripe payments, order tracking, and admin dashboard.", tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"], color: "#F59E0B", icon: "🛍️" },
  { title: "Hospital Website", desc: "Patient management system with appointment booking, doctor profiles, and medical records portal.", tags: ["React", "Node.js", "PostgreSQL", "JWT"], color: "#10B981", icon: "🏥" },
  { title: "Portfolio Website", desc: "Futuristic developer portfolio with animated sections, dark mode, and full CMS backend.", tags: ["React", "Framer Motion", "Node.js", "MongoDB"], color: "#EC4899", icon: "💼" },
  { title: "Task Manager", desc: "Kanban-style productivity tool with drag-and-drop, team collaboration, and deadline tracking.", tags: ["React", "Redux", "Express.js", "Socket.io"], color: "#6366F1", icon: "✅" },
];

const EXPERIENCE = [
  { year: "2024 – Present", role: "Senior Frontend Developer", company: "TechVerse Ltd", desc: "Led development of enterprise React applications. Integrated AI features and improved performance by 40%." },
  { year: "2022 – 2024", role: "Full-Stack Developer", company: "DevCore Agency", desc: "Built and deployed 15+ client web apps using the MERN stack. Owned entire product lifecycle from design to deployment." },
  { year: "2021 – 2022", role: "Junior Web Developer", company: "Startify Inc.", desc: "Developed responsive UIs and REST APIs for startup products. Learned agile workflow and CI/CD practices." },
  { year: "2020 – 2021", role: "Freelance Developer", company: "Self-Employed", desc: "Completed 30+ freelance projects for clients across Africa and Europe covering e-commerce and SaaS tools." },
];

const SERVICES = [
  { icon: "⚡", title: "Frontend Dev", desc: "Blazing-fast, pixel-perfect UIs built with React and modern CSS.", color: "#22D3EE" },
  { icon: "🖥️", title: "Backend Dev", desc: "Scalable APIs and server-side systems with Node.js and MongoDB.", color: "#A855F7" },
  { icon: "🤖", title: "AI Integration", desc: "Embed LLMs, chatbots, and smart features into your product.", color: "#EC4899" },
  { icon: "🎨", title: "UI/UX Design", desc: "Stunning interfaces that are both beautiful and highly usable.", color: "#F59E0B" },
  { icon: "📱", title: "Responsive Design", desc: "Layouts that look perfect on every screen size and device.", color: "#10B981" },
  { icon: "🚀", title: "Performance Tuning", desc: "Audit, optimize, and supercharge your existing web application.", color: "#6366F1" },
];

const TESTIMONIALS = [
  { name: "Sarah K.", role: "CEO, NovaTech", text: "Absolutely exceptional work. Our platform launched ahead of schedule with zero bugs. Will hire again without hesitation.", stars: 5 },
  { name: "James O.", role: "CTO, FinEdge", text: "The AI chatbot he built transformed our customer support. Response times dropped by 70%.", stars: 5 },
  { name: "Amara D.", role: "Founder, ShopNow", text: "Professional, communicative, and incredibly talented. Delivered a full e-commerce platform in 3 weeks.", stars: 5 },
];

/* ===== SCROLL TO ===== */
function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

/* ===== NAV ===== */
const navLinks = document.getElementById('navLinks');
NAV_LINKS.forEach(n => {
  const btn = document.createElement('button');
  btn.className = 'nav-btn';
  btn.textContent = n;
  btn.onclick = () => scrollTo(n);
  navLinks.appendChild(btn);
});

/* ===== ACTIVE NAV ON SCROLL ===== */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  NAV_LINKS.forEach(n => {
    const el = document.getElementById(n.toLowerCase());
    if (el && scrollY >= el.offsetTop) {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      const btns = document.querySelectorAll('.nav-btn');
      const idx = NAV_LINKS.indexOf(n);
      if (btns[idx]) btns[idx].classList.add('active');
    }
  });
});

/* ===== TYPEWRITER ===== */
const strings = ["Frontend Developer", "Programmer", "Backend developer", "UI/UX Designer"];
let sIdx = 0, charIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');
function typeStep() {
  const cur = strings[sIdx];
  if (!deleting) {
    tw.textContent = cur.slice(0, charIdx++);
    if (charIdx > cur.length) { deleting = true; setTimeout(typeStep, 1800); return; }
  } else {
    tw.textContent = cur.slice(0, charIdx--);
    if (charIdx < 0) { deleting = false; sIdx = (sIdx + 1) % strings.length; charIdx = 0; }
  }
  setTimeout(typeStep, deleting ? 45 : 80);
}
typeStep();

/* ===== SKILLS ===== */
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach((s, i) => {
  skillsGrid.innerHTML += `
      <div class="skill-row" data-level="${s.level}" data-color="${s.color}" data-delay="${i * 80}">
        <div class="skill-header">
          <span class="skill-name">${s.name}</span>
          <span style="font-size:13px;font-weight:700;color:${s.color};">${s.level}%</span>
        </div>
        <div class="skill-track">
          <div class="skill-fill" style="background:linear-gradient(90deg,${s.color}99,${s.color});box-shadow:0 0 10px ${s.color}88;transition-delay:${i * 80}ms;"></div>
        </div>
      </div>`;
});

/* ===== PROJECTS ===== */
let activeFilter = 'All';
const allTags = ['All', ...new Set(PROJECTS.flatMap(p => p.tags))].slice(0, 7);
const filterBar = document.getElementById('filterBar');
const projectsGrid = document.getElementById('projectsGrid');

function renderFilters() {
  filterBar.innerHTML = '';
  allTags.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (t === activeFilter ? ' active' : '');
    btn.textContent = t;
    btn.onclick = () => { activeFilter = t; renderFilters(); renderProjects(); };
    filterBar.appendChild(btn);
  });
}

function renderProjects() {
  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(activeFilter));
  projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card" style="--pc:${p.color};"
        onmouseenter="this.style.borderColor='${p.color}66';this.style.boxShadow='0 16px 40px ${p.color}22';"
        onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)';this.style.boxShadow='none';">
        <div class="project-icon">${p.icon}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag" style="background:${p.color}18;color:${p.color};border:1px solid ${p.color}44;">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="#" class="project-link link-demo" style="color:${p.color};border-color:${p.color}66;">Live Demo ↗</a>
          <a href="#" class="project-link link-repo">GitHub →</a>
        </div>
      </div>`).join('');
}
renderFilters();
renderProjects();

/* ===== EXPERIENCE ===== */
const expList = document.getElementById('experienceList');
EXPERIENCE.forEach(e => {
  expList.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="card" style="flex:1;">
          <div class="timeline-year">${e.year}</div>
          <div class="timeline-role">${e.role}</div>
          <div class="timeline-company">${e.company}</div>
          <p class="timeline-desc">${e.desc}</p>
        </div>
      </div>`;
});

/* ===== SERVICES ===== */
const servicesGrid = document.getElementById('servicesGrid');
SERVICES.forEach(s => {
  servicesGrid.innerHTML += `
      <div class="card service-card">
        <div class="service-icon">${s.icon}</div>
        <div class="service-title" style="color:${s.color};">${s.title}</div>
        <p class="service-desc">${s.desc}</p>
      </div>`;
});

/* ===== TESTIMONIALS ===== */
let tIdx = 0;
function renderTestimonial() {
  const t = TESTIMONIALS[tIdx];
  document.getElementById('tText').textContent = t.text;
  document.getElementById('tStars').textContent = '★'.repeat(t.stars);
  document.getElementById('tName').textContent = t.name;
  document.getElementById('tRole').textContent = t.role;
  document.querySelectorAll('.t-dot').forEach((d, i) => {
    d.className = 't-dot' + (i === tIdx ? ' active' : '');
    d.style.width = i === tIdx ? '24px' : '8px';
  });
}
const tDots = document.getElementById('tDots');
TESTIMONIALS.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 't-dot';
  dot.style.width = i === 0 ? '24px' : '8px';
  dot.onclick = () => { tIdx = i; renderTestimonial(); };
  tDots.appendChild(dot);
});
renderTestimonial();
setInterval(() => { tIdx = (tIdx + 1) % TESTIMONIALS.length; renderTestimonial(); }, 4000);

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('contactCard').innerHTML = `
      <div class="form-success">
        <div class="form-success-emoji">✅</div>
        <div class="form-success-title">Message sent!</div>
        <div class="form-success-sub">I'll get back to you soon.</div>
      </div>`;
  setTimeout(() => {
    document.getElementById('contactCard').innerHTML = `
        <form class="contact-form" id="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Tell me about your project..." rows="5" style="resize:vertical;" required></textarea>
          <button type="submit" class="form-submit">Send Message →</button>
        </form>`;
    document.getElementById('contactForm').addEventListener('submit', arguments.callee);
  }, 3000);
});

/* ===== FOOTER LINKS ===== */
const footerLinks = document.getElementById('footerLinks');
NAV_LINKS.forEach(n => {
  const btn = document.createElement('button');
  btn.className = 'footer-link';
  btn.textContent = n;
  btn.onclick = () => scrollTo(n);
  footerLinks.appendChild(btn);
});

/* ===== SCROLL ANIMATIONS ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      /* trigger skill bars */
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        const row = fill.closest('.skill-row');
        const level = row.dataset.level;
        fill.style.width = level + '%';
      });
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
