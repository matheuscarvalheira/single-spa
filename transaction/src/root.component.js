const { fetchTransaction } = require("@bytebank/util");

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <button onClick={fetchTransaction}>Fetch Transactions</button>
    </section>
  );
}