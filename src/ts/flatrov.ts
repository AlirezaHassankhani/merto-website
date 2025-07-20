interface IGallery {
  id: string;
  image: string;
  imageThumbnail: string;
  alt: string;
}

interface IOption {
  thumbnailWidth: string;
  thumbnailHeight: string;
}

class Flatrov {
  flatrov: HTMLDivElement;
  gallery: IGallery[] = [];
  option: IOption | undefined;

  constructor(
    selector: string | HTMLDivElement,
    gallery: IGallery[],
    option?: IOption
  ) {
    if (selector instanceof HTMLDivElement) {
      this.flatrov = selector;
    } else {
      let query = document.querySelector(selector);
      if (query instanceof HTMLDivElement) {
        this.flatrov = query;
      } else {
        throw new Error("selector is not valid");
      }
    }

    if (!this.checkValid()) {
      throw new Error("selector haven't wrapper of thumbnails element");
    }

    gallery.forEach((item) => {
      this.gallery.push(item);
    });

    this.option = option;

    this.assignThumbnails();
    this.changeImage(gallery[0].id);
  }

  changeImage(ID: string) {
    let currentImage = this.flatrov
      .querySelector(".flatrov-thumbnails")
      ?.querySelector("[data-is-active=true]");

    if (currentImage instanceof HTMLElement) {
      currentImage.dataset.isActive = "false";
    }

    let target = this.gallery.find((item) => item.id === ID)!;

    let nextImage = this.flatrov
      .querySelector(".flatrov-thumbnails")
      ?.querySelector(`[data-id="${ID}"]`);
    if(nextImage instanceof HTMLElement) {
      nextImage.dataset.isActive = "true";
    }

    if (target) {
      let imageWrapper = this.flatrov.querySelector(
        ".flatrov-wrapper"
      )?.querySelector("img") as HTMLImageElement;

      imageWrapper.src = target.image;
    }
  }

  assignThumbnails() {
    const container = document.createDocumentFragment();
    const target = this.flatrov.querySelector(".flatrov-thumbnails");

    // Add To Fragment
    this.gallery.forEach((item) =>
      container.append(
        this.createImgThumbnail(item.id, item.imageThumbnail, item.alt)
      )
    );

    // Add To Target Element
    if (target) {
      target.innerHTML = "";
      target.append(container);
    }
  }

  createImgThumbnail(ID: string, src: string, alt: string): HTMLDivElement {
    // Create Div Element
    let div = document.createElement("div");
    div.classList.add("thumbnail-image");
    div.dataset.isActive = "false";
    div.dataset.id = ID;
    div.classList.add(...["size-18", "md:size-25"]);

    // Create Image Thumbnail
    let img = new Image();
    img.src = src;
    img.alt = alt;
    div.append(img);

    // Event Click
    div.addEventListener("click", () => this.changeImage(ID));

    return div;
  }

  checkValid(): boolean {
    let wrapper = this.flatrov.querySelector(".flatrov-wrapper");
    let thumbnails = this.flatrov.querySelector(".flatrov-thumbnails");

    return wrapper != null && thumbnails != null;
  }
}

let gallery: IGallery[] = [
  {
    id: crypto.randomUUID(),
    image: "../assets/images/flatrov/cosmetics-40-5.jpg",
    imageThumbnail: "../assets/images/flatrov/cosmetics-40-2-300x300.jpg",
    alt: "cosmetics",
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/images/flatrov/cosmetics-40-3.jpg",
    imageThumbnail: "../assets/images/flatrov/cosmetics-40-3-300x300.jpg",
    alt: "cosmetics",
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/images/flatrov/cosmetics-40-4.jpg",
    imageThumbnail: "../assets/images/flatrov/cosmetics-40-4-300x300.jpg",
    alt: "cosmetics",
  },
];

let flatrov = new Flatrov(".flatrov", gallery);
