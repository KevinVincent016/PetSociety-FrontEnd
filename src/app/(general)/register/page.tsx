"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function usernamePage(){
    
    // Datos del usuario
    const [username, setUsername] = useState(""); 
    const [userlastname, setUserlastname] = useState(""); 
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Datos de la mascota
    const [petname, setPetname] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState(""); 

    // Datos medicos de la mascota
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bloodtype, setBloodtype] = useState("");
    const [medicalailments, setMedicalailments] = useState("");

    // Paso del formulario
    const [step, setStep] = useState(1);
    const router = useRouter();
    const { login } = useLogin();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            if (!username || !password || !phone || !email) {
                alert("Por favor complete todos los campos");
                return;
            }
            setStep(2);
        } else {
            console.log(username, password, phone, email, petname, species, breed, gender, birthdate, height, weight, bloodtype, medicalailments);
            login(username, password)
                .then(()=>router.push("/profile"))
                .catch( (e: Error) => { 
                    setUsername("");
                    setPassword("");
                    alert("Error en el registro")
                });
        }
    }
    
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-8 md:my-16">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Bienvenido a PetSociety
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {step === 1 ? "Aqui puedes registrarte" : "Ahora registra los datos de tu mascota"}
          </p>
     
          <form className="my-8" onSubmit={onSubmit}>
            {step === 1 ? (
              <>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">Nombre</Label>
                    <Input id="firstname" placeholder="Nombre" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastname">Apellido</Label>
                    <Input id="lastname" placeholder="Apellido" type="text" value={userlastname} onChange={(e)=>setUserlastname(e.target.value)} />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phone">Telefono Celular</Label>
                  <Input id="phone" placeholder="+57" type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Correo Electronico</Label>
                  <Input id="email" placeholder="Usuario@gmail.com" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </LabelInputContainer>
              </>
            ) : (
              <>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4">
                  Esta información será visible para el veterinario.
                </p>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="petname">Nombre de la mascota</Label>
                  <Input id="petname" placeholder="Nombre de la mascota" type="text" value={petname} onChange={(e)=>setPetname(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="species">Especie</Label>
                  <Input id="species" placeholder="Especie" type="text" value={species} onChange={(e)=>setSpecies(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="breed">Raza</Label>
                  <Input id="breed" placeholder="Raza" type="text" value={breed} onChange={(e)=>setBreed(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="gender">Genero</Label>
                  <Input id="gender" placeholder="Genero" type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="birthdate">Fecha de nacimiento</Label>
                  <Input id="birthdate" placeholder="Fecha de nacimiento" type="date" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
                </LabelInputContainer>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4">
                  Informacion medica de la mascota.
                </p>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input id="height" placeholder="Altura (cm)" type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input id="weight" placeholder="Peso (kg)" type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="bloodtype">Tipo de sangre</Label>
                  <Input id="bloodtype" placeholder="Tipo de sangre" type="text" value={bloodtype} onChange={(e)=>setBloodtype(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="medicalailments">Enfermedades</Label>
                  <Input id="medicalailments" placeholder="Enfermedades" type="text" value={medicalailments} onChange={(e)=>setMedicalailments(e.target.value)}/>
                </LabelInputContainer>
              </>
            )}
     
            <div className="flex flex-row space-x-2">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                >
                  &larr; Regresar
                  <BottomGradient />
                </button>
              )}
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                {step === 1 ? "Continuar" : "Finalizar"} &rarr;
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };