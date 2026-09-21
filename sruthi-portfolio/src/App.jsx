import { useState, useEffect, useRef } from "react";
import profilePlaceholder from "./assets/profile.png";

/* ── DATA ──────────────────────────────────────────────────────
   Edit the content below to update the site. To use your own
   photo: drop a file named `profile.jpg` into src/assets/ and
   change the import above to:
     import profilePlaceholder from "./assets/profile.jpg";
------------------------------------------------------------- */

const NAME = "Sruthi Kothapalli";
const FULL_NAME = "Sruthi Kothapalli";
const ROLE = "Aspiring AI & Data Science Professional";
const PHONE = "+91 99894 45369";
const PHONE_RAW = "+919989445369";
const EMAIL = "sruthikottapalli4379@gmail.com";
const GITHUB_USER = "kothapallisruthi";
const GITHUB_URL = "https://github.com/kothapallisruthi";
const LINKEDIN_URL = "https://linkedin.com/in/sruthi-kothapalli";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Internships", href: "#internships" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>
    ),
  },
];

const SKILL_GROUPS = [
  { title: "Programming Languages", tags: ["Python", "Java (Basic)"] },
  { title: "Web Technologies", tags: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"] },
  { title: "Machine Learning & Data Science", tags: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Supervised Learning", "Unsupervised Learning"] },
  { title: "Soft Skills", tags: ["Problem Solving", "Communication", "Teamwork"] },
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology — Artificial Intelligence and Data Science",
    place: "Shri Vishnu Engineering College for Women, Bhimavaram",
    period: "2023 – 2027",
    detail: "CGPA: 8.6",
  },
  {
    degree: "Board of Intermediate Education",
    place: "Sri Chaitanya Junior College, Eluru",
    period: "2021 – 2023",
    detail: "Percentage: 88%",
  },
  {
    degree: "Board of Secondary Education — Class X",
    place: "Z.P.H High School, Chintapadu",
    period: "2020 – 2021",
    detail: "Percentage: 98%",
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Power System Fault Detection & Classification",
    description: "Machine learning models built with Python and Scikit-learn to classify power system faults, using preprocessing, feature extraction, and evaluation techniques. Achieved 95% accuracy in fault classification.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas", "Machine Learning"],
    emoji: "⚡",
    gradient: "linear-gradient(135deg,#0d1f2d,#123246 50%,#0d1f2d)",
    glow: "rgba(56,189,248,",
    github: "", // Add your GitHub repository URL here
    demo: "",   // Add your live demo URL here
  },
  {
    id: 2,
    title: "Sign Language Recognition System",
    description: "Real-time gesture recognition system built with OpenCV and machine learning, classifying hand signs accurately using computer vision techniques.",
    tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    emoji: "🤟",
    gradient: "linear-gradient(135deg,#062430,#0a3d4a 50%,#062430)",
    glow: "rgba(34,211,238,",
    github: "", // Add your GitHub repository URL here
    demo: "",   // Add your live demo URL here
  },
];

const INTERNSHIPS = [
  {
    title: "Artificial Intelligence & Cloud Internship",
    org: "IBM SkillsBuild, Edunet Foundation & AICTE",
    period: "4 Weeks",
    certificate: "https://drive.google.com/file/d/1aFfJVKZ45Z0GBOthwFxmWhSizJakSFXX/view?usp=drive_link",
  },
  {
    title: "Data Science & Data Engineering Internship",
    org: "Learned ETL, pipelines, and workflow fundamentals",
    period: "2 Months",
    certificate: "{https://drive.google.com/file/d/1mCMuwE_76NjyeeGEIiwIFJAEGqkKJFul/view?usp=drive_link",
  },
];

const CERTIFICATIONS = [
  { title: "Human Computer Interaction — NPTEL", link: "https://drive.google.com/file/d/1FchpT90FUw4fU4Q3Sbrj_Z-RonG7FHKP/view?usp=sharing" },
  { title: "Java (Basic) Certification", link: "https://drive.google.com/file/d/1bf_KTrGVwyqaik4NxocsZl03mCTb0_88/view?usp=drive_link" },
  { title: "National-Level Hackathon Participation", link: "https://drive.google.com/file/d/1WqP9tlsYCZDUljZDKg4HWWj4nT9wtRxB/view?usp=drive_link" },
  { title: "Smart Interviews Hive (Basic) Certification", link: "/certificates/smart-interviews-hive.pdf" },
];

