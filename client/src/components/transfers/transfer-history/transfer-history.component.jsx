import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { getUsersTransfers } from "../../../store/actions/transfers.actions";

// Components
import TransferItem from "../transfer-item/transfer-item.component";

/* const transfers = [
  { id: "t1", amount: 200, date: "2022-4-12", user: "Max" },
  { id: "t2", amount: 500, date: "2022-5-20", user: "Joe" },
  { id: "t3", amount: 700, date: "2022-6-4", user: "John" },
]; */

const TransferHistory = () => {
  const dispatch = useDispatch();
  const transfers = useSelector((state) => state.transfers.transfers);

  useEffect(() => {
    dispatch(getUsersTransfers("1"));
  }, [dispatch]);

  console.log(transfers);
  return (
    <div>
      {transfers &&
        transfers.map((transfer) => (
          <TransferItem key={transfer.id} transfer={transfer} />
        ))}
    </div>
  );
};

export default TransferHistory;
