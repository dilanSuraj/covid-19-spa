import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer" class="section-bg">
                    
                    <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong>Half Life Pvt. Ltd</strong>. All Rights Reserved
                                                    </div>
                        <div class="credits">
                            Designed by <a href="https://halflife.io/">HalfLife</a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterComponent;