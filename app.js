import { faker } from '@faker-js/faker';
import orderBy from 'lodash/orderBy.js'

export function createRandomUser() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
    };
}

export const users = faker.helpers.multiple(createRandomUser, {
    count: 10,
});

console.log(users, 'users');

const sortedByAlphabet = orderBy(users, ['name'], 
['asc', 'desc']);

console.log(sortedByAlphabet, 'sortedUsers');