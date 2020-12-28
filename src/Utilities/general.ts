export class General {

    static async makeRandomChar(up: boolean, low: boolean, num: boolean, spe: boolean): Promise<string> {
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
            for (let i = 0; i < 1; i++) {
                result += upperCharacters.charAt(Math.floor(Math.random() * upperCharacterLength));
            }
        }

        if (low === true) {
            for (let i = 0; i < 1; i++) {
                result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharactersLength));
            }
        }

        if (num === true) {
            for (let i = 0; i < 7; i++) {
                result += numberCharacters.charAt(Math.floor(Math.random() * numberCharacterLength));
            }
        }

        if (spe === true) {
            for (let i = 0; i < 1; i++) {
                result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
            }
        }

        return result;
    }

    static async makeUserName(length: number): Promise<string> {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static async randomSpecialString(length: number): Promise<string> {
        let result = ''
        let specialCharacters = '!@#$%^&*()-_=+';
        let specialCharactersLength = specialCharacters.length;
        for (let i = 0; i < length; i++) {
            result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
        }
        return result
    }


}


