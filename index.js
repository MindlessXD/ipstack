const got = require('got')

let base_url = "http://api.ipstack.com/"
let access_key


/**
 * Fuction For Setting Your ipstack.com Access Key
 * @function - Set Access Key
 * @param {string} key - Access Key
 */
module.exports.setAccessKey = async ( key ) => {
    if (key) {
        access_key = key
    } else {
        return new Error("Argument Required To Set Access Key")
    }
}



/**
 * Fuction For Getting Geo Data From ipstack.com.
 * @function -  Get Geo Data
 * @param {string} address - IP Address For Geo Data
 */
module.exports.getGeoData = async ( address ) => {
    if (access_key) {
        const response = await got(`${base_url + address + "?access_key=" + access_key}`)
        let ip = response.body
        return ip
    } else {
        return new Error("Access Key Required To Make Request")
    } 
}