process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const SurveyModel           = require('../models/survey.model');


describe("Survey Model", function(){

    it('Should return success message when input captcha matches.', function(){
        let captcha = SurveyModel.captcha;
        let result = SurveyModel.verifyCaptchaInput(captcha);

        expect(result).to.equal("Success! Captcha input matched.");
    });

    it('Should return error message when input captcha does not matched.', function(){
        let result = SurveyModel.verifyCaptchaInput("random");

        expect(result).to.equal("Error! Captcha input doesn't matched.");
    });
});
