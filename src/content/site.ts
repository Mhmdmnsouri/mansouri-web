import { Locale } from "@/lib/i18n/config";

export type LocalizedProject = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  year: string;
  tags: string[];
};

export type LocalizedExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: Array<{ label: string; href: string }>;
};

export type LocalizedService = {
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
};

export type LocalizedContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

export type LocalizedProcessStep = {
  phase: string;
  title: string;
  summary: string;
  outputs: string[];
  duration: string;
};

export type LocalizedAvailability = {
  title: string;
  description: string;
  status: string;
  nextSlot: string;
  timezone: string;
  modes: string[];
  note: string;
  cta: string;
};

export type LocalizedTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  result: string;
};

export type SiteDictionary = {
  localeLabel: string;
  languageSwitchLabel: string;
  brand: {
    name: string;
    role: string;
  };
  nav: {
    home: string;
    about: string;
    works: string;
    contact: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    subtitle: string;
    body: string;
    bullets: string[];
    focusAreas: string[];
    stats: Array<{ label: string; value: string }>;
    journeyTitle: string;
    journey: string;
    cta: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: string[];
      backend: string[];
      tools: string[];
      business: string[];
      general: string[];
    };
  };
  experience: {
    title: string;
    description: string;
    cta: string;
    items: LocalizedExperience[];
  };
  services: {
    title: string;
    description: string;
    cta: string;
    items: LocalizedService[];
  };
  process: {
    title: string;
    description: string;
    cta: string;
    items: LocalizedProcessStep[];
  };
  testimonials: {
    title: string;
    description: string;
    items: LocalizedTestimonial[];
  };
  availability: LocalizedAvailability;
  projects: {
    title: string;
    description: string;
    viewAll: string;
    openProject: string;
    items: LocalizedProject[];
  };
  contact: {
    title: string;
    subtitle: string;
    body: string;
    availability: string;
    responseTime: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
    channels: LocalizedContactChannel[];
    emailLabel: string;
    email: string;
  };
  footer: {
    rights: string;
  };
};

const faProjects: LocalizedProject[] = [
  {
    slug: "quantum-dashboard",
    title: "داشبورد تحلیل کوانتوم",
    summary: "یک داشبورد تستی برای مانیتورینگ سرویس ها با انیمیشن نرم و رندر سریع.",
    challenge: "نمایش همزمان حجم زیادی از داده و حفظ سرعت UI روی موبایل.",
    solution: "تقسیم کامپوننت ها، lazy rendering و طراحی کارت های سبک با motion کنترل شده.",
    result: "Lighthouse Performance در نسخه استاتیک تستی به 97 رسید.",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    slug: "nova-commerce-ui",
    title: "Nova Commerce UI",
    summary: "قالب فروشگاهی مدرن با تمرکز روی تجربه خرید سریع و مسیر کاربری واضح.",
    challenge: "ساخت UI یکپارچه برای زبان فارسی و انگلیسی با RTL/LTR دقیق.",
    solution: "توکن بندی کامل تم و استفاده از کلاس های منطقی برای فاصله گذاری و تایپوگرافی.",
    result: "کاهش خطاهای نمایشی بین زبان ها و بهبود خوانایی صفحات موبایل.",
    year: "2025",
    tags: ["UI System", "i18n", "SEO"],
  },
  {
    slug: "orion-portfolio-v3",
    title: "Orion Portfolio V3",
    summary: "نسخه تستی پورتفولیو شخصی با معماری ماژولار و صفحات SSG.",
    challenge: "بالا نگه داشتن امتیاز SEO همراه با انیمیشن و زیبایی بصری.",
    solution: "Metadata داینامیک، JSON-LD، sitemap/robots و انیمیشن های سبک مبتنی بر GPU.",
    result: "صفحات سریع تر و ایندکس بهتر موتورهای جستجو.",
    year: "2024",
    tags: ["App Router", "Structured Data", "Web Vitals"],
  },
];

const enProjects: LocalizedProject[] = [
  {
    slug: "quantum-dashboard",
    title: "Quantum Analytics Dashboard",
    summary: "A test dashboard for service monitoring with smooth motion and fast rendering.",
    challenge: "Rendering large data blocks while keeping mobile interactions responsive.",
    solution: "Component splitting, lazy sections, and lightweight card motion.",
    result: "Static test version reached a 97 Performance score in Lighthouse.",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    slug: "nova-commerce-ui",
    title: "Nova Commerce UI",
    summary: "A modern storefront interface focused on fast purchase flow and clear UX.",
    challenge: "Keeping bilingual Persian/English layouts visually consistent.",
    solution: "Token-based theming and logical spacing rules for RTL/LTR.",
    result: "Reduced language-specific visual regressions and better mobile readability.",
    year: "2025",
    tags: ["UI System", "i18n", "SEO"],
  },
  {
    slug: "orion-portfolio-v3",
    title: "Orion Portfolio V3",
    summary: "A modular personal portfolio rebuilt for static pages and better SEO.",
    challenge: "Maintaining high SEO quality with motion-rich UI.",
    solution: "Dynamic metadata, JSON-LD, sitemap/robots, and GPU-friendly animations.",
    result: "Faster page delivery and stronger indexability.",
    year: "2024",
    tags: ["App Router", "Structured Data", "Web Vitals"],
  },
];

