import { useOutletContext } from 'react-router-dom'
import ProductPreview from './ProductPreview'

const Products = () => {
  const {
    productsState: [products],
    selectedProdState
  } = useOutletContext()

  // detail button does detail page nav and/or sets selectedProd

  return (
    <>
      {!!products.length &&
        products.map((product, i) => {
          return <ProductPreview product={product} selectedProdState={selectedProdState} key={i} />
        })}
    </>
  )
}

export default Products