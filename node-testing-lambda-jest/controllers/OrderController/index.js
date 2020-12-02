const OrderRepository = require("../../repository/OrderRepository");
const OrderService = require("../../services/OrderService")

class OrderController {
    async post(event) {
        console.log("event", event)
        const orderRepo = new OrderRepository();  
        const orderService = new OrderService(orderRepo);  
        const data = {
            name: 'Nada',
            price: 50
        }
        const result = await orderService.add(data)
        return result;
    }
}

module.exports = new OrderController();