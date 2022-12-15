import { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [filteredProductTypes, setFilteredProductTypes] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [testFilter, setTestFilter] = useState([])
    const [priceSort, setPriceSort] = useState(false)


    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productTypesArray) => {
                setProductTypes(productTypesArray)
            })
        },
        []
    )

    useEffect(
        () => {
            setFilteredProductTypes(productTypes)
        },
        [productTypes]
    )

    useEffect(
        () => {
         setFilteredProducts(products)
        },
        [products]
    )



    useEffect(
        () => {
            if (priceSort) {
                const sortedProducts = products.filter(product => product.pricePerUnit >= 2.00) 
                setFilteredProducts(sortedProducts)
            }
            else {
                setFilteredProducts(products)
            }
        },
        [priceSort]
    )

    return <>
    {

        kandyUserObject.staff
        ? <>
            <button onClick = { () => { setPriceSort(false) } } >Show All</button>
            <button onClick = { () => { setPriceSort(true) } } >Filter Prices</button>
            </>
            :
        <>
            
    </>}

        <h2>List of Products</h2>

        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        //Can't get product type to display
                        if (priceSort === false) {
                            return <section className="product">
                                <h3>{product.name}</h3>
                                <footer>Price: ${product.pricePerUnit}</footer>
                                </section>
                        } else {
                            return <section className="product">
                                <h3>{product.name}</h3>
                                <footer>Price: ${product.pricePerUnit}</footer>
                                </section>
                            }
                        
                    }
                )
            }
        </article>
    
    </>

   
}