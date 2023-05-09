import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees, setCoffees  }) => {

    const { _id, name, quantity, suppiler, taste, category, photo, details } = coffee;

    const handleDlete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })

            }
        })
    }


    return (
        <div>

            <div className="card card-side bg-gray-200">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex items-center justify-between w-full px-12 py-6">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {suppiler}</p>
                        <p>Taste: {taste}</p>
                        <p>Details: {details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-5">
                            <button className="btn">View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handleDlete(_id)} className="btn bg-red-500 border-red-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;