import React from 'react';
import Swal from 'sweetalert2'
import Header from '../pages/Header/Header';
// import 'sweetalert2/src/sweetalert2.scss'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppiler = form.suppiler.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, suppiler, taste, category, photo, details }
        console.log(newCoffee);


        // send data to the server:-
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Coffee added successfully',
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
                <h2 className='text-3xl font-extrabold'>Add a coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    {/* Form name and quantity row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="quantity" placeholder="Enter available quantity" className="input input-bordered w-full" />
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
                                <input type="text" name="suppiler" placeholder="Enter supplier" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="taste" placeholder="Enter taste" className="input input-bordered w-full" />
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
                                <input type="category" name="category" placeholder="Enter category" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Deatils</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="details" placeholder="Enter details" className="input input-bordered w-full" />
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
                                <input type="photo" name="photo" placeholder="Enter photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" className="btn btn-block" value="Add coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;