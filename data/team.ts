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

// Stephenie is real. The rest are placeholders so the grid + filters render —
// replace or remove as the team is built out.
export const team: Agent[] = [
  {
    slug: "stephenie-tocado",
    name: "Stephenie Tocado",
    title: "Founder & Lead Broker",
    office: "Charlotte",
    specialty: "Luxury",
    image: "/images/stephenie.png",
    treatment: "warm",
    email: "[[stephenie@yourfirm.com]]",
    phone: "[[(704) 000-0000]]",
    bio: "With more than two decades in real estate and mortgage since 2002, Stephenie built this team on a simple standard: relationships over transactions. Licensed in North Carolina and South Carolina, she brings deep knowledge of the full transaction — from first conversation to closing table — and an obsession with the details that protect her clients.",
  },
  {
    slug: "agent-two",
    name: "[[Agent Name]]",
    title: "Buyer's Specialist",
    office: "Charlotte",
    specialty: "Buying",
    image: "",
    treatment: "charcoal",
    email: "[[agent@yourfirm.com]]",
    phone: "[[(704) 000-0000]]",
    bio: "[[Short original bio — focus, neighborhoods served, what clients say.]]",
  },
  {
    slug: "agent-three",
    name: "[[Agent Name]]",
    title: "Listing Specialist",
    office: "Lake Norman",
    specialty: "Selling",
    image: "",
    treatment: "warm",
    email: "[[agent@yourfirm.com]]",
    phone: "[[(704) 000-0000]]",
    bio: "[[Short original bio.]]",
  },
  {
    slug: "agent-four",
    name: "[[Agent Name]]",
    title: "Relocation Advisor",
    office: "Raleigh",
    specialty: "Relocation",
    image: "",
    treatment: "charcoal",
    email: "[[agent@yourfirm.com]]",
    phone: "[[(919) 000-0000]]",
    bio: "[[Short original bio.]]",
  },
];

export const teamOffices = ["All", "Charlotte", "Lake Norman", "Raleigh"];
