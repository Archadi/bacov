/**
 * Article.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        wording: {
            type: 'string',
            required: true,
            maxLength: 50
        },
        categories: {
            type: 'json',
            columnType: 'array'
        },
        description: {
            type: 'string'
        },
        location: {
            type: 'json',
            columnType: 'array'
        },
        renter: {
            model: 'user'
        }

    },

};