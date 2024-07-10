import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp2 = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="trigger-button">
          Settings
        </button>
      }
      position="bottom left"
    >
      <ul>
        <li>Advanced Search</li>
      </ul>
    </Popup>
  </div>
)
export default ReactPopUp2
