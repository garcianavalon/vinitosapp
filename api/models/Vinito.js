/**
 * Vinito.js
 *
 * @description :: One vinito rico
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		size: 30,
      required: true
  	},
  	description: {
  		type: 'string',
  		size: 300,
      required: true
  	},
  	price: {
  		type: 'float',
      required: true
  	},
  	vintage: {
	  	type: 'integer', // añada, no es coña xD
	  	required: true
	  },
		type: {
      type: 'string',
      enum: ['tinto', 'blanco', 'sobremadre', 'rosado', 'dulce', 'espumoso'],
      required: true,
      size: 16
    }
  }
};

