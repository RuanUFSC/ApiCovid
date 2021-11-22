module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define(
        'Data',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            data_notificacao: {
                type: DataTypes.DATE,
                allowNull: false
            },
            data_primeiros_sintomas: {
                type: DataTypes.DATE,
                allowNull: true
            },
            data_teste: {
                type: DataTypes.STRING,
                allowNull: true
            },
            data_obito: {
                type: DataTypes.STRING,
                allowNull: true
            },
            data_nascimento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            faixa_idade: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sexo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            raca: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bairro: {
                type: DataTypes.STRING,
                allowNull: false
            },
            municipio: {
                type: DataTypes.STRING,
                allowNull: false
            },
            centro_saude: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo_teste: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dor_garganta: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dispneia: {
                type: DataTypes.STRING,
                allowNull: false
            },
            febre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tosse: {
                type: DataTypes.STRING,
                allowNull: false
            },
            obito: {
                type: DataTypes.STRING,
                allowNull: false
            },
            internado_uti: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false,
        },
    );

    return Data;
};
