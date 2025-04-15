import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoIosAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import edit from "../image/create.png"
Modal.setAppElement("#root")
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


function AppEdit(props) {
    const {item} = props;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [data,setData] = useState(item);
    

    

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    const editOnChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(
            {
                ...data,
                [name] : value
            }
        );
    }

    const clickSubmitData = (e) => {
        e.preventDefault();
    
        fetch(`http://localhost:3002/orders/${data.id}`, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) {
                    // Handle HTTP errors (e.g., 404, 500)
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json(); // Parse JSON only if the response is OK
            })
            .then((data) => {
                if (data) {
                    alert("Edit order success");
                    console.log(data);
                    setIsOpen(false); // Close modal or form
                }
            })
            .catch((error) => {
                // Handle network or runtime errors
                console.error("Error updating order:", error);
                alert(`Failed to update order: ${error.message}`);
            });
    };

    return (
        <div>
            <button onClick={openModal}>
                <img src={edit} alt="" />
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
                        <input type="text" name='customerName' value={data.customerName } onChange={editOnChange}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Customer image :</label>
                        <input type="text" name='image' value={data.image} onChange={editOnChange}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Company :</label>
                        <input type="text" name='conpanyName' value={data.conpanyName} onChange={editOnChange}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Order value :</label>
                        <input type="text" name='orderValue' value={data.orderValue} onChange={editOnChange}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Order date :</label>
                        <input type="text" name='orderDate' value={data.orderData} onChange={editOnChange}/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-[16px]'>Status :</label>
                        <select name="status" id="" value = {data.status} onChange={editOnChange}>
                            <option value="New" >New</option>
                            <option value="Processing" >Processing</option>
                            <option value="Completed" >Completed</option>
                        </select>
                    </div>

                    <div className='action-btn flex justify-end gap-4 mt-4 text-left'>
                        <button type='button' onClick={closeModal} className='bg-[red] text-[#fff] font-bold p-2 mr-2.5 rounded-[5px]'>CANCEL</button>
                        <button type='submit' className='bg-[green] text-[#fff] font-bold p-2 mr-2.5 rounded-[5px]'>EDIT</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AppEdit;