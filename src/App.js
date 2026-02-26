import { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [
      { name: "Onur Yalçın", email: "softwareonuryalcin@gmail.com", company: "Softwera Persona" },
    { name: "Atahan ATA", email: "korfezatahanata@mail.com", company: "Körfez Teknoloji" }
    ];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (emp) => setEmployees([...employees, emp]);
  const updateEmployee = (index, newEmp) => {
    const updated = [...employees];
    updated[index] = newEmp;
    setEmployees(updated);
  };
  const deleteEmployee = (index) => setEmployees(employees.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-green-700 text-center">
          👩‍💼 Personel Takip Uygulaması
        </h1>

        <div className="flex justify-around mb-6">
          <div className="bg-green-50 p-4 rounded-lg shadow text-center">
            <p className="text-2xl font-bold text-green-600">{employees.length}</p>
            <p className="text-gray-600">Toplam Personel</p>
          </div>
        </div>

        <EmployeeForm addEmployee={addEmployee} />
        <EmployeeList
          employees={employees}
          updateEmployee={updateEmployee}
          deleteEmployee={deleteEmployee}
        />
      </div>
    </div>
  );
}

export default App;

