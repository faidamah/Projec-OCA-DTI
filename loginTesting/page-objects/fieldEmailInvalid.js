module.exports = {

    url: "http://ocatelkom.co.id/login",

    elements: {
        fieldEmailInvalid: by.xpath("//*[@id='email']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.idInvalid.email);
    }
};
