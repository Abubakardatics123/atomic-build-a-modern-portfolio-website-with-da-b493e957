"use server";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function submitContact(data: ContactFormData): Promise<ContactResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Basic server-side validation
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // In production, integrate Resend or Nodemailer here:
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: "...", to: "hello@alexdev.io", subject: data.subject, ... });

  console.log("Contact form submission:", data);

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you within 24 hours.",
  };
}