/* ── STYLES ────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

*,*::before,*::after{box-sizing:border-box}
:root{
  --bg:#0a0e17;--bg2:#0d1320;--card:#111827;--card-h:#151f30;
  --acc:#22d3ee;--acc2:#67e8f9;--glow:rgba(34,211,238,.25);--glows:rgba(34,211,238,.5);
  --t1:#f1f5f9;--t2:#94a3b8;--tm:#4b5768;
  --bdr:rgba(34,211,238,.15);--bdrh:rgba(34,211,238,.45);
  --ok:#4ade80;
  --ff:'Poppins',sans-serif;--fb:'Inter',sans-serif;
  --nav:72px;--rad:8px;--rad2:14px;--rad3:20px;
  --tr:.3s cubic-bezier(.4,0,.2,1);
}
html{scroll-behavior:smooth}
body{font-family:var(--fb);background:var(--bg);color:var(--t1);line-height:1.65;overflow-x:hidden;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--acc);border-radius:99px}
::selection{background:var(--acc);color:#04141a}
a{color:inherit;text-decoration:none}
button{cursor:pointer;font-family:var(--fb);border:none;outline:none;background:none}
section{scroll-margin-top:var(--nav)}
.wrap{max-width:1160px;margin:0 auto;padding:0 2rem}

/* NAVBAR */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:var(--nav);transition:transform .4s cubic-bezier(.4,0,.2,1),background .3s,box-shadow .3s}
.nav--down{transform:translateY(-110%)}
.nav--scrolled{background:rgba(10,14,23,.9);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--bdr)}
.nav__inner{max-width:1160px;margin:0 auto;height:100%;padding:0 2rem;display:flex;align-items:center;gap:1.5rem}
.nav__logo{font-family:var(--ff);font-weight:800;font-size:1.2rem;color:var(--t1);cursor:pointer;white-space:nowrap}
.nav__logo span{color:var(--acc)}
.nav__links{display:flex;list-style:none;gap:.1rem;margin-left:auto}
.nav__link{font-family:var(--ff);font-weight:500;font-size:.85rem;letter-spacing:.02em;color:var(--t2);padding:.5rem .8rem;border-radius:var(--rad);transition:color var(--tr),background var(--tr);cursor:pointer}
.nav__link:hover,.nav__link.active{color:var(--t1);background:rgba(34,211,238,.1)}
.nav__burger{display:none;flex-direction:column;gap:5px;padding:6px;border-radius:var(--rad);margin-left:auto}
.nav__burger span{display:block;width:22px;height:2px;background:var(--t1);border-radius:2px;transition:transform .3s,opacity .3s}
.nav__burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav__burger.open span:nth-child(2){opacity:0}
.nav__burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.nav__mob{display:none;flex-direction:column;gap:.2rem;padding:0 2rem;background:rgba(10,14,23,.97);backdrop-filter:blur(16px);border-top:1px solid var(--bdr);max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1),padding .3s}
.nav__mob.open{max-height:420px;padding:1rem 2rem 1.5rem}
.nav__mob-link{font-family:var(--ff);font-size:1rem;font-weight:600;color:var(--t2);padding:.6rem 0;border-bottom:1px solid var(--bdr)}

