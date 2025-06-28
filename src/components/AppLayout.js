import Header from './Header';
import Body from './Body';
import rawData from '../utils/RawData';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <div>
        <Header />
        <Body data={rawData.data} />
        <Footer />
        </div>
    );
};

export default AppLayout;