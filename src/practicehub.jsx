import search from './assets/search.png'
import design from './assets/bluetreedesign.svg'
import { useState } from 'react'
import AllContent from './components/AllContent';
import PopularContent from './components/PopularContent';
import QuickRevisionContent from './components/QuickRevisionContent';
import CompleteDSAContent from './components/CompleteDSAContent';
import CodeBattlesContent from './components/CodeBattlesContent';
import Leftsidebar from './Leftsection/Leftsidebar'
import Navbar from './Leftsection/Navbar';
function PracticeHub() {

    const [activeTab, setActiveTab] = useState('All');
    const [sidebarVisible, setSidebarVisible] = useState(false); // 👈 toggle state

    const handleLogoClick = () => {
        setSidebarVisible(prev => !prev); // toggle sidebar
    };

    const rendercontent = () => {
        switch (activeTab) {
            case 'All':
                return <AllContent />;
            case 'Popular':
                return <PopularContent />;
            case 'Quick Revision':
                return <QuickRevisionContent />;
            case 'Complete DSA':
                return <CompleteDSAContent />;
            case 'Code Battles':
                return <CodeBattlesContent />;
            default:
                return null;
        }
    };


    return (
        <>
            <Navbar onLogoClick={handleLogoClick} />
            <div className="container">
                <div style={{ display: 'flex', width: '100%' }}>
                    {sidebarVisible && (
                        <div style={{ minWidth: '220px' }}>
                            <Leftsidebar />
                        </div>
                    )}

                    <div className="right-section">

                        <div>
                            <h2>Keep All Your Coding Progress Together</h2>
                            <p>Follow Structured Paths to Master Coding</p>
                        </div>
                        <div className='search-area'>
                            <div className='search-container'>
                                <div className='search-input'>
                                    <input type="text" name="search" id="search" placeholder='Search any coding path' />
                                    <img src={search}></img>
                                </div>
                                <div className='search-img-wrapper' style={{ marginTop: '20px' }}>
                                    <img className='designimg' src={design} />
                                </div>
                            </div>

                            <div className='search-btn'>
                                {['All', 'Popular', 'Quick Revision', 'Complete DSA', 'Code Battles'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        style={{
                                            backgroundColor: activeTab === tab ? '#3b82f6' : 'white',
                                            color: activeTab === tab ? 'white' : 'black',
                                            borderColor: activeTab === tab ? '#3b82f6' : 'rgb(241, 234, 234)',
                                            fontWeight: activeTab === tab ? '600' : '500',
                                        }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                {rendercontent()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default PracticeHub;
