const KEY = '?client_id=b95e346310aa73f463ee0cba968597027e263c9c44fa8efeca2453a1d44cbcb4'
const URL = `https://api.unsplash.com/photos/`

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
}

const fetchImageStats = async id => {
    const response = await fetch(`${URL}${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchImages, fetchImageStats };

