import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && price && category && stock) {
      const newProduct = {
        id: Date.now(), // Tạo ID tạm thời
        name,
        price,
        category,
        stock: parseInt(stock, 10),
      };
      onAddProduct(newProduct);
      // Reset form
      setName('');
      setPrice('');
      setCategory('');
      setStock('');
    } else {
      alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
    }
  };

  return (
    <div className="mb-8 p-4 border border-gray-200 rounded">
      <h2 className="text-xl font-bold mb-4">Thêm Sản Phẩm Mới</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Tên Sản Phẩm:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Giá:
          </label>
          <input
            type="text"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Danh Mục:
          </label>
          <input
            type="text"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">
            Tồn Kho:
          </label>
          <input
            type="number"
            id="stock"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Thêm Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;