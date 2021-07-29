const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
})

const Sheets = sequelize.define('sheets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    link: {type: DataTypes.STRING, allowNull: false},
    publicity: {type: DataTypes.STRING, defaultValue: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Instrument = sequelize.define('instrument', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})



User.hasMany(Sheets)
Sheets.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Author.hasMany(Sheets)
Sheets.belongsTo(Author)

Genre.hasMany(Sheets)
Sheets.belongsTo(Genre)

Instrument.hasMany(Sheets)
Sheets.belongsTo(Instrument)

User.hasMany(Comment)
Comment.belongsTo(User)

Sheets.hasMany(Comment);
Comment.belongsTo(Sheets)


module.exports = {
    User,
    Sheets,
    Comment,
    Author,
    Genre,
    Instrument
}
