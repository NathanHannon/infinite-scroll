// Unsplash API
const count = 10;
const apiKey = '5T64eUekG8h8IeZPCqyHiFnaSI7h4lstZaKvhPG3YzE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();