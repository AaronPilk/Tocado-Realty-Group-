export type LeadType =
  | "contact"
  | "home-valuation"
  | "buyer-inquiry"
  | "listing-inquiry"
  | "schedule-showing"
  | "join-team"
  | "newsletter"
  | "agent-contact";

export interface LeadPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  leadType: LeadType;
  message?: string;
  propertyAddress?: string;
  desiredLocation?: string;
  budget?: string;
  timeline?: string;
  licensed?: string;
  listingId?: string;
  sourcePage?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  consent?: boolean;
  timestamp?: string;
}
