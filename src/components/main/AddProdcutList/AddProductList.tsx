import { useState, useEffect } from 'react'
import AddProductItem from '../AddProductItem/AddProductItem'
import Product from '../../../interfaces/ProductInterface'
import { AddProductListProps } from '../../../types/main-types'
import './AddProductList.scss'

const AddProductList = ({ add }: AddProductListProps) => {
  const [avaibleProducts, setAvaibleProducts] = useState<Product[] | null>(null)

  const handleGetProducts = async (): Promise<void> => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setAvaibleProducts(data.products)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  return (
    <div className='add-product-list'>
      {avaibleProducts &&
        avaibleProducts.map((product, index) => (
          <AddProductItem product={product} add={add} key={index} />
        ))}
    </div>
  )
}

export default AddProductList
