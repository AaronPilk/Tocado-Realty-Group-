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

// Richard is the firm. Add more agents here as the team grows.
export const team: Agent[] = [
  {
    slug: "richard-tocado",
    name: "Richard Tocado",
    title: "Founder, Broker-in-Charge",
    office: "Charlotte",
    specialty: "Luxury",
    image: "/images/richard.jpg",
    treatment: "warm",
    email: "S.tocado@rtocado.com",
    phone: "(704) 661-3414",
    bio: "With more than two decades in real estate and mortgage since 2002, Richard founded Tocado Realty Group on a simple standard: people come before paperwork. As a licensed North Carolina broker (and licensed in South Carolina), he knows every step of a deal — from the first conversation to the closing table — and sweats the details that protect his clients.",
  },
];

export const teamOffices = ["All", "Charlotte"];
