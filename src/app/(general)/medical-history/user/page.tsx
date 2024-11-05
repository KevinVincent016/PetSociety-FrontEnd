"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Brand from "../../../../components/brand-logo/Brand";
import { useRouter } from "next/navigation";

interface Record {
  id: string;
  date: string;
  patientName: string;
}

const MedicalRecordsList = () => {
  const router = useRouter();
  const records: Record[] = [
    { id: "57931021", date: "10/07/2023 - 16:45", patientName: "Bruno" },
    { id: "001239791", date: "03/06/2023", patientName: "Minino" },
    { id: "00121341", date: "28/05/2023", patientName: "Bruno" },
  ];

  const handleNewRecord = () => {
    router.push("/medical-history/register");
  };

  return (
    <div className="min-h-screen bg-white">
      <Brand />

      {/* Lista de registros */}
      {records.map((record) => (
        <div
          key={record.id}
          className="mb-4 p-4 border rounded-lg bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg text-black font-bold">
                Historial Médico # {record.id}
              </h3>
              <p className="text-sm text-black">Fecha: {record.date}</p>
              <p className="text-sm text-black">
                Paciente: {record.patientName}
              </p>
            </div>
            <button className="p-2 text-black hover:bg-gray-100 rounded-full">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalRecordsList;
