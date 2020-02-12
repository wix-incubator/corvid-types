
import wixUsersBackend from 'wix-users-backend';
import {blockByEmail} from 'wix-users-backend';
import wixLocation from 'wix-location';

export function getWixLocation() {
    return wixLocation.baseUrl;
}

export function sayHello(name) {
    blockByEmail("test@wix.com").then(() => { })
    wixUsersBackend.approveByEmail(name).then(str => str)
    return `hello ${name}!`
};
