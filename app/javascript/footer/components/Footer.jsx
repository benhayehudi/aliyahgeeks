import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <span id="footer-copyright">&copy;2018</span> <span id="footer-firsthalf">Rechov</span><span id="footer-secondhalf">Aliyah</span><img src="/assets/icons/israel-flag-icon.png" />
        </div>
      </div>
    )
  }
}
export default Footer