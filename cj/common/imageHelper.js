import { cmsBaseUrl } from '../config';

export const imageSource = (image, size) => {
    const imageInDesiredFormat = image.formats[size];
    const imageRelativeUrl = imageInDesiredFormat ? imageInDesiredFormat.url : image.url;
    return `${cmsBaseUrl}${imageRelativeUrl}`;
};
