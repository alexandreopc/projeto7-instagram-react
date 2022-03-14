import Navbar from './Navbar';
import Corpo from './Corpo';
import FundoMobile from './FundoMobile';
export default function App() {
    return (
        <div className='root'>
            <Navbar />
            <Corpo />    
            <FundoMobile />
        </div>
    );
}