import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Upload() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Upload</h1>

        <p className="text-white/80 mb-2">
          Video uploads are coming soon.
        </p>

        <p className="text-sm text-white/60">
          We’re building Cipzo step by step. Creator tools will be added next.
        </p>
      </section>

      <Footer />
    </main>
  );
}
