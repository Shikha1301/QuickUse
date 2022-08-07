// using ASCII TABLE (LENGTH, starting char value :- a=97)
export class PasswordService {
  static getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  static getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  static getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  static getRandomSymbols() {
    let symbolStr = `!@#$%^&*(){}[]/`;
    return symbolStr[Math.floor(Math.random() * symbolStr.length)];
  }

  //picking up options on basis of true and false;
  static getPasswordObj(state) {
    let passwordObj = {};
    for (let key of Object.keys(state)) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObj = {
          ...passwordObj,
          [key]: state[key],
        };
      }
    }
    return passwordObj;
  }

  //generate password depending upon the keys (like how many keys are true if 2 true then 2(upper,lower),2(upper, lower),2(upper, lowe).......)
  static generatePassword(passwordObj, passwordLength) {
    let thePassword = "";
    for (
      let i = 0;
      i < Number(passwordLength);
      i += Object.keys(passwordObj).length
    ) {
      if (passwordObj.lower) thePassword += `${this.getRandomLowerCase()}`;
      if (passwordObj.upper) thePassword += `${this.getRandomUpperCase()}`;
      if (passwordObj.symbol) thePassword += `${this.getRandomSymbols()}`;
      if (passwordObj.number) thePassword += `${this.getRandomNumbers()}`;
    }
    return thePassword.substring(0, Number(passwordLength));
  }
}
