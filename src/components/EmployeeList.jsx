import { useState } from "react";

export default function EmployeeList({ employees, updateEmployee, deleteEmployee }) {
  const [editIndex, setEditIndex] = useState(null);

  return (
    <ul className="mt-6">
      {employees.map((emp, index) => (
        <li
          key={index}
          className="flex justify-between items-start border rounded-lg p-4 mb-4 bg-gray-50 shadow-md"
        >
          <div className="flex flex-col w-full mr-2">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={emp.name}
                  onChange={(e) => updateEmployee(index, { ...emp, name: e.target.value })}
                  className="border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  value={emp.email}
                  onChange={(e) => updateEmployee(index, { ...emp, email: e.target.value })}
                  className="border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={emp.company}
                  onChange={(e) => updateEmployee(index, { ...emp, company: e.target.value })}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={() => setEditIndex(null)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded transition mt-2"
                >
                  Kaydet
                </button>
              </>
            ) : (
              <>
                <p className="font-semibold">{emp.name}</p>
                <p className="text-gray-600">{emp.email}</p>
                <p className="text-gray-500">{emp.company}</p>
              </>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setEditIndex(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition"
            >
              Düzenle
            </button>
            <button
              onClick={() => deleteEmployee(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Sil
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
