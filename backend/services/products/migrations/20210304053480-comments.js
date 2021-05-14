'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('comments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            content: {
                type: Sequelize.TEXT(),
                allowNull: false,
            },
            rating: {
                type: Sequelize.INTEGER(),
                allowNull: false,
            },
            productId: {
                type: Sequelize.UUID,
                onDelete: 'CASCADE',
                references: {
                    model: 'products',
                    key: 'id',
                },
                allowNull: false,
            },
            userUUID: {
                type: Sequelize.STRING(),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('comments');
    },
};