/* HERO */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding:calc(var(--nav) + 3rem) 2rem 4rem}
.hero__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(34,211,238,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.04) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)}
.hero__orb1{position:absolute;width:480px;height:480px;border-radius:50%;filter:blur(90px);background:radial-gradient(circle,rgba(34,211,238,.22) 0%,transparent 70%);top:-120px;right:-100px}
.hero__orb2{position:absolute;width:380px;height:380px;border-radius:50%;filter:blur(90px);background:radial-gradient(circle,rgba(103,232,249,.14) 0%,transparent 70%);bottom:-60px;left:-100px}
.hero__inner{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:3rem;max-width:1160px;width:100%;margin:0 auto}
.hero__content{flex:1;max-width:560px}
.hero__eye{font-family:var(--ff);font-size:1.05rem;font-weight:600;color:var(--t1);margin-bottom:.3rem;opacity:0;animation:fadeUp .7s ease forwards .1s}
.hero__name{font-family:var(--ff);font-size:clamp(2.2rem,5vw,3.4rem);font-weight:800;line-height:1.1;color:var(--t1);margin:.2rem 0 .5rem;opacity:0;animation:fadeUp .7s ease forwards .2s}
.hero__role{font-family:var(--ff);font-size:1.3rem;font-weight:600;color:var(--t2);margin-bottom:1.2rem;opacity:0;animation:fadeUp .7s ease forwards .3s}
.hero__role b{color:var(--acc);font-weight:700}
.hero__desc{color:var(--t2);font-size:.98rem;max-width:480px;margin-bottom:1.6rem;opacity:0;animation:fadeUp .7s ease forwards .4s}
.hero__actions{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;opacity:0;animation:fadeUp .7s ease forwards .5s}
.hero__cta{display:inline-flex;align-items:center;gap:.5rem;background:var(--acc);color:#04141a;font-family:var(--ff);font-weight:700;font-size:.9rem;padding:.85rem 1.7rem;border-radius:99px;transition:transform var(--tr),box-shadow var(--tr)}
.hero__cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px var(--glows)}
.hero__soc{display:flex;gap:.6rem}
.hero__soc a{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid var(--bdr);color:var(--t2);transition:color var(--tr),border-color var(--tr),transform var(--tr)}
.hero__soc a:hover{color:var(--acc);border-color:var(--bdrh);transform:translateY(-2px)}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

.hero__art{position:relative;flex-shrink:0;width:340px;height:340px;display:flex;align-items:center;justify-content:center}
.hero__hex-glow{position:absolute;inset:-30px;border-radius:50%;background:radial-gradient(circle,var(--glow) 0%,transparent 70%);filter:blur(10px)}
.hero__hex{position:relative;width:100%;height:100%;clip-path:polygon(25% 4%,75% 4%,100% 50%,75% 96%,25% 96%,0% 50%);background:var(--card);border:2px solid var(--bdrh);box-shadow:0 0 60px var(--glow);overflow:hidden}
.hero__hex img{width:100%;height:100%;object-fit:cover;display:block}
.hero__badge{position:absolute;bottom:14px;right:-6px;display:flex;align-items:center;gap:6px;background:var(--card);border:1px solid var(--bdr);border-radius:99px;padding:5px 14px 5px 9px;font-size:.75rem;font-weight:500;color:var(--t2);box-shadow:0 6px 20px rgba(0,0,0,.4)}
.hero__dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 8px var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(.85)}}

/* SECTION HEADERS */
.sec{padding:6rem 2rem}
.sec-alt{background:var(--bg2)}
.sec-eye{font-family:var(--ff);font-size:.78rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--acc);text-align:center;margin-bottom:.6rem}
.sec-title{font-family:var(--ff);font-size:clamp(1.7rem,3.5vw,2.4rem);font-weight:800;text-align:center;color:var(--t1);margin-bottom:.7rem}
.sec-title span{color:var(--acc)}
.sec-sub{color:var(--t2);text-align:center;max-width:560px;margin:0 auto 3rem}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
.reveal.vis{opacity:1;transform:translateY(0)}

/* ABOUT */
.about__grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;max-width:1000px;margin:0 auto}
.about__text{color:var(--t2);font-size:1rem}
.about__stats{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.about__stat{background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad2);padding:1.3rem;text-align:center}
.about__stat b{display:block;font-family:var(--ff);font-size:1.7rem;font-weight:800;color:var(--acc)}
.about__stat span{color:var(--t2);font-size:.82rem}

/* SKILLS */
.skills__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem;max-width:1000px;margin:0 auto}
.skills__card{background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad2);padding:1.6rem}
.skills__card h3{font-family:var(--ff);font-size:1rem;font-weight:700;color:var(--t1);margin-bottom:1rem}
.skills__tags{display:flex;flex-wrap:wrap;gap:.5rem}
.skills__tag{font-size:.82rem;font-weight:500;color:var(--acc2);background:rgba(34,211,238,.08);border:1px solid var(--bdr);border-radius:99px;padding:.4rem .9rem}

