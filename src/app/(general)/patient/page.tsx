"use client"

import { Download } from "lucide-react";
import Brand from "@/components/brand-logo/Brand";
import { useEffect, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { Patient } from '@/interface/patient';
import { User } from '@/interface/user';

const PatientsList = () => {
  const { token } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (userId: string): Promise<User | null> => {
    try {
      const response = await fetch(`https://petsociety-production.up.railway.app/auth/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        return await response.json();
      } else {
        console.error("Failed to fetch user");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await fetch("https://petsociety-production.up.railway.app/patients/", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data: Patient[] = await response.json();
        console.log(data); // Verifica que `userId` está presente en los datos de pacientes
        const patientsWithUserDetails = await Promise.all(data.map(async (patient) => {
          const user = await fetchUser(patient.userId);
          return { ...patient, user };
        }));
        setPatients(patientsWithUserDetails);
      } else {
        console.error("Failed to fetch patients");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchPatients();
    }
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Brand />
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar pacientes..."
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
        </div>

        {patients.map((patient) => (
          <div
            key={patient.id}
            className="mb-4 p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-black font-bold">
                  Paciente # {patient.id}
                </h3>
                <p className="text-sm text-black">Dirección: {patient.address}</p>
                <p className="text-sm text-black">Teléfono: {patient.phone_number}</p>
                <p className="text-sm text-black">Dueño: {patient.userId}</p>
                
              </div>
              <button className="p-2 bg-black text-white hover:bg-gray-100 rounded-full">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsList;
