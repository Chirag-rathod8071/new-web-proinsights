'use client';

import { useState, FormEvent } from 'react';

type BookingData = {
  name: string;
  email: string;
  phone: string;
  business: string;
  date: string;
  time: string;
};

// 30-minute AM/PM slots
const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const min = m === 0 ? '00' : m;
      const period = h < 12 ? 'AM' : 'PM';
      slots.push(`${hour}:${min} ${period}`);
    }
  }
  return slots;
};

export function ContactSection() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = generateTimeSlots();

  const businessTypes = [
    'E-commerce',
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Real Estate',
    'Technology',
    'Retail',
    'Other',
  ];

  const sendWhatsAppMessage = (data: BookingData) => {
    const phoneNumber = '917575075469';
    const msg = `New Consultation Booking

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Business: ${data.business}
Date: ${data.date}
Time: ${data.time}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !clientName || !clientEmail) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));

    sendWhatsAppMessage({
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      business: businessType,
      date: selectedDate,
      time: selectedTime,
    });

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setSelectedDate('');
      setSelectedTime('');
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setBusinessType('');
    }, 3500);
  };

  return (
    <section className="min-h-screen w-full px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div className="pt-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Book Your Free <br />
            <span className="text-blue-600">Analytics Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-10">
            Schedule a 30-minute strategy session with our analytics experts.
            Get clarity on dashboards, CRM systems, and data-driven growth
            opportunities tailored to your business.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✔ 1-on-1 Business Analytics Discussion</li>
            <li>✔ CRM & Dashboard Recommendations</li>
            <li>✔ Scalable & Enterprise-Ready Guidance</li>
            <li>✔ No Sales Pressure — Pure Strategy</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/75 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-10 w-full">
          {showSuccess ? (
            <div className="py-24 text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Booking Confirmed 🎉
              </h2>
              <p className="text-gray-600">
                We’ve received your request and will contact you shortly.
              </p>
            </div>
          ) : (
            <>
             <h2 className="text-2xl font-bold mb-8">
  Schedule Your Session
</h2>

<form onSubmit={handleSubmit} className="space-y-8">
  {/* Name & Email */}
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        className="input h-14"
        placeholder="Enter your full name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        className="input h-14"
        type="email"
        placeholder="Enter your email address"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        required
      />
    </div>
  </div>

  {/* Phone & Business Type */}
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Phone Number
      </label>
      <input
        className="input h-14"
        placeholder="Enter phone number"
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Business Type
      </label>
      <select
        className="input h-14"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
      >
        <option value="">Select business type</option>
        {businessTypes.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Date & Time */}
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Preferred Date <span className="text-red-500">*</span>
      </label>
      <input
        type="date"
        min={today}
        className="input h-14"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        required
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Preferred Time <span className="text-red-500">*</span>
      </label>
      <select
        className="input h-14"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        required
      >
        <option value="">Select time slot</option>
        {timeSlots.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Submit */}
  <button
    disabled={isSubmitting}
    className="w-full py-5 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60"
  >
    {isSubmitting ? 'Booking...' : 'Confirm & Send WhatsApp'}
  </button>
</form>

            </>
          )}
        </div>
      </div>

      {/* Tailwind helper */}
      <style jsx>{`
        .input {
          @apply w-full p-4 rounded-lg border border-gray-300 bg-white/90
                 focus:outline-none focus:ring-2 focus:ring-blue-500;
        }
      `}</style>
    </section>
  );
};