/* EDUCATION */
.edu{max-width:760px;margin:0 auto;position:relative}
.edu::before{content:'';position:absolute;left:9px;top:8px;bottom:8px;width:2px;background:linear-gradient(var(--acc),transparent)}
.edu__item{position:relative;padding-left:2.6rem;margin-bottom:2rem}
.edu__item::before{content:'';position:absolute;left:2px;top:6px;width:18px;height:18px;border-radius:50%;background:var(--bg);border:3px solid var(--acc)}
.edu__item h4{font-family:var(--ff);font-size:1.02rem;font-weight:700;color:var(--t1)}
.edu__item p{color:var(--t2);font-size:.9rem;margin-top:.2rem}
.edu__period{display:inline-block;margin-top:.4rem;font-size:.78rem;color:var(--acc);font-weight:600}
.edu__detail{margin-top:.3rem;color:var(--acc2);font-size:.85rem;font-weight:600}

/* PROJECTS */
.proj__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.6rem;max-width:1000px;margin:0 auto}
.proj__card{background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad3);overflow:hidden;transition:transform var(--tr),border-color var(--tr)}
.proj__card:hover{transform:translateY(-6px);border-color:var(--bdrh)}
.proj__art{height:140px;display:flex;align-items:center;justify-content:center;font-size:3rem}
.proj__body{padding:1.5rem}
.proj__body h3{font-family:var(--ff);font-size:1.05rem;font-weight:700;color:var(--t1);margin-bottom:.5rem}
.proj__body p{color:var(--t2);font-size:.88rem;margin-bottom:1rem}
.proj__tech{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}
.proj__tech span{font-size:.72rem;color:var(--acc2);background:rgba(34,211,238,.08);border-radius:99px;padding:.25rem .7rem}
.proj__link{font-size:.85rem;font-weight:600;color:var(--acc)}

/* INTERNSHIPS */
.intern__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem;max-width:1000px;margin:0 auto}
.intern__card{background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad2);padding:1.6rem}
.intern__card h3{font-family:var(--ff);font-size:1rem;font-weight:700;color:var(--t1);margin-bottom:.4rem}
.intern__card p{color:var(--t2);font-size:.88rem}
.intern__period{display:inline-block;margin-top:.6rem;font-size:.76rem;font-weight:600;color:var(--acc);background:rgba(34,211,238,.08);border-radius:99px;padding:.3rem .8rem}

/* CERTIFICATIONS */
.certs{max-width:760px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.certs__item{display:flex;align-items:center;gap:.7rem;background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad);padding:1rem 1.2rem;color:var(--t2);font-size:.9rem}
.certs__item svg{flex-shrink:0;color:var(--acc)}

.card__actions{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap;margin-top:1rem}
.proj__link{display:inline-flex;align-items:center;gap:.25rem;font-size:.85rem;font-weight:600;color:var(--acc);padding:.45rem .8rem;border:1px solid var(--bdr);border-radius:999px;transition:all var(--tr)}
.proj__link:hover{border-color:var(--bdrh);background:rgba(34,211,238,.08);transform:translateY(-1px)}
.proj__link--outline{color:var(--t1)}
.proj__hint{font-size:.75rem;color:var(--tm)}
.intern__bottom{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-top:.6rem}
.view-btn{display:inline-flex;align-items:center;justify-content:center;gap:.25rem;padding:.45rem .8rem;border-radius:999px;border:1px solid var(--bdr);color:var(--acc);font-size:.75rem;font-weight:600;white-space:nowrap;transition:all var(--tr)}
.view-btn:hover{border-color:var(--bdrh);background:rgba(34,211,238,.08);transform:translateY(-1px)}
.certs__item .view-btn{margin-left:auto}
@media(max-width:700px){.certs__item{flex-wrap:wrap}.certs__item .view-btn{margin-left:0;width:100%}}
/* CONTACT */
.contact__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;max-width:900px;margin:0 auto 2rem}
.contact__card{background:var(--card);border:1px solid var(--bdr);border-radius:var(--rad2);padding:1.6rem;text-align:center;transition:border-color var(--tr),transform var(--tr)}
.contact__card:hover{border-color:var(--bdrh);transform:translateY(-4px)}
.contact__icon{width:44px;height:44px;border-radius:50%;background:rgba(34,211,238,.1);color:var(--acc);display:flex;align-items:center;justify-content:center;margin:0 auto .8rem}
.contact__card h4{font-family:var(--ff);font-size:.85rem;color:var(--t2);margin-bottom:.3rem}
.contact__card p{color:var(--t1);font-size:.92rem;font-weight:600;word-break:break-word}

