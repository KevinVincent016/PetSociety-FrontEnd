import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICESI About us",
    description: "ICESI University",
  };

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col item-center p-24">
        <h1 className="flex items-center">About Page</h1>
        <p>Bienvenidos a nuestra clínica veterinaria, donde el cuidado y bienestar de sus mascotas es nuestra prioridad. Ofrecemos servicios médicos integrales, desde chequeos de rutina hasta tratamientos especializados. Nuestro equipo de veterinarios profesionales está disponible para atender consultas, realizar diagnósticos precisos y brindar el mejor tratamiento para sus compañeros peludos. Agende una cita con nosotros y confíe en nuestra experiencia para mantener a sus mascotas saludables y felices.</p>
    </div>
  );
}