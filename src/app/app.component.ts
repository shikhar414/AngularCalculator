import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  subDisplayText = '';
  mainDisplayText = '';
  operand1 = 0;
  operand2 = 0;
  operator = ''; 
  calculationString = '';
  // This string  denotes the operation being performed
  answered = false;
  //  flag to check whether the solution has been processed
  operatorSet = false; 
  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainDisplayText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }
  getAnswer() {
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === '+') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }
  primechk()
  {
    var num, i, chk=0;
    num = parseInt(this.mainDisplayText);
    for(i=2; i<num; i++)
    {
      if(num%2==0)
      {
        chk++;
        break;
      }
    }
    if(chk==0)
      this.subDisplayText = 'Prime Number'
    else
      this.subDisplayText = 'Not Prime Number'
  }
  factofno()
  {
    const number = parseInt(this.mainDisplayText);
    if(number<0) 
    {
      this.subDisplayText = 'Error! Factorial for negative number does not exist.';
    }
    else if(number === 0)
    {
      this.subDisplayText = `Factorial of ${number} is 1.`;
    }
    else
    {
      let fact = 1;
      for (let i = 1; i <= number; i++)
      {
        fact *= i;
      }
      this.subDisplayText = `Factorial: ${fact}.`;
    }
  }
}