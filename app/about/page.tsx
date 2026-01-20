import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">About Cipzo</h1>

        <p className="text-white/80 leading-relaxed">
          Cipzo is an India-first video platform being built with creators in
          mind. We’re starting simple and will add creator tools, tipping, and
          regional discovery step by step.
        </p>
      </section>

      <Footer />
    </main>
  );
}
