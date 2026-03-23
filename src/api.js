export async function fetchImages(page, limit = 4) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}