module.exports= {

    url:'https://ocaindonesia.co.id',
    elements: {
        fieldTextarea: by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[1]/textarea[1]")
    },

    performFill: function () {

        var selector = page.fieldTextarea.elements.fieldTextarea;
        return driver.findElement(selector).sendKeys('Halo');
        
    }
};