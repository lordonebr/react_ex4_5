import React, {useState, useEffect, Suspense } from 'react';
import { Products } from "../api/Products";
import { ProductErrorHandler } from "./ProductErrorHandler";

const ProductItem = React.lazy(() => import('./productItemComponent'));

export const ProductsList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        
        const LoadItems = async () => {
            setItems([]);

            Products.getProducts().then(
                result => {
                    setItems(result.items);
                    console.log("Itens carregados com sucesso!");
                }
            )
        }
        
        LoadItems();
    }, []);

    return (
        <div>
            <ProductErrorHandler>
                <Suspense fallback={<h1>Carregando produtos...</h1>}>
                    {items.map(product => 
                        <div>
                            <ProductItem {...product} />
                        </div>
                    )}
                </Suspense>
            </ProductErrorHandler>
        </div>
    )
}