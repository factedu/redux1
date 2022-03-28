import React from 'react'
import { useSelector } from 'react-redux'
import CartSummary from '../components/CartSummary'
import MainMenu from '../components/MainMenu'
import ProductList from '../components/ProductList'

const HomeScreen = () => {
  const orders = useSelector((state) => state.order.orders);
  return (
    <div className='flex flex-col h-full'>
      <div className='text-2xl font-extrabold text-center'>
        Kings Arms Cordington
      </div>
      <br />
      <div className='text-center'>
        134, High Street, Kemeston, Bedford, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
      <MainMenu />
      <div className='flex flex-1'>
        <ProductList />
      </div>
      {orders && <CartSummary />}
      {/* <pre>{JSON.stringify(orders,null,2)}</pre> */}
    </div>
  )
}

export default HomeScreen