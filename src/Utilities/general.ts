export class General {

    static makeRandomChar(up: boolean, low: boolean, num: boolean, spe: boolean): string {
        let result = '';
        let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
        let numberCharacters = '0123456789';
        let specialCharacters = '!@#$%^&*()-_=+';
        let upperCharacterLength = upperCharacters.length;
        let lowerCharactersLength = lowerCharacters.length;
        let numberCharacterLength = numberCharacters.length;
        let specialCharactersLength = specialCharacters.length;

        if (up === true) {
            result += upperCharacters.charAt(Math.floor(Math.random() * upperCharacterLength));

        }

        if (low === true) {
            result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharactersLength));
        }

        if (num === true) {
            result += numberCharacters.charAt(Math.floor(Math.random() * numberCharacterLength));
        }

        if (spe === true) {
            result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
        }

        return result;
    }

    static makeUserName(length: number): string {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static randomSpecialString(length: number): string {
        let result = '';
        let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
        let lowerCharactersLength = lowerCharacters.length;
        for (let i = 0; i < length; i++) {
            result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharactersLength));
        }
        return result;
    }


    static randomNumberCharString(length: number): string {
        let result = '';
        let numberCharacters = '0123456789';
        let numberCharacterLength = numberCharacters.length;
        for (let i = 0; i < length; i++) {
            result += numberCharacters.charAt(Math.floor(Math.random() * numberCharacterLength));
        }
        return result;
    }

    static randomLowerCharString(length: number): string {
        let result = '';
        let specialCharacters = '!@#$%^&*()-_=+';
        let specialCharactersLength = specialCharacters.length;
        for (let i = 0; i < length; i++) {
            result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
        }
        return result;
    }

    static randomEmail(length: number): string {
        let email = this.makeUserName(length) + "@gmail.com";
        return email
    }

    static printBox(str: string): string {
        let strLength: number = str.length;
        console.log("=".repeat(strLength + 4));
        console.log("+ " + str + " +");
        console.log("=".repeat(strLength + 4));
        return str;
    }

    static printDescribe(str: string) {
        let date: Date = new Date();

        let strTime: string;
        let hoursTime:string;
        let minuteTime:string;
        let secondTime:string;

        if (date.getHours() < 10) {
            hoursTime = `0${date.getHours()}`
        }else if (date.getHours() >= 10){
            hoursTime = `${date.getHours()}`
        }

        if (date.getMinutes() < 10) {
            minuteTime = `0${date.getMinutes()}`
        }else if(date.getMinutes() >= 10) {
            minuteTime = `${date.getMinutes()}`
        }

        if (date.getSeconds() < 10) {
            secondTime = `0${date.getSeconds()}`
        }else if(date.getSeconds() >= 10) {
            secondTime = `${date.getSeconds()}`
        }


        strTime = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} - ${hoursTime}:${minuteTime}:${secondTime}`
   
        console.log(`${strTime} - ${str}`)
    }
}


