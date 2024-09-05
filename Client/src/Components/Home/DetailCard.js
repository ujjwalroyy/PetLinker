
import dog from './card/file.png'
import cat from './card/catt.png'
import cow from './card/cow.png'
import fish from './card/fish.png'
import goat from './card/goat.png'
import horse from './card/horse.png'
import rabbit from './card/rabbit.png'
import turtle from './card/turtle.png'
import birds from './card/birds.png'
// import oP23 from './card/'
// import oP24 from '../../assets/blood/24.webp'

const cardItem = [
  { id: 1, logo: dog, name: "Dog" },
  { id: 2, logo: cat, name: "Cat" },
  { id: 4, logo: birds, name: "Birds" },
  { id: 3, logo: cow, name: "Cow" },
  { id: 2, logo: fish, name: "Fish" },
  { id: 6, logo: goat, name: "Goat" },
  { id: 7, logo: horse, name: "Horse" },
  { id: 7, logo: rabbit, name: "Rabbits" },
  { id: 7, logo: turtle, name: "Turtle" },
//   { id: 5, logo: oP4, name: "RH-" },

];
  
  export default function Blog() {
    return (
        <div className="card-box">
      <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-center mb-3 text-gray-900">
        Pets
      </h1>
      <p className="text-center text-lg mb-4 text-gray-700">
      Here are some of the basic blood types
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border rounded-xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mb-3"
            />
            <div className="text-xl font-semibold text-gray-800">{name}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    )
  }
  