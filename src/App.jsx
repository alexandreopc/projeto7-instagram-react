import Navbar from './Navbar';
import Corpo from './Corpo';
import FundoMobile from './FundoMobile';
// import RootAPP from './RootAPP';
export default function App() {
    return (
        <div className='root'>
            {/* <RootAPP /> */}
            <Navbar />
            <Corpo />    
            <FundoMobile />
        </div>
    );
}