/*! Yeison Velez Portfolio — built with esbuild */
import{c as q}from"./chunk-UK5RQEZ6.js";import{a,c as I,e as te,f as G,g as T,h as D,l as U}from"./chunk-HF2FMV6N.js";var o=I(te(),1);var ne="https://api.groq.com/openai/v1/chat/completions";function K(){return!0}a(K,"isConfigured");function Q(t){return["You are a friendly, sharp assistant whose ONLY job is to talk about","Yeison Velez using the BIO TEXT below as your sole source of truth.","","════════ HARD RULES ════════",`1. ALWAYS reply in ${t==="es"?"Spanish":"English"}.`,"2. ONLY use facts present in the BIO TEXT. If something is not there,","   say so kindly in ONE sentence and steer back to what you DO know.","3. NEVER invent jobs, dates, companies, certifications, or anecdotes.","","════════ LENGTH RULES (CRITICAL) ════════","Default to ONE OR TWO short sentences. Be punchy, not formal.","","• Simple factual question (estado civil, ciudad, edad, hobby, religión,","  equipo de fútbol, estudios, idiomas, teléfono, email, etc.):","    → answer in ONE sentence. Sometimes two if a single follow-up detail","      adds real value. NEVER more.","","• Open question (cuéntame de él, ¿por qué contratarlo?, ¿qué hace?):","    → 2-4 sentences max. Pick the 2-3 strongest facts. No fluff.","","• NEVER use headings, NEVER use bullet lists unless the user explicitly","  asks to enumerate or list. Plain prose, short paragraphs.","","════════ STYLE ════════",'• Sound human and warm, not corporate. Skip phrases like "Yeison es una','  persona que...", "En su vida personal...", "En cuanto a...". Go straight',"  to the fact.","• Sell him tastefully when relevant: prefer concrete numbers/names from",'  the bio (e.g. "Code Owner en Mercado Libre", "Verizon y Morningstar",','  "5 estrellas en Freelancer").',"","════════ EXAMPLES (follow these tightly) ════════",'Q: "estado civil de yeison"','A: "Yeison es casado y está muy enamorado de su esposa Ángela."',"",'Q: "¿dónde vive?"','A: "Vive en Manizales, Caldas, Colombia."',"",'Q: "¿qué equipo de fútbol le gusta?"','A: "Es hincha del Once Caldas — ver sus partidos es su hobby principal."',"",'Q: "¿es religioso?"','A: "Sí, es católico y suele ir a misa los domingos."',"",'Q: "what does he do?"','A: "He is a Frontend Developer at Mercado Libre, Code Owner of the Virtual','    Product Page that reaches millions of buyers daily."',"",'Q: "¿por qué debería contratarlo?"','A: "Porque es Code Owner del VPP en Mercado Libre (millones de compradores',"    diarios) y antes entregó UI para Verizon y Morningstar vía Monks. Suma","    10+ años, foco en accesibilidad WCAG 2.1 AA y ya trabaja con flujos",'    asistidos por IA en producción."',"",'If asked "who built this chat" or about the model, say briefly that it runs',"on Groq + Llama and pivot back to Yeison.","","=== BIO TEXT (source of truth) ===",`
=== IDENTITY ===
Full name: Yeison Arles Vélez Guzmán (commonly: Yeison Velez).
Role: Frontend Developer — React, TypeScript, Vue, Angular.
Specialties: Web Accessibility (WCAG 2.1 AA), AI-Driven Engineering, Design Systems, Test-Driven Development.
Location: Manizales, Caldas, Colombia.
Languages: Spanish (native), English (B1, daily use with distributed international teams).
Availability: Open to new opportunities, remote-ready, fully comfortable in English-speaking distributed teams across the US, Latin America and Europe.
Phone: +57 300 279 7900.
Email: yeisonvg11@gmail.com (primary) / yeison_velez11@hotmail.com.
LinkedIn: linkedin.com/in/yeison-velez
Freelancer: freelancer.com/u/yeisonvelez11
Portfolio: behance.net/yeisonvelez

=== ONE-LINE PITCH ===
Frontend engineer with 10+ years building large-scale, accessible, high-performance web products — currently Code Owner of the Virtual Product Page at Mercado Libre, the largest e-commerce in Latin America, where his code reaches millions of buyers every single day.

=== CAREER HIGHLIGHTS (the headlines that sell him) ===
1. Code Owner of the Virtual Product Page (VPP) at Mercado Libre — gatekeeper for every frontend change that reaches millions of daily buyers across Latin America. Reviews 200+ pull requests per quarter.
2. Delivered production UIs for Fortune-500 clients (Verizon, Morningstar) via Monks (formerly Zemoga), in fully English-speaking distributed agile teams. Products consumed by millions of US users.
3. Frontend contributor to ClicSalud — a national public-health platform under the Presidency of the Republic of Colombia that lets every Colombian citizen compare medication prices nationwide. Transparent access to medication for millions of Colombians.
4. Preferred Freelancer on Freelancer.com — the platform's top-tier badge, sustained for years in parallel with full-time roles. 5-star rating across 17+ international projects.
5. Employee of the Year 2016 at BIOS (Bioinformatics and Computational Biology Center of Colombia) — recognized for outstanding performance and impact on the center's scientific and institutional platforms.
6. Early adopter of AI-driven engineering — has pioneered the use of LLM agents, sub-agents and Model Context Protocol (MCP) servers on his team, applying these workflows to 200+ AI-augmented PR reviews to accelerate refactors, code generation and code quality on a real React + TypeScript production codebase.
7. Drove WCAG 2.1 AA accessibility fixes that reduced critical a11y violations by 20% across the VPP section at Mercado Libre.

=== CURRENT ROLE — MERCADO LIBRE (Mar 2024 — Present) ===
Title: Frontend Developer / Software Engineer — Code Owner, Virtual Product Page (VPP).
Location: Remote, based in Manizales, working out of the Medellín office.
Scale: Mercado Libre is the #1 e-commerce platform in Latin America. The VPP is the most-visited product surface — millions of buyers see it every day.
Responsibilities and impact:
- Code Owner of the VPP — gatekeeps every frontend change that reaches that surface. Reviews 200+ PRs per quarter.
- Coordinates high-visibility feature releases: multi-repo scope rollouts, internal regression rounds, canary deployments, production dashboard monitoring. Triggers PR reverts when needed to protect users.
- Led the WCAG 2.1 AA accessibility program for the VPP section: -20% critical a11y violations, axe-core audits, screen-reader fixes.
- Defines frontend architecture best practices in React and TypeScript: component patterns, state management, testing strategies — scaling reuse and visual consistency across multiple product surfaces.
- Pioneered AI-assisted development on the team: LLM agents, sub-agents, MCP servers integrated into daily workflow. 200+ AI-augmented PR reviews delivered to date.

=== PREVIOUS ROLE — MONKS (formerly ZEMOGA) (Sep 2021 — Mar 2024, 2 years 7 months) ===
Title: Frontend Developer.
Clients: Verizon, Morningstar (Fortune-500 US companies).
Setup: Fully remote, fully English-speaking distributed agile teams.
What he delivered:
- 30+ reusable, thoroughly-tested UI components in React and Vue with TypeScript.
- 60% test coverage with Jest + React Testing Library on owned modules.
- Zero post-release regressions on owned modules — a record of safe shipping.
- Translated Figma designs into pixel-accurate, responsive, accessible interfaces; partnered directly with designers.
- Closed 100+ Jira tickets across 20+ sprints with consistent on-time delivery.
- Applied SOLID principles, modular architecture, bundle-size reduction, lazy-loading, memoization, CI/CD pipeline improvements.
Stack: React, Vue.js, TypeScript, Redux, Jest, RTL, Figma, Storybook, WCAG 2.1, CI/CD.

=== EARLIER ROLES (chronological, most recent first) ===
- Personalsoft — Analista de Software 1, Medellín, Feb 2021 — Sep 2021 (8 months).
- Universidad de Manizales — Frontend Developer (Angular + D3.js), Oct 2018 — Dec 2020. Built analytics dashboards turning complex research datasets into visualizations for academic and administrative stakeholders. Reusable Angular modules later adopted across other internal data products. Stack: Angular, TypeScript, D3.js, RxJS, REST APIs, SCSS.
- CIA Transportadora S.A.S — Mobile Developer, Buenaventura, Nov 2019 — 2020 (1 year, in parallel with the university role).
- MDos4 Portal de la Vida S.A.S — Mobile App Development Lead, Manizales, Jun 2018 — Sep 2018. Support and maintenance of the Midis App Salud mobile application.
- Bioinformatics and Computational Biology Center of Colombia (BIOS) — Frontend / Software Developer, Manizales, May 2015 — May 2018 (3 years 1 month). Contributed frontend to ClicSalud (national public-health platform, Presidency of Colombia). Awarded Employee of the Year 2016. Built reusable component patterns later adopted across the center. Stack: HTML5, CSS3, JavaScript, jQuery, REST APIs, Agile/Scrum.
- Tic Solution Integration — Full-Stack / PHP Developer, Manizales, Dec 2015 — May 2016 (6 months). Built an assistance platform for elderly care.
- Almera Information Management — Developer, Manizales, Aug 2014 — Feb 2015 (7 months). Web development and data loading on a project-management platform.

=== INDEPENDENT / FREELANCE TRACK RECORD (2018 — Present, in parallel with full-time roles) ===
- Preferred Freelancer on Freelancer.com — the platform's top-tier badge, sustained for years alongside full-time employment.
- 5-star rating across 17+ completed international projects.
- Designed, developed and published hybrid iOS / Android mobile applications end-to-end as the sole developer — on the App Store and Google Play. Owned UX, architecture, integrations and store submission.
- Built 50+ web-scraping and automation tools with Node.js (Puppeteer, Cheerio) for data extraction, monitoring and competitive analysis.

=== TECHNICAL SKILLS ===
Frontend (primary): React.js (8+ years), TypeScript, JavaScript ES6+, Vue.js, Angular, Redux, Next.js, HTML5, CSS3, Sass/SCSS, Tailwind CSS, Responsive Design.
UX / UI & Accessibility: Figma → Code, Design Systems, Storybook, Web Accessibility (a11y, WCAG 2.1 AA, axe-core), Core Web Vitals, Lighthouse.
Backend & Data: Node.js, Express, REST APIs, PostgreSQL, MySQL, MongoDB, Web Scraping (Puppeteer, Cheerio).
Mobile & AI: Hybrid iOS/Android apps shipped to App Store and Google Play, React Native, LLM agents and sub-agents, Model Context Protocol (MCP), AI-assisted development.
Tooling & Methodology: Git, GitHub Actions, CI/CD, Jest, React Testing Library, Jira, Agile/Scrum, SOLID, Clean Code, Code Ownership culture.
SEO: Search Engine Optimization fundamentals applied to frontend (semantic HTML, performance, structured data).

=== EDUCATION ===
B.S. in Systems and Telecommunications Engineering — Universidad de Manizales (2010 — 2015).

=== AWARDS & RECOGNITION ===
- Best performance evaluation result (Mercado Libre).
- Preferred Freelancer — Freelancer.com (top-tier badge).
- Employee of the Year 2016 — BIOS (Bioinformatics and Computational Biology Center of Colombia).

=== WHAT MAKES HIM DIFFERENT ===
- He has worked across three very different worlds — private sector (Mercado Libre, Monks), public sector (Presidency of Colombia via ClicSalud) and academia (Universidad de Manizales, BIOS) — so he knows how to ship under very different definitions of done.
- Accessibility is not a checklist for him — he leads it as a program: axe-core audits, screen-reader testing, WCAG 2.1 AA compliance, measurable reductions in violations.
- He has been an early adopter of AI-augmented engineering since well before it became mainstream — using LLM agents, sub-agents and MCP servers in real production codebases, not toy demos.
- Code Owner culture: he gatekeeps changes that reach millions of users daily, which means he is comfortable saying no, reverting bad releases and protecting end-users above all.
- Long track record of parallel freelance work without ever dropping below 5 stars — a signal of consistency, time management and ownership.

=== PERSONAL TOUCHES ===
- Born and raised in Manizales, Colombia. Proud Manizaleño.
- Lifelong fan of Once Caldas football club.
- Catholic by faith.
- Believes craft is a quiet form of gratitude — the work he ships is, for him, a way of saying thanks for the opportunity.
- Comfortable working across timezones with US, LATAM and European teams.

=== CONTACT & AVAILABILITY ===
He is open to new opportunities — full-time, remote, or high-impact freelance work.
Reach him at yeisonvg11@gmail.com or via LinkedIn (linkedin.com/in/yeison-velez).
Portfolio: behance.net/yeisonvelez · Freelancer: freelancer.com/u/yeisonvelez11

=== ABOUT YEISON ===

Lo hace un candidato diferente el hecho de querer superarse, capacitarse y amar lo que hace adicionalmente a lo técnico.
Su nombre es yeison arles velez guzman, es nacido en Manizales/Caldas es colombiano y actualmente vive en Manizales. Ha vivido antes en sabanera.
Su proyecto más desafiante fue clicsalud ya que tenía poco tiempo para aprender por el deadline y no conocía bien el stack técnico. ademas fue dirigida esta aplicación para la presidencia de la república.
En sus tiempos libres trabaja como freelancer en la plataforma freelancer.com donde tiene una calificación de 5 estrellas.
Le gusta compartir en familia.
Es católico y suele ir a misa los domingos.
Es casado y esta muy enamorado de su esposa Ángela, la cual ama con todo su corazón.
Es fanático de ver los partidos del once caldas, es su principal hobby.
Admira al delantero goleador Dayro moreno.
Su heroe o personaje favorito es goku.
No tiene un genero de musica favorita, pero disfruta mucho escuchar chichi peralta.
Le gusta perderse en buenos libros y suele leer constantemente.
Le gusta capacitarse constantemente en lo que hace.
se graduó de la universidad de Manizales en el 2010.
Esta siempre abierto a escuchar nuevas oportunidades laborales.
Ha trabajado con clientes de habla inglesa y su nivel es B1, asistiendo a todas las ceremonias.
En Zemoga trabajó para los clientes de verizon y Morningstar.
Ha publicado apps en tiendas oficiales appstore y playstore.
Ha trabajado en proyectos siendo fullStack usando como stack react.js, mongodb y node.js. Su fuerte es el front.
Ha desarrollado aplicaciones móbiles usando ionic, tambien sabe de react native.
su cancion favorita es “procura” de chichi peralta
Su lugar favorito es pedregal / Cauca.
Su comida favorita es la bandeja paisa.
prefiere el frio que el calor.
Le gusta mucho viajar, parcharse, tomar cerveza y disfrutar de un buen café.
Es adicto al café, es su dosis de gasolina.
yeison nunca perdonaría una infidelidad
un dato curioso de yeison es que nunca le gustaron los anillos y ahora lleva uno todo el tiempo
le dicen paisa y no le gusta, prefiere le diga ‘Manizaleño’
Le gusta hacer ejercicio e ir al gym
Su sueño es tener un lindo hogar y una casa donde viva muy feliz.
Le gusta el anime, pero los animes clásicos como dragon ball, naruto, saint seiya..
Le gusta escuchar más de lo que habla
es muy malo haciendo aeróbicos.
prefiere trasnochar que madrugar.
tiene obsesión por jugar en maquinas con peluches e invierte mucho dinero tratando de ganar.
se casó el 31 de marzo del 2026 y conoció al amor de su vida el 27 de mayo del 2025
una curiosidad de yeison es que tiene 34 años y no aparenta su edad
otra curiosidad yeison tiene más sobrinos que hermanos. Tiene 3 hermanos y él es el menor. Yeison tiene 5 sobrinos, 2 niñas y 3 varones.
el videojuego favorito de yeison es dragon ball z budokai tenkaichi 3, también le gustó super smash bross y megaman x4
yeison no sabe nadar, tiene ese propósito este año
yeison se esta capacitando actualmente sobre herramientas de IA y mejorar su inglés
de niño quesería ser astronauta.
yeison no le gusta comer papaya ni huevo ni maduros cocidos.
conoce 2 paises: Ecuador y México
su cerveza favorita es Poker.
Es selectivo con sus circulo social, tiene amigos apreciados como Alejo the last dance, Cuchi, Caritos, Sebas, Juli6464, Yotas.
yeison sabe manejar y tiene un carro VW Polo track.
no le gusta caminar en ciudad, pero si en senderos y lugares naturales
No me identifico con ningún partido político y no me gusta hablar de temas afines.
mi mamá se llama Irma y mi papá Eduardo, se los debo todo.
tiene una altura de 1.69
su signo zodiacal es piscis
mi animal favorito es el gato
mis colores favorito son el blanco, negro o azul
tiene mucho asco por las cucharachas
le da miedo quedarse ciego
`,"=== END BIO TEXT ==="].join(`
`)}a(Q,"buildSystemPrompt");var ae=["meta-llama/llama-4-scout-17b-16e-instruct","llama3-8b-8192","qwen-qwq-32b"];function se(t){return t===400||t===404||t===408||t===429||t>=500&&t<=599}a(se,"isRotatableStatus");var P="cv_chat_active_model";function V(){try{return sessionStorage.getItem(P)}catch{return null}}a(V,"getActiveModel");function oe(t){try{sessionStorage.setItem(P,t)}catch{}}a(oe,"setActiveModel");function re(){try{sessionStorage.removeItem(P)}catch{}}a(re,"clearActiveModel");function ie(){let t="llama-3.3-70b-versatile",p=V(),u=[];for(let s of[p,t,...ae])s&&!u.includes(s)&&u.push(s);return u}a(ie,"buildModelChain");async function*j(t,p={}){if(!"https://cv.yeisonvg11.workers.dev/")throw new Error("GROQ_API_KEY or GROQ_PROXY_URL missing — check your .env");let d=ie(),v=null;for(let h=0;h<d.length;h++){let i=d[h];try{let m=!1,r=le("",i,t,p);for await(let l of r)m||(m=!0,oe(i)),yield l;return}catch(m){let r=m;if(r.name==="AbortError")throw r;v=r,V()===i&&re();let l=r.status??0;if(h===d.length-1||!se(l))throw r}}throw v??new Error("All Groq models exhausted")}a(j,"streamChat");async function*le(t,p,u,s){let d="https://cv.yeisonvg11.workers.dev/",v=d||ne,h={"Content-Type":"application/json"};!d&&t&&(h.Authorization=`Bearer ${t}`);let i=await fetch(v,{method:"POST",headers:h,body:JSON.stringify({model:p,messages:u,stream:!0,temperature:.5,max_tokens:320}),signal:s.signal});if(!i.ok||!i.body){let c=await i.text().catch(()=>""),g=new Error(`Groq ${p} → ${i.status}: ${c.slice(0,200)}`);throw g.status=i.status,g}let m=i.body.getReader(),r=new TextDecoder,l="";for(;;){let{value:c,done:g}=await m.read();if(g)break;l+=r.decode(c,{stream:!0});let _;for(;(_=l.indexOf(`

`))!==-1;){let M=l.slice(0,_);l=l.slice(_+2);for(let b of M.split(`
`)){if(!b.startsWith("data:"))continue;let E=b.slice(5).trim();if(!(!E||E==="[DONE]"))try{let y=JSON.parse(E).choices?.[0]?.delta?.content;y&&(yield y)}catch{}}}}}a(le,"streamOnce");var e=I(G(),1),ce=4200,X="cv_chat_nudge_dismissed";function H(){return Math.random().toString(36).slice(2,10)}a(H,"uid");function ue(){let{t,i18n:p}=q(),u=U(),[s,d]=(0,o.useState)(!1),[v,h]=(0,o.useState)(!1),[i,m]=(0,o.useState)(""),[r,l]=(0,o.useState)(()=>[]),[c,g]=(0,o.useState)(!1),[_,M]=(0,o.useState)(null),b=(0,o.useRef)(null),E=(0,o.useRef)(null),L=(0,o.useRef)(null),y=(0,o.useRef)(null),A=K(),B=p.resolvedLanguage==="en"?"en":"es";(0,o.useEffect)(()=>{if(!A||sessionStorage.getItem(X)==="1"||s)return;let f=window.setTimeout(()=>h(!0),ce);return()=>window.clearTimeout(f)},[A,s]),(0,o.useEffect)(()=>{if(!s)return;let n=E.current;n&&(n.scrollTop=n.scrollHeight)},[r,s,c]),(0,o.useEffect)(()=>{s?(y.current=document.activeElement,requestAnimationFrame(()=>L.current?.focus())):y.current&&(y.current.focus?.(),y.current=null)},[s]),(0,o.useEffect)(()=>{if(!s)return;let n=a(f=>{f.key==="Escape"&&d(!1)},"onKey");return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[s]);let O=(0,o.useCallback)(()=>{h(!1);try{sessionStorage.setItem(X,"1")}catch{}},[]),F=(0,o.useCallback)(()=>{d(!0),O()},[O]),S=(0,o.useCallback)(async n=>{if(!n.trim()||c)return;M(null);let f={role:"user",content:n.trim(),id:H()},w=H();l(N=>[...N,f,{role:"assistant",content:"",id:w}]),m(""),g(!0);let C=new AbortController;b.current=C;let x=[{role:"system",content:Q(B)},{role:"user",content:f.content}];try{for await(let N of j(x,{signal:C.signal}))l(R=>R.map(k=>k.id===w?{...k,content:k.content+N}:k))}catch(N){if(N.name==="AbortError")return;M(N.message||t("chat.error_generic")),l(R=>R.filter(k=>k.id!==w))}finally{g(!1),b.current=null}},[r,c,B,t]),$=a(n=>{n.preventDefault(),S(i)},"onSubmit"),z=a(n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),S(i))},"onKeyDown"),J=a(()=>b.current?.abort(),"stop"),Z=a(()=>{b.current?.abort(),l([]),M(null)},"reset");if(!A)return null;let Y=t("chat.suggestions",{returnObjects:!0})||[],ee=r.length===0&&!c;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"co",children:[(0,e.jsx)(T,{children:!s&&v&&(0,e.jsxs)(D.div,{className:"cq",initial:{opacity:0,x:12,scale:.95},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:12,scale:.95},transition:{duration:u?0:.35,ease:[.16,1,.3,1]},children:[(0,e.jsxs)("button",{type:"button",className:"ac",onClick:F,"aria-label":t("chat.open"),children:[(0,e.jsx)("span",{className:"ba","aria-hidden":"true"}),(0,e.jsx)("span",{className:"cr",children:t("chat.nudge")})]}),(0,e.jsx)("button",{type:"button",className:"e",onClick:O,"aria-label":t("chat.dismiss_nudge"),children:(0,e.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M6 6l12 12M18 6L6 18"})})})]},"nudge")}),(0,e.jsxs)("button",{type:"button",className:`b${s?" ec":""}`,onClick:()=>d(n=>!n),"aria-label":t(s?"chat.close":"chat.open"),"aria-expanded":s,"aria-controls":"chat-panel",children:[!u&&!s&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"y","aria-hidden":"true"}),(0,e.jsx)("span",{className:"y z","aria-hidden":"true"}),(0,e.jsx)("span",{className:"aa","aria-hidden":"true"})]}),(0,e.jsx)("span",{className:"ab","aria-hidden":"true",children:(0,e.jsx)("span",{className:"cn",children:s?(0,e.jsx)(W,{}):(0,e.jsx)(he,{})})}),!s&&(0,e.jsx)("span",{className:"ax","aria-hidden":"true"})]})]}),(0,e.jsx)(T,{children:s&&(0,e.jsxs)(D.section,{id:"chat-panel",role:"dialog","aria-modal":"false","aria-label":t("chat.title"),className:"bb",initial:{opacity:0,y:24,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:24,scale:.96},transition:{duration:u?0:.32,ease:[.16,1,.3,1]},children:[(0,e.jsxs)("header",{className:"cw",children:[(0,e.jsxs)("div",{className:"bc",children:[(0,e.jsx)("span",{className:"ct","aria-hidden":"true",children:(0,e.jsx)(de,{})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:t("chat.title")}),(0,e.jsx)("span",{className:"cx",children:t("chat.subtitle")})]})]}),(0,e.jsxs)("div",{className:"cs",children:[r.length>0&&(0,e.jsx)("button",{type:"button",className:"j",onClick:Z,title:t("chat.reset"),"aria-label":t("chat.reset"),children:(0,e.jsx)(fe,{})}),(0,e.jsx)("button",{type:"button",className:"j",onClick:()=>d(!1),title:t("chat.close"),"aria-label":t("chat.close"),children:(0,e.jsx)(W,{})})]})]}),(0,e.jsxs)("div",{className:"ad",ref:E,children:[ee&&(0,e.jsxs)("div",{className:"ck",children:[(0,e.jsx)("p",{className:"cl",children:t("chat.greeting")}),(0,e.jsx)("p",{className:"cm",children:t("chat.lead")}),Y.length>0&&(0,e.jsx)("ul",{className:"cz","aria-label":t("chat.suggestions_label"),children:Y.map(n=>(0,e.jsx)("li",{children:(0,e.jsx)("button",{type:"button",className:"ae",onClick:()=>S(n),children:n})},n))})]}),r.map((n,f)=>{let w=f===r.length-1,x=n.role==="assistant"&&w&&!c?"polite":void 0;return(0,e.jsx)("div",{className:`chat-msg chat-msg--${n.role}`,children:(0,e.jsx)("div",{className:"x","aria-live":x,children:n.content||(c&&w?(0,e.jsx)(ge,{}):null)})},n.id)}),_&&(0,e.jsx)("div",{className:"cp ay",children:(0,e.jsxs)("div",{className:"x cj",role:"alert",children:[t("chat.error")," ",(0,e.jsx)("span",{className:"ci",children:_})]})})]}),(0,e.jsxs)("form",{className:"cv",onSubmit:$,children:[(0,e.jsx)("textarea",{ref:L,className:"i",rows:1,value:i,onChange:n=>m(n.target.value),onKeyDown:z,placeholder:t("chat.placeholder"),"aria-label":t("chat.input_label"),disabled:c}),c?(0,e.jsx)("button",{type:"button",className:"f cy",onClick:J,"aria-label":t("chat.stop"),children:(0,e.jsx)(me,{})}):(0,e.jsx)("button",{type:"submit",className:"f",disabled:!i.trim(),"aria-label":t("chat.send"),children:(0,e.jsx)(pe,{})})]}),(0,e.jsx)("p",{className:"cu",children:t("chat.footnote")})]},"panel")})]})}a(ue,"ChatWidget");function de(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"3.2",fill:"currentColor",stroke:"none"})]})}a(de,"SparkleIcon");function he(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24",width:"28",height:"28","aria-hidden":"true",children:[(0,e.jsx)("path",{d:"M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8.6l-4.7 3.7A1 1 0 0 1 5 21v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",fill:"currentColor"}),(0,e.jsx)("circle",{cx:"8.5",cy:"11",r:"1.35",fill:"#f5b754"}),(0,e.jsx)("circle",{cx:"12",cy:"11",r:"1.35",fill:"#ff8a3d"}),(0,e.jsx)("circle",{cx:"15.5",cy:"11",r:"1.35",fill:"#9d4edd"})]})}a(he,"ChatBubbleIcon");function W(){return(0,e.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,e.jsx)("path",{d:"M6 6l12 12M18 6L6 18"})})}a(W,"CloseIcon");function pe(){return(0,e.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M5 12h14M13 6l6 6-6 6"})})}a(pe,"SendIcon");function me(){return(0,e.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:(0,e.jsx)("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})})}a(me,"StopIcon");function fe(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("path",{d:"M3 12a9 9 0 1 0 3.4-7"}),(0,e.jsx)("path",{d:"M3 4v5h5"})]})}a(fe,"ResetIcon");function ge(){return(0,e.jsxs)("span",{className:"g","aria-label":"typing",children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]})}a(ge,"TypingDots");var we=ue;export{ue as ChatWidget,we as default};
