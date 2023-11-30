type TBalance = {
    totalBalance?: number;
};

const Balance = ({ totalBalance }: TBalance) => {
    const formattedBalance = totalBalance?.toFixed(2) || 'N/A';

    return (
        <div>
            <p>Balance:</p>
            <p className={'text-2xl font-normal text-green-600'}>
                {formattedBalance}$
            </p>
        </div>
    );
};

export default Balance;
