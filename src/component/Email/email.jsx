import emailjs from "@emailjs/browser";

export default async function sendEmail(choice) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are not configured.");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      gift: choice,
      to_name: "Adarsh",
      to_email: "dubeyadarsh74396@gmail.com",
      message: `Your friend selected: ${choice}`,
    },
    publicKey
  );
}
