
import wixLocation from 'wix-location';
import wixStores from "wix-stores-backend"

export function getWixLocation() {
    return wixLocation.baseUrl;
}
export function getCurrentCart() {
    return wixStores.getCurrentCart();
}

export function getTestBuffer() {
    return new Buffer()
}
