export class Name {
    /**
     * @param {string} title - The title of the user.
     * @param {string} first - The first name of the user.
     * @param {string} last - The last name of the user.
     */
    constructor(title, first, last) {
        this.title = title;
        this.first = first;
        this.last = last;
    }
}

export class Coordinates {
    /**
     * @param {string} latitude - The latitude coordinate.
     * @param {string} longitude - The longitude coordinate.
     */
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export class Timezone {
    /**
     * @param {string} offset - The offset from UTC.
     * @param {string} description - The description of the timezone.
     */
    constructor(offset, description) {
        this.offset = offset;
        this.description = description;
    }
}

export class Street {
    /**
     * @param {number} number - The street number.
     * @param {string} name - The name of the street.
     */
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

export class UserLocation {
    /**
     * @param {Street} street - The street address.
     * @param {string} city - The city.
     * @param {string} state - The state.
     * @param {string} country - The country.
     * @param {string} postcode - The postal code.
     * @param {Coordinates} coordinates - The coordinates.
     * @param {Timezone} timezone - The timezone.
     */
    constructor(street, city, state, country, postcode, coordinates, timezone) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postcode = postcode;
        this.coordinates = coordinates;
        this.timezone = timezone;
    }
}

export class Login {
    /**
     * @param {string} uuid - The UUID.
     * @param {string} username - The username.
     * @param {string} password - The password.
     * @param {string} salt - The salt.
     * @param {string} md5 - The MD5 hash of the password.
     * @param {string} sha1 - The SHA-1 hash of the password.
     * @param {string} sha256 - The SHA-256 hash of the password.
     */
    constructor(uuid, username, password, salt, md5, sha1, sha256) {
        this.uuid = uuid;
        this.username = username;
        this.password = password;
        this.salt = salt;
        this.md5 = md5;
        this.sha1 = sha1;
        this.sha256 = sha256;
    }
}

export class DateInfo {
    /**
     * @param {string} date - The date in ISO 8601 format.
     * @param {number} age - The age in years.
     */
    constructor(date, age) {
        this.date = date;
        this.age = age;
    }
}

export class Identification {
    /**
     * @param {string} name - The type of ID.
     * @param {string} value - The ID value.
     */
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

export class Picture {
    /**
     * @param {string} large - URL of the large picture.
     * @param {string} medium - URL of the medium picture.
     * @param {string} thumbnail - URL of the thumbnail picture.
     */
    constructor(large, medium, thumbnail) {
        this.large = large;
        this.medium = medium;
        this.thumbnail = thumbnail;
    }
}


export class RandomUser {
    /**
     * @param {("male"|"female")} gender - The gender of the user.
     * @param {Name} name - The name of the user.
     * @param {UserLocation} location - The location of the user.
     * @param {string} email - The email of the user.
     * @param {Login} login - The login information of the user.
     * @param {DateInfo} dob - The date of birth of the user.
     * @param {DateInfo} registered - The registration date of the user.
     * @param {string} phone - The phone number of the user.
     * @param {string} cell - The cell phone number of the user.
     * @param {Identification} id - The identification of the user.
     * @param {Picture} picture - The picture of the user.
     * @param {string} nat - The nationality of the user.
     */
    constructor(gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat) {
        this.gender = gender;
        this.name = name;
        this.location = location;
        this.email = email;
        this.login = login;
        this.dob = dob;
        this.registered = registered;
        this.phone = phone;
        this.cell = cell;
        this.id = id;
        this.picture = picture;
        this.nat = nat;
    }
}

export class Info {
    /**
     * @param {string} seed - The seed used to generate the results.
     * @param {number} results - The number of results returned.
     * @param {number} page - The page number of the results.
     * @param {string} version - The version of the API.
     */
    constructor(seed, results, page, version) {
        this.seed = seed;
        this.results = results;
        this.page = page;
        this.version = version;
    }
}

export class RandomUserResponse {
    /**
     * @param {RandomUser[]} results - The array of users.
     * @param {Info} info - Information about the response.
     */
    constructor(results, info) {
        this.results = results;
        this.info = info;
    }
}
