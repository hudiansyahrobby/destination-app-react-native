'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'comments',
            [
                {
                    id: '9253d4c1-0830-42a4-9ea9-ce63159d2922',
                    content: 'Lorem ipsum dolor sit amet',
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    rating: 5,
                    userUUID: 'WLzRGVn5mIPnzLjdXS1ZaVRLOfc2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'fa8974c1-a524-403a-841c-8a4778715f1b',
                    content: 'Lorem ipsum dolor sit amet expecto petronum',
                    productId: '35732c79-4d9a-451a-a3eb-5366a9c35687',
                    rating: 4,
                    userUUID: 'WLzRGVn5mIPnzLjdXS1ZaVRLOfc2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comments', null, {});
    },
};
