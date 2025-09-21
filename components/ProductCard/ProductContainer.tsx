import Image from "next/image";

const ProductContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Image
            src="/อะไหล่.jpg"
            alt="dd"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div>
          <Image
            src="/อะไหล่.jpg"
            alt="dd"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div>
          <Image
            src="/อะไหล่.jpg"
            alt="dd"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div>
          <Image
            src="/อะไหล่.jpg"
            alt="dd"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductContainer;
