import request from './request';
const Base64 = require('js-base64').Base64

// 获取授权
export function login({ address, signed, uuid }) {
    return request({
        url: '/login',
        params: { address, signed, uuid },
        method: 'post'
    })
}

// 上传JSON
export function uploadJson(jsonData) {
    var result = Base64.encode(jsonData);
    return request({
        url: '/uploadJson',
        params: { jsonData: result },
        method: 'post'
    })
}

// NFT Types
export function getNftTypes() {
    return request({
        url: '/getNftTypes',
        method: 'get'
    })
}

// NFT 分类
export function getNftCategoriesByType(type) {
    return request({
        url: '/getNftCategoriesByType',
        params: { type },
        method: 'get'
    })
}

// NFT-language
export function getNftLanguage() {
    return request({
        url: '/getNftLanguages',
        method: 'get'
    })
}

// getNftPlatformsByType
export function getNftPlatformsByType(type) {
    return request({
        url: '/getNftPlatformsByType',
        params: { type },
        method: 'get'
    })
}
