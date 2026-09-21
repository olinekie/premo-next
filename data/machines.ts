export type Machine = {
  id: string;
  name: string;
  price: number;
  location: string;
  image: string;
  description: string;

  parameters: {
    [key: string]: string;
  };

  images: string[];
};

export const machines: Machine[] = [
  {
    id: "tur-50",
    name: "Tokarka TUR 50",
    price: 15000,
    location: "Warszawa",

    image: "/machines/tur-50/1.jpg",

    description:
      "Tokarka uniwersalna TUR 50. Maszyna sprawna technicznie, przygotowana do pracy.",

    parameters: {
      Producent: "TUR",
      Model: "50",
      "Długość toczenia": "1000 mm",
      "Średnica toczenia": "500 mm",
      "Przelot wrzeciona": "52 mm",
      "Moc silnika": "7,5 kW",
    },

    images: [
      "/machines/tur-50/1.jpg",
      "/machines/tur-50/2.jpg",
      "/machines/tur-50/3.jpg",
      "/machines/tur-50/4.jpg",
    ],
  },

  // Tutaj możesz dodawać kolejne maszyny
];