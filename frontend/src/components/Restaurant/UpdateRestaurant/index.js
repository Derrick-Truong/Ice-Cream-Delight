import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../../Context/Modal";
import { updateRestaurant } from "../../../store/restaurants";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './UpdateRestaurant.css';
import { restaurantDetails } from "../../../store/restaurants";


const UpdateRestaurant = ({restaurant}) => {
    const [files, setFiles] = useState([])
    const {closeModal} = useModal()
    const restaurantId = restaurant?.id
    const history = useHistory();
    const dispatch = useDispatch();
    const [city, setCity] = useState(restaurant?.city);
    const [state, setState] = useState(restaurant?.state);
    const [country, setCountry] = useState(restaurant?.country);
    const [title, setTitle] = useState(restaurant?.title);
    const [address, setAddress] = useState(restaurant?.address);
    const [errors, setErrors] = useState({})
    const [description, setDescription] = useState(restaurant?.description);
    const [price, setPrice] = useState(restaurant?.price);
    const [randomNum, setRandomNum] = useState(restaurant?.randomNum)

    const filesPicked = e => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    };


    const valid = () => {
        let newErrors = []
        if (!address) {
            newErrors.address = "Address is required."
        }

        if (!city) {
            newErrors.city = "City is required."
        }

        if (!state) {
            newErrors.state = "State is required."
        }

        if (!country) {
            newErrors.country = "Country is required."
        }
        if (!price) {
            newErrors.price = "Price per night is required."
        }

        if (!description) {
            newErrors.description = "Description is required."
        }
        if (price && !(parseInt(price))) {
            newErrors.price = "Price is required needs to be a number."
        }

        setErrors(newErrors)
        console.log('NewErrors', newErrors)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        valid()
        if (errors.length > 0) {
            return setErrors([])
        }
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i])
        }
        formData.append('address', address)
        formData.append('description', description)
        formData.append('country', country)
        formData.append('price', price.toString())
        formData.append('title', title)
        formData.append('city', city)
        formData.append('state', state)
        formData.append('randomNum', randomNum)

        // const newListing = {
        //     country: country,
        //     description: description,
        //     price: price,
        //     title: title,
        //     address: address,
        //     city: city,
        //     state: state
        // }
        // formData.append('newlisting', newListing)

        // const success = await dispatch(updateOneRestaurant(formData, restaurantId))
        // if (success.status === 200) {
        //     const success2 = success.data;
        //     dispatch(updateRestaurant(success2))
        //     closeModal()
        // }
    }
    return (
        <section className="create-restaurant-page">
            <div className="title-update-form">Create Shop</div>
            <form className="create-restaurant-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='county'
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <h4></h4>
                <br></br>
                {errors?.country && <span className="error">{errors?.country}</span>}

                <h4></h4>
                <input
                    type="text"
                    name='state'
                    placeholder="State"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
                <h4></h4>
                {errors?.state && <span className="error">{errors?.state}</span>}
                <br></br>
                <h4></h4>
                <input
                    type="text"
                    name='address'
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <h4></h4>
                {errors?.address && <span className="error">{errors?.address}</span>}
                <br></br>
                <h4></h4>
                <input
                    type="text"
                    name='city'
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <h4></h4>
                {errors?.city && <span className="error">{errors?.city}</span>}
                <br></br>
                <input
                    type="text"
                    name='price'
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <h4></h4>
                {errors?.price && <span className="error">{errors?.price}</span>}
                <br></br>
                <input

                    type="text"
                    name='title'
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <h4></h4>
                {errors?.title && <span className="error">{errors?.title}</span>}
                <br></br>
                <textarea
                    rows="8" cols="60"
                    name='description'
                    maxLength={100}
                    type="text"
                    placeholder="Write a summary of your wonderful ice cream shop...(100 characters max)"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <h4></h4>
                {errors?.description && <span className="error">{errors?.description}</span>}
                <br></br>
                <br></br>
                Don't like the displayed photos huh?
                <input className="file-upload-button" onChange={filesPicked} accept="image/*" type="file" multiple/>
                <button onSubmit={handleSubmit} className="create-button">Create Shop</button>
            </form>
        </section>
    )
}

export default UpdateRestaurant



