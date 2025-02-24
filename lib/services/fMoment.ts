import moment from "moment"

export const fMoment = (inp?: moment.MomentInput) => {
    // if inp is number but in string format, convert to number
    if (typeof inp === 'string' && !isNaN(Number(inp))) {
        inp = parseInt(inp)
    }
    return moment(inp)
}