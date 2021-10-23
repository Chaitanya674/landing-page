import Link from "next/link";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";

const Products = ({ products }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const newFilteredProducts = products.filter((product) => {
      const title = product.title.trim().toLowerCase();
      if (title.includes(e.target.value.trim().toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(newFilteredProducts);
  };

  const renderProducts = () => {
    return filteredProducts.map((product) => {
      return (
        <>
          <Zoom key={product.id}>
            <Link href={`product/${product.id}`} passHref>
              <div className="w-full rounded-lg border-2 shadow-lg hover:shadow-md my-5 hover:bg-gray-100 cursor-pointer">
                <div className="flex md:flex-row flex-col">
                  <img
                    src={product.icon}
                    className="md:rounded-l-lg md:rounded-t-none rounded-t-lg md:w-32 md:h-32 p-5"
                    alt="Icon"
                  ></img>
                  <div className="flex-grow p-5">
                    <div className="text-xl font-semibold flex justify-between">
                      <div>{product.title}</div>
                    </div>
                    <div className="text-gray-500 text-justify mt-1.5">{product.description}</div>
                  </div>
                </div>
              </div>
            </Link>
          </Zoom>
        </>
      );
    });
  };

  return (
    <div className="mt-28 md:mx-64 mx-10 font-pop text-gray-700">
      <input
        className="md:text-base text-sm px-3 py-2 border-2 rounded-lg outline-none w-full focus:shadow-lg hover:shadow-lg mb-5 placeholder-opacity-50"
        placeholder="Search.."
        value={query}
        onChange={(e) => {
          handleSearch(e);
        }}
      ></input>
      <Zoom>{renderProducts()}</Zoom>
    </div>
  );
};

export default Products;
