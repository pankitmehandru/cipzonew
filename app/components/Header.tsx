import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
        Cipzo
        </Link>


        <nav className="flex items-center gap-6 text-sm font-medium text-white/80">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/upload" className="hover:text-white">
          Upload
        </Link>
        </nav>
      </div>
    </header>
  );
}
