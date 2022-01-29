const map = mapAscii('ABCDEFGHIJKLMNOPQRSTUVXYWZ abcdefghijklmnopqrstuvxywz')

function mapAscii(string) {
    let ascii = {}
    for(let i = 0; i < string.length; i++) {
        ascii[string[i]] = string.charCodeAt(i)
    }
    return ascii
}

function encodeString(string) {
    return reverseString(string.split('').map((char) => map[char]).join(''))
}

function decodeString(string) {
    let asciiString = reverseString(string)
    const len = string.length
    let decoded = ''

    for(let i = 0; i < len; i = i + 2) {
        let char = getMapped(asciiString.substr(i, 2))
        if(!char) {
            char = getMapped(asciiString.substr(i, 3))
            i++
        }
        decoded += char
    }

    return decoded;
}

function getMapped(ascii) {
    return Object.keys(map).find(char => map[char] == ascii )
}

function reverseString(string) {
    return string.split('').reverse().join('')
}

/* Encode Testing */

const encodeInput = 'Monetizze'
const encodeOutput = encodeString(encodeInput)
const encodeExpected = '10122122150161110101111177'


console.log('Encode Testing')
console.log(`Input: ${encodeInput} | Encoded output: ${encodeOutput} | Expected: ${encodeExpected}`)
console.assert(encodeOutput === encodeExpected, 'A saída não corresponde ao valor esperado')

/* Decode Testing */

let decodeInput = '79501862390111166'
const decodeOutput = decodeString(decodeInput)
const decodeExpected = 'Bom Dia'

console.log('Decode Testing')
console.log(`Input: ${decodeInput} | Encoded output: ${decodeOutput} | Expected: ${decodeExpected}`)
console.assert(decodeOutput === decodeExpected, 'A saída não corresponde ao valor esperado')
