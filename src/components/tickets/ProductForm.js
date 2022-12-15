import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    const [product, update] = useState({
        name: "",
        productTypeId: Number,
        pricePerUnit: Number,
    })

    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        const productToSendToAPI = {
           name: product.name,
           productTypeId: product.productTypeId,
           pricePerUnit: product.pricePerUnit
        }


        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
        .then(response => response.json())
        .then (() => {
            navigate("/products")
        })

    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of the product"
                    value={product.name}
                    onChange={
                        (evt) => {
                            const copy = {...product}
                            copy.name = evt.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>  
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productTypeId">Product Type ID:</label>
                    <input 
                        type="number"
                        min="1"
                        max="3"
                        className="form-control"
                        placeholder="Product Type ID"
                        value={product.productTypeId}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productTypeId = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="pricePerUnit">Price Per Unit:</label>
                    <input type="number"
                        min="0.01"
                        max="100.00"
                        className="form-control"
                        placeholder="Price Per Unit"
                        value={product.pricePerUnit}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.pricePerUnit = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )

}