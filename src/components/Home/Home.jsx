import React from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'
import Categories from '../Categories/Categories'

const Home = () => {
  const { products, categories } = useSelector((state) => state)
  return (
    <div>
      <Poster/>
      <Products products={products.list} amount={5} title="Trending"/>
      <Categories categories={categories.list} amount={5} title="Worth seeing"/>
    </div>
  )
}

export default Home
