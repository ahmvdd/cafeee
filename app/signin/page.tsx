"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SignInRoute() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-violet-50 to-pink-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => router.back()}
        >
          ← Retour
        </Button>
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl font-bold text-yellow-500 mb-2">⚡</span>
          <h2 className="text-2xl font-semibold text-gray-800">Connexion</h2>
        </div>
        <form className="space-y-7">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full"
            autoComplete="email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="w-full"
            autoComplete="current-password"
          />
          <Button type="submit" className="w-full shadow-md bg-violet-600 text-white hover:bg-violet-700">
            Connexion
          </Button>
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Mot de passe oublié ?
          </a>
          <a href="/signup" className="text-violet-600 hover:underline">
            Créer un compte
          </a>
        </div>
      </div>
    </div>
  );
}
