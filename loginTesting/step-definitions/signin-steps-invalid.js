module.exports = function () {

    this.Given(/^user browse signin page$/, function () {
        helpers.loadPage("http://ocaindonesia.co.id/login")
    });

      this.Given(/^user fill failed email to signin$/, function () {
        driver.then(function () {
            return page.fieldEmailInvalid.performFill();
        })
    });

      this.Given(/^user can fill tha right password$/, function () {
       driver.then(function () {
          return page.fieldPass.performFill();
      })
      
      });

      this.When(/^user click signin button$/, function () {
      
            driver.then(function () {
                return page.loginbtn.performClick();
            })
        });

        this.Then(/^user see failed bot signin page$/, function () {
                helpers.loadPage("http://ocaindonesia.co.id/dashboard")
               });
}



 