export type CvExperience = { company: string; role: string; meta: string; bullets: string[] }
export type CvSkillGroup = { label: string; items: string }
export type CvEducation = { degree: string; school: string }
export type CvCert = { name: string; issuer: string; year?: string }

export type CvLang = {
  role: string
  location: string
  profile: string[]
  experience: CvExperience[]
  skills: CvSkillGroup[]
  education: CvEducation[]
  certs: CvCert[]
  languages: string
  pdf: string
  labels: {
    experience: string
    skills: string
    education: string
    certs: string
    languages: string
    cmd: string
    download: string
  }
}

/**
 * Mirrors the two PDFs in /public line for line — the English CV and the German
 * Lebenslauf. When either PDF changes, change the matching block here too.
 */
export function useCvData() {
  const data: Record<'en' | 'de', CvLang> = {
    en: {
      role: 'Software & Cloud Engineer',
      location: 'Munich, Germany',
      profile: [
        'Software Engineer with 4+ years of experience building responsive, high-performance web applications in React and TypeScript. Improved user engagement by 35% on a SaaS platform serving 1M+ monthly users, cut page load times considerably, and raised automated test coverage by more than 50%.',
        'Experienced across design systems, REST/GraphQL APIs, and CI/CD, with a habit of mentoring developers and using AI tooling to ship faster without sacrificing quality. Based in Munich with full German work authorization; available immediately.'
      ],
      experience: [
        {
          company: 'sqanit GmbH',
          role: 'Software Engineer',
          meta: 'Munich · 01/2023 – 07/2026',
          bullets: [
            'Delivered features that increased user engagement by 35% on a B2B SaaS platform serving 1M+ monthly users.',
            'Built and extended a reusable component library and design system, cutting UI development time by 30% across teams.',
            'Improved page load times considerably and Core Web Vitals scores through code splitting, lazy loading, and render optimization.',
            'Scaled automated test coverage by more than 50% by introducing component, integration, and E2E tests.',
            'Co-designed the company-wide test tracking process covering both automated and manual QA.',
            'Leveraged AI-assisted development tools to accelerate feature delivery, test generation, and code reviews while maintaining code quality standards.',
            'Mentored junior developers on modern frontend practices and code quality; active voice in technical decision meetings shaping project direction.'
          ]
        },
        {
          company: 'enra GmbH',
          role: 'Frontend Web Developer',
          meta: 'Paderborn · 01/2022 – 07/2022',
          bullets: [
            'Shipped new features and modernized legacy Vue.js code through refactoring, enhancements, and bug fixes.',
            'Improved application reliability by expanding the automated test suite as part of every feature delivery.'
          ]
        },
        {
          company: 'Fraunhofer IEM Institute',
          role: 'Master Thesis Student',
          meta: 'Paderborn · 09/2020 – 04/2021',
          bullets: [
            'Conducted a systematic literature review on uncertainty and imprecision in software engineering; derived empirical conclusions via statistical analysis.'
          ]
        },
        {
          company: 'Weidmüller GmbH',
          role: 'Working Student – Data & CRM',
          meta: 'Paderborn · 02/2019 – 07/2019',
          bullets: [
            'Migrated data from a legacy CRM to a modern platform and validated data with clients, improving accuracy and reliability.'
          ]
        }
      ],
      skills: [
        { label: 'Frontend', items: 'React, Next.js, TypeScript, JavaScript (ES6+), Vue.js, HTML5, CSS3, Tailwind CSS, Responsive Design' },
        { label: 'Testing', items: 'Playwright, Vitest, Jest, Cypress' },
        { label: 'Tools & Platforms', items: 'Git/GitLab, CI/CD, Docker, REST, GraphQL, PostgreSQL, AWS, Linux' },
        { label: 'Other', items: 'Python, MySQL, Kubernetes, Agile (Scrum/Kanban), Core Web Vitals & performance optimization, AI-assisted development (GitHub Copilot, Claude, ChatGPT)' }
      ],
      education: [
        { degree: 'M.Sc. Computer Science', school: 'Universität Paderborn, Germany' },
        { degree: 'B.Tech. Computer Science', school: 'Ladoke Akintola University of Technology, Nigeria' }
      ],
      certs: [
        { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2026' },
        { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' }
      ],
      languages: 'German (B1) · English (business fluent)',
      pdf: '/Bolaji_Ilori_CV.pdf',
      labels: { experience: '# Experience', skills: '# Technical Skills', education: '# Education', certs: '# Certifications', languages: '# Languages', cmd: '$ cat resume.md', download: 'Download PDF' }
    },
    de: {
      role: 'Software- & Cloud-Engineer',
      location: 'München, Deutschland',
      profile: [
        'Software Engineer mit über 4 Jahren Erfahrung in der Entwicklung responsiver, performanter Webanwendungen mit React und TypeScript. Steigerung der Nutzerbindung um 35 % auf einer SaaS-Plattform mit über 1 Mio. monatlichen Nutzern, deutliche Verkürzung der Seitenladezeiten und Erhöhung der automatisierten Testabdeckung um mehr als 50 %.',
        'Erfahrung mit Designsystemen, REST-/GraphQL-APIs und CI/CD – mit dem Anspruch, Entwickler zu fördern und KI-Tools einzusetzen, um schneller zu liefern, ohne Abstriche bei der Qualität. Wohnhaft in München mit uneingeschränkter Arbeitserlaubnis für Deutschland; ab sofort verfügbar.'
      ],
      experience: [
        {
          company: 'sqanit GmbH',
          role: 'Software Engineer',
          meta: 'München · 01/2023 – 07/2026',
          bullets: [
            'Entwicklung von Features, die die Nutzerbindung auf einer B2B-SaaS-Plattform mit über 1 Mio. monatlichen Nutzern um 35 % steigerten.',
            'Aufbau und Erweiterung einer wiederverwendbaren Komponentenbibliothek und eines Designsystems; Reduzierung der UI-Entwicklungszeit um 30 % über alle Teams hinweg.',
            'Deutliche Verbesserung der Seitenladezeiten und der Core-Web-Vitals-Werte durch Code-Splitting, Lazy Loading und Render-Optimierung.',
            'Erhöhung der automatisierten Testabdeckung um mehr als 50 % durch Einführung von Komponenten-, Integrations- und E2E-Tests.',
            'Mitgestaltung des unternehmensweiten Test-Tracking-Prozesses für automatisierte und manuelle Qualitätssicherung.',
            'Einsatz KI-gestützter Entwicklungswerkzeuge zur Beschleunigung von Feature-Entwicklung, Testgenerierung und Code-Reviews bei gleichbleibenden Qualitätsstandards.',
            'Mentoring von Junior-Entwicklern zu modernen Frontend-Praktiken und Codequalität; aktive Mitwirkung an technischen Entscheidungen zur Ausrichtung der Projekte.'
          ]
        },
        {
          company: 'enra GmbH',
          role: 'Frontend-Webentwickler',
          meta: 'Paderborn · 01/2022 – 07/2022',
          bullets: [
            'Entwicklung neuer Features und Modernisierung von Vue.js-Legacy-Code durch Refactoring, Erweiterungen und Fehlerbehebungen.',
            'Verbesserung der Anwendungsstabilität durch Ausbau der automatisierten Testsuite im Rahmen jeder Feature-Auslieferung.'
          ]
        },
        {
          company: 'Fraunhofer-Institut IEM',
          role: 'Masterand',
          meta: 'Paderborn · 09/2020 – 04/2021',
          bullets: [
            'Durchführung einer systematischen Literaturrecherche zu Unsicherheit und Unschärfe im Software Engineering; Ableitung empirischer Schlussfolgerungen mittels statistischer Analyse.'
          ]
        },
        {
          company: 'Weidmüller GmbH',
          role: 'Werkstudent – Daten & CRM',
          meta: 'Paderborn · 02/2019 – 07/2019',
          bullets: [
            'Migration von Daten aus einem Legacy-CRM auf eine moderne Plattform und Validierung der Daten mit Kunden; dadurch höhere Genauigkeit und Zuverlässigkeit.'
          ]
        }
      ],
      skills: [
        { label: 'Frontend', items: 'React, Next.js, TypeScript, JavaScript (ES6+), Vue.js, HTML5, CSS3, Tailwind CSS, Responsive Design' },
        { label: 'Testing', items: 'Playwright, Vitest, Jest, Cypress' },
        { label: 'Tools & Plattformen', items: 'Git/GitLab, CI/CD, Docker, REST, GraphQL, PostgreSQL, AWS, Linux' },
        { label: 'Weitere', items: 'Python, MySQL, Kubernetes, agile Methoden (Scrum/Kanban), Core Web Vitals & Performance-Optimierung, KI-gestützte Entwicklung (GitHub Copilot, Claude, ChatGPT)' }
      ],
      education: [
        { degree: 'M.Sc. Informatik', school: 'Universität Paderborn, Deutschland' },
        { degree: 'B.Tech. Informatik', school: 'Ladoke Akintola University of Technology, Nigeria' }
      ],
      certs: [
        { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2026' },
        { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' }
      ],
      languages: 'Deutsch (B1) · Englisch (verhandlungssicher)',
      pdf: '/Bolaji_Ilori_Lebenslauf.pdf',
      labels: { experience: '# Berufserfahrung', skills: '# Technische Kenntnisse', education: '# Ausbildung', certs: '# Zertifikate', languages: '# Sprachen', cmd: '$ cat lebenslauf.md', download: 'PDF herunterladen' }
    }
  }
  return { data }
}
