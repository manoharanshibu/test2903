export const makeSentence = (sentence, dict) => {
    const results = [];
    const endItem = [];

    const stack = [[sentence, endItem]];
    while(stack.length > 0) {
        const [startItem, endItem] = stack.shift();

        if(startItem.length ===0 && endItem.length > 0) {
            results.push(endItem.join(' '));
        }

        for(const dictItem of dict) {
            if( startItem.startsWith(dictItem)) {
                stack.push([startItem.slice(dictItem.length), [...endItem, dictItem]]);
            }
        }
    }
    return results;
}