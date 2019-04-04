
import HomePage from '../../pages/homePage';

describe('makingSense page', () => {
       
    it('should complete the form Talk to US', () => {
      browser.url('/');
      HomePage.goToTalkToUs()
              .clickOnLetsConnect()
              .completeForm('Celeste','csenoseain@makingsense.com','Test Hello!!!')
              .verifyEmailConfirmation('Thanks for getting in touch with us!');
    });
});