export enum ImageReduxActionTypes {
  SAVE_IMAGES = "SAVE_IMAGES",
  SAVE_IMAGES_METADATA = "SAVE_IMAGES_METADATA",
}

export interface Image {
  id: string;
  src: string;
}

export interface ImageMetadata {
  ImageDescription: string;
  Make: string;
  Model: string;
  Orientation: number;
  // XResolution: 300 [300/1];
  // YResolution: 300 [300/1];
  ResolutionUnit: number;
  Software: string;
  DateTime: string;
  YCbCrPositioning: number;
  ExifIFDPointer: number;
  GPSInfoIFDPointer: number;
  // ExposureTime: 0.00560852 [560852/100000000];
  // FNumber: 4.5 [45/10];
  // ExposureProgram: Normal program;
  // ISOSpeedRatings: 64;
  // ExifVersion: 0220;
  DateTimeOriginal: string;
  DateTimeDigitized: string;
  // ComponentsConfiguration: YCbCr;
  // ExposureBias: 0;
  // MaxApertureValue: 2.9 [29/10];
  // MeteringMode: Pattern;
  // LightSource: Unknown;
  // Flash: Flash did not fire, compulsory flash mode;
  // FocalLength: 6 [6/1];
  // MakerNote: [3298 values];
  // UserComment: [126 values];
  // FlashpixVersion: 0100;
  // ColorSpace: 1;
  // PixelXDimension: 640;
  // PixelYDimension: 480;
  // InteroperabilityIFDPointer: 896;
  // FileSource: DSC;
  // SceneType: Directly photographed;
  // CustomRendered: Normal process;
  // ExposureMode: 0;
  // WhiteBalance: Auto white balance;
  // DigitalZoomRation: 0 [0/100];
  // FocalLengthIn35mmFilm: 28;
  // SceneCaptureType: Standard;
  // GainControl: None;
  // Contrast: Normal;
  // Saturation: Normal;
  // Sharpness: Normal;
  // SubjectDistanceRange: Unknown;
  // GPSLatitudeRef: N;
  GPSLatitude: number[];
  // GPSLongitudeRef: E;
  GPSLongitude: number[];
  // GPSAltitudeRef: 0;
  GPSTimeStamp: string[];
  // GPSSatellites: 06;
  // GPSImgDirectionRef: �;
  // GPSMapDatum: WGS-84;
  // GPSDateStamp: 2008:10:23;
  // thumbnail: [undefined values];
}

export interface ImageState {
  images: Image[];
  imagesMetadata: ImageMetadata[];
}

export interface SaveImagesAction {
  type: typeof ImageReduxActionTypes.SAVE_IMAGES;
  payload: Image[];
}

export interface SaveImagesMetadataAction {
  type: typeof ImageReduxActionTypes.SAVE_IMAGES_METADATA;
  payload: ImageMetadata[];
}

export type ImageActionTypes = SaveImagesAction | SaveImagesMetadataAction;
