import { Card } from "@/app/components/ui/Card";
import { works } from "@/data/works";
import Image from "next/image";

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-24">
      <h2 className="text-2xl font-semibold mb-8">نمونه‌کارهای منتخب</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {works.slice(0, 3).map((w) => (
          <Card key={w.slug}>
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image
                src={w.cover}
                alt={w.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{w.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
