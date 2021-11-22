const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const { Data } = require('../models');
const { Readable } = require('stream');
const readline = require('readline');

module.exports = {
    createData: async (req, res) => {
        const { data_notificacao,
                data_primeiros_sintomas,
                data_teste,
                data_obito,
                data_nascimento,
                faixa_idade,
                sexo,
                raca,
                bairro,
                municipio,
                centro_saude,
                tipo_teste,
                dor_garganta,
                dispneia,
                febre,
                tosse,
                obito,
                internado_uti} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(401).json({ ValidationErrors: errors.array() });

        try {
            const covidData = await Data.create(
                {
                    id: uuidv4(),
                    data_notificacao,
                    data_primeiros_sintomas,
                    data_teste,
                    data_obito,
                    data_nascimento,
                    faixa_idade,
                    sexo,
                    raca,
                    bairro,
                    municipio,
                    centro_saude,
                    tipo_teste,
                    dor_garganta,
                    dispneia,
                    febre,
                    tosse,
                    obito,
                    internado_uti
                },
            );

            return res.status(201).json({ covidData });
        } catch (erro) {
            return res.status(500).json({ UncaughtError: erro.message });
        }
    },
    createCsvData: async (req, res) => {
        const { file } = req;
        const { buffer } = file;

        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);

        const covidLine = readline.createInterface({
            input: readableFile
        })

        const arrayData = []
        let first = true
        for await (let line of covidLine) {
            if (first) {
                first = false
                continue
            }
            const lineSplit = line.split(',')
            const data = new Date(lineSplit[2])

            arrayData.push({
                id: uuidv4(),
                data_notificacao: lineSplit[0],
                data_primeiros_sintomas: lineSplit[2],
                data_teste: lineSplit[3],
                data_obito: lineSplit[4],
                data_nascimento: lineSplit[5],
                faixa_idade: lineSplit[6],
                sexo: lineSplit[7],
                raca: lineSplit[8],
                bairro: lineSplit[9],
                municipio: lineSplit[10],
                centro_saude: lineSplit[12],
                tipo_teste:lineSplit[13],
                dor_garganta:lineSplit[15],
                dispneia:lineSplit[16],
                febre:lineSplit[17],
                tosse:lineSplit[18],
                obito:lineSplit[22],
                internado_uti:lineSplit[35]
            })
        }
        try {
            const covidDatas = await Data.bulkCreate(arrayData)
            return res.status(200).json(covidDatas)
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();
        return res.status(200).json({ datas });
    },
};
