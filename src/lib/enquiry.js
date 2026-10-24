const enquiryEndpoint = "https://brandbnalo.com/api/form/add";

export async function submitEnquiry({
  name,
  phone,
  email,
  product,
  message,
  place,
}) {
  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Enter a valid 10-digit phone number.");
  }

  const response = await fetch(enquiryEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      platform: "Iadept Enquiry Form",
      supplierToken: "6adca174755e2e90adbf95eb",
      platformEmail: "info@iadeptmarketing.com",
      name,
      phone,
      email,
      product: product || "N/A",
      message,
      place: place || "N/A",
    }),
  });

  const data = await response.json();

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Failed to send your enquiry.");
  }

  return data;
}

export function openEnquiryWhatsApp({ name, phone, email, product, message }) {
  const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product || "N/A"}
Message: ${message}
Contact: ${phone}`;

  window.open(
    `https://wa.me/919810010218?text=${encodeURIComponent(whatsappText)}`,
    "_blank",
    "noopener,noreferrer"
  );
}
