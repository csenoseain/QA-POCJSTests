import TalkToUsPage from "./TalkToUsPage";

class HomePage {
    get letsConnect ()     { return $('#lets-connect a'); }
    get talkToUs()     { return $('#main-header .nav-menu-top li a[href*=\'talk-to-us\']'); }
   
   open(){
    // super.open('');
   }
  
   goToTalkToUs () {
      this.talkToUs.click();
      return this;
     }
   
   clickOnLetsConnect () {
       this.letsConnect.click();
       return TalkToUsPage;
     }

}
export default new HomePage;