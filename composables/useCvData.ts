export type CvExperience = { title: string; meta: string; desc: string }
export type CvEducation = { degree: string; years: string }

export type CvLang = {
  role: string
  profile: string
  experience: CvExperience[]
  skills: string[]
  education: CvEducation[]
  certs: string
  languages: string
  labels: {
    experience: string
    skills: string
    education: string
    languages: string
    cmd: string
    download: string
  }
}

export function useCvData() {
  const data: Record<'en' | 'de', CvLang> = {
    en: {
      role: 'Frontend Engineer — Munich, Germany',
      profile: '4+ years shipping production React & TypeScript. Raised engagement 35% on a 200k-user SaaS platform, cut load times 25%, and grew test coverage from 50% to 80%.',
      experience: [
        { title: 'Software Engineer (Frontend) — sqanit GmbH', meta: '01/2023 — Present, Munich', desc: 'Increased user engagement 35% on a B2B SaaS platform (200k+ monthly users); built a component library cutting UI dev time 30%; scaled test coverage from 50% to 80%; improved load times 25% via code-splitting and lazy loading.' },
        { title: 'Frontend Web Developer — enra GmbH', meta: '01/2022 — 07/2022, Paderborn', desc: 'Shipped new features and modernized legacy Vue.js code through refactoring and bug fixes; expanded the automated test suite.' },
        { title: 'Master Thesis Student — Fraunhofer IEM Institute', meta: '09/2020 — 04/2021, Paderborn', desc: 'Systematic literature review on uncertainty and imprecision in software engineering; empirical conclusions via statistical analysis.' },
        { title: 'Working Student, Data & CRM — Weidmüller GmbH', meta: '02/2019 — 07/2019, Paderborn', desc: 'Migrated data from a legacy CRM to a modern platform, validating accuracy with clients.' }
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Playwright / Vitest / Jest', 'GraphQL', 'Docker / AWS', 'Core Web Vitals'],
      education: [
        { degree: 'M.Sc. Computer Science — Universität Paderborn, Germany', years: '2017 — 2021' },
        { degree: 'B.Tech. Computer Science — Ladoke Akintola University of Technology, Nigeria', years: '2006 — 2011' }
      ],
      certs: 'AWS Certified Cloud Practitioner Essentials · AWS Certified Solutions Architect – Associate (in progress)',
      languages: 'German (B1) · English (fluent)',
      labels: { experience: '# Experience', skills: '# Skills', education: '# Education', languages: '# Languages', cmd: '$ cat resume.md', download: 'Download PDF' }
    },
    de: {
      role: 'Frontend-Entwickler — München, Deutschland',
      profile: 'Über 4 Jahre Erfahrung in der Entwicklung responsiver, performanter Webanwendungen mit React und TypeScript. Steigerung der Nutzerbindung um 35% auf einer SaaS-Plattform mit 200k+ Nutzern, Reduzierung der Ladezeiten um 25% und Erhöhung der Testabdeckung von 50% auf 80%.',
      experience: [
        { title: 'Software Engineer (Frontend) — sqanit GmbH', meta: '01/2023 — heute, München', desc: 'Steigerung der Nutzerbindung um 35% auf einer B2B-SaaS-Plattform (200k+ monatliche Nutzer); Aufbau einer Komponentenbibliothek, die die UI-Entwicklungszeit um 30% reduzierte; Testabdeckung von 50% auf 80% gesteigert; Ladezeiten um 25% verbessert.' },
        { title: 'Frontend-Webentwickler — enra GmbH', meta: '01/2022 — 07/2022, Paderborn', desc: 'Entwicklung neuer Features und Modernisierung von Vue.js-Legacy-Code; Ausbau der automatisierten Testsuite.' },
        { title: 'Masterand – Softwaretechnik — Fraunhofer IEM', meta: '09/2020 — 04/2021, Paderborn', desc: 'Systematische Literaturrecherche zu Unsicherheit und Unschärfe im Software Engineering; empirische Schlussfolgerungen durch statistische Analyse.' },
        { title: 'Werkstudent – Daten & CRM — Weidmüller GmbH', meta: '02/2019 — 07/2019, Paderborn', desc: 'Migration von Daten aus einem Legacy-CRM auf eine moderne Plattform; Datenvalidierung mit Kunden.' }
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Playwright / Vitest / Jest', 'GraphQL', 'Docker / AWS', 'Core Web Vitals'],
      education: [
        { degree: 'M.Sc. Informatik — Universität Paderborn, Deutschland', years: '2017 — 2021' },
        { degree: 'B.Tech. Informatik — Ladoke Akintola University of Technology, Nigeria', years: '2006 — 2011' }
      ],
      certs: 'AWS Certified Cloud Practitioner Essentials · AWS Certified Solutions Architect – Associate (in Bearbeitung)',
      languages: 'Deutsch (B1) · Englisch (fließend)',
      labels: { experience: '# Berufserfahrung', skills: '# Kenntnisse', education: '# Ausbildung', languages: '# Sprachen', cmd: '$ cat lebenslauf.md', download: 'PDF herunterladen' }
    }
  }
  return { data }
}
