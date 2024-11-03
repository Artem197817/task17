import {Worker} from "./model/worker.js";
import {WorkerService} from "./service/workerService.js";
import {RepositoryWorker} from "./repository/repository.js";

window.onload = function () {
    const worker1 = new Worker('Анна', 'Макарова', '07-18-1982', 'разработчик');

    const worker2 = new Worker('Антон', 'Макарин', '06-11-1991', 'дизайнер');

    const worker3 = new Worker('Богдан', 'Семенов', '02-18-1983', 'разработчик');

    const worker4 = new Worker('Аника', 'Макаревич', '11-18-1978', 'архитектор');

    const worker5 = new Worker('Андрей', 'Миронов', '05-25-1991', 'разработчик');

    worker1.rate = 1200;
    worker2.rate = 1300;
    worker4.rate = 1500;


    worker4.addDays(51);
    worker4.addDays(2);
    worker4.addDays(21);
    worker1.addDays(-2);
    worker2.addDays(2);
    worker1.addDays(15);
    worker3.addDays(22);
    worker5.addDays(16);

    WorkerService.salaryWorkerConsoleLog(RepositoryWorker.workerList);
    WorkerService.whoWorkedMore(RepositoryWorker.workerList);
    WorkerService.whoIsYounger(RepositoryWorker.workerList);

    worker4.rate = 2500;
    worker5.rate = 2200;
    worker5.addDays(5);
    worker2.addDays(16);

    WorkerService.salaryWorkerConsoleLog(RepositoryWorker.workerList);
}