const faExperience: LocalizedExperience[] = [
  {
    role: "برنامه‌نویس پایتون (پروژه‌های الگوریتمی)",
    company: "دانشگاه علوم و تحقیقات",
    period: "اسفند ۱۴۰۰ تا بهمن ۱۴۰۱",
    location: "تهران - دانشگاه علوم و تحقیقات",
    summary: "توسعه و پیاده‌سازی الگوریتم برای پروژه‌های دانشگاهی با تمرکز بر حل مسئله و دقت خروجی.",
    highlights: [
      "تحلیل مسئله و طراحی راهکار الگوریتمی برای نیازهای پروژه",
      "پیاده‌سازی راه‌حل‌ها با پایتون برای پروژه‌های درسی و تحقیقاتی",
      "بهینه‌سازی منطق حل مسئله برای خروجی پایدارتر و سریع‌تر",
    ],
    stack: ["پایتون", "الگوریتم", "حل مسئله"],
  },
  {
    role: "مربی پایتون",
    company: "آکادمی یاسان",
    period: "دی ۱۴۰۱ تا اردیبهشت ۱۴۰۲",
    location: "تهران - آنلاین - پاره وقت",
    summary: "آموزش پایتون مقدماتی تا متوسط به بیش از ۱۰ هنرجو در قالب کلاس‌های عمومی و جلسات فردی.",
    highlights: [
      "برگزاری کلاس‌های همگانی با مسیر آموزشی ساختاریافته",
      "منتورینگ یک‌به‌یک برای رفع اشکال، تمرین و تثبیت مفاهیم",
      "پوشش مفاهیم پایه تا سطح متوسط با تمرکز بر حل مسئله",
    ],
    stack: ["پایتون", "آموزش", "منتورینگ"],
    links: [{ label: "وب‌سایت", href: "https://yasanacademy.ir" }],
  },
  {
    role: "طراحی سایت وردپرس (فریلنس)",
    company: "کازماگرل",
    period: "اردیبهشت ۱۴۰۱ تا فروردین ۱۴۰۲",
    location: "ریموت",
    summary: "طراحی و پیاده‌سازی فرانت سایت فروش لوازم آرایشی و بهداشتی با وردپرس.",
    highlights: [
      "پیاده‌سازی صفحات اصلی فروشگاه با تمرکز بر UX و نمایش صحیح محصولات",
      "بهینه‌سازی رابط کاربری برای موبایل و بهبود تجربه خرید در مسیر سفارش",
      "هماهنگی ساختار فرانت با محتوای فروشگاهی و نیازهای کسب‌وکار",
    ],
    stack: ["وردپرس", "توسعه فرانت‌اند", "طراحی تجربه و رابط کاربری"],
  },
  {
    role: "برنامه‌نویس فرانت‌اند",
    company: "وبیشو",
    period: "خرداد ۱۴۰۲ تا تیر ۱۴۰۳",
    location: "تهران - حضوری - تمام‌وقت",
    summary: "پیاده‌سازی پروژه‌های فروشگاهی و کمپینی از جمله پرده‌استور، همراه با توسعه ابزارهای اختصاصی.",
    highlights: [
      "توسعه فرانت پروژه‌های فروشگاهی و صفحات کمپینی برای شرکت پرده‌استور",
      "پیاده‌سازی پلاگین‌های شخصی‌سازی‌شده برای وردپرس بر اساس نیاز پروژه",
      "ساخت ۲ پنل مدیریتی برای مشتریان و پرسنل آکادمی مهدیه عباسی",
      "انجام تست، دیباگ و پشتیبانی فنی در پروژه‌های متفرقه",
    ],
    stack: ["فرانت‌اند", "وردپرس", "پلاگین سفارشی", "تست و دیباگ"],
    links: [{ label: "وب‌سایت", href: "https://webishow.com" }],
  },
  {
    role: "توسعه‌دهنده فرانت‌اند",
    company: "هتلیار",
    period: "تیر ۱۴۰۳ تا مهر ۱۴۰۳",
    location: "تهران - حضوری - تمام‌وقت",
    summary: "همکاری تمام‌وقت روی توسعه پنل‌های سازمانی و سامانه رزرو هتل از جستجو تا نهایی‌سازی رزرو.",
    highlights: [
      "پیاده‌سازی پنل حسابداری درون‌سازمانی هتلیار برای مدیریت فرایندهای مالی داخلی",
      "پیاده‌سازی پنل ایرلاین بوتیمار برای مانیتورینگ و مدیریت پروازها، توقف‌های هواپیما و غیره",
      "همکاری در توسعه پروژه رزرو هتل از مرحله جستجوی اولیه هتل‌های ایران تا رزرو نهایی",
      "هم‌راستاسازی تجربه کاربری پنل‌ها با نیازهای عملیاتی تیم‌های داخلی و شرکای تجاری",
    ],
    stack: ["فرانت‌اند", "پنل مدیریتی", "رزرو هتل", "ایرلاین هواپیمایی"],
    links: [{ label: "وب‌سایت", href: "https://hotelyar.com" }],
  },
  {
    role: "مهندس ارشد فرانت‌اند",
    company: "دانش پیام بامداد نوین",
    period: "آبان ۱۴۰۳ تا اردیبهشت ۱۴۰۴",
    location: "تهران - حضوری - تمام‌وقت",
    summary:
      "توسعه و بهینه‌سازی پروژه خراسانت؛ پلتفرم خرید و فروش کالای دسته‌دوم مشابه دیوار با تمرکز روی مشهد و خراسان رضوی.",
    highlights: [
      "ریفکتور ساختار پروژه و بهینه‌سازی فنی برای پایداری و نگهداری بهتر",
      "کاهش زمان بارگذاری از حدود ۱۲ ثانیه به ۳ ثانیه",
      "اعمال تغییرات اساسی UI/UX برای بهبود تجربه کاربری و مسیر انتشار آگهی",
      "پیاده‌سازی فیچرهای جدید شامل آگهی ترحیم آنلاین و چاپی در روزنامه خراسان",
      "انجام تست، دیباگ و پشتیبانی فنی در بخش‌های مختلف محصول",
    ],
    stack: ["فرانت‌اند", "ریفکتور", "بهینه‌سازی عملکرد", "UI/UX", "تست و دیباگ"],
    links: [{ label: "وب‌سایت", href: "https://khorasanet.ir" }],
  },
  {
    role: "مدیر فنی",
    company: "ایران موسیقی",
    period: "اسفند ۱۴۰۳ تا اکنون",
    location: "تهران - ریموت",
    summary:
      "راهبری فنی و اجرایی پروژه ایران موسیقی از صفر، با رویکرد AI-first برای ساخت یک مارکت‌پلیس تخصصی موسیقی.",
    highlights: [
      "پیاده‌سازی پروژه از نقطه صفر تا لانچ با تعریف مسیر فنی، محصولی و اجرایی",
      "پیاده‌سازی کامل فرانت‌اند پروژه از معماری اولیه تا تحویل نهایی فیچرها",
      "طراحی و پیاده‌سازی مدل درآمدی و مدل فروش متناسب با مارکت‌پلیس آموزشی",
      "توسعه بستر فروش دوره‌های آموزشی، فروش نت موسیقی و ابزارهای هوشمند",
      "تحلیل نیازها و مسائل کاربران و توسعه ابزارهایی برای رفع نیازهای واقعی آن‌ها",
      "همکاری مستقیم و روزانه با تیم‌های فرانت‌اند، بک‌اند و پروداکت",
      "تعریف و پایش KPIهای محصول برای سنجش رشد، تعامل کاربر و نرخ تبدیل",
      "پیاده‌سازی قلاب‌های تعاملی برای لیدگیری و تبدیل بازدیدکننده به کاربر بالقوه",
      "مستندسازی جریان‌های کلیدی محصول برای تسهیل توسعه تیم و تحویل پایدار",
    ],
    stack: ["رهبری فنی", "محصول AI-first", "مارکت‌پلیس", "استراتژی رشد", "همکاری بین‌تیمی"],
    links: [{ label: "پلتفرم", href: "https://iranmosighi.com" }],
  },
  {
    role: "مهندس ارشد فرانت‌اند",
    company: "مای‌فرم",
    period: "تیر ۱۴۰۴ تا اکنون",
    location: "تهران - هیبرید - تمام‌وقت",
    summary:
      "توسعه و ریدیزاین یک فرم‌بیلدر آنلاین با تمرکز بر ماژولارسازی، نگهداری‌پذیری، و ارتقای تجربه کاربر.",
    highlights: [
      "تمیزکاری کدبیس، ماژولارسازی و ریفکتور گسترده کل پروژه",
      "پیاده‌سازی منطق‌های شرطی پیشرفته در فرم‌سازی",
      "توسعه بخش نتایج آماری و نموداری برای تحلیل خروجی فرم‌ها",
      "پیاده‌سازی سطوح دسترسی کاربران، بخش‌های یکپارچه‌سازی و ساب‌دامین",
      "ریدیزاین کامل پروژه بر اساس اصول UI/UX و پیاده‌سازی بخش قالب‌ها",
      "راه‌اندازی سایت وردپرسی رسمی شرکت (وب‌سایت سازمانی مای‌فرم)",
      "توسعه قابلیت‌های مدیریت کاربران و سایر فیچرهای محصول",
      "همکاری با تیم برای پیاده‌سازی قابلیت ساخت فرم با هوش مصنوعی",
      "همکاری با تیم برای پیاده‌سازی قابلیت تحلیل نتایج کمی و کیفی فرم با هوش مصنوعی",
    ],
    stack: ["فرانت‌اند", "ریفکتور", "معماری ماژولار", "UI/UX", "هوش مصنوعی"],
    links: [
      { label: "وب‌سایت", href: "https://maiform.ir" },
      { label: "پلتفرم", href: "https://design.maiform.ir/home" },
    ],
  },
];

