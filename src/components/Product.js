import React from "react";
import { useGlobalContext } from "./Contex";

const ProductList = () => {
  const { hit, isLoading, removePost } = useGlobalContext();

  return (
    <>
      <div>
        {hit.map((product) => {
          const { title, name, id, url, price } = product;

          return (
            <div className="card">
              <h2>{title}</h2>
              <p>{name}</p>
              <p>{id}</p>
              <p>{url}</p>
              <p>{price}</p>

              <div>
                <a href={url} target="/">
                  Reade More
                </a>
                <a href={url} onClick={() => removePost(id)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
