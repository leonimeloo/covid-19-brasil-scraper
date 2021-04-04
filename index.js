/**
 * Developed by: Leoni Melo/
 * Updated on 14 march 2021
 */
'use strict';
const { coronaScraper } = require('./src/scraper')

const corona = async (local = 'Brasil') => {

      let response = await coronaScraper(local = 'Brasil').catch(error => {
        return {
                "successo": false,
                "mensagem": error,
            };
        });
      
        return response;     
}

module.exports = corona;