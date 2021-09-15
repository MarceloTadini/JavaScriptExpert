console.assert(('hello' || 123) === 'hello', "|| returns the first element in case both are true")
console.assert(('hello' && 123) === 123, "&& returns the last element in case both are true")

const item={
    name: 'Marcelo',
    age: 21,
    //string: 1 se não for primitivo, chama o valueOf
    toString(){
        return `Name: ${this.name}, Age: ${this.age}`
    },
    //number: 1 se não for primitivo, chama o toString
    valueOf(){
        return 007
    },

    [Symbol.toPrimitive](coercionType){
        console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }
        return types[coercionType] || types.string
    }
}

//console.log('toString ', String(item))
//console.log('valueOf ', Number(item))

//depois de adicionar toPrimitive
//console.log('String ', String(item))
//console.log('Number ', Number(item))
//chama a conversão default
//console.log('Date ', new Date(item))

console.assert(item + 0 === '{"name":"Marcelo","age":21}0')
//console.log('!!item is true?, !!item')
console.assert(!!item)

//console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Marcelo","age":21}')

//console.log('implicit + explicit coercion (using ==)', item == String(item))