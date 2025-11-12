import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="w-full max-w-2xl p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">About This App</h1>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          This is a sample Next.js application scaffolded to demonstrate routing, layout, and theming. You can use this page to describe your project, team, or any other information.
        </p>
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}
