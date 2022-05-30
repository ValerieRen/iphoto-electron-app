import { ImageModel } from "../models";
import EXIF from "exif-js";

export const generateLatLang = (file: any) => {
  const exifData = EXIF.pretty(file);
  if (!exifData) {
    return;
  }
  //getting coordinates of latitude
  const GPSLatitude = EXIF.getTag(file, "GPSLatitude");
  const latDegree = GPSLatitude[0].numerator;
  const latMinute = GPSLatitude[1].numerator;
  const latSecond = GPSLatitude[2].numerator / GPSLatitude[2].denominator;
  const Lati = (latDegree + latMinute / 60 + latSecond / 3600).toFixed(8);
  // //getting coordinates of longitude
  const GPSLongitude = EXIF.getTag(file, "GPSLongitude");
  const lonDegree = GPSLongitude[0].numerator;
  const lonMinute = GPSLongitude[1].numerator;
  const lonSecond = GPSLongitude[2].numerator / GPSLongitude[2].denominator;
  const Long = (lonDegree + lonMinute / 60 + lonSecond / 3600).toFixed(8);
  return [Lati, Long];
};

export const getCoordinatesByImages = (images: ImageModel[]) => {
  const combos: { src: string; coordinate: any[] | undefined }[] = [];
  // const coordinates: (any[] | undefined)[] = [];
  images &&
    images.forEach((image) => {
      import(`../resource/${image.src}`).then((url) => {
        console.log("here", url);
        // create img element
        const img = document.createElement("img");
        img.setAttribute("src", url.default);
        img.setAttribute("id", "blob-img");
        document.body.appendChild(img);

        // fetch the image file for getting the exif data
        const file = document.getElementById("blob-img");
        EXIF.getData(file, function () {
          const coordinate = generateLatLang(file);
          combos.push({ src: image.src, coordinate: coordinate });
          console.log(combos);

          // coordinates.push(coordinate);
          // const exifData = EXIF.pretty(file);
          // if (exifData) {
          //   console.log("exifData >>>>>>>");
          //   console.log(exifData);
          //   console.log(">>>>>>>>>>");
          //   console.log("GPSLatitude", EXIF.getTag(file, "GPSLatitude"));
          //   console.log("GPSLongitude", EXIF.getTag(file, "GPSLongitude"));
          // } else {
          //   console.log("No EXIF data found in image " + file);
          // }
        });
      });
    });
  console.log("combos", combos);

  return combos;
};
