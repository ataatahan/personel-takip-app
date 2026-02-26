import { useState } from "react";

export default function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    addEmployee({ name, email, company });
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Ad Soyad"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Email"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Şirket"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
        ➕ Personel Ekle
      </button>
    </form>
  );
}
