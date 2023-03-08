import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState(0)

  // page
  const [page, setPage] = useState('products')

  // lightbox
  const [showLightbox, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(1);

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const handleMinusClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    setCart(counter)
  }

  return (
    <div className="App">

      {/* NAVBAR */}
      <Navbar cart={cart}/>

      <div className="container flex flex-col md:flex-row md:justify-around items-center mx-auto md:mt-24">
        {/* LEFT */}
        <div className='overflow-hidden w-full md:w-1/3'>
          <div className='relative'>
            <img className='w-full md:rounded-xl cursor-pointer' onClick={() => openLightbox(0)} src={`images/image-product-${currentImage}.jpg`} alt="" />
            <img className='absolute top-1/2 left-5 bg-white px-5 py-4 rounded-full cursor-pointer' src="images/icon-previous.svg" alt="" onClick={() => setCurrentImage(currentImage === 1 ? 4 : currentImage - 1)} />
            <img className='absolute top-1/2 right-5 bg-white px-5 py-4 rounded-full cursor-pointer' src="images/icon-next.svg" alt="" onClick={() => setCurrentImage(currentImage === 4 ? 1 : currentImage + 1)} />
          </div>

          {/* Lightbox */}
          {showLightbox && (
            <div className='flex flex-col fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center' onClick={closeLightbox}>
              <img className='w-1/3 max-h-full rounded-xl' src={`images/image-product-${currentImage}.jpg`} alt="" />
              <div className='flex justify-between space-x-4 mt-6'>
                {[1, 2, 3, 4].map((index) => (
                  <img className='w-24 rounded-xl cursor-pointer' src={`images/image-product-${index}.jpg`} key={index} onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }} />
                ))}
              </div>
            </div>
          )}

          <div className='flex justify-between mt-6'>
            {[1, 2, 3, 4].map((index) => (
              <img className='w-24 rounded-xl cursor-pointer' src={`images/image-product-${index}-thumbnail.jpg`} key={index} onClick={() => setCurrentImage(index)}/>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className='space-y-6 md:w-1/3 border-2 mt-12 p-6 md:mt-0'>
 
          <p className="text-orange-400 font-bold uppercase">Sneaker Company</p>
          <h1 className='text-5xl font-bold'>Fall Limited Edition Sneakers</h1>
          <p className='md:max-w-lg border-2'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="flex justify-between items-center md:flex-col md:items-start md:justify-start">
            <div className="flex items-center space-x-4">
              <p className='text-4xl font-bold'>$125.00</p>
              <p className='font-bold bg-orange-200 text-orange-500 px-2 rounded-sm'>50%</p>
              
            </div>
            <div><p className='line-through text-gray-400 font-bold'>$250.00</p></div>
          </div>
          {/* cart functions */}
          <div className='flex flex-col space-y-6 md:space-y-0 md:space-x-4 md:flex-row'>
            <div className='flex justify-between items-center bg-gray-100 px-2 py-3 md:w-72 rounded-md'>
              <button onClick={handleMinusClick}>
                <img src="images/icon-minus.svg" alt="" />
              </button>
              <div className='font-bold'>{counter}</div>
              <button onClick={() => setCounter(counter + 1)}>
                <img src="images/icon-plus.svg" alt="" />
              </button>
            </div>
            <button className='inline-flex items-center justify-center bg-orange-400 w-full rounded-md text-white font-bold py-3' onClick={() => addToCart()}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