const enExperience: LocalizedExperience[] = [
  {
    role: "Python Programmer (Algorithm Projects)",
    company: "Science and Research University",
    period: "Sep 2022 - Mar 2023",
    location: "Tehran - Science and Research University",
    summary: "Developed and implemented algorithmic solutions for university projects with a strong problem-solving focus.",
    highlights: [
      "Analyzed project requirements and designed algorithmic approaches",
      "Implemented Python-based solutions for academic and research tasks",
      "Optimized solution logic for more stable and faster outputs",
    ],
    stack: ["Python", "Algorithms", "Problem Solving"],
  },
  {
    role: "Python Instructor",
    company: "Yasan Academy",
    period: "Jan 2023 - May 2023",
    location: "Tehran - Online - Part-time",
    summary: "Taught beginner to intermediate Python to more than 10 students through group classes and 1:1 sessions.",
    highlights: [
      "Ran structured group classes with a clear learning path",
      "Provided one-on-one mentoring for debugging, exercises, and concept mastery",
      "Covered core to intermediate topics with a problem-solving mindset",
    ],
    stack: ["Python", "Teaching", "Mentoring"],
    links: [{ label: "Website", href: "https://yasanacademy.ir" }],
  },
  {
    role: "Freelance WordPress Website Designer",
    company: "CosmaGirl",
    period: "May 2022 - Apr 2023",
    location: "Remote",
    summary: "Designed and implemented the frontend of a WordPress-based cosmetics and personal care store.",
    highlights: [
      "Built core storefront pages with clear UX and product-focused presentation",
      "Optimized mobile UI to improve browsing and checkout flow quality",
      "Aligned frontend structure with ecommerce content and business requirements",
    ],
    stack: ["WordPress", "Frontend Development", "UI/UX"],
  },
  {
    role: "Frontend Developer",
    company: "Webishow",
    period: "Jun 2023 - Jul 2024",
    location: "Tehran - On-site - Full-time",
    summary: "Implemented ecommerce and campaign projects including Pardeh Store, plus custom delivery tooling.",
    highlights: [
      "Built storefront and campaign frontend experiences for Pardeh Store",
      "Developed custom WordPress plugins based on product requirements",
      "Implemented two admin panels for clients and staff of Mahdieh Abbasi Academy",
      "Handled testing, debugging, and technical support across side projects",
    ],
    stack: ["Frontend Development", "WordPress", "Custom Plugins", "Testing & Debugging"],
    links: [{ label: "Website", href: "https://webishow.com" }],
  },
  {
    role: "Frontend Developer (Full-time)",
    company: "Hotelyar",
    period: "Jul 2024 - Oct 2024",
    location: "Tehran - On-site - Full-time",
    summary: "Worked full-time on internal admin platforms and hotel booking flows from search to final reservation.",
    highlights: [
      "Built an internal accounting admin panel for Hotelyar to manage core finance workflows",
      "Built a dedicated Bootimar airline panel for end-to-end monitoring and management of airline operations",
      "Centralized passenger information, flight status, aircraft stops, and operational details in one dashboard",
      "Contributed to a hotel booking project covering the full journey from initial Iran hotel search to checkout",
      "Aligned panel UX with operational needs of internal teams and business partners",
    ],
    stack: ["Frontend Development", "Admin Panels", "Hotel Booking", "Product Collaboration"],
    links: [{ label: "Website", href: "https://hotelyar.com" }],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Danesh Payam Bamdad Novin",
    period: "Nov 2024 - May 2025",
    location: "Tehran - On-site - Full-time",
    summary:
      "Worked on Khorasanet, a second-hand marketplace similar to Divar, focused on Mashhad and Razavi Khorasan.",
    highlights: [
      "Refactored core frontend structure to improve maintainability and technical stability",
      "Reduced load time from around 12s to 3s",
      "Delivered major UI/UX changes across key journeys",
      "Implemented new features including online and print obituary listings for Khorasan newspaper",
      "Handled testing, debugging, and technical fixes across related product modules",
    ],
    stack: ["Frontend Engineering", "Refactoring", "Performance Optimization", "UI/UX", "Testing & Debugging"],
    links: [{ label: "Project", href: "https://khorasanet.ir" }],
  },
  {
    role: "Technical Lead",
    company: "Iranmosighi",
    period: "Mar 2025 - Present",
    location: "Tehran - Remote",
    summary:
      "Leading Iranmosighi from zero with an AI-first approach to build a specialized music marketplace.",
    highlights: [
      "Led the project from scratch to launch by defining technical, product, and execution tracks",
      "Fully implemented the frontend from initial architecture to final feature delivery",
      "Designed and implemented revenue and sales models aligned with the marketplace business",
      "Built key product flows for selling educational courses, sheet music, and smart tools",
      "Translated user problems and needs into practical tools that solve real user pain points",
      "Collaborated directly with frontend, backend, and product teams on day-to-day delivery",
      "Defined and monitored product KPIs for growth, engagement, and conversion quality",
      "Implemented interactive lead-capture hooks to convert visitors into qualified prospects",
      "Documented core product flows to improve team delivery speed and long-term maintainability",
    ],
    stack: ["Tech Lead", "AI-first Product", "Marketplace", "Growth Strategy", "Cross-functional Collaboration"],
    links: [{ label: "Website", href: "https://iranmosighi.com" }],
  },
  {
    role: "Senior Frontend Engineer",
    company: "MyForm",
    period: "Jul 2025 - Present",
    location: "Tehran - Hybrid - Full-time",
    summary:
      "Building and redesigning an online form builder with a focus on modular architecture, maintainability, and UX quality.",
    highlights: [
      "Cleaned up the codebase and executed large-scale modularization/refactoring",
      "Implemented advanced conditional logic for dynamic form building",
      "Built statistical and chart-based result analytics for form outcomes",
      "Implemented user access levels, integration modules, and subdomain features",
      "Redesigned the product with UI/UX principles and implemented template workflows",
      "Launched the official company WordPress website for MyForm",
      "Developed user management capabilities and multiple product features",
      "Co-built an AI-powered form generation feature",
      "Co-built an AI-powered quantitative/qualitative form analysis feature",
    ],
    stack: ["Frontend Engineering", "Refactoring", "Modular Architecture", "UI/UX", "AI Features"],
    links: [
      { label: "Website", href: "https://maiform.ir" },
      { label: "Design Version", href: "https://design.maiform.ir/home" },
    ],
  },
];

