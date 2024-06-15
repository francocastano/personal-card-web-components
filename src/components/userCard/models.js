import { RandomUser } from "../../services/index.js";

export class User {
    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} phone 
     * @param {("male"|"female")} gender 
     * @param {string} avatar 
     */
    constructor(firstName, lastName, email, phone, gender, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.avatar = avatar;
    }

    /**
     * @returns {string}
     */
    get name(){
        return `${this.firstName} ${this.lastName}`
    }

    /**
     * 
     * @param {RandomUser} user 
     */
    static fromRandomUser(user){
        return new User(
            user.name.first,
            user.name.last,
            user.email,
            user.phone,
            user.gender,
            user.picture.large
        )
    }
}

