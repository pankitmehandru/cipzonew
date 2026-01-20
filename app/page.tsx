import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-16">
        <h1 className="text-4xl font-bold">Cipzo</h1>

        <p className="text-lg text-white/80">
          An Indian-first video platform for creators and communities.
        </p>

        <p className="text-sm text-white/60">
          🚧 We’re building. Early access coming soon.
        </p>
      </section>

      <Footer />
    </main>
  );
}
