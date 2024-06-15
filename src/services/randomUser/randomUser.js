import { RandomUser } from "./models.js";

const RANDOM_USER_BASE_URL = "https://randomuser.me/api/";

export class RandomUserService {
    /**
     * @param {(string|null)} gender
     * @returns {Promise<RandomUser>}
    */
   async get(gender){
        if (gender && !['male', 'female'].includes(gender)){
            throw new Error("Gender must be either 'male' or 'female'")
        }

        const query = gender ? `?gender=${gender}` : ""
        const response = await fetch(`${RANDOM_USER_BASE_URL}${query}`);
        const apiResult = await response.json()
        return apiResult.results[0]
    }
}