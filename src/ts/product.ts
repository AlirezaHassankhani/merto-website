import Flatrov, { IItem } from "./gallery.js";

let items: IItem[] = [
  {
    id: crypto.randomUUID(),
    src: "../public/images/flatrov/cosmetics-40-5.jpg",
    thumbnail: "../public/images/flatrov/cosmetics-40-2-300x300.jpg",
  },
  {
    id: crypto.randomUUID(),
    src: "../public/images/flatrov/cosmetics-40-3.jpg",
    thumbnail: "../public/images/flatrov/cosmetics-40-3-300x300.jpg",
  },
  {
    id: crypto.randomUUID(),
    src: "../public/images/flatrov/cosmetics-40-4.jpg",
    thumbnail: "../public/images/flatrov/cosmetics-40-4-300x300.jpg",
  },
];

let flatrov = new Flatrov(".gallery", items);
