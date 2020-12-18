module.exports = function () {

    this.Given(/^user browse login page$/, function () {
       helpers.loadPage("http://ocaindonesia.co.id/login")
      });

      this.Given(/^user fill email to login$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
        
      });

      this.Given(/^user fill password to login$/, function () {
        driver.then(function () {
          return page.fieldPass.performFill();
      })
    
      });

      this.When(/^user click login button$/, function () {
          driver.then(function() {
              return driver.wait(until.elementsLocated(by.xpath("//*[@id='app']/div[1]/div[1]/form/input[3]")), 20000).then(function(){
                  return driver.findElements(by.xpath("//*[@id='app']/div[1]/div[1]/form/input[3]"));
              })
              .then(function(){
                  return page.loginbtn.performClick();
              })
          })

      });

      this.Then(/^user can see bot signin page$/, function () {
       return driver.findElements(by.xpath("//a[normalize-space()='Hi, hikmahfaidatul60@gmail.com']"))
       .then(function (elements) {
           //verify this element has children
           expect(elements.length).to.equal(0);
       });
       });
    
       
      }
      
       //WebElement element = driver.findElement(By.xpath());
//JavascriptExecutor executor = (JavascriptExecutor)driver;
//executor.executeScript(“arguments[0].click();”, element);
 

