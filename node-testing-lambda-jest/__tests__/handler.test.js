const { it, expect } = require('@jest/globals');
const OrderRepository = require('../repository/OrderRepository');
const OrderService = require('../services/OrderService');


describe('Handler', () => {
    const makeSut = () => {
        const orderRepository = new OrderRepository();
        const orderServiceUnderTest = new OrderService(orderRepository);

        return {
            orderServiceUnderTest
        }
    }
    it('When price is above 1000, expect order to be approved ', async () => {
        const { orderServiceUnderTest } = makeSut();
        const order = {
            name: 'any_name',
            price: 1001
        }
        const result = await orderServiceUnderTest.add(order);
        expect(result.approved).toBe(false);
    });
    it('When price is below 1000, expect not to be approved ', async () => {
        const { orderServiceUnderTest } = makeSut()
        const order = {
            name: 'any_name',
            price: 990
        }
        const result = await orderServiceUnderTest.add(order);
        expect(result.approved).toBe(true);
    });
    it('Should return an error when an incomplete order is provided', async () => {
        const { orderServiceUnderTest } = makeSut()
        const order = {
            price: 990
        }
        expect(async () => await orderServiceUnderTest.add(order)).rejects.toThrowError(new Error());
    });
})