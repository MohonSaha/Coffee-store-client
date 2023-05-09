import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../pages/Header/Header';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, suppiler, taste, category, photo, details } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppiler = form.suppiler.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, suppiler, taste, category, photo,details }
        console.log(updatedCoffee);


        // send data to the server:-
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Coffee updated successfully',
                        timer: 1500,
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }



    return (
        
        <div>
            <Header></Header>

            <div className='bg-[#F4F3F0] p-24'>
                <h2 className='text-3xl font-extrabold'>Update coffee: {name}</h2>
                <form onSubmit={handleUpdateCoffee}>
                    {/* Form name and quantity row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="quantity" placeholder="Enter available quantity" defaultValue={quantity}className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Form supplier and taste row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="suppiler" placeholder="Enter supplier" defaultValue={suppiler} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="taste" placeholder="Enter taste" defaultValue={taste} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Form category and details row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="category" name="category" placeholder="Enter category" defaultValue={category} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Deatils</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="details" placeholder="Enter details" defaultValue={details} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Form photo url row */}
                    <div className='mb-6'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="photo" name="photo" placeholder="Enter photo" defaultValue={photo} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" className="btn btn-block" value="Update coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;