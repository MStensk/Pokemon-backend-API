const { query } = require("express");
const { DataTypes, Sequelize } = require("sequelize");

const Pokemodel = {
    id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typing: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weaknesses: {
        type: DataTypes.STRING,
        allowNull: false
    },

};

module.exports = {
    initialise: (sequelize) => {
        this.model = sequelize.define("Pokemon", Pokemodel)
    },

    createPokemon: (user) => {
        return this.model.create(user)
    },
    findPokemon: (query) => {
        return this.model.findOne({
            where: query
        });
    },
    findAllPokemon: (query) => {
        return this.model.findAll({
            where: query
        });
    },
    deletePokemon: (query) => {
        return this.model.delete({
            where: query
        })
    }

}