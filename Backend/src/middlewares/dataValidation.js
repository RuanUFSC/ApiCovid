const { check } = require('express-validator');
const { isOnlyLetters } = require('../utils/functions');

module.exports = {
    createDataValidator: [
        check('data_notificacao')
            .toDate()
            .isISO8601()
            .withMessage('Data errada'),
        check('data_nascimento')
            .toDate()
            .isISO8601()
            .withMessage('Data errada'),
        check('faixa_idade')
            .notEmpty()
            .withMessage('Faixa não pode ser vazio')
            .bail()
            .isIn(['70 A 79 ANOS',
                '80 A 89 ANOS',
                '60 A 69 ANOS',
                '10 A 19 ANOS',
                '50 A 59 ANOS',
                '30 A 39 ANOS',
                '20 A 29 ANOS',
                '40 A 49 ANOS',
                'ATÃ‰ 9 ANOS',
                '90 ANOS OU MAIS',
                ]),
        check('sexo')
            .notEmpty()
            .withMessage('Sexo não pode ser vazio')
            .bail()
            .isIn(['M', 'F']),
        check('raca')
            .notEmpty()
            .withMessage('Raça não pode ser vazio')
            .bail()
            .isIn([
                'BRANCA',
                'AMARELA',
                'PRETA',
                'PARDA',
                'NÃƒO INFORMADO',
                'INDÃGENA',
                ]),
        check('municipio')
            .notEmpty()
            .withMessage('Cidade cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Cidade só pode ter letras'); }
            }),
        check('bairro')
            .notEmpty()
            .withMessage('Cidade cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Bairro só pode ter letras'); }
            }),
        check('centro_saude')
            .notEmpty()
            .withMessage('Centro cannot be empty'),
        check('tipo_teste')
            .notEmpty()
            .withMessage('Teste cannot be empty'),
        check('dor_garganta')
            .notEmpty()
            .withMessage('Gargante não pode ser vazio'),
        check('dispneia')
            .notEmpty()
            .withMessage('dispneia não pode ser vazio'),
        check('febre')
            .notEmpty()
            .withMessage('febre não pode ser vazio'),
        check('tosse')
            .notEmpty()
            .withMessage('tosse não pode ser vazio'),
        check('obito')
            .notEmpty()
            .withMessage('Obito não pode ser vazio'),
        check('internado_uti')
            .notEmpty()
            .withMessage('UTI não pode ser vazio'),
    ],
};
