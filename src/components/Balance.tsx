const Balance = () => {
    const totalBalance = -4.543;
    return (
        <div>
            <p>Balance:</p>
            <p className={`text-2xl font-normal ${totalBalance >= 0 ? "text-green-600" : "text-red-600"}`}>{totalBalance}$</p>
        </div>
    );
}

export default Balance;