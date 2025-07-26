export interface IItem {
  id: string;
  src: string;
  thumbnail: string;
}

interface IOption {
  thumbnailWidth: string;
  thumbnailHeight: string;
}

export default class Gallery {
  gallery: HTMLDivElement;
  items: IItem[] = [];
  option: IOption | undefined;

  constructor(
    selector: string | HTMLDivElement,
    items: IItem[],
    option?: IOption,
  ) {
    if (selector instanceof HTMLDivElement) {
      this.gallery = selector;
    } else {
      let query = document.querySelector(selector);
      if (query instanceof HTMLDivElement) {
        this.gallery = query;
      } else {
        throw new Error("selector is not valid");
      }
    }

    if (!this.checkValid()) {
      throw new Error("selector haven't wrapper of thumbnails element");
    }

    this.items = items;
    this.option = option;

    this.assignThumbnails();
    this.changeImage(items[0].id);
  }

  changeImage(id: string) {
    this.disableImgThumbnail();
    this.activeImgThumbnail(id);
    const mainView = this.gallery.querySelector(
      ".main-view",
    ) as HTMLImageElement;
    const target = this.items.find((item) => item.id === id);

    if (target) {
      mainView.src = target.src;
    }
  }

  activeImgThumbnail(id: string) {
    const target = this.gallery.querySelector(`[data-id="${id}"]`);

    if (target instanceof HTMLDivElement) {
      target.dataset.isActive = "true";
    }
  }

  disableImgThumbnail() {
    const target = this.gallery.querySelector("[data-is-active=true]");

    if (target instanceof HTMLDivElement) {
      target.dataset.isActive = "false";
    }
  }

  assignThumbnails() {
    const fragment = document.createDocumentFragment();
    const thumbnailStrip = this.gallery.querySelector(
      ".thumbnail-strip",
    ) as HTMLDivElement;

    // Add To Fragment
    this.items.forEach(({ id, thumbnail }) =>
      fragment.append(this.createImgThumbnail(id, thumbnail)),
    );

    // Add To Target Element
    thumbnailStrip.append(fragment);
  }

  createImgThumbnail(id: string, thumbnail: string): HTMLDivElement {
    // Create Div Element
    let div = document.createElement("div");
    div.classList.add("thumbnail-item");
    div.dataset.isActive = "false";
    div.dataset.id = id;
    div.classList.add(
      ...[
        "size-18",
        "md:size-25",
        "border",
        "border-primary-300",
        "rounded-md",
        "data-[is-active=true]:border-primary-400",
        "overflow-hidden",
        "cursor-pointer",
      ],
    );

    // Create Image Thumbnail
    let img = new Image();
    img.src = thumbnail;
    div.append(img);

    // Event Click
    div.addEventListener("click", () => {
      this.changeImage(id);
    });

    return div;
  }

  checkValid(): boolean {
    let wrapper = this.gallery.querySelector(".main-view");
    let thumbnails = this.gallery.querySelector(".thumbnail-strip");

    return wrapper != null && thumbnails != null;
  }
}
