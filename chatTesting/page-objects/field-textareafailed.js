module.exports= {

    url:'https://ocaindonesia.co.id',
    elements: {
        fieldTextareafailed: by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[1]/textarea[1]")
    },

    performFill: function () {

        var selector = page.fieldTextareafailed.elements.fieldTextareafailed;
        return driver.findElement(selector).sendKeys('');
        
    }
};