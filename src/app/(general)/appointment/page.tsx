"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Brand from "../../../components/brand-logo/Brand";
import { useRouter } from "next/navigation";

interface Appointment {
  id: string;
  date: string;
  patientName: string;
  type: string;
  veterinarian: string;
  location: string;
}

const AppointmentsList = () => {
  const router = useRouter();
  const appointments: Appointment[] = [
    {
      id: "57931021",
      date: "10/07/2020 - 16:46",
      patientName: "Bruno",
      type: "Revisión General",
      veterinarian: "Pini",
      location: "Cll xx. # xx-xx - Consultorio 1"
    },
    {
      id: "001239791",
      date: "03/08/2021",
      patientName: "Moncho",
      type: "Revisión de oídos",
      veterinarian: "Pini",
      location: "Cll xx. # xx-xx - Consultorio 1"
    },
    {
      id: "00121341",
      date: "28/01/2022",
      patientName: "Bruno",
      type: "Revisión General",
      veterinarian: "Pini",
      location: "Cll xx. # xx-xx - Consultorio 1"
    },
  ];

  const handleNewAppointment = () => {
    router.push("/appointments/register");
  };

  return (
    <div className="min-h-screen bg-white">
      <Brand />

      {/* Lista de citas */}
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="mb-4 p-4 border rounded-lg bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg text-black font-bold">
                Cita # {appointment.id}
              </h3>
              <p className="text-sm text-black">Fecha: {appointment.date}</p>
              <p className="text-sm text-black">Paciente: {appointment.patientName}</p>
              <p className="text-sm text-black">Tipo: {appointment.type}</p>
              <p className="text-sm text-black">Veterinario: {appointment.veterinarian}</p>
              <p className="text-sm text-black">Ubicación: {appointment.location}</p>
            </div>
            <button className="p-2 bg-black text-white hover:bg-gray-100 rounded-full">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;
