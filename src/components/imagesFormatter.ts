export const imagesFormatter = (pictires: any[]) => {
    const array: any = [];
    pictires.map(picture =>
      array.push({
        original: `${String(picture)}`,
        thumbnail: `${String(picture)}`,
        lazyLoad: true,
        originalHeight: 780,
      })
    );
    return array;
  };