import { useOutletContext, useNavigate } from 'react-router-dom'
import { handleSingleProduct } from '../helpers/handlers'

const ProductPreview = ({ product, selectedProdState: [, setSelectedProd] }) => {
  const { title, price, category, image, id } = product
  const navigate = useNavigate()

  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>In Stock: {category}</p>
      <img src={image} alt={`image for ${title}`} />
      <button onClick={(e) => handleSingleProduct(e, id, setSelectedProd, navigate)}>
        Details
      </button>
    </div>
  )
}
export default ProductPreview