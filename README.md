# Covid-19 Brasil Scraper

Biblioteca para obter informações do Corona Vírus no território brasileiro em tempo real.

## Instalação:

```
npm install covid-19-brasil-scraper --save
```

## Exemplo:

### Como usar:

```javascript
const coronaScraper = require('covid-19-brasil-scraper');

coronaScraper().then(res => {
	console.log(res);
});
```

#### Resultado : 

```javascript
[{
	"sucess": true,
	"mensagem": "Requisição feita com sucesso ás 08:12 17/03/2021",
	"dados": [{
		"local": "BRASIL",
		"dadosAtualizados": "17/03/2021 06:58",
		"totalCasos": "11.614.740",
		"novosCasos": "Novos casos dia 17/03/2021: 11.205",
		"totalMortes": "282.528",
		"novasMortes": "Novas mortes dia 17/03/2021: 401",
		"recuperados": "10.261.154",
		"vacinadosPrimeiraDose": "10.416.730",
		"vacinadosSegundaDose": "3.807.299",
		"boletinsContabilizados": "Já estão contabilizados boletins de 6 das 27 UFs do Brasil, para o dia 17/03/2021."
	}]
}]
```

## Leia:

Os números de casos do Brasil são atualizados constantemente pelas 27 Secretarias de Saúde de cada estado e colocados aqui EM TEMPO REAL, e sempre estarão à frente dos números do Ministério da Saúde (que divulga 1 boletim por dia apenas). Ou seja, aqui, você terá o número mais atualizado de casos confirmados de COVID-19 no Brasil. Fonte das informações: http://www.giscard.com.br/coronavirus/index.php

## Contribuições

Contribuições são sempre bem-vindas!