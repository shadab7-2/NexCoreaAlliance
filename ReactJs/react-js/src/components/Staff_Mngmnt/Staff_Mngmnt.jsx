import React, { useEffect, useState } from "react";
import axios from "axios";

function Staff_Mngmnt() {
  const emptyForm = {
    name: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    salary: "",
  };

  const [staffList, setStaffList] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editIndex, setEditIndex] = useState(null);

  // ✅ FETCH STAFF LIST (runs once)
  const fetchStaff = () => {
    // fetch("http://localhost:3000/api/staff")
    //   .then((res) => res.json())
    //   .then((data) => setStaffList(data.data))
    //   .catch((err) => console.error(err));

    axios.get("http://localhost:3000/api/staff")
    .then(fullTabel => setStaffList(fullTabel.data.data))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ UPDATE STAFF
    if (editIndex !== null) {
      // fetch(
      //   `http://localhost:3000/api/staff/${staffList[editIndex]._id}`,
      //   {
      //     method: "PUT",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   }
      // )
      //   .then((res) => res.json())
      //   .then(() => fetchStaff())
      //   .catch((err) => console.error(err));
      axios.put("http://localhost:3000/api/staff/" + staffList[editIndex]._id, formData)
      .then(() => fetchStaff()).catch(error => console.log(error));

      setEditIndex(null);
    } 
    // ✅ ADD STAFF
    else {
      // fetch("http://localhost:3000/api/staff", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })
      //   .then((res) => res.json())
      //   .then(() => fetchStaff())
      //   .catch((err) => console.error(err));
      axios.post("http://localhost:3000/api/staff", formData)
      .then(fetchStaff()).catch(error => console.log(error))
    }

    setFormData(emptyForm);
  };

  const handleEdit = (index) => {
    const staff = { ...staffList[index] };
    staff.dob = staff.dob.split("T")[0];

    setFormData(staff);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete this staff member?")) {
      // fetch(
      //   `http://localhost:3000/api/staff/${staffList[index]._id}`,
      //   {
      //     method: "DELETE",
      //   }
      // )
      //   .then((res) => res.json())
      //   .then(() => fetchStaff())
      //   .catch((err) => console.error(err));

      axios.delete("http://localhost:3000/api/staff/"+ staffList[index]._id)
      .then(() => fetchStaff()).catch(error => console.log(error));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Staff Management
      </h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 bg-white p-6 rounded-xl mb-10">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select> 
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" required />
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="md:col-span-2" />
        <button className="md:col-span-2 bg-black text-white p-3 rounded">
          {editIndex !== null ? "Update Staff" : "Add Staff"}
        </button>
      </form>

      {/* TABLE */}
      <table className="w-full bg-white rounded-xl overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            {["Name","Email","DOB","Gender","Phone","Address","Salary","Actions"].map(h => (
              <th key={h} className="p-3 text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {staffList.map((s, i) => (
            <tr key={s._id} className="border-b">
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.email}</td>
              <td className="p-3">{s.dob}</td>
              <td className="p-3">{s.gender}</td>
              <td className="p-3">{s.phone}</td>
              <td className="p-3">{s.address}</td>
              <td className="p-3">₹{s.salary}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => handleEdit(i)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(i)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Staff_Mngmnt;