const faServices: LocalizedService[] = [
  {
    title: "طراحی و پیاده سازی فرانت‌اند",
    summary: "فرانت‌اند سریع و ریسپانسیو با معماری ماژولار و تمرکز روی UX، کیفیت کد و نگهداری آسان.",
    outcomes: ["تعامل بهتر کاربر", "سرعت بالاتر", "نگهداری ساده تر"],
    deliverables: ["React/Next.js UI", "Component Architecture", "Responsive Pages"],
  },
  {
    title: "طراحی و پیاده سازی بک‌اند",
    summary: "بک‌اند امن و مقیاس‌پذیر: API تمیز، احراز هویت، مدیریت دسترسی و طراحی دیتابیس اصولی.",
    outcomes: ["پایداری بیشتر", "یکپارچگی داده", "مقیاس پذیری بهتر"],
    deliverables: ["Node.js APIs", "Auth & Access", "Database Modeling"],
  },
  {
    title: "سئو و بهینه سازی وب‌سایت",
    summary: "بهینه‌سازی فنی سایت: سرعت، ساختار صفحات و متادیتا برای رشد ورودی ارگانیک و رتبه بهتر.",
    outcomes: ["رتبه بهتر", "ورودی ارگانیک بیشتر", "ایندکس سریع تر"],
    deliverables: ["Technical SEO", "On-Page Optimization", "Schema & Metadata"],
  },
  {
    title: "طراحی تجربه و رابط کاربری",
    summary: "طراحی UI/UX بر پایه رفتار کاربر؛ مسیرهای ساده‌تر، تعامل بیشتر و هویت بصری یکپارچه.",
    outcomes: ["مسیر کاربری بهتر", "کاهش ریزش", "هماهنگی بصری"],
    deliverables: ["Wireframe", "UI Design", "Design System Direction"],
  },
  {
    title: "مشاوره فنی و معماری محصول",
    summary: "مشاوره فنی و معماری: انتخاب مسیر توسعه، اولویت‌بندی فیچرها و کاهش ریسک اجرا و هزینه.",
    outcomes: ["تصمیم گیری سریع تر", "کاهش هزینه آزمون و خطا", "تمرکز روی رشد"],
    deliverables: ["Product Audit", "Execution Roadmap", "Growth Suggestions"],
  },
];

