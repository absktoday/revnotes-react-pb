import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className=" text-5xl font-bold">The simplest way to keep notes</h1>
      <p>
        All your notes,synced to all your devices. Use RevNotes now in your
        browser.
      </p>
      <Link href={"login"}>Open in Browser</Link>
    </main>
  );
}
