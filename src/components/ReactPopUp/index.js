import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="trigger-button">
          All Profiles
        </button>
      }
      position="bottom left"
    >
      <ul>
        <li>Refresh</li>
        <li>Refresh</li> <li>Refresh</li> <li>Refresh</li> <li>Refresh</li>
      </ul>
    </Popup>
  </div>
)
export default ReactPopUp
