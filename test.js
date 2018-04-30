module.exports = {
  before : function(time) {
    var d = new Date();
    console.log(d.toLocaleString());
  },
  'Demo test musicsales' : function (browser) {
    browser
      .url('https://www.musicsales.com/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#last', 'Contact')
      .assert.containsText('div.container div.section.text:nth-child(1)', 'IMPORTANT PRESS RELEASE REGARDING MUSIC SALES')
      
  },
  'step two': function(browser) {
    browser.expect.element('#last').text.to.contain('Contact').after(2000)
    
  },
  'step three': function(browser){
    browser.expect.element('#the_nav').text.to.contain('Our Companies')
    browser.useXpath()
    .click("//a[text()='About']")
    .useCss()
    .waitForElementVisible('body div#cccwr div#ccc-state', 1000)
    browser.assert.cssClassPresent('body div#cccwr div#ccc-state',"ccc-pause");
    browser.assert.elementPresent('body div#cccwr div#ccc-state div');
    browser.assert.visible(".ccc-widget");
    browser.click("body div#cccwr div#ccc-state div.ccc-widget div.ccc-outer div.ccc-inner div.ccc-hdr a.ccc-close");
    browser.assert.containsText('body div.container','About')

    // browser.end();
  },


  after: function(time) {
    var d = new Date();
    console.log(d.toLocaleString());
  }


};
