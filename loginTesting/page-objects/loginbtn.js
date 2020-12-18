module.exports = {

    url: "http://ocaindonesia.co.id/login",

    elements: {
        loginbtn: by.xpath("//*[@id='app']/div[1]/div[1]/form/input[3]")
    },

    performClick: function () {

        var selector = page.loginbtn.elements.loginbtn;
        return driver.findElement(selector).click();
    }
};