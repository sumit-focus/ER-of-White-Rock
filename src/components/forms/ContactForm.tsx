import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error("Form Exception:", error);
            setStatus('error');
            setErrorMessage('Could not send message. Please try again or email us directly at info@erofwhiterock.com');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center max-w-2xl mx-auto animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <span className="material-symbols-outlined text-4xl">mail</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out to ER of White Rock. Our team has received your message and will respond shortly.
                </p>
                <div className="bg-white border border-green-100 p-6 rounded-xl inline-block text-left">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Need Immediate Help?</p>
                    <a href="tel:4699432939" className="flex items-center gap-3 text-2xl font-black text-green-700 hover:text-green-800 transition-colors">
                        <span className="material-symbols-outlined text-3xl">call</span>
                        4699432939
                    </a>
                </div>
                <button
                    onClick={() => setStatus('idle')}
                    className="block mx-auto mt-8 text-green-600 hover:text-green-700 font-bold underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="bg-primary p-8 md:p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-blue-100 max-w-xl mx-auto">
                    Have a non-emergency question? Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                            placeholder="(469) 555-0123"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-gray-800"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Billing Question">Billing / Insurance</option>
                            <option value="Feedback">Patient Feedback</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800 resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">error</span>
                        {errorMessage}
                    </div>
                )}

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2
                            ${status === 'submitting'
                                ? 'bg-gray-400 cursor-not-allowed text-white'
                                : 'bg-accent hover:bg-red-600 text-white hover:-translate-y-1'
                            }`}
                    >
                        {status === 'submitting' ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <span className="material-symbols-outlined">send</span>
                            </>
                        )}
                    </button>
                    <p className="text-center text-xs text-text-muted mt-4">
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                </div>
            </form>
        </div>
    );
}
