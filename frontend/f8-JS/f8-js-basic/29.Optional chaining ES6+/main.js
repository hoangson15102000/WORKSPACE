// Optional chaining (?.)


const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'DInah2',
            cat3: {
                name: 'dinah4'
            }
        }
    }
};
// obj.['cat']?.['cat2']
// obj.arr?.[index]
// obj.func?.(args)
if (
    obj.cat?.cat2?.cat3
) {
    console.log(obj.cat.cat2.cat3.name)
}