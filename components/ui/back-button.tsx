"use client"

import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="text-slate-300 mb-6 flex items-center gap-2 hover:text-indigo-400 transition-colors text-sm font-medium"
    >
      ← Back
    </button>
  )
}
