export interface Certificate {
  id: string;
  date: string;
  image: string;
  verifyUrl: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "react",
    date: "2025",
    image: "/images/certificates/Certificate_HolaMundo_React.webp",
    verifyUrl: "https://academia.holamundo.io/certificates/ny73gx1aik",
  },
  {
    id: "cibersecurityFundamentals",
    date: "October 2026",
    image:
      "/images/certificates/Certificate_Santander-IBM_CibersecurityFundaments.webp",
    verifyUrl: "#",
  },
  {
    id: "promptingResponsable",
    date: "October 2026",
    image:
      "/images/certificates/Certificate_Santander-Microsoft_PromptingResponsable.webp",
    verifyUrl: "#",
  },
  // {
  //   id: "QUIT",
  //   date: "Label 0000",
  //   image: "/images/certificates/",
  //   verifyUrl: "#",
  // },
];
