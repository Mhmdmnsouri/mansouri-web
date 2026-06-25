export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
        <h2 className="text-2xl font-semibold">در ارتباط باشیم</h2>
        <p className="text-gray-300 mt-2">برای همکاری یا گفتگو پیام بده.</p>
        <a
          href="mailto:you@example.com"
          className="inline-block mt-4 rounded-2xl px-4 py-2 bg-sky-500 text-white"
        >
          ایمیل
        </a>
      </div>
    </section>
  );
}
