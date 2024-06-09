import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4  px-4 uppercase text-stone-200 sm:px-6 md:text-base ">
      <p className="text-stone-30 font-semibol space-x-4 text-sm sm:space-x-4 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
