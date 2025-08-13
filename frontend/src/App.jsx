import React, { useEffect, useState } from "react";

/**
 * IMPORTANT:
 * App static files are served by Nginx in the browser.
 * So the API base must be the HOST machine, not "backend" (that's only for container-to-container).
 */
const API_BASE = "http://localhost:5000";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = async () => {
    try {
      setErr("");
      const r = await fetch(`${API_BASE}/api/students`);
      const data = await r.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr("Failed to fetch students");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const r = await fetch(`${API_BASE}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          age: Number(form.age) || 18,
          course: form.course
        })
      });
      if (!r.ok) throw new Error("Create failed");
      setForm({ name: "", age: "", course: "" });
      await load();
    } catch (e) {
      setErr("Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Student Portal</h1>
      <form onSubmit={submit} style={{ display: "grid", gap: 8, marginBottom: 24 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input
          placeholder="Course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
        />
        <button disabled={loading}>{loading ? "Saving..." : "Add Student"}</button>
      </form>

      {err && <p style={{ color: "red" }}>{err}</p>}

      {students.length === 0 ? (
        <p>No students yet.</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s._id ?? s.name}>
              {s.name} — {s.course} {s.age ? `(${s.age})` : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
