const { DataType } = require("ajv/dist/compile/validate/dataType");
const { DataTypes, Sequelize } = require("sequelize");

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: roles.USER,
    },
};

module.exports = {
    initialise: (sequelize) => {
        this.model = sequelize.define("user", UserModel);
    },

    createUser: (user) => {
        return this.model.create(user);
    },

    findUser: (query) => {
        return this.model.findOne({
          where: query
        });
    },

    findAllUsers: (query) => {
        return this.model.findAll({
            where: query
        });
    },
    deleteUser: (query) => {
        return this.model.delete({
            where: query
        });
    }
}