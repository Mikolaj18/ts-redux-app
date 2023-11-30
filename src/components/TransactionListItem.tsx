import {TTransaction} from "../types/Transactions";
import {useRemoveTransactionMutation} from "../store/api/transactionApi";

type TTransactionListItem = {
    transaction: TTransaction,
}
const TransactionListItem = ({transaction}: TTransactionListItem) => {
    const [removeTransaction, result] = useRemoveTransactionMutation();
    const handleRemoveTransaction = () => {
        removeTransaction(transaction);
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