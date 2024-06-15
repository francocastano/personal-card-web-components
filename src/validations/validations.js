/**
 * @template T
 * @param {(T | null | undefined)} value 
 * @returns {T}
 */
export function validate(value) {
    if (!value) {
        throw new Error("Value is not valid");
    }
    return value;
}
