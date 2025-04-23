import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { increment, decrement ,reset} from "../../reducer/counter.js";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-sm text-center space-y-6 transition-all duration-300">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Smart Counter</h1>

                <div className="text-6xl font-extrabold text-indigo-600 transition-all duration-300">
                    {count}
                </div>

                <div className="flex justify-center gap-6">
                    <button
                        className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white p-3 rounded-full shadow-lg"
                        title="Decrease"
                        onClick={() => dispatch(increment())}
                    >
                        Add
                    </button>

                    <button
                        className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all text-white p-3 rounded-full shadow-lg"
                        title="Increase"
                        onClick={() => dispatch(decrement())}
                    >
                        Subtract
                    </button>


                    <button
                        className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all text-white p-3 rounded-full shadow-lg"
                        title="Reset"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;