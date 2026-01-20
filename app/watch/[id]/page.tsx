import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getVideoById } from "../../../lib/videos";

export default async function Watch({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = getVideoById(id);

  if (!video) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-2xl font-bold">Video not found</h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6">
          <div className="text-sm text-white/60">Now watching</div>
          <h1 className="text-2xl font-bold mt-1">{video.title}</h1>
          <div className="text-sm text-white/60 mt-2">
            Creator: {video.creator} • Language: {video.language}
          </div>
        </div>

        {/* Real video embed */}
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

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

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold mb-2">Description</div>
          <p className="text-sm text-white/70 leading-relaxed">
            This is the first real watch experience on Cipzo. Next we’ll add real
            uploads, creator profiles, and tipping via UPI.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
