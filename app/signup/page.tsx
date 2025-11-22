"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Utilisateur créé:", userData);
    router.push('/signin');
  };

  return (
    <div className="min-h-screen w-screen flex bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100">
      <div className="flex flex-grow rounded-3xl shadow-xl overflow-hidden max-w-full mx-auto">
        
        {/* Image à gauche pleine hauteur */}
        <div className="hidden md:block md:w-1/2 relative h-full min-h-[100vh]">
            <Image
                src="/image_connexion_inscription.jpg"
                alt="Surveillance Kitchen"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            </div>


        {/* Formulaire à droite, prend toute la hauteur */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 text-gray-600 hover:text-gray-900 self-start"
            onClick={() => router.back()}
          >
            Revenir sur la page d'accueil ?

          </Button>

          <div className="flex justify-between mb-8">
            <Link href="/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900 font-medium underline">
                Accueil
              </a>
            </Link>
            <Link href="/signin" legacyBehavior>
              <a className="text-indigo-600 hover:text-indigo-900 font-medium underline">
                Se connecter
              </a>
            </Link>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
            Créer un compte
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Input
              name="username"
              type="text"
              placeholder="Nom d'utilisateur"
              required
              className="w-full text-lg rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full text-lg rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <Input
              name="password"
              type="password"
              placeholder="Mot de passe"
              required
              className="w-full text-lg rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl shadow-lg text-lg font-semibold transition-colors duration-300"
            >
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
