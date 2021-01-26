import validator from 'validator';
import {handleFailure} from "./responseHandler";


/**
 *
 * @param {*} body
 * @param {*} options
 */
const fieldRequired = (body: any, options: any) => {
    const required: any = [];
    options.forEach((value: any) => {
        if (!Object.keys(body).includes(value)) {
            required.push({[value]: `${value} field is required`});
        }
    });
    return required;
};

/**
 * Empty values check helper
 *
 * @param {*} body
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isEmpty = (body: any, req: any, res: any, next: any) => {
    const check: any = {};
    Object.entries(body).map((value: any) => {
        const trimmedValue = validator.trim(value[1]);
        const emptyValues = validator.isEmpty(trimmedValue);
        if (emptyValues) {
            check[`${value[0]}`] = `${value[0]} is required.`;
        }
        return check;
    });
    if (Object.keys(check).length !== 0) {
        return handleFailure(422, "bad request", check, req, res)
    }
    return next();
};

const validateRequired = (req: any, res: any, next: any, options: any, extra: any) => {
    const requiredFields = fieldRequired(req.body, options);
    if ((typeof requiredFields === 'object') && requiredFields.length > 0) {
        return handleFailure(422, "bad request", requiredFields.map((err: any) => err), req, res)
    }
    if (extra) return isEmpty(extra, req, res, next);
    return next();
}
export  {fieldRequired, isEmpty, validateRequired};