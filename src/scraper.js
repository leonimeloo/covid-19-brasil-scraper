'use strict';
const axios = require('axios').default
const cheerio = require('cheerio')

const busca = async url => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch {
        console.error(`Ocorreu um erro ao tentar buscar a URL ${url}`)
    }
}

const extract = require('./extrair')

const coronaScraper = async(local = 'Brasil') => {


    const scrapUrl = `http://www.giscard.com.br/coronavirus/index.php`

    const html = await busca(scrapUrl);

    const selector = cheerio.load(html);

    const searchResults = selector("body").find(
        "body > center");

    const resultados = searchResults
    .map((idx, el) => {
        const elementSelector = selector(el);
        return extract(elementSelector);
    })
    .get();

        return resultados
 
};

module.exports = { coronaScraper };