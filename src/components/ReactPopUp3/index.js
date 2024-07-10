import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp3 = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="trigger-button">
          Clipboard
        </button>
      }
      position="bottom left"
    >
      <ul>
        <li>Copy Email</li>
        <li>Copy Mobile</li>
        <li>View Clipboard</li>
      </ul>
    </Popup>
  </div>
)
export default ReactPopUp3
