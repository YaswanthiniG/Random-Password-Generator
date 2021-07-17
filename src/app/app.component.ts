import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //initialzation
  password = '';
  pwdlength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  disabledBth() {
    return !(this.pwdlength !== 0 && (this.includeLetters || this.includeNumbers || this.includeSymbols));
  }

  //Takes length from UI
  onChangeLength(length :string){
    const parsedValue = parseInt(length);

    if (!isNaN(parsedValue)){
      this.pwdlength = parsedValue;
    } 
  }

//Included Items
onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNums(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  generatePassword(){
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-,.';

    let availableChars = '';

    if (this.includeLetters){
      availableChars += lowerCaseLetters;
      availableChars += UpperCaseLetters;
    }

    if (this.includeNumbers){
      availableChars += numbers;
    }

    if (this.includeSymbols){
      availableChars += symbols;
    }

    availableChars.split('');
    const generatedpassword = [];

    for ( let i = 0; i < this.pwdlength; i += 1  ){
      const rand = Math.random();
      const randPwd = Math.floor(rand * (availableChars.length + 1));

      generatedpassword.push(availableChars[randPwd]);
    }
   this.password = generatedpassword.join('');
  } 
}
