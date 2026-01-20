import Link from "next/link";
import { videos } from "@/lib/videos";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-white">Cipzo</h1>
        <p className="mt-2 text-lg text-white/80">
          An Indian-first video platform for creators and communities.
        </p>
        <p className="mt-2 text-sm text-white/60">
          🚧 We’re building. Early access coming soon.
        </p>
      
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {videos.map((v) => (
          <Link
            key={v.id}
            href={`/watch/${v.id}`}
            className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <div className="aspect-video rounded-lg bg-white/10 mb-3" />
            <div className="font-semibold">{v.title}</div>
            <div className="text-sm text-white/60 mt-1">
              {v.creator} • {v.language}
            </div>
          </Link>
          ))}
          </div>
          </a>
      
          <a
            href="/watch/2"
            className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <div className="aspect-video rounded-lg bg-white/10 mb-3" />
            <div className="font-semibold">UPI & creator income (Demo)</div>
            <div className="text-sm text-white/60 mt-1">Cipzo Demo • English</div>
          </a>
        </div>
      </section>


      <Footer />
    </main>
  );
}
