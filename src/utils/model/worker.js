/** Кроме наследуемых от Person, у Worker должно быть свойство position, в котором будет
 храниться должность работника.

 Также добавьте приватные свойства:
 - rate - ставка за день работы, число
 - days - отработанные за месяц дни, число

 Конструктор класса должен принимать 4 параметра: имя, фамилия, день рождения
 (в формате мм-дд-ггг) и должность и записывать эти свойства в соответствующие
 свойства класса (не забывайте, что день рождения хранится в приватном свойстве).
 В rate по умолчанию должно устанавливаться число 1000, в days - 0.

 Для rate реализуйте геттер и сеттер. В сеттере нужно проверять, что ставка за
 день работы не менее 1000 рублей. Если проверка пройдена - устанавливаем ставку,
 если нет - выводим в консоль ошибку и ставка не меняется.*/

import {Person} from "./person.js";
import {RepositoryWorker} from "../repository/repository.js";

export class Worker extends Person {

    #rate = 1000;
    #days = 0;

    get days() {
        return this.#days;
    }

    // set days(value) {
    //     this.#days = value;
    // }

    get rate() {
        return this.#rate;
    }

    set rate(value) {
        if (value > 1000) {
            this.#rate = value;
        }
    }

    constructor(name, lastName, birthday, position) {
        super(name, lastName, birthday);
        this.position = position;
        RepositoryWorker.addWorker(this);
    }


    /** - addDays, который принимает количество отработанных дней и добавляет их к свойству days.
     Должны быть реализованы проверки: принимаемое число должно быть больше 0, и по итогу в days
     не должно быть больше дней, чем в текущем месяце.
     */
    addDays(days) {
        if(validateDays(days)) {
            const sumDays = this.#days + days;
            if (validateDays(sumDays)) {
                this.#days = sumDays;
            }
        }
        function  validateDays(days) {
            if (typeof days !== 'number' || days <= 0) {
                console.log('Введенное значение должно быть числом больше 0');
                return false;
            }
            const today = new Date();
            const currentYear = today.getFullYear();
            const currentMonth = today.getMonth();

            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            if (days > daysInMonth) {
                console.log(`Введеное значение некорректно. Количество дней в текущем месяцей ${daysInMonth}`);
                return false;
            }

            return true;
        }
    }


    /** - getSalary, которая будет возвращать зарплату работника за текущий месяц. Если у работника
     день рождения в текущем месяце, то к зарплате должен добавляться бонус в размере 10% от заработанной
     суммы.*/
    getSalary() {
        let salary = this.#days * this.#rate;
        const monthBirth = +(this.birthday.split('-')[0]);
        const currentMonth = new Date().getMonth() + 1;
        if (monthBirth === currentMonth) {
            salary = Math.round(salary * 1.1);
        }
        return salary;
    }


}