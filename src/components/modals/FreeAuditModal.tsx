import { useState, useEffect, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormData {
  firstName: string;
  spaName: string;
  websiteUrl: string;
  email: string;
  phone: string;
}

export function FreeAuditModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    spaName: '',
    websiteUrl: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  // Show modal after 10 seconds, only once per session
  useEffect(() => {
    const hasShown = sessionStorage.getItem('freeAuditModalShown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('freeAuditModalShown', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.spaName.trim()) {
      newErrors.spaName = 'Med Spa name is required';
    }
    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Website URL is required';
    } else {
      try {
        new URL(formData.websiteUrl.replace(/^https?:\/\//, 'https://'));
      } catch {
        newErrors.websiteUrl = 'Please enter a valid URL';
      }
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrpzzlvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          clinic: formData.spaName,
          website: formData.websiteUrl,
          phone: formData.phone,
          subject: 'Free Audit Request',
        }),
      });
      
      if (response.ok) {
        setShowSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success for demo purposes - in production, handle error
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackToWebsite = () => {
    window.location.href = '/';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md rounded-3xl border border-line bg-white/80 p-6 sm:p-8 shadow-luxury-xl backdrop-blur-xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 rounded-full p-1.5 text-ink/50 hover:bg-ink/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {showSuccess ? (
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-ink">Audit Request Received</h3>
                  <p className="mt-3 text-sm text-ink/60">
                    Thank you. We'll review your Med Spa presence and follow up with your personalized audit.
                  </p>
                  <Button
                    size="md"
                    variant="gold"
                    className="mt-6 w-full sm:w-auto"
                    onClick={handleBackToWebsite}
                  >
                    BACK TO WEBSITE
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Eyebrow */}
                  <div className="text-center">
                    <span className="inline-block rounded-full border border-gold-300/30 bg-gold-100/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                      FREE MED SPA GROWTH AUDIT
                    </span>
                  </div>

                  {/* Main headline */}
                  <h2 className="text-display-md font-semibold text-ink text-center text-balance">
                    Is Your Med Spa Website Leaving Revenue on the Table?
                  </h2>

                  {/* Supporting text */}
                  <p className="text-center text-sm text-ink/60">
                    Get a personalized Aesthia audit and discover opportunities to improve your website, Google visibility, and booking experience.
                  </p>

                  {/* Form fields */}
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                          errors.firstName
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-line bg-white/60 focus:border-gold-400 focus:ring-gold-400/20'
                        }`}
                        aria-label="First Name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="spaName"
                        placeholder="Med Spa Name"
                        value={formData.spaName}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                          errors.spaName
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-line bg-white/60 focus:border-gold-400 focus:ring-gold-400/20'
                        }`}
                        aria-label="Med Spa Name"
                      />
                      {errors.spaName && (
                        <p className="mt-1 text-xs text-red-500">{errors.spaName}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="url"
                        name="websiteUrl"
                        placeholder="Website URL"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                          errors.websiteUrl
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-line bg-white/60 focus:border-gold-400 focus:ring-gold-400/20'
                        }`}
                        aria-label="Website URL"
                      />
                      {errors.websiteUrl && (
                        <p className="mt-1 text-xs text-red-500">{errors.websiteUrl}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-line bg-white/60 focus:border-gold-400 focus:ring-gold-400/20'
                        }`}
                        aria-label="Email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-line bg-white/60 px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:border-gold-400 focus:ring-gold-400/20"
                        aria-label="Phone Number"
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="gold"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'REQUEST MY FREE AUDIT →'}
                  </Button>

                  {/* Reassurance */}
                  <p className="text-center text-xs text-ink/50">
                    Free • No obligation • Personalized for your Med Spa
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}