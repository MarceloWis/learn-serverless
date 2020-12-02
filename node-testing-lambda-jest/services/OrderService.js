const validateFields = require("../validator/validateFields");

class OrderService {
    constructor(OrderRepository) {
        this.orderRepository = OrderRepository;
    }

    async add(order){
        const requiredField = ['name', 'price'];
        await validateFields(order, requiredField)
        
        const newOrder = order;
    
        if(newOrder.price > 1000) {
            newOrder.approved = false;
        } else {
            newOrder.approved = true
        }
        const result = await this.orderRepository.insert(order);
        return result;
    }
}

module.exports = OrderService