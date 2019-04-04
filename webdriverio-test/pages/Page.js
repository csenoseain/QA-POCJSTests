class Page {
    open(path){
     
    }

    waitForTalkToUsPageToLoad(selector){
       return $(selector).waitForDisplayed(9000, true);
    }
}
export default new Page();