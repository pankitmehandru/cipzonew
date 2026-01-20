import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default async function Watch({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6">
          <div className="text-sm text-white/60">Now watching</div>
          <h1 className="text-2xl font-bold mt-1">Sample Video #{id}</h1>
          <div className="text-sm text-white/60 mt-2">Creator: Cipzo Demo • Language: Hindi</div>
        </div>

        {/* Fake video player */}
        <div className="w-full rounded-xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
          <div className="text-white/60 text-sm">Video player placeholder</div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          <button className="rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold">
            Like
          </button>
          <button className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white">
            Follow
          </button>
          <button className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white">
            Tip (Coming Soon)
          </button>
        </div>

        {/* Description */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold mb-2">Description</div>
          <p className="text-sm text-white/70 leading-relaxed">
            This is a placeholder watch page. Next we’ll connect real videos, creator profiles,
            and tipping via UPI.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
