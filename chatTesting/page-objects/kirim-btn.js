module.exports= {

    url:'https://ocaindonesia.co.id',
    elements: {
        kirimBtn: by.xpath("//jdiv[@class='button_7ca2 _blue_8ab4 _disabled_3a65']")
    },

    performClick: function () {

        var selector = page.kirimBtn.elements.kirimBtn;
        return driver.findElement(selector).click();
        
    }
};