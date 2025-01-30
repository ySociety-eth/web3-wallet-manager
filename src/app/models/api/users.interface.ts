export interface UserTransactions {
    status: string;
    message: string;
    result: [ UserTransaction ];
}

export interface UserTransaction {
    hash: string;
    to: string;
    from: string;
    transactionIndex: string;
    input: string;
    value: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    fee: string;
    nonce: string;
    confirmations: string;
    blockNumber: string;
    blockHash: string;
    timeStamp: string;
    commitTxHash: string;
    proveTxHash: string;
    executeTxHash: string;
    isL1Originated: string;
    l1BatchNumber: string;
    contractAddress: string;
    isError: string;
    txreceipt_status: string;
    methodId: string;
    functionName: string;
    type: string;
}


// {
//     "status": "1",
//     "message": "OK",
//     "result": [
//       {
//         "hash": "0x5e018d2a81dbd1ef80ff45171dd241cb10670dcb091e324401ff8f52293841b0",
//         "to": "0xc7e0220d02d549c4846A6EC31D89C3B670Ebe35C",
//         "from": "0xc7e0220d02d549c4846A6EC31D89C3B670Ebe35C",
//         "transactionIndex": "3233097",
//         "input": "0x000000000000000000000000000000000000000000000000016345785d8a0000",
//         "value": "10000000000000000",
//         "gas": "10000000000000000",
//         "gasPrice": "10000000000000000",
//         "gasUsed": "10000000000000000",
//         "cumulativeGasUsed": "10000000000000000",
//         "fee": "10000000000000000",
//         "nonce": "42",
//         "confirmations": "100",
//         "blockNumber": "3233097",
//         "blockHash": "0xdfd071dcb9c802f7d11551f4769ca67842041ffb81090c49af7f089c5823f39c",
//         "timeStamp": "1679988122",
//         "commitTxHash": "0xdfd071dcb9c802f7d11551f4769ca67842041ffb81090c49af7f089c5823f39c",
//         "proveTxHash": "0xdfd071dcb9c802f7d11551f4769ca67842041ffb81090c49af7f089c5823f39c",
//         "executeTxHash": "0xdfd071dcb9c802f7d11551f4769ca67842041ffb81090c49af7f089c5823f39c",
//         "isL1Originated": "1",
//         "l1BatchNumber": "3233097",
//         "contractAddress": "0x8A63F953e19aA4Ce3ED90621EeF61E17A95c6594",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "methodId": "0xa9059cbb",
//         "functionName": "transfer(address to, uint256 tokens)",
//         "type": "255"
//       }
//     ]
//   }