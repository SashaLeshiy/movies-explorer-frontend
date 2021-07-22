import React from 'react';

function Footer() {
      return (
            (<footer className="footer">
                  <div className="content">
                        <p className="footer__copyright">&copy; {new Date().getFullYear()} Footer</p>
                  </div>
            </footer>)
      );
}
export default Footer;