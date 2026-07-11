export interface Dealer {
  name: string;
  type: "flagship" | "regional";
  location: string;
  address: string;
  phone: string;
  region: string;
  desc: string;
  lat: number;
  lng: number;
}

export const dealers: Dealer[] = [
  {
    name: "Ssemakula's Hardware & General Merchandise",
    type: "flagship",
    location: "Jinja Road, Kampala",
    address: "Jinja Road, Kampala, Uganda",
    phone: "+256 393 249 654",
    region: "Kampala Central",
    desc: "Authorized NIM Paints stockist with full product range and expert colour consultation.",
    lat: 0.3136,
    lng: 32.5811,
  },
  {
    name: "City Paints Company (U) Ltd",
    type: "regional",
    location: "Jinja Road, Kampala",
    address: "Jinja Road, Kampala, Uganda",
    phone: "+256 393 249 654",
    region: "Kampala Central",
    desc: "Leading paint distributor serving Kampala with the complete NIM product range.",
    lat: 0.3150,
    lng: 32.5850,
  },
  {
    name: "Kuzim — Kazinga",
    type: "regional",
    location: "Mbarara City",
    address: "Mbarara City, Western Uganda",
    phone: "+256 393 249 654",
    region: "Western Region (Mbarara/Fort Portal)",
    desc: "Authorized NIM Paints dealer serving the western region.",
    lat: -0.6072,
    lng: 30.6545,
  },
  {
    name: "Sitya Paul Hardware",
    type: "regional",
    location: "Mbale City",
    address: "Mbale City, Eastern Uganda",
    phone: "+256 393 249 654",
    region: "Eastern Region (Jinja/Mbale)",
    desc: "Authorized NIM Paints dealer serving the Mbale and eastern region.",
    lat: 1.0806,
    lng: 34.1750,
  },
  {
    name: "Zila Hardware — Lira Town",
    type: "regional",
    location: "Lira Town",
    address: "Lira Town, Northern Uganda",
    phone: "+256 393 249 654",
    region: "Northern Region (Gulu/Lira)",
    desc: "Authorized NIM Paints dealer serving Lira and the northern region.",
    lat: 2.2476,
    lng: 32.9050,
  },
  {
    name: "Tausi Hardware — Bombo Road",
    type: "regional",
    location: "Wandegeya, Kampala",
    address: "Bombo Road, Wandegeya, Kampala, Uganda",
    phone: "+256 393 249 654",
    region: "Kampala Central",
    desc: "Authorized NIM Paints stockist in Wandegeya with complete product range.",
    lat: 0.3280,
    lng: 32.5750,
  },
  {
    name: "Musa Body Hardware",
    type: "regional",
    location: "Mukono Town",
    address: "Mukono Town, Central Uganda",
    phone: "+256 393 249 654",
    region: "Central Region (Mukono)",
    desc: "Authorized NIM Paints dealer serving Mukono and surrounding areas.",
    lat: 0.3633,
    lng: 32.7550,
  },
  {
    name: "Tibaijuka & Sons — Kyambogo",
    type: "regional",
    location: "Kyambogo, Kampala",
    address: "Kyambogo, Kampala, Uganda",
    phone: "+256 393 249 654",
    region: "Kampala Central",
    desc: "Authorized NIM Paints stockist serving the Kyambogo area.",
    lat: 0.3375,
    lng: 32.5850,
  },
];
