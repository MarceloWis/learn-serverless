import { IDummyObject, IDummyQueryArgs } from "../interfaces";

export default function dummyQuery(_: any, args: IDummyQueryArgs): Promise<IDummyObject> {
    const { itemId } = args;

    console.log(`Query object with id ${itemId}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                firstItem: 'first',
                secondItem: 'second',
            });
        }, 1000)
    })
}