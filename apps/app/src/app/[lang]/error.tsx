"use client"

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="container m-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-3">
      <h1 className="text-center text-xl font-bold lg:text-4xl">Error something went wrong</h1>
      <button onClick={reset} className="rounded bg-primary px-4 py-2 text-white hover:opacity-90">
        Try again
      </button>
    </main>
  )
}
