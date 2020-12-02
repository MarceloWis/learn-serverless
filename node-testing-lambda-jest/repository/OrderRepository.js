class OrderRepository {

    constructor() {
        this.orders = []
    }

    findById(id) {
        const findItem = this.orders.find(item => item.id === id);
        return new Promise((resolve, _) => {
            return resolve(findItem)
        })
    }
    find() {
        return new Promise((resolve, _) => {
            return resolve(this.orders);
        })
    }
    insert(data) {
        return new Promise((resolve, _) => {
            this.orders.push(data)
            return resolve(data);
        })
    }
    remove(id) {

        return new Promise((resolve, _) => {
            const updatedDatabase = this.orders.filter(item => item.id !== id);
            this.orders = updatedDatabase;
            return resolve();
        })
    }
    update(id, data) {

        return new Promise((resolve, _) => {
            const itemToUpdate = this.orders.findIndex(item => item.id === id);
            const updatedDatabase = this.orders;
            updatedDatabase[itemToUpdate] = data;

            this.orders = updatedDatabase;
            return resolve(data);
        })
    }


}

module.exports = OrderRepository