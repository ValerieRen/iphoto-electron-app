import { ImageModel } from "../models";
import EXIF from "exif-js";

export const getCoordinatesByImages = (images: ImageModel[]) => {
  // const coordinates = [];
  images.forEach(async (image) => {
    import(`../resource/${image.src}`).then((url) => {
      // create img element
      const img = document.createElement("img");
      img.setAttribute("src", url.default);
      img.setAttribute("id", "blob-img");
      document.body.appendChild(img);

      // fetch the image file for getting the exif data
      const file = document.getElementById("blob-img");
      EXIF.getData(file, function () {
        const exifData = EXIF.pretty(file);
        if (exifData) {
          console.log("exifData", exifData);
          console.log("GPSLatitude", EXIF.getTag(file, "GPSLatitude"));
          console.log("GPSLongitude", EXIF.getTag(file, "GPSLongitude"));
        } else {
          console.log("No EXIF data found in image " + file);
        }
      });
    });
  });
  return [[-81, 31]];
};
