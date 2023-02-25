let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

function aclean(arr) {
    const result = new Map();

    for (const item of arr) {
        const sortedItem = item.toLowerCase().split('').sort().join('');
        result.set(sortedItem, item);
    }

    return Array.from(result.values());
}
