

export class WorkerService {

    /**Создайте статический метод whoWorkedMore, который будет принимать любое число объектов работников
     и проверять, кто из них отработал больше всех дней за текущий месяц. Результат должен выводиться
     в консоль в формате «Больше всех отработал Имя Фамилия. Количество рабочих дней - N». Если нашлось
     несколько работников с равным количеством отработанных дней - выводить их всех. Для вывода полного
     имени используйте метод getFullName. */

    static whoWorkedMore(workerList){
       const workerListSortByWorkDays = workerList.sort((a, b) => {
            return b.days - a.days;
        });
        const maxDays = workerListSortByWorkDays[0].days;
        workerConsoleLog(workerListSortByWorkDays[0], maxDays);

        for (let i = 1; i < workerListSortByWorkDays.length; i++) {
            if (workerListSortByWorkDays[i].days === maxDays) {
                workerConsoleLog(workerListSortByWorkDays[i], maxDays);
            }else {
                return;
            }
        }
        function workerConsoleLog(worker, maxDays) {
            console.log('Больше всех отработал ' + worker.getFullName()
                + ". Количество рабочих дней -  " + maxDays);
        }
    }
/**Создайте статический метод whoIsYounger, который будет также принимать любое количество работников,
 находить самого младшего и выводить в консоль информацию о нем в формате «Имя Фамилия N лет». Если
 нашлось несколько работников с одинаковым наименьшим возрастом - выводить их всех. Для вывода полного
 имени используйте метод getFullName, для возраста - getAge */

static whoIsYounger(workerList) {
    const workerListSortByAge = workerList.sort((a, b) => {
        return getAgeNumber(a) - getAgeNumber(b);
    });
    const minAge = getAgeNumber(workerListSortByAge[0]);
    workerConsoleLog(workerListSortByAge[0]);

    for (let i = 1; i < workerListSortByAge.length; i++) {
        if (getAgeNumber(workerListSortByAge[i]) === minAge) {
            workerConsoleLog(workerListSortByAge[i]);
        }else {
            return;
        }
    }
    function workerConsoleLog(worker) {
        console.log(worker.getFullName()
            + ' ' + worker.getAge());
    }
    function getAgeNumber(worker){
        return +(worker.getAge().split(" ")[0]);
    }
}

static salaryWorkerConsoleLog(workerList){
    workerList.forEach(worker => {
        console.log(worker.getFullName() + ' - ' + worker.getSalary() + ' рублей' );
    })
}
}