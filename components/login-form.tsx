"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function LoginForm() {
  return (
    <Button onClick={() => signIn("github")} className="w-full">
      <Github className="w-4 h-4 mr-2" />
      Sign in with GitHub
    </Button>
  )
}