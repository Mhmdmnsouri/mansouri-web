"use client";

import { useState } from "react";
import { SiteDictionary } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ICON_SIZE, SolarIcon } from "@/components/icons/SolarIcon";

type TabId = "frontend" | "backend" | "tools" | "business" | "general";

type TabConfig = {
  id: TabId;
  labelFa: string;
  labelEn: string;
  icon: string;
};

const TABS: TabConfig[] = [
  { id: "frontend", labelFa: "فرانت‌اند", labelEn: "Frontend", icon: "solar:monitor-smartphone-bold-duotone" },
  { id: "backend", labelFa: "بک‌اند", labelEn: "Backend", icon: "solar:server-bold-duotone" },
  { id: "tools", labelFa: "ابزارها", labelEn: "Tools", icon: "solar:widget-3-bold-duotone" },
  { id: "business", labelFa: "کسب‌وکار", labelEn: "Business", icon: "solar:chart-2-bold-duotone" },
  { id: "general", labelFa: "عمومی", labelEn: "General", icon: "solar:lightbulb-bold-duotone" },
];

const ICON_RULES: Array<{ keywords: string[]; icon: string }> = [
  { keywords: ["html", "css", "sass"], icon: "solar:code-2-bold-duotone" },
  { keywords: ["javascript", "typescript"], icon: "solar:code-square-bold-duotone" },
  { keywords: ["react"], icon: "solar:atom-bold-duotone" },
  { keywords: ["next", "vue", "nuxt"], icon: "solar:widget-add-bold-duotone" },
  { keywords: ["node", "express"], icon: "solar:programming-bold-duotone" },
  { keywords: ["mongo", "mongoose", "redux", "zustand"], icon: "solar:database-bold-duotone" },
  { keywords: ["wordpress"], icon: "solar:folder-with-files-bold-duotone" },
  { keywords: ["tailwind", "ui/ux", "design"], icon: "solar:pallete-2-bold-duotone" },
  { keywords: ["figma"], icon: "solar:pen-2-bold-duotone" },
  { keywords: ["responsive", "mobile"], icon: "solar:smartphone-2-bold-duotone" },
  { keywords: ["rtl", "ltr", "i18n"], icon: "solar:global-bold-duotone" },
  { keywords: ["motion", "gsap"], icon: "solar:bolt-bold-duotone" },
  { keywords: ["prompt"], icon: "solar:chat-round-dots-bold-duotone" },
  { keywords: ["cursor", "claude", " ai"], icon: "solar:magic-stick-3-bold-duotone" },
  { keywords: ["git", "github", "gitlab"], icon: "solar:code-bold-duotone" },
  { keywords: ["docker"], icon: "solar:box-bold-duotone" },
  { keywords: ["ci/cd", "vercel", "launch", "early growth", "راه اندازی"], icon: "solar:rocket-bold-duotone" },
  { keywords: ["api", "query"], icon: "solar:server-square-cloud-bold-duotone" },
  { keywords: ["form", "zod"], icon: "solar:document-text-bold-duotone" },
  { keywords: ["accessibility", "wcag", "aria"], icon: "solar:accessibility-bold-duotone" },
  { keywords: ["performance", "web vitals"], icon: "solar:speedometer-middle-bold-duotone" },
  { keywords: ["seo", "strategy", "استراتژی"], icon: "solar:chart-square-bold-duotone" },
  { keywords: ["market", "بازار", "competitor"], icon: "solar:chart-2-bold-duotone" },
  { keywords: ["persona", "پرسونا", "audience"], icon: "solar:users-group-rounded-bold-duotone" },
  { keywords: ["business", "بیزینس", "go-to-market"], icon: "solar:briefcase-bold-duotone" },
  { keywords: ["conversion", "قیف", "funnel"], icon: "solar:graph-up-bold-duotone" },
  { keywords: ["ایده", "ideation", "problem solving"], icon: "solar:lightbulb-bold-duotone" },
  { keywords: ["تفکر", "critical thinking", "decision analysis"], icon: "solar:lightbulb-bolt-bold-duotone" },
  { keywords: ["مسئولیت", "ownership", "accountability"], icon: "solar:shield-check-bold-duotone" },
  { keywords: ["teamwork", "ارتباط", "communication"], icon: "solar:users-group-rounded-bold-duotone" },
  { keywords: ["time management", "اولویت"], icon: "solar:clock-circle-bold-duotone" },
  { keywords: ["documentation", "مستندسازی"], icon: "solar:document-text-bold-duotone" },
  { keywords: ["learning", "یادگیری", "adaptability"], icon: "solar:bookmark-square-minimalistic-bold-duotone" },
  { keywords: ["test"], icon: "solar:checklist-minimalistic-bold-duotone" },
];

function getSkillIcon(skill: string): string {
  const key = skill.toLowerCase();
  const matched = ICON_RULES.find((rule) => rule.keywords.some((keyword) => key.includes(keyword)));
  return matched?.icon ?? "solar:stars-line-duotone";
}

export function SkillsSection({ dictionary }: { dictionary: SiteDictionary }) {
  const isFa = dictionary.localeLabel.toUpperCase() === "FA";
  const [activeTab, setActiveTab] = useState<TabId>("frontend");

  const grouped = dictionary.skills.categories;
  const activeItems = grouped[activeTab];

  return (
    <section className="section-spacing">
      <div className="app-shell space-y-5">
        <Reveal>
          <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
            <SolarIcon name="solar:code-square-bold-duotone" size={26} className="text-[var(--brand)]" />
            {dictionary.skills.title}
          </h2>
        </Reveal>

        <div className="relative">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {TABS.map((tab) => {
              const active = tab.id === activeTab;
              const label = isFa ? tab.labelFa : tab.labelEn;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`focus-ring inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs transition tab-hover md:text-sm ${active
                      ? "border-[var(--brand)] bg-[var(--surface-soft-2)] text-[var(--text)]"
                      : "border-[var(--border)] bg-[var(--surface)] muted"
                    }`}
                >
                  <SolarIcon name={tab.icon} size={ICON_SIZE.sm} className={active ? "text-[var(--brand)]" : ""} />
                  <span>{label}</span>
                  <span className="flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[10px] leading-none">
                    {grouped[tab.id].length}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 z-10 w-15 md:hidden ${isFa
                ? "left-0 bg-gradient-to-r from-[var(--bg)] to-transparent"
                : "right-0 bg-gradient-to-l from-[var(--bg)] to-transparent"
              }`}
          />
        </div>

        <div className="skills-compact-grid skills-grid">
          {activeItems.map((skill, index) => (
            <Reveal key={`${activeTab}-${skill}`} delay={index * 0.03}>
              <div className="surface surface-hover flex h-full items-center gap-2 p-3 text-xs font-medium muted md:gap-3 md:p-4 md:text-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--brand)] md:h-9 md:w-9">
                  <SolarIcon name={getSkillIcon(skill)} size={ICON_SIZE.sm} />
                </span>
                <span className="leading-5 md:leading-6">{skill}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
