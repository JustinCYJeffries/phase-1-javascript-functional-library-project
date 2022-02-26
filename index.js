const myEach = (collection, callback) => {
    for (let accessor in collection){
        callback(collection[accessor])
    }
    return collection;
}
const myMap = (collection, callBack) => {
    let modifiedArray = []
    for (let accessor in collection){
        modifiedArray.push(callBack(collection[accessor]))
    }
    return modifiedArray;
}
const myReduce = (collection, callback, acc) =>{
    let copy = myValues(collection)
    acc = acc || copy.shift();
    for (let accessor in copy){
        acc = callback(acc, copy[accessor], copy)
    }
    return acc;
}

const myFind = (collection, callback) => {
    for (let accessor in collection){
        let element = collection[accessor]
        if (callback(element )){
            return element
        }
    }
  
}
const myFilter = (collection, callback) => {
    let selectedArray = [];
    for (let accessor in collection){
        let element = collection[accessor]
        if (callback(element)){
            selectedArray.push(element);
        }

    }
    return selectedArray;
}
const mySize =(collection) => {
    return Object.keys(collection).length

}

const myFirst = (collection, n = 1) => {
    let count = 1;
    let array =[];
    for (let accessor in collection){
        if(count <= n){
            array.push(collection[accessor]);
            count++
        }
    }
    
    return array.length > 1 ? array : array[0]
}

const myLast = (collection, n = 1) => {
   let startingIndex = collection.length - n;
   return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
   
   
   
    //if (n > 1 ){
    //  return collection.slice(n)
    //}
    //else return Object.keys(collection.slice(-1))
}
const myKeys = (object) => {
    let objKeys = Object.keys(object);
    return objKeys
}
const myValues = (object) => {
    let objKeys = Object.values(object);
    return objKeys
}