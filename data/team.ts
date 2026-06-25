export type Agent = {
  slug: string;
  name: string;
  title: string;
  office: string;
  specialty: "Buying" | "Selling" | "Luxury" | "Relocation" | "Land";
  image: string; // /images/team/<file>.jpg
  treatment: "warm" | "charcoal";
  email: string;
  phone: string;
  bio: string;
};

// Stephenie is the firm. Add more agents here as the team grows.
export const team: Agent[] = [
  {
    slug: "stephenie-tocado",
    name: "Stephenie Tocado",
    title: "Founder, Broker-in-Charge",
    office: "Charlotte",
    specialty: "Luxury",
    image: "/images/stephenie.png",
    treatment: "warm",
    email: "S.tocado@rtocado.com",
    phone: "(704) 661-3414",
    bio: "With more than two decades in real estate and mortgage since 2002, Stephenie founded Tocado Realty Group on a simple standard: relationships over transactions. As a licensed North Carolina broker (and licensed in South Carolina), she brings deep knowledge of the full transaction — from first conversation to closing table — and an obsession with the details that protect her clients.",
  },
];

export const teamOffices = ["All", "Charlotte"];