const enServices: LocalizedService[] = [
  {
    title: "Frontend Design & Development",
    summary: "Fast, responsive frontend with modular architecture, UX focus, and clean maintainable code.",
    outcomes: ["Better engagement", "Higher speed", "Cleaner maintenance"],
    deliverables: ["React/Next.js UI", "Component Architecture", "Responsive Pages"],
  },
  {
    title: "Backend Design & Development",
    summary: "Secure, scalable backend: clean APIs, authentication, access control, and solid database design.",
    outcomes: ["Stronger stability", "Data consistency", "Better scalability"],
    deliverables: ["Node.js APIs", "Auth & Access", "Database Modeling"],
  },
  {
    title: "SEO Optimization",
    summary: "Technical SEO across speed, metadata, and structure to improve rankings and organic traffic.",
    outcomes: ["Higher rankings", "More organic traffic", "Faster indexing"],
    deliverables: ["Technical SEO", "On-Page Optimization", "Schema & Metadata"],
  },
  {
    title: "UI/UX Design",
    summary: "User-centered UI/UX with clearer flows, higher engagement, and a consistent visual system.",
    outcomes: ["Better user flow", "Lower drop-off", "Visual consistency"],
    deliverables: ["Wireframe", "UI Design", "Design System Direction"],
  },
  {
    title: "Technical Consulting",
    summary: "Technical roadmap, feature prioritization, and practical risk/cost reduction guidance.",
    outcomes: ["Faster decisions", "Less trial-and-error cost", "Growth-focused direction"],
    deliverables: ["Product Audit", "Execution Roadmap", "Growth Suggestions"],
  },
];

const faProcess: LocalizedProcessStep[] = [
  {
    phase: "01",
    title: "شناخت و تعیین دامنه",
    summary: "شناخت دقیق هدف پروژه، کاربران، محدودیت‌ها و خروجی مورد انتظار.",
    outputs: ["بریف پروژه", "دامنه ویژگی‌ها", "برنامه اجرا"],
    duration: "۱ تا ۲ روز",
  },
  {
    phase: "02",
    title: "مسیر تجربه و رابط کاربری",
    summary: "طراحی مسیر کاربر، ساختار صفحات و زبان بصری هماهنگ با محصول.",
    outputs: ["جریان کاربر", "وایرفریم", "جهت‌گیری بصری"],
    duration: "۲ تا ۴ روز",
  },
  {
    phase: "03",
    title: "توسعه و یکپارچه‌سازی",
    summary: "توسعه ماژولار فرانت‌اند، اتصال API و اجرای استانداردهای کیفیت.",
    outputs: ["کامپوننت‌های ماژولار", "اتصال API", "رابط ریسپانسیو"],
    duration: "۱ تا ۴ هفته",
  },
  {
    phase: "04",
    title: "بهینه‌سازی و انتشار",
    summary: "بهینه‌سازی عملکرد و SEO، تست نهایی و آماده‌سازی برای انتشار.",
    outputs: ["بهینه‌سازی عملکرد", "تنظیمات سئو", "چک‌لیست انتشار"],
    duration: "۲ تا ۳ روز",
  },
];

const enProcess: LocalizedProcessStep[] = [
  {
    phase: "01",
    title: "Discovery & Scope",
    summary: "Clarify product goals, user context, constraints, and expected outcomes.",
    outputs: ["Project Brief", "Feature Scope", "Execution Plan"],
    duration: "1-2 days",
  },
  {
    phase: "02",
    title: "UX & UI Direction",
    summary: "Design user flow, page structure, and a visual direction aligned with the product.",
    outputs: ["User Flow", "Wireframe", "Visual Direction"],
    duration: "2-4 days",
  },
  {
    phase: "03",
    title: "Build & Integrate",
    summary: "Implement modular frontend, connect APIs, and enforce quality standards.",
    outputs: ["Modular Components", "API Integration", "Responsive UI"],
    duration: "1-3 weeks",
  },
  {
    phase: "04",
    title: "Optimize & Launch",
    summary: "Run performance/SEO passes, finalize QA, and prepare for release.",
    outputs: ["Performance Pass", "SEO Setup", "Launch Checklist"],
    duration: "2-3 days",
  },
];

const faTestimonials: LocalizedTestimonial[] = [
  {
    quote:
      "همکاری بسیار منظم و حرفه ای بود. ساختار فرانت‌اند پروژه ما از حالت پراکنده به یک سیستم تمیز و قابل توسعه تبدیل شد.",
    name: "زهرا رضائی",
    role: "Backend Developer",
    company: "Khorasanet",
    result: "کاهش زمان توسعه فیچرهای جدید حدود 35%",
  },
  {
    quote:
      "تجربه موبایل اپلیکیشن بعد از بازطراحی کاملا متفاوت شد. نرخ خروج کمتر شد و کاربران راحت تر مسیر اصلی را پیدا می کردند.",
    name: "یگانه نجفی",
    role: "Scrum Master",
    company: "Danesh Payam",
    result: "بهبود Conversion موبایل تا 22%",
  },
  {
    quote:
      "از نظر کیفیت کدنویسی و توجه به جزئیات UX واقعا دقیق عمل شد. در کنار سرعت اجرا، مستندسازی هم کامل تحویل داده شد.",
    name: "ماهان اشرفی",
    role: "Tech Lead",
    company: "Webishow",
    result: "تحویل پروژه 2 هفته زودتر از برنامه",
  },
];

const enTestimonials: LocalizedTestimonial[] = [
  {
    quote:
      "The collaboration was structured and highly reliable. Our frontend moved from scattered pages to a maintainable system.",
    name: "Sarah Ahmadi",
    role: "Product Manager",
    company: "Nova SaaS",
    result: "Around 35% faster feature delivery",
  },
  {
    quote:
      "Mobile UX quality improved dramatically after the redesign. Bounce dropped and users reached key actions with less friction.",
    name: "Amir Rezaei",
    role: "Head of Growth",
    company: "Orion Commerce",
    result: "Up to 22% mobile conversion growth",
  },
  {
    quote:
      "Code quality and UX precision were both excellent. Execution was fast, and documentation was delivered in a practical format.",
    name: "Niloufar Kaviani",
    role: "Founder",
    company: "Pixel Studio",
    result: "Delivered two weeks ahead of schedule",
  },
];

