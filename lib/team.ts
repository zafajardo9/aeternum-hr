export interface TeamMember {
  name: string;
  role: string;
  profile_image_url: string | null;
}

export const team: TeamMember[] = [

  {
    name: "Mark Joshua Bano",
    role: "Founder/CEO",
    profile_image_url: "/images/team/mark-joshua.jpg",
  },
  {
    name: "Diether Paul Deygabi",
    role: "Growth & Brand Director / Operations Coordinator",
    profile_image_url: "/images/team/diether-paul-2.jpeg",
  },
  {
    name: "Miguel Gabriel",
    role: "Talent Acquisition & Screening Specialist",
    profile_image_url: "/images/team/miguel-gabriel-2.jpeg",
  },
];
