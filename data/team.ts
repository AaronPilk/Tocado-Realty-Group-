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

// Stephenie is the firm — an independent, boutique brokerage, sole agent.
export const team: Agent[] = [
  {
    slug: "stephenie-tocado",
    name: "Stephenie Tocado",
    title: "Owner, Broker / Broker-in-Charge",
    office: "Charlotte",
    specialty: "Selling",
    image: "/images/stephenie-headshot.jpg",
    treatment: "warm",
    email: "stephenie@tocadorealty.com",
    phone: "(704) 661-3414",
    bio: "With more than 20 years of experience across real estate, mortgage lending, mortgage processing, and title insurance, Stephenie Tocado brings a rare, full-picture view to every transaction. Since 2002 she has worked nearly every stage of the process — from financing and loan processing to title and closing — so her clients get someone who understands not just how to market and sell a home, but the financing and closing details that make a deal succeed. As owner and Broker-in-Charge of Tocado & Company, an independent boutique brokerage, she takes a personal, straightforward approach built on honest communication and lasting relationships. Licensed in North Carolina and South Carolina.",
  },
];

export const teamOffices = ["All", "Charlotte"];
