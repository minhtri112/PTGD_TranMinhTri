const productsdata = [
    { id: 1, name: 'Áo Thun Cotton', price: '150,000 VNĐ', category: 'Thời Trang Nam', stock: 100 },
    { id: 2, name: 'Quần Jean', price: '250,000 VNĐ', category: 'Thời Trang Nam', stock: 50 },
    { id: 3, name: 'Váy Hoa', price: '200,000 VNĐ', category: 'Thời Trang Nữ', stock: 75 },
    { id: 4, name: 'Sách Lập Trình', price: '80,000 VNĐ', category: 'Sách', stock: 200 },
];
import { useState ,useEffect} from "react";
import AddProductForm from "./ThemSP";
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsdata);
    },[products]);

    const onAddProduct = (newProduct) => {
        products.push(newProduct);
    }
    return (
        <>

            <AddProductForm onAddProduct = {onAddProduct} />

            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Danh Sách Sản Phẩm</h1>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">Tên Sản Phẩm</th>
                            <th className="border border-gray-300 p-2 text-left">Giá</th>
                            <th className="border border-gray-300 p-2 text-left">Danh Mục</th>
                            <th className="border border-gray-300 p-2 text-left">Tồn Kho</th>
                            <th className="border border-gray-300 p-2 text-left">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="border border-gray-300 p-2">{product.name}</td>
                                <td className="border border-gray-300 p-2">{product.price}</td>
                                <td className="border border-gray-300 p-2">{product.category}</td>
                                <td className="border border-gray-300 p-2">{product.stock}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => {
                                            const index = productsdata.indexOf(product);
                                            if (index > -1) {
                                                products.splice(index, 1);
                                                setProducts([productsdata]);
                                            }
                                        } }
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductList;