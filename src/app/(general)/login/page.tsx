"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useLogin();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Por favor complete todos los campos");
            return;
        }

        try {
            await login(email, password);
            router.push("/profile");
        } catch (error) {
            setEmail("");
            setPassword("");
            alert("Credenciales inválidas");
            console.log(error);
        }
    }

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-8 md:my-16">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Bienvenido a PetSociety
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Inicia sesión para continuar
            </p>

            <form className="my-8" onSubmit={onSubmit}>
                <div className="flex flex-col space-y-2 mb-4">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input 
                        id="email" 
                        placeholder="correo@ejemplo.com" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col space-y-2 mb-4">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input 
                        id="password" 
                        placeholder="••••••••" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                    type="submit"
                >
                    Iniciar sesión &rarr;
                </button>
            </form>
        </div>
    );
}