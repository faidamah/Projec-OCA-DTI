module.exports = {

    url: "http://ocatelkom.co.id/login",

    elements: {
        fieldPass: by.xpath("//input[@id='password']")
    },

    performFill: function () {

        var selector = page.fieldPass.elements.fieldPass;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};