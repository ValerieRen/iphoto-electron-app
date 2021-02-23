declare module 'exif-js' {
  export function getData(img: any, callback: () => void): void
  export function getTag(img: any, tag: any): ImageMetadata;
  export function getAllTags(img: any): ImageMetadata;
  export function pretty(img: any): string;
  export function readFromBinaryFile(file: any): ImageMetadata;
}
