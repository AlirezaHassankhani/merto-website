import Flatrov, { IGallery } from "./flatrov.js";

let items: IGallery[] = [
  {
    id: crypto.randomUUID(),
    image: "../public/images/flatrov/cosmetics-40-5.jpg",
    imageThumbnail: "../public/images/flatrov/cosmetics-40-2-300x300.jpg",
    alt: "cosmetics",
  },
  {
    id: crypto.randomUUID(),
    image: "../public/images/flatrov/cosmetics-40-3.jpg",
    imageThumbnail: "../public/images/flatrov/cosmetics-40-3-300x300.jpg",
    alt: "cosmetics",
  },
  {
    id: crypto.randomUUID(),
    image: "../public/images/flatrov/cosmetics-40-4.jpg",
    imageThumbnail: "../public/images/flatrov/cosmetics-40-4-300x300.jpg",
    alt: "cosmetics",
  },
];

let flatrov = new Flatrov(".flatrov", items);
