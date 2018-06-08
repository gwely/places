
import joi = require("joi");
import isValidCoordinates = require("is-valid-coordinates");

import {FieldValidation, ValidationError} from "models/domain/errors";
import {PlaceView} from "models/view";
import { validateModel } from "validators/common";

const log = require("log")("places:validators:placeValidator");

const schema = joi.object().keys({
    lat: joi.number().required().min(-90).max(90),
    long: joi.number().required().min(-180).max(180),
    radius: joi.number().required().max(50000),
    keyword: joi.string().required(),
});

const errorMap = {
    lat: "A valid latitude is required.",
    long: "A valid longitude is required.",
    radius: "A valid radius is required.",
    keyword: "A valid keyword is required.",
};

export function validatePlaceView(model: PlaceView) {
    return validateModel<PlaceView>(model, schema, errorMap);
}
