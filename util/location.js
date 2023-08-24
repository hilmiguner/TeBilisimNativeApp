// API Key
import { GOOGLE_MAP_API_KEY } from "../constants/api";

export async function getCity() {
    const coords = await getCoords();
    const url =`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_MAP_API_KEY}`;
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error("Failed to fetch address!");
    }
    
    const data = await response.json();
    const cityName = data.results[0].address_components.find((item) => item.types.includes("administrative_area_level_1")).long_name;
    return cityName;
}

async function getCoords() {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAP_API_KEY}`;
    const response = await fetch(url, { method: "POST" });
    if(!response.ok) {
        throw new Error("Failed to fetch address!");
    }
    
    const data = await response.json();
    return(data.location);
}