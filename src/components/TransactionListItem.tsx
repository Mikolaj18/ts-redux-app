import {TTransaction} from "../types/Transactions";

type TTransactionListItem = {
    transaction: TTransaction,
}
const TransactionListItem = ({transaction}: TTransactionListItem) => {
    const handleRemoveTransaction = () => {

    }

    return (
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.beneficiary}</td>
            <td>{transaction.address}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td><button onClick={handleRemoveTransaction} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button></td>
        </tr>
    );
}

export default TransactionListItem;