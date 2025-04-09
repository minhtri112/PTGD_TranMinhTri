import React from 'react';
import Modal from 'react-modal';
import { IoIosAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function App() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    const clickSubmitData = (e) => {
        e.preventDefault();
        const customerName = e.target.customerName.value;
        const image = e.target.image.value;
        const conpanyName = e.target.conpanyName.value;
        const orderValue = parseInt(e.target.orderValue.value);
        const orderDate = e.target.orderDate.value;
        const status = e.target.status.value;

        const data = {
            "customerName" : customerName,
            "image" : image,
            "conpanyName" : conpanyName,
            "orderValue" : orderValue,
            "orderDate" : orderDate,
            "status" : status
        }
        fetch("http://localhost:3002/orders", {
            method: "POST",
            headers : {
                accept : "application/json", 
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Add order success");
                    console.log(data);
                    setIsOpen(false);
                }
            });

    }

    return (
        <div>
            <button onClick={openModal}>
                <IoIosAddCircle className="mr-1 text-[20px]" />
                Add
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            // className='relative'
            >

                <button onClick={closeModal} className='bg-[red] p-1 text-[30px] text-[#fff] font-bold absolute top-0 right-0'><IoCloseSharp /></button>
                <h1 className='text-[20px] font-bold mt-4 text-center'>Add Order Customer</h1>
                <form className='flex flex-col gap-4 mt-4 from' onSubmit={clickSubmitData}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Customer name :</label>
                        <input type="text" name='customerName' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Customer image :</label>
                        <input type="text" name='image' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Company :</label>
                        <input type="text" name='conpanyName' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Order value :</label>
                        <input type="text" name='orderValue' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Order date :</label>
                        <input type="text" name='orderDate' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Status :</label>
                        <select name="status" id="">
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div className='action-btn flex justify-end gap-4 mt-4 text-left'>
                        <button type='button' onClick={closeModal} className='bg-[red] text-[#fff] font-bold p-2 mr-2.5 rounded-[5px]'>CANCEL</button>
                        <button type='submit' className='bg-[green] text-[#fff] font-bold p-2 mr-2.5 rounded-[5px]'>ADD</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default App;