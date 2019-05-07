const fetch = require('cross-fetch')
const getParams = params => {
    let keys = Object.keys(params)
    return keys.reduce(
        (accumlator, curValue) => `${accumlator}${accumlator ? '&' : ''}${curValue}=${params[curValue]}`,
        ''
    )
}

const STATIC_HEADER = { 'Content-Type': 'application/json' }

class RESTDatasource {
    constructor() {
        this.baseURL = ''
    }

    defaultHeader() {
        return {}
    }

    get(path, params = {}) {
        let paramsStr = getParams(params)
        return fetch(`${this.baseURL}/${path}?${paramsStr}`, {
            method: 'GET',
            headers: Object.assign({}, STATIC_HEADER, this.defaultHeader())
        })
    }

    post(path, body = {}) {
        return fetch(`${this.baseURL}/${path}`, {
            method: 'POST', body,
            headers: Object.assign({}, STATIC_HEADER, this.defaultHeader())
        })
    }

    put(path, body = {}) {
        return fetch(`${this.baseURL}/${path}`, {
            method: 'PUT', body,
            headers: Object.assign({}, STATIC_HEADER, this.defaultHeader())
        })
    }

    patch(path, body = {}) {
        return fetch(`${this.baseURL}/${path}`, {
            method: 'PATCH', body,
            headers: Object.assign({}, STATIC_HEADER, this.defaultHeader())
        })
    }

    delete(path, body = {}) {
        return fetch(`${this.baseURL}/${path}`, {
            method: 'DELETE', body,
            headers: Object.assign({}, STATIC_HEADER, this.defaultHeader())
        })
    }
}

module.exports = RESTDatasource