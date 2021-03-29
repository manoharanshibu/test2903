const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const errorCodes = {
    NO_STOCK: 'No stock has been found',
    INCORRECT_DETAILS: 'Incorrect details have been entered'
}


/** 
 * Gets the processing page 
 * @param {array} data  
 */
export const getProcessingPage = async (data) => {
    let lastMessage = null;
    for(let item of data) {
        lastMessage =  await getMessage(item);
    }
    return lastMessage;
}

const getMessage = async (str) => {
    switch (str.state) {
        case 'processing':
            await sleep(2000);
            return null;
            break;
        case 'error':
            return { title: 'Error page', message: errorCodes[str.errorCode] || null }
            break;
        case 'success':
            return { title: 'Order complete', message: errorCodes[str.errorCode] || null }
            break;
    }
}