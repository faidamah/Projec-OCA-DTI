module.exports = function () {

    this.Given(/^user browse homepage failed$/, function () {
        helpers.loadPage('https://ocaindonesia.co.id')
    });

    this.Given(/^user click kirimpesan button failed$/, function () {
        driver.then(function() {
            return driver.wait(until.elementsLocated(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[2]")), 40000).then(function(){
                return driver.findElements(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[1]/jdiv[2]"));
            })
            .then(function(){
                return page.kirimpesanfailedBtn.performClick();
            })
        })
    });
   
    this.When(/^user fill in the message to be sent failed$/, function () {
        driver.then(function() {
            return driver.wait(until.elementsLocated(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[1]/textarea[1]")), 5000).then(function(){
                return driver.findElements(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[1]/textarea[1]"))
            })
            .then(function(){
                return page.fieldTextareafailed.performFill();
            })
        });
    });
    
    this.Then(/^user click send button failed$/, function () {
        driver.then(function() {
            return driver.wait(until.elementsLocated(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[2]/jdiv[1]")), 40000).then(function(){
                return driver.findElements(by.xpath("/html[1]/body[1]/jdiv[1]/jdiv[1]/jdiv[3]/jdiv[3]/jdiv[1]/jdiv[3]/jdiv[1]/jdiv[2]/jdiv[1]"));
            })
            .then(function(){
                return page.sendfailedbtn.performClick();
            })
        })
    });

    // this.Given(/^user fill namakamu field$/, function () {
    //     driver.then(function() {
    //         return page.fieldNamakamu.performFill();
    //     })
    // });
      
    // this.Given(/^user fill emailkamu field$/, function  () {
    //     driver.then(function() {
    //         return page.fieldEmailkamu.performFill();
    //     })
    // });

    // this.Given(/^user fill teleponkamu field$/, function () {
    //     driver.then(function() {
    //         return page.fieldTeleponkamu.performFill();
    //     })
    // });

    // this.When(/^user click kirim button$/, function () {
    //     driver.then(function() {
    //         return page.kirimBtn.performClick();
    //     })
    // });
    
    // this.Then(/^user is connected to the OCA agent$/, function () {
    //     return driver.findElements(by.xpath('//body/jdiv/jdiv[@class='globalClass_da8c']/jdiv[@id='jcont']/jdiv[@class='contentWrapper_7db0']/jdiv[@class='main_b210']/jdiv/jdiv[@class='body_3585 show_7944']/jdiv[@class='main_c4ba']/jdiv[@class='wrap_3070']/jdiv[@id='scrollbar-container']/jdiv/jdiv[@class='container_b024']/jdiv[4]/jdiv[1]"))
    //         .then(function (elements) {
    //             expect(elements.length).to.equal(0);
    //         });
    // });

      
    }