import { ReactImageGalleryItem } from "react-image-gallery";
import { IGalleryType } from "../../Interfaces/IGalleryType";

export const imagesFormatter = (pictires: IGalleryType[]):ReactImageGalleryItem[] => {
    const array: ReactImageGalleryItem[] = [];
    pictires.map(picture =>
      array.push({
        original: `${String(picture)}`,
        thumbnail: `${String(picture)}`,
        loading: "lazy",
        originalHeight: 780,
      })
    );
    return array;
  };