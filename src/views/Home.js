import React from "react";
import { ProductsList } from "../components/productsListComponent";

export const Home = () => 
<div>
    <h1 className="titleProducts">Produtos em destaque</h1>

    <ProductsList />

    <style jsx>{`
        .titleProducts {
          text-align: center;
        }
    `}</style>
</div>;
