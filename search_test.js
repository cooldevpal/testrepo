Feature('search');

Scenario('Search for books', async({ I, homePage }) => {
    I.amOnPage('https://demoqa.com/books');
    I.see('Book Store');
    
    //login
    homePage.login('kasun','kaz$Enable3');
    I.see('User Name :');

    //search phrase
    const searchPhrase = 'java';
    
    //search for books
    homePage.searchBook(searchPhrase);
    
    //verification
    let tableData =  await I.grabTextFromAll("div[class='action-buttons']");

    const assert = require('assert');
    tableData.forEach((data) => {
      let title = data.toLowerCase();
      assert.notStrictEqual(title.indexOf(searchPhrase), -1);
    });

    /*var i=0;
    while (i < tableData.length) {
        bookname = tableData[i];
        I.say(bookname);
      }*/

    //I.say(tableData);
    //I.say(tableData.length);

});
