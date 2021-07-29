import {makeAutoObservable} from "mobx";

export default class SheetsStorage{
    constructor() {
            this._authors = [
                {id: 1, name: 'toby fox'},
                {id: 2, name: 'FELT'},
                {id: 3, name: 'YUCe'},
                {id: 4, name: 'Свиридов Г. В.'},
                {id: 5, name: 'Diao ye zong'}
            ]
            this._genres = [
                {id: 1, name: 'Классическая музыка'},
                {id: 2, name: 'Саундтрек'},
                {id: 3, name: 'J-Pop'},
                {id: 2, name: 'Breakcore'}
            ]
            this._instruments = [
                {id: 1, name: 'Фортепиано'},
                {id: 2, name: 'Гитара'}
            ]
            this._sheets = [
                {id: 1, name: 'Время, вперед!', document: 'Time_Forward.pdf', author: 'Свиридов Г. В.', instrumentId: 1},
                {id: 2, name: 'Megalovania', document: 'Megalovania.pdf', author: 'toby fox', instrumentId: 1},
                {id: 3, name: 'Lies in reality', document: 'Time_Forward.pdf', author: 'FELT', instrumentId: 1},
                {id: 4, name: 'Enemy of the society', document: 'Time_Forward.pdf', author: 'Diao ye zong', instrumentId: 1},
                {id: 5, name: 'Midnight boogie', document: 'Time_Forward.pdf', author: 'FELT', instrumentId: 1},
                {id: 6, name: 'Chemical cookie', document: 'Time_Forward.pdf', author: 'YUCe', instrumentId: 2},
            ]

        /*this._genres = []
        this._authors = []
        this._sheets = []
        this._selectedGenre = {}
        this._selectedAuthor = {} */
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._selectedInstrument = {}
        this._selectedAuthor = {}
        this._selectedGenre = {}
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }
    setAuthors(authors) {
        this._authors = authors
    }
    setInstruments(instruments) {
        this._instruments = instruments
    }
    setSheets(sheets) {
        this._sheets = sheets
    }
    setSelectedGenre(genres) {
        this._selectedGenre = genres
    }
    setSelectedAuthor(authors) {
        this._selectedAuthor = authors
    }
    setSelectedInstrument(instruments) {
        this._selectedInstrument = instruments
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get genres() { 
        return this._genres
    }
    get authors() {
        return this._authors
    }
    get instruments() {
        return this._instruments
    }
    get sheets() {
        return this._sheets
    }
    //get SheetsGenre(sheetsId) {
    //    if (sheetsId === this.authors.id) return this.authors.name
    //}
    get selectedGenre() {
        return this._selectedGenre
    }
    get selectedAuthor() {
        return this._selectedAuthor
    }
    get selectedInstrument() {
        return this._selectedInstrument
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}