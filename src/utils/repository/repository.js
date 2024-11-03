export class RepositoryWorker {

    static workerList = [];

    static addWorker(worker) {
        this.workerList.push(worker);
    }

    static getWorkers() {
        return this.workerList;
    }

}