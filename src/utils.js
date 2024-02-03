// this utility function use the images inside the assets folder
// it will be easy to import images dynamically in our functions

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
};