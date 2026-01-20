export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-white/60">
        © {year} Cipzo. All rights reserved.
      </div>
    </footer>
  );
}
