const moment = require('moment-timezone');
const extrair = selector => {

    const currentTime = moment.tz('America/Sao_Paulo').format('HH:mm:ss DD/MM/YYYY');
        
    const local = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(1) > b")
            .text()
            .trim();

    const dadosAtualizados = selector
            .find("div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(17) > th > b > font")
            .text()
            .trim();

    const totalCasos = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(2) > b")
            .text()
            .trim();

    const novosCasos = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(3) > b")
            .text()
            .trim();

    const totalMortes = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(6) > b")
            .text()
            .trim();

    const novasMortes = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(7) > b")
            .text()
            .trim();

    const recuperados = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(10) > b")
            .text()
            .trim();

    const vacinadosPrimeiraDose = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(11) > b")
            .text()
            .trim();

    const vacinadosSegundaDose = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(44) > td:nth-child(12) > b")
            .text()
            .trim();

    const diaNovosCasos = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(1) > th:nth-child(6)")
            .text()
            .split("").filter(n => (Number(n) || n == 0)).join("")
            .trim();

    const dataNovosCasos = diaNovosCasos.substr(0,2)+'/'+diaNovosCasos.substr(2,2)+'/'+diaNovosCasos.substr(4,4)

    const diaNovasMortes = selector
            .find("div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(1) > th:nth-child(10)")
            .text()
            .replace(/([^\d])+/gim, '')
            .trim();
    const dataNovasMortes = diaNovasMortes.substr(0,2)+'/'+diaNovasMortes.substr(2,2)+'/'+diaNovasMortes.substr(4,4)

    const info = selector
            .find("div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(19) > th > font > b")
            .text()
            .trim();
    const boletins = selector
            .find("div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > th > b > font:nth-child(2)")
            .text()
            .trim();

    const boletins2 = selector
            .find("div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > th > b > font:nth-child(4)")
            .text()
            .trim();
            
    const boletinsNumeros = selector
            .find("div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > th > b > b > font")
            .text()
            .trim();

    const fonteurl = selector
    .find("div:nth-child(2) > table:nth-child(2) > caption:nth-child(1) > b > a")
    .text()
    .trim();

    return { 
    sucess: true,
    mensagem: `Requisição feita com sucesso ás ${currentTime}`,
    dados: [
        {
        "local": local,
        "dadosAtualizados": dadosAtualizados,
        "totalCasos": totalCasos,
        "novosCasos": "Novos casos dia " + `${dataNovosCasos}: ` + novosCasos,
        "totalMortes":totalMortes,
        "novasMortes":"Novas mortes dia " + `${dataNovasMortes}: ` + novasMortes,
        "recuperados":recuperados,
        "vacinadosPrimeiraDose":vacinadosPrimeiraDose,
        "vacinadosSegundaDose":vacinadosSegundaDose,
        "boletinsContabilizados": `${boletins} ` + `${boletinsNumeros}` + ` ${boletins2}`,
        "info": info,
        "fonte": fonteurl
        }
    ]
};
    };

module.exports = extrair;