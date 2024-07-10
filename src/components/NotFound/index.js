import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1719479093/404_Error-bro-removebg-preview_iwxhpy.png"
        alt="not-found"
        className="not-found-img"
      />
    </div>
  </>
)

export default NotFound
