"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Upload, Calendar, Clock } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionEase } from "./motionPresets";

interface InteractiveFormProps {
  defaultEnquiryType?: "trial" | "meeting" | "general";
}

export default function InteractiveForm({ defaultEnquiryType = "general" }: InteractiveFormProps) {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: defaultEnquiryType,
    meetingDate: "",
    meetingTime: "",
    message: "",
    agreedToTerms: false
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.email) {
      setErrorMsg("Please fill in your name and email address.");
      return;
    }

    if (!formData.agreedToTerms) {
      setErrorMsg("You must accept the terms of data processing to continue.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "general",
        meetingDate: "",
        meetingTime: "",
        message: "",
        agreedToTerms: false
      });
      setFileName(null);
    }, 1800);
  };

  return (
    <div id="interactive-form-root" className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100 relative overflow-hidden transition-all duration-300">
      {/* Decorative top strip */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700" />

      <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          id="form-success-state"
          className="py-12 text-center space-y-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: shouldReduceMotion ? 0.18 : 0.3, ease: motionEase }}
        >
          <motion.div
            className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600"
            initial={shouldReduceMotion ? false : { scale: 0.92 }}
            animate={shouldReduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 0.32, ease: motionEase }}
          >
            <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
          </motion.div>
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Clinical Submission Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you. Your enquiry has been sent to our lab team. An orthodontic setup coordinator will contact you by email within 4 hours.
            </p>
          </div>
          {formData.enquiryType === "meeting" && (
            <div className="bg-slate-50 p-4 rounded-2xl max-w-xs mx-auto text-xs border border-slate-100 space-y-1">
              <span className="font-bold text-slate-800">Meeting Scheduled</span>
              <p className="text-slate-500">We have noted your preferred consultation time. Watch your inbox for a Google Meet calendar invite.</p>
            </div>
          )}
          <button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-display font-bold uppercase tracking-wider rounded-full shadow-md transition-all duration-150 cursor-pointer"
          >
            Submit Another Case
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          id="clinical-entry-form"
          className="space-y-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: shouldReduceMotion ? 0.18 : 0.28, ease: motionEase }}
        >
          <div className="space-y-2">
            <div className="flex items-center text-brand-600">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Clinical Lab Portal
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Start Your Aligner Setup
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Submit patient details, upload clinical files, or book an introductory design meeting with our orthodontists.
            </p>
          </div>

          {errorMsg && (
            <div id="form-error" className="bg-red-50 text-red-700 text-xs font-semibold px-4 py-3 rounded-xl border border-red-100">
              {errorMsg}
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name-input"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Dr. Amanda Ross or Patient Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="doctor@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+65 xxxx xxxx"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="enquiryType-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Enquiry Category
              </label>
              <select
                id="enquiryType-select"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
              >
                <option value="trial">Submit Trial Case (Orthodontist Setup)</option>
              <option value="meeting">Schedule Design Meeting</option>
                <option value="general">Patient Treatment Inquiry</option>
              </select>
            </div>
          </div>

          {/* Conditional Meeting Scheduler inputs */}
          <AnimatePresence>
          {formData.enquiryType === "meeting" && (
            <motion.div
              id="meeting-picker-block"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0.16 : 0.24, ease: motionEase }}
            >
              <div className="space-y-1.5">
                <label htmlFor="meetingDate-input" className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  id="meetingDate-input"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:border-brand-500 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="meetingTime-input" className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-brand-500" />
                  <span>Preferred Time</span>
                </label>
                <select
                  id="meetingTime-input"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:border-brand-500 bg-white"
                >
                  <option value="">Select a time slot</option>
                  <option value="09:00 AM">09:00 AM (SGT)</option>
                  <option value="11:00 AM">11:00 AM (SGT)</option>
                  <option value="02:00 PM">02:00 PM (SGT)</option>
                  <option value="04:00 PM">04:00 PM (SGT)</option>
                </select>
              </div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Clinical File Upload */}
          <div className="space-y-1.5">
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Upload Dental Scans / Smile Photos (Optional)
            </span>
            <label
              htmlFor="clinical-file-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 hover:border-brand-500 bg-slate-50 hover:bg-brand-50/30 py-6 px-4 rounded-2xl cursor-pointer transition-all duration-150"
            >
              <Upload className="w-8 h-8 text-slate-400 mb-2" />
              <span className="text-sm font-semibold text-slate-700">
                {fileName ? fileName : "Drag and drop or click to upload files"}
              </span>
              <span className="text-xs text-slate-400 mt-1">
              Supports .STL, .PLY, .OBJ, or high-resolution orthodontic photographs (max 50MB)
              </span>
              <input
                type="file"
                id="clinical-file-upload"
                name="file"
                className="hidden"
                accept=".stl,.ply,.obj,image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* message text area */}
          <div className="space-y-1.5">
            <label htmlFor="message-textarea" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Clinical Instructions / Symptoms
            </label>
            <textarea
              id="message-textarea"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about the case goals, previous orthodontic treatments, or patient symptoms..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all bg-slate-50/50"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreedToTerms-checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
              className="w-5 h-5 rounded text-brand-600 focus:ring-brand-100 border-slate-300 mt-0.5 cursor-pointer"
            />
            <label htmlFor="agreedToTerms-checkbox" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
              I agree to the processing of clinical medical data in accordance with Smilyx Clear Aligners' Privacy Policy and regional patient confidentiality requirements (HIPAA/PDPA).
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="form-submit-button"
            disabled={isSubmitting}
            className={`w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 text-white font-display font-bold text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting ? "cursor-wait" : "cursor-pointer hover:-translate-y-0.5"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit to Lab</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      )}
      </AnimatePresence>
    </div>
  );
}
