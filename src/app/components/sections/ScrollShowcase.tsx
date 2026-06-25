"use client";
import { useFadeInOnScroll } from "@/app/components/animations/useFadeInOnScroll";

export default function ScrollShowcase() {
  useFadeInOnScroll(".reveal");
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="reveal rounded-2xl border border-white/10 p-6 bg-white/5"
          >
            باکس {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
