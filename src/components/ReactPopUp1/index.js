import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp1 = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="trigger-button">
          + Add View
        </button>
      }
      position="bottom left"
    >
      <ul>
        <li>Create Folder</li>
        <li>View Folder</li>
      </ul>
    </Popup>
  </div>
)
export default ReactPopUp1
