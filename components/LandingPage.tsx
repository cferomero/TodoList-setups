import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function LandingPage() {
  return (
    <div className="container mx-auto p-4 space-y-8 text-center">
      <h1 className="text-4xl font-bold">Welcome to TaskMaster</h1>
      <p className="text-xl">Manage your tasks efficiently and boost your productivity!</p>
      <Button onClick={() => signIn()}>Sign In</Button>
    </div>
  )
}