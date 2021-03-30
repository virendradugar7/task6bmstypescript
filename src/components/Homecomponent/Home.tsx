import Header from '../header/Header';

import Gallery from './Gallery';
import HomepageSlider from './HomepageSlider';
// import { MovieProvider } from '../../MovieContext';

export const Home = () => {

    return (
<>
<Header />
<Gallery />
        <div className="content">
            <div className="wrapper">
                <div className="wrapperinfo">
                    <h3>Recommended Movies</h3>
                    <h6>See all</h6>
                </div>
    
             <HomepageSlider />
           
            </div>
        </div>

</>
    );
}
export default Home