export const siteDictionaries: Record<Locale, SiteDictionary> = {
  fa: {
    localeLabel: "FA",
    languageSwitchLabel: "EN",
    brand: {
      name: "محمد شاه منصوری",
      role: "مهندس نرم‌افزار | توسعه محصول دیجیتال",
    },
    nav: {
      home: "خانه",
      about: "درباره من",
      works: "پروژه ها",
      contact: "تماس",
    },
    seo: {
      title: "محمد شاه منصوری | مهندس ارشد فرانت‌اند",
      description:
        "وب‌سایت رسمی محمد شاه منصوری (محمد منصوری / منصوری)؛ متخصص فرانت‌اند و مهندس ارشد فرانت‌اند.",
      keywords: [
        "محمد شاه منصوری",
        "محمد منصوری",
        "منصوری",
        "شاه منصوری",
        "متخصص فرانت اند",
        "متخصص فرانت‌اند",
        "سینیور فرانت اند",
        "سینیور فرانت‌اند",
        "مهندس ارشد فرانت‌اند",
        "توسعه دهنده فرانت اند",
        "توسعه‌دهنده فرانت‌اند",
        "پورتفولیو محمد منصوری",
      ],
    },
    hero: {
      badge: "توسعه محصول دیجیتال",
      title: "مهندس نرم‌افزار، مسلط به کسب‌وکار و علاقمند به AI",
      subtitle:
        "کارم اینه که نیاز کسب‌وکار رو تبدیل کنم به محصولی که درست کار کنه. از تجربه کاربری تا بک‌اند و دیتابیس را یکپارچه می‌بینم تا مسیر از اول درست چیده بشه. AI یکی از ابزارهای اصلی کارمه؛ حرفه‌ای و هدفمند ازش استفاده می‌کنم تا خروجی سریع‌تر و دقیق‌تر بشه.",
      primaryCta: "مشاهده پروژه‌ها",
      secondaryCta: "شروع همکاری",
    },
    about: {
      title: "درباره من",
      subtitle: "مهندس نرم‌افزار محصول‌محور با تمرکز روی تبدیل نیاز کسب‌وکار به خروجی قابل اجرا و قابل رشد.",
      body: "من پروژه را فقط در سطح کدنویسی نمی‌بینم. رویکردم از شناخت دقیق مسئله کسب‌وکار شروع می‌شود و تا طراحی تجربه کاربر، توسعه فرانت‌اند، یکپارچه‌سازی بک‌اند و بهینه‌سازی فنی ادامه پیدا می‌کند. هدف من تحویل محصولی است که هم برای کاربر نهایی قابل فهم و روان باشد، هم برای تیم محصول قابل نگهداری و توسعه. در همکاری‌ها معمولاً روی شفاف‌سازی مسیر اجرا، کاهش ریسک‌های فنی، و تصمیم‌گیری مبتنی بر اولویت واقعی محصول تمرکز می‌کنم تا خروجی نهایی فقط «زیبا» نباشد، بلکه واقعاً مسئله را حل کند و به رشد کسب‌وکار کمک کند.",
      bullets: [
        "ترجمه نیاز کسب‌وکار به Roadmap فنی روشن",
        "تصمیم‌گیری مبتنی بر تجربه کاربر، داده و اولویت محصول",
        "تمرکز همزمان بر کیفیت فنی، سرعت تحویل و قابلیت نگهداری",
      ],
      focusAreas: [
        "توسعه فرانت‌اند مدرن با رویکرد ماژولار",
        "یکپارچه‌سازی بک‌اند، API و ساختار داده",
        "بهینه‌سازی عملکرد، سئو تکنیکال و Core Web Vitals",
      ],
      stats: [
        { label: "سال تجربه", value: "4+" },
        { label: "پروژه انجام‌شده", value: "20+" },
        { label: "فوکوس اصلی", value: "مهندس نرم‌افزار" },
      ],
      journeyTitle: "مسیر حرفه‌ای",
      journey:
        "از پروژه‌های فریلنس تا همکاری با تیم‌های محصول، تمرکز من همیشه روی این بوده که خروجی صرفاً «زیبا» نباشد؛ بلکه مسئله واقعی کسب‌وکار را حل کند، تجربه کاربر را بهتر کند و از نظر فنی برای توسعه آینده آماده بماند. در پروژه‌های مختلف یاد گرفتم تصمیم فنی زمانی ارزشمند است که به تصمیم محصولی درست وصل شود؛ یعنی هر فیچر علاوه بر اجرای دقیق، باید اثر قابل اندازه‌گیری روی رفتار کاربر و نتیجه کسب‌وکار داشته باشد. به همین دلیل در همکاری‌ها فقط تحویل کد برای من کافی نیست؛ تلاش می‌کنم مسیر اجرا شفاف باشد، اولویت‌ها منطقی چیده شوند، ریسک‌های فنی از ابتدا کنترل شوند و تیم بتواند بعد از تحویل هم با سرعت و اطمینان توسعه را ادامه دهد.",
      cta: "برای همکاری و مشاوره فنی پیام بده",
    },
    skills: {
      title: "مهارت ها و ابزارها",
      categories: {
        frontend: [
          "HTML5, CSS3, Sass",
          "JavaScript, TypeScript",
          "React.js, Next.js (App Router)",
          "Vue.js, Nuxt.js",
          "Tailwind CSS, CSS Modules",
          "shadcn/ui, daisyUI, Nuxt UI",
          "jQuery, Bootstrap",
          "UI/UX Design Fundamentals",
          "Responsive & Mobile-First Design",
          "RTL/LTR Internationalization (i18n)",
          "Framer Motion, GSAP",
          "Performance Optimization (Core Web Vitals)",
        ],
        backend: [
          "Node.js, Express.js",
          "MongoDB, Mongoose",
          "WordPress (Headless/Theme Customization)",
          "REST API Integration",
        ],
        tools: [
          "Figma (Auto Layout, Prototyping)",
          "Node Package Manager (npm)",
          "Google Search Console (GSC)",
          "Prompt Engineering for AI Workflows",
          "AI Tools: Cursor, Claude",
          "SEO Technical (Metadata, Structured Data)",
          "Git, GitHub, GitLab",
          "CI/CD, Docker, Vercel Deployment",
        ],
        business: [
          "تحقیق بازار و تحلیل رقبا",
          "دیجیتال مارکتینگ با AI",
          "پرسونا نویسی و سگمنت بندی مخاطب",
          "طراحی مسیر ورود به بازار (Go-to-Market)",
          "راه اندازی و توسعه اولیه بیزینس دیجیتال",
          "تحلیل فانل فروش و بهینه سازی نرخ تبدیل",
        ],
        general: [
          "ایده پردازی و حل مسئله",
          "مسئولیت پذیری و تعهد کاری",
          "مدیریت زمان و اولویت بندی",
          "کار تیمی و ارتباط موثر",
          "مستندسازی و انتقال دانش",
          "یادگیری سریع و سازگاری بالا",
          "تفکر انتقادی و تحلیل تصمیم",
          "مدیریت تعارض و مذاکره موثر",
        ],
      },
    },
    experience: {
      title: "سابقه کاری",
      description: "خلاصه‌ای از تجربه‌های کاری مرتبط با توسعه فرانت‌اند و محصول.",
      cta: "شروع همکاری",
      items: faExperience,
    },
    services: {
      title: "خدمات",
      description: "سرویس‌هایی که ارائه می‌دهم روی سه چیز متمرکزند: سرعت بالا، پایه‌ی فنی محکم، و توسعه‌پذیری واقعی.",
      cta: "شروع همکاری",
      items: faServices,
    },
    process: {
      title: "فرآیند همکاری",
      description: "مسیر شفاف اجرای پروژه از تحلیل اولیه تا لانچ نهایی.",
      cta: "شروع پروژه",
      items: faProcess,
    },
    testimonials: {
      title: "نظرات همکاران / کارفرماها",
      description: "چند بازخورد واقعی از همکاری های اخیر روی پروژه های محصول محور.",
      items: faTestimonials,
    },
    availability: {
      title: "وضعیت همکاری",
      description: "وضعیت همکاری من برای شروع پروژه‌های جدید و زمان‌بندی تقریبی پاسخ.",
      status: "آماده پذیرش پروژه جدید",
      nextSlot: "شروع همکاری: از هفته آینده",
      timezone: "منطقه زمانی: GMT+3:30",
      modes: ["فریلنس", "قراردادی", "همکاری پاره‌وقت با محصول"],
      note: "برای شروع سریع، یک پیام شامل هدف پروژه، دامنه کار و ددلاین ارسال کن.",
      cta: "رزرو زمان گفتگو",
    },
    projects: {
      title: "پروژه های تستی",
      description: "محتوا فعلا نمونه ای است تا ساختار نهایی و UX قابل ارزیابی باشد.",
      viewAll: "نمایش همه",
      openProject: "مشاهده جزئیات",
      items: faProjects,
    },
    contact: {
      title: "برای همکاری آماده‌ام",
      subtitle:
        "اگر محصولت به یک مسیر فنی دقیق از تحلیل نیاز و طراحی تجربه کاربری تا توسعه و بهینه‌سازی نیاز دارد، خوشحال می‌شوم همکاری کنیم.",
      body: "برای شروع همکاری کافیه یک پیام کوتاه شامل هدف پروژه، زمان‌بندی و دامنه ارسال کنی.",
      availability: "همکاری به صورت (فریلنس / قراردادی)",
      responseTime: "پاسخگویی کمتر از 48 ساعت",
      location: "ایران - همکاری ریموت",
      primaryCta: "ارسال ایمیل",
      secondaryCta: "مشاهده پروژه‌ها",
      channels: [
        {
          label: "ایمیل مستقیم",
          value: "shahmansouri.dev@gmail.com",
          href: "mailto:shahmansouri.dev@gmail.com",
          icon: "solar:letter-bold-duotone",
        },
        {
          label: "لینکدین",
          value: "linkedin.com/in/mhmdmnsouri",
          href: "https://www.linkedin.com/in/mhmdmnsouri",
          icon: "solar:link-circle-bold-duotone",
        },
        {
          label: "گیت‌هاب",
          value: "github.com/Mhmdmnsouri",
          href: "https://github.com/Mhmdmnsouri",
          icon: "solar:code-bold-duotone",
        },
      ],
      emailLabel: "ایمیل",
      email: "shahmansouri.dev@gmail.com",
    },
    footer: {
      rights: "تمام حقوق محفوظ است.",
    },
  },
  en: {
    localeLabel: "EN",
    languageSwitchLabel: "FA",
    brand: {
      name: "Mohamad Shahmansouri",
      role: "Software Engineer | Digital Product",
    },
    nav: {
      home: "Home",
      about: "About",
      works: "Works",
      contact: "Contact",
    },
    seo: {
      title: "Mohamad Shahmansouri | Senior Frontend Engineer",
      description:
        "Official website of Mohamad Shahmansouri (Mansouri / Shahmansouri / Mhmdmnsouri), Senior Frontend Engineer.",
      keywords: [
        "mohamad shahmansouri",
        "mohamad mansouri",
        "mansouri",
        "shahmansouri",
        "mhmdmnsouri",
        "senior frontend engineer",
        "frontend specialist",
        "frontend developer iran",
        "mohammad shahmansouri",
        "mohamad shah mansouri",
      ],
    },
    hero: {
      badge: "Digital Product Development",
      title: "Software Engineer, Business-Savvy & AI Enthusiast",
      subtitle:
        "I turn business needs into products that actually work. I look at everything end-to-end—from user experience to backend and database—so the foundation is solid from day one. AI is one of my core tools; I use it professionally and intentionally to deliver faster and more accurate results.",
      primaryCta: "Explore Projects",
      secondaryCta: "Start Collaboration",
    },
    about: {
      title: "About Me",
      subtitle: "A product-focused software engineer turning business needs into scalable digital solutions.",
      body: "I approach products beyond isolated coding tasks. My process starts with understanding the core business problem, then shaping UX direction, implementing frontend, integrating backend services, and refining technical quality. I focus on building solutions that are clear for users and maintainable for teams. In practice, I care about execution clarity, reduced technical risk, and prioritizing what truly moves the product forward. The goal is not just visual quality, but delivering a product that solves real problems and supports sustainable growth.",
      bullets: [
        "Turning business goals into clear technical execution paths",
        "Prioritizing user value with product and data context",
        "Balancing delivery speed, code quality, and maintainability",
      ],
      focusAreas: [
        "Modular frontend engineering for modern products",
        "Backend/API integration and data flow architecture",
        "Performance, technical SEO, and Core Web Vitals optimization",
        "UX flow design and bilingual product experience",
      ],
      stats: [
        { label: "Years of Experience", value: "4+" },
        { label: "Delivered Projects", value: "20+" },
        { label: "Primary Focus", value: "Software Engineer" },
      ],
      journeyTitle: "Career Journey",
      journey:
        "My journey evolved from freelance delivery to product-oriented collaboration, where the focus has always been practical outcomes: solving real business problems, improving user experience, and building technical foundations that scale.",
      cta: "Reach out for technical collaboration",
    },
    skills: {
      title: "Skills & Stack",
      categories: {
        frontend: [
          "HTML5, CSS3, Sass",
          "JavaScript, TypeScript",
          "React.js, Next.js (App Router)",
          "Vue.js, Nuxt.js",
          "Tailwind CSS, CSS Modules",
          "shadcn/ui, daisyUI, Nuxt UI",
          "jQuery, Bootstrap",
          "UI/UX Design Fundamentals",
          "Responsive & Mobile-First Design",
          "RTL/LTR Internationalization (i18n)",
          "Framer Motion, GSAP",
          "Performance Optimization (Core Web Vitals)",
        ],
        backend: [
          "Node.js, Express.js",
          "MongoDB, Mongoose",
          "WordPress (Headless/Theme Customization)",
          "REST API Integration",
        ],
        tools: [
          "Figma (Auto Layout, Prototyping)",
          "Node Package Manager (npm)",
          "Google Search Console (GSC)",
          "Prompt Engineering for AI Workflows",
          "AI Tools: Cursor, Claude",
          "Technical SEO",
          "Git, GitHub, GitLab",
          "CI/CD, Docker, Vercel Deployment",
        ],
        business: [
          "Market Research & Competitor Analysis",
          "AI-Powered Digital Marketing",
          "Persona Writing & Audience Segmentation",
          "Go-to-Market Strategy Design",
          "Digital Business Launch & Early Growth",
          "Funnel Analysis & Conversion Optimization",
        ],
        general: [
          "Ideation & Problem Solving",
          "Ownership & Accountability",
          "Time Management & Prioritization",
          "Teamwork & Effective Communication",
          "Documentation & Knowledge Sharing",
          "Fast Learning & Adaptability",
          "Critical Thinking & Decision Analysis",
          "Conflict Management & Effective Negotiation",
        ],
      },
    },
    experience: {
      title: "Work Experience",
      description: "A concise timeline of product-focused frontend roles.",
      cta: "Start Collaboration",
      items: enExperience,
    },
    services: {
      title: "Services",
      description: "What I offer, focused on product impact and user experience quality.",
      cta: "Start Collaboration",
      items: enServices,
    },
    process: {
      title: "Process",
      description: "A clear execution flow from discovery to production launch.",
      cta: "Start a Project",
      items: enProcess,
    },
    testimonials: {
      title: "Client Testimonials",
      description: "Selected feedback from recent product-focused collaborations.",
      items: enTestimonials,
    },
    availability: {
      title: "Availability",
      description: "Current collaboration status and expected start window for new projects.",
      status: "Open For New Projects",
      nextSlot: "Next available slot: Starting next week",
      timezone: "Timezone: GMT+3:30",
      modes: ["Freelance", "Contract", "Part-time Product Support"],
      note: "To get started quickly, send a short brief with goals, scope, and timeline.",
      cta: "Book a Discovery Call",
    },
    projects: {
      title: "Sample Projects",
      description: "Content is currently placeholder to validate structure, UI, and UX behavior.",
      viewAll: "View All",
      openProject: "Open Details",
      items: enProjects,
    },
    contact: {
      title: "Open To Collaboration",
      subtitle:
        "If your product needs a clear technical path from requirement analysis and UX to development and optimization, I'd be glad to collaborate.",
      body: "To get started, send a short message with your project goal, timeline, and scope.",
      availability: "Collaboration mode: Freelance / Contract",
      responseTime: "Response time: Less than 48 hours",
      location: "Iran - Remote collaboration",
      primaryCta: "Send Email",
      secondaryCta: "View Projects",
      channels: [
        {
          label: "Direct Email",
          value: "shahmansouri.dev@gmail.com",
          href: "mailto:shahmansouri.dev@gmail.com",
          icon: "solar:letter-bold-duotone",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/mhmdmnsouri",
          href: "https://www.linkedin.com/in/mhmdmnsouri",
          icon: "solar:link-circle-bold-duotone",
        },
        {
          label: "GitHub",
          value: "github.com/Mhmdmnsouri",
          href: "https://github.com/Mhmdmnsouri",
          icon: "solar:code-bold-duotone",
        },
      ],
      emailLabel: "Email",
      email: "shahmansouri.dev@gmail.com",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function getProjectBySlug(locale: Locale, slug: string) {
  return siteDictionaries[locale].projects.items.find((item) => item.slug === slug);
}

