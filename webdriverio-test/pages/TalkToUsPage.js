import assert from 'assert';

class TalkToUsPage {

     get usernameInput()   { return $('#talk-to-us_new-projects input#input1'); }
     get emailInput()   { return $('#talk-to-us_new-projects input#input2'); }
     get messageInput ()     { return $('#talk-to-us_new-projects textarea#input3'); }
     get sendButton()     { return $('#talk-to-us_new-projects #button_form_talk_to_us'); }
     get confirmationText() { return $('div.modal--content--success h2');}
    
    completeForm (name, email, message) {
        this.waitForExist($('#button_form_talk_to_us'));
        this.usernameInput.setValue(name);
        this.emailInput.setValue(email);
        this.messageInput.setValue(message);
        this.sendButton.click();
        return this;
      }

      waitForExist(selector){
        return selector.waitForExist(60000);
      }

      verifyEmailConfirmation(text) {
        this.waitUntilElement(text);
        assert.equal(this.confirmationText, text);
      }

      waitUntilElement(text){
      browser.waitUntil(() => {
        return $('//*[@id="lets-connect"]/div[2]/div[3]/div/h2').getText() === text
      }, 5000, 'expected text to be different after 5s');
    }
  }
    export default new TalkToUsPage;