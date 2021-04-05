export const Types = {
  LOAD_IMAGES: "LOAD_IMAGES",
  SELECT_IMAGE: "SELECT_IMAGE",
  IMAGES_RECEIVED: "IMAGES_RECEIVED",
  LOAD_IMAGES_FAILURE: "LOAD_IMAGES_FAILURE",
}

export function selectImage(image) {
  return {
    type: Types.SELECT_IMAGE,
    image,
  }
}

export function loadImages() {
  return {
    type: Types.LOAD_IMAGES,
  }
}
