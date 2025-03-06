"use client"

import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/ui/login-form"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/signup')
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-end border-b px-8 py-4">
        <Button onClick={handleNavigation} variant="link" className="text-sm hover:underline">
          Sign up
        </Button>
      </nav>
      <div className="flex mt-40">
        <section className="flex items-center justify-center p-8 pl-30">
          <div className="mr-8 mb-6 h-90 w-90 border-2 border-dashed flex items-center justify-center ">
            <span className="text-gray-400">Logo</span>
          </div>
          <div>
            <h1 className="mb-2 text-9xl font-bold">Story</h1>
            <h1 className="mb-2 text-9xl font-bold">Time</h1>
            <p className="text-gray-600 text-2xl">Time to make your own story</p>
          </div>
        </section>

        <section className="flex items-center justify-center p-8 pl-50">
          <LoginForm />
        </section>
      </div>
    </main>
  )
}
