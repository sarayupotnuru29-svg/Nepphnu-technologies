// import { useState } from "react";
// import { motion } from "framer-motion";

// const testingTypes = [
//   "Sine & Random Vibration Test",
//   "Shock Test",
//   "Low Temperature Test",
//   "High Temperature Test",
//   "Humidity Test",
//   "Thermal Cycling",
//   "Damp Heat Test",
//   "Thermal Shock",
//   "Tropical Exposure",
//   "Other",
// ];

// const QuoteForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     org: "",
//     email: "",
//     phone: "",
//     testType: "",
//     details: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const message = `Hello, I'd like to request a quotation.%0A%0AName: ${form.name}%0AOrganization: ${form.org}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ATesting Type: ${form.testType}%0ADetails: ${form.details}`;
//     window.open(`https://wa.me/919133316688?text=${message}`, "_blank");
//   };

//   const update = (field: string, value: string) =>
//     setForm((prev) => ({ ...prev, [field]: value }));

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       onSubmit={handleSubmit}
//       className="glass-card rounded-xl p-6 md:p-8 max-w-lg w-full"
//     >
//       <h3 className="font-display font-bold text-2xl text-primary mb-2">
//         Request a Quotation
//       </h3>
//       <p className="text-muted-foreground text-sm mb-6">
//         Get in touch with our experts for tailored testing solutions.
//       </p>
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           value={form.name}
//           onChange={(e) => update("name", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
//         />
//         <input
//           type="text"
//           placeholder="Organization Name"
//           value={form.org}
//           onChange={(e) => update("org", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           required
//           value={form.email}
//           onChange={(e) => update("email", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
//         />
//         <input
//           type="tel"
//           placeholder="Contact Number"
//           required
//           value={form.phone}
//           onChange={(e) => update("phone", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
//         />
//         <select
//           required
//           value={form.testType}
//           onChange={(e) => update("testType", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
//         >
//           <option value="">Type of Testing Required</option>
//           {testingTypes.map((t) => (
//             <option key={t} value={t}>{t}</option>
//           ))}
//         </select>
//         <textarea
//           placeholder="Project Details"
//           rows={3}
//           value={form.details}
//           onChange={(e) => update("details", e.target.value)}
//           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none resize-none"
//         />
//         <button
//           type="submit"
//           className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-blue-bright transition-colors"
//         >
//           Submit Request
//         </button>
//       </div>
//     </motion.form>
//   );
// };

// export default QuoteForm;




import { useState } from "react";
import { motion } from "framer-motion";

const testingTypes = [
  "Sine & Random Vibration Test",
  "Shock Test",
  "Low Temperature Test",
  "High Temperature Test",
  "Humidity Test",
  "Thermal Cycling",
  "Damp Heat Test",
  "Thermal Shock",
  "Tropical Exposure",
  "Other",
];

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    designation: "", // Added field
    org: "",
    email: "",
    phone: "",
    testType: "",
    specifications: "", // Added field
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I'd like to request a quotation.%0A%0A` +
      `Name: ${form.name}%0A` +
      `Designation: ${form.designation}%0A` +
      `Organization: ${form.org}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Testing Type: ${form.testType}%0A` +
      `Specifications: ${form.specifications}%0A` +
      `Details: ${form.details}`;
    
    window.open(`https://wa.me/919133316688?text=${message}`, "_blank");
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass-card rounded-xl p-6 md:p-8 max-w-lg w-full"
    >
      <h3 className="font-display font-bold text-2xl text-primary mb-2">
        Request a Quotation
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Get in touch with our experts for tailored testing solutions.
      </p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
          />
          <input
            type="text"
            placeholder="Designation"
            required
            value={form.designation}
            onChange={(e) => update("designation", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Organization Name"
          required
          value={form.org}
          onChange={(e) => update("org", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <select
          required
          value={form.testType}
          onChange={(e) => update("testType", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
        >
          <option value="">Type of Testing Required</option>
          {testingTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Technical Specifications (e.g., MIL-STD, Temp Range)"
          value={form.specifications}
          onChange={(e) => update("specifications", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none"
        />

        <textarea
          placeholder="Project Details"
          rows={3}
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-blue-bright transition-colors"
        >
          Submit Request
        </button>
      </div>
    </motion.form>
  );
};

export default QuoteForm;