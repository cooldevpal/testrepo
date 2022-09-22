
/// <reference path="./steps.d.ts" />
'use strict';
let I;

module.exports = {

  _init() {
    I = require('./steps_file.js')();
  },

  // setting locators
  loginButton: '[id=login]',
  userName: '[id=userName]', 
  password:'[id=password]', 
  logintoSystem: '[id=login]',
  searchbar: '[id=searchBox]',
  

  
  login(uname,pass){
    I.waitForElement(this.loginButton,5);
    I.click(this.loginButton);
    I.waitForElement(this.userName,5);
    I.fillField(this.userName,uname);
    I.fillField(this.password,pass);
    I.click(this.logintoSystem);
    
  },

  searchBook(name){
    I.waitForElement(this.searchbar,5);
    I.fillField(this.searchbar,name);
  }


}