footer{padding:2rem;border-top:1px solid var(--bdr)}
.foot__inner{max-width:1160px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.foot__logo{font-family:var(--ff);font-weight:800;color:var(--t1)}
.foot__logo span{color:var(--acc)}
.foot__copy{color:var(--t2);font-size:.85rem}
.foot__soc{display:flex;gap:.5rem}
.foot__soc a{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;border:1px solid var(--bdr);color:var(--t2);transition:color var(--tr),border-color var(--tr)}
.foot__soc a:hover{color:var(--acc);border-color:var(--bdrh)}

@media (max-width:860px){
  .nav__links{display:none}
  .nav__burger{display:flex}
  .nav__mob{display:flex}
  .hero__inner{flex-direction:column;text-align:center}
  .hero__content{max-width:100%}
  .hero__actions{justify-content:center}
  .hero__desc{margin-left:auto;margin-right:auto}
  .hero__art{width:260px;height:260px;margin-top:1rem}
  .about__grid,.skills__grid,.proj__grid,.intern__grid,.contact__grid,.certs{grid-template-columns:1fr}
}
`;

/* ── HOOKS ─────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

/* ── NAVBAR ────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 200 && !open);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""} ${hidden ? "nav--down" : ""}`}>
      <div className="nav__inner">
        <span className="nav__logo" onClick={() => go("#home")}>Portfolio<span>.</span></span>
        <ul className="nav__links">
          {NAV_LINKS.map(l => (
            <li key={l.href} className="nav__link" onClick={() => go(l.href)}>{l.label}</li>
          ))}
        </ul>
        <button className={`nav__burger ${open ? "open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`nav__mob ${open ? "open" : ""}`}>
        {NAV_LINKS.map(l => (
          <div key={l.href} className="nav__mob-link" onClick={() => go(l.href)}>{l.label}</div>
        ))}
      </div>
    </nav>
  );
}

/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid"></div>
      <div className="hero__orb1"></div>
      <div className="hero__orb2"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eye">Hello, It's Me</p>
          <h1 className="hero__name">{NAME}</h1>
          <p className="hero__role">And I'm an <b>{ROLE}</b></p>
          <p className="hero__desc">
            Aspiring AI and Data Science professional skilled in Python, Machine Learning,
            and Data Analysis — seeking opportunities to apply innovative solutions and grow
            through research.
          </p>
          <div className="hero__actions">
            <a
              className="hero__cta"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View / Download CV ↗
            </a>
            <div className="hero__soc">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero__art">
          <div className="hero__hex-glow"></div>
          <div className="hero__hex">
            <img src={profilePlaceholder} alt={NAME} />
          </div>
          <div className="hero__badge"><span className="hero__dot"></span>Open to opportunities</div>
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT ─────────────────────────────────────────────────── */
function About() {
  const [ref, vis] = useReveal();
  return (
    <section id="about" className="sec">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">Get To Know</p>
        <h2 className="sec-title">About <span>Me</span></h2>
        <div className="about__grid">
          <p className="about__text">
            I'm {FULL_NAME}, a B.Tech student specializing in Artificial Intelligence
            and Data Science at Shri Vishnu Engineering College for Women, Bhimavaram.
            I work across the stack — from training machine learning models with Python
            and Scikit-learn to building MERN web applications — and I'm always looking
            for ways to turn data and code into solutions that matter.
          </p>
          <div className="about__stats">
            <div className="about__stat"><b>8.6</b><span>Current CGPA</span></div>
            <div className="about__stat"><b>2</b><span>Internships Completed</span></div>
            <div className="about__stat"><b>2</b><span>Major Projects</span></div>
            <div className="about__stat"><b>4</b><span>Certifications</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ────────────────────────────────────────────────── */
function Skills() {
  const [ref, vis] = useReveal();
  return (
    <section id="skills" className="sec sec-alt">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">What I Know</p>
        <h2 className="sec-title">My <span>Skills</span></h2>
        <p className="sec-sub">A snapshot of the languages, tools, and concepts I work with.</p>
        <div className="skills__grid">
          {SKILL_GROUPS.map(g => (
            <div key={g.title} className="skills__card">
              <h3>{g.title}</h3>
              <div className="skills__tags">
                {g.tags.map(t => <span key={t} className="skills__tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── EDUCATION ─────────────────────────────────────────────── */
function Education() {
  const [ref, vis] = useReveal();
  return (
    <section id="education" className="sec">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">Academics</p>
        <h2 className="sec-title">My <span>Education</span></h2>
        <div className="edu">
          {EDUCATION.map(e => (
            <div key={e.degree} className="edu__item">
              <h4>{e.degree}</h4>
              <p>{e.place}</p>
              <div className="edu__period">{e.period}</div>
              <div className="edu__detail">{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROJECTS / PORTFOLIO ─────────────────────────────────── */
function Portfolio() {
  const [ref, vis] = useReveal();
  return (
    <section id="portfolio" className="sec sec-alt">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">My Work</p>
        <h2 className="sec-title">My <span>Portfolio</span></h2>
        <p className="sec-sub">A couple of projects I've built and learned a lot from.</p>
        <div className="proj__grid">
          {PROJECTS.map(p => (
            <div key={p.id} className="proj__card">
              <div className="proj__art" style={{ background: p.gradient }}>{p.emoji}</div>
              <div className="proj__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="proj__tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="card__actions">
                  {p.github && p.github !== "#" && (
                    <a className="proj__link" href={p.github} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a className="proj__link proj__link--outline" href={p.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo ↗
                    </a>
                  )}
                  {!p.github && !p.demo && (
                    <span className="proj__hint">Add GitHub / Demo link</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── INTERNSHIPS ───────────────────────────────────────────── */
function Internships() {
  const [ref, vis] = useReveal();
  return (
    <section id="internships" className="sec">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">Experience</p>
        <h2 className="sec-title">My <span>Internships</span></h2>
        <div className="intern__grid">
          {INTERNSHIPS.map(i => (
            <div key={i.title} className="intern__card">
              <h3>{i.title}</h3>
              <p>{i.org}</p>
              <div className="intern__bottom">
                <div className="intern__period">{i.period}</div>
                {i.certificate && (
                  <a
                    className="view-btn"
                    href={i.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CERTIFICATIONS ────────────────────────────────────────── */
function Certifications() {
  const [ref, vis] = useReveal();
  return (
    <section id="certifications" className="sec sec-alt">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">Achievements</p>
        <h2 className="sec-title">Certifications</h2>
        <div className="certs">
          {CERTIFICATIONS.map(c => (
            <div key={c.title} className="certs__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a6 6 0 100-12 6 6 0 000 12z"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>
              <span>{c.title}</span>
              {c.link && (
                <a
                  className="view-btn"
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ───────────────────────────────────────────────── */
function Contact() {
  const [ref, vis] = useReveal();
  return (
    <section id="contact" className="sec">
      <div ref={ref} className={`reveal ${vis ? "vis" : ""}`}>
        <p className="sec-eye">Get In Touch</p>
        <h2 className="sec-title">Contact <span>Me</span></h2>
        <p className="sec-sub">Have an opportunity, a question, or just want to connect? Reach out below.</p>
        <div className="contact__grid">
          <a className="contact__card" href={`tel:${PHONE_RAW}`}>
            <div className="contact__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <h4>Phone</h4>
            <p>{PHONE}</p>
          </a>
          <a className="contact__card" href={`mailto:${EMAIL}`}>
            <div className="contact__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>
            </div>
            <h4>Email</h4>
            <p>{EMAIL}</p>
          </a>
          <a className="contact__card" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <div className="contact__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </div>
            <h4>GitHub</h4>
            <p>{GITHUB_USER}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ────────────────────────────────────────────────── */
function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer>
      <div className="foot__inner">
        <span className="foot__logo">Portfolio<span>.</span></span>
        <span className="foot__copy">© {yr} {NAME}. Built with React.</span>
        <div className="foot__soc">
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── APP ───────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{css}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Portfolio />
        <Internships />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
