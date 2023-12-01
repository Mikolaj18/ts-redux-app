import {TTransaction} from "../../types/Transactions";
import {useRemoveTransactionMutation} from "../../store/api/transactionApi";

type TTransactionListItem = {
    transaction: TTransaction,
}
const TransactionListItem = ({transaction}: TTransactionListItem) => {
    const [removeTransaction] = useRemoveTransactionMutation();
    const handleRemoveTransaction = () => {
        removeTransaction(transaction);
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{transaction.id}</td>
            <td className="px-6 py-4">{transaction.beneficiary}</td>
            <td className="px-6 py-4">{transaction.address}</td>
            <td className="px-6 py-4">{transaction.date}</td>
            <td className="px-6 py-4">{transaction.description}</td>
            <td className="px-6 py-4"><button onClick={handleRemoveTransaction} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button></td>
        </tr>
    );
}

export default TransactionListItem;