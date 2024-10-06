import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    name: "InterContinental Dhaka",
    price: "20,383",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411654204.jpg?k=b17e7905d6c6700e5e12c7d4c941d07498940dcc7bdf6c785ab970d24c294b28&o=&hp=1",
    bed: "4",
    bath: "2",
  },
  {
    id: 2,
    name: "Renaissance Dhaka",
    price: "15,999",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/444109100.jpg?k=8d04470817133a691a9cf21574231f8bccef1962810bd22ac93186856fef55c5&o=&hp=1",
    bed: "3",
    bath: "2",
  },
  {
    id: 3,
    name: "The Peninsula Chittagong ",
    price: "6,864",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/575336200.jpg?k=831c819cc61f199bc3b7ebb144019ec752f49f6dd799acd56ba505fad4d0f5fe&o=&hp=1",
    bed: "2",
    bath: "1",
  },
  {
    id: 4,
    name: "Crown Plaza Dhaka",
    price: "11,990",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413804357.jpg?k=196f9dd121be490297a8b7937a8e0e39c0da24987dd162423b5df32e1015e9f9&o=&hp=1",
    bed: "3",
    bath: "3",
  },
  {
    id: 5,
    name: "Pan Pacific Sonargaon ",
    price: "13,917",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/92583733.jpg?k=f3c24f18283ca132bf9069bd15169a65619c8e334abb7fe40083bedd06215cdd&o=&hp=1",
    bed: "4",
    bath: "3",
  },
  {
    id: 6,
    name: "Le Meridien Dhaka",
    price: "33,517",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/573421951.jpg?k=705bf03eadc87237d6092e72c89e2f496c10d55adc4a9dd09309c4af0f7e116b&o=&hp=1",
    bed: "5",
    bath: "4",
  },
];

export default function Properties() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
