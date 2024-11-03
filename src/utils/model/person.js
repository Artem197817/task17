export class Person {

    #birthday;

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setBirthday(birthday);
    }

    setBirthday(birthday) {
        const regex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/;
        if (!regex.test(birthday)) {
            console.log('Invalid date format. Please use mm-dd-yyyy.');
        }
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

    getAge() {
        const birthDate = new Date(this.#birthday);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        const ageSuffix = getAgeSuffix(age);
        return `${age} ${ageSuffix}`;

        function getAgeSuffix(age) {
            const lastDigit = age % 10;
            const lastTwoDigits = age % 100;

            if (lastDigit === 1 && lastTwoDigits !== 11) {
                return 'год';
            } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
                return 'года';
            } else {
                return 'лет';
            }
        }
    }


}