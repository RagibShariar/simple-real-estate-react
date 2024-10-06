/* eslint-disable react/prop-types */
import Bathtub from "./svg/Bathtub";
import Bed from "./svg/Bed";

export default function PropertyCard(props) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <div className="w-full h-[255px] bg-red-400 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={props?.property?.image}
          alt={props?.property?.name}
        />
      </div>

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">
          {props?.property?.name}
        </h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            $ {props?.property?.price}
          </span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Bed />
          <p>
            <span className="font-bold text-gray-900">
              {props?.property?.bed}
            </span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Bathtub />
          <p>
            <span className="font-bold text-gray-900">
              {props?.property?.bath}
            </span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
