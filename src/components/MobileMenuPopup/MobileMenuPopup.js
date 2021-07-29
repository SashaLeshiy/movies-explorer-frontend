import React from 'react';
import Navigation from '../Navigation/Navigation';

function MobileMenuPopup() {
    return (
            <div className="mobileMenu">
                    <button className="mobileMenuClose"></button>
                    <Navigation />
            </div>
    );
}
export default MobileMenuPopup;