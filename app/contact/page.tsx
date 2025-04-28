'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message!');
    }

    setIsSending(false);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-10 bg-[#0f172a] text-white">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-[#1e293b] p-8 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#334155] placeholder-gray-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#334155] placeholder-gray-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded bg-[#334155] placeholder-gray-400"
        />

        <button
          type="submit"
          disabled={isSending}
          className="p-3 bg-accent-400 text-white font-semibold rounded hover:bg-accent-500 transition"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
      </form>
    </section>
  );
}
