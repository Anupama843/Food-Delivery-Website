import './Nav.css';

const tabs = [
  {
    id: 1,
    name: 'Delivery',
    active_img:'./images/clorscooter.png',
    background: '#E5F3F3',
    inactive_img:'./images/grayscooter.png',
  },
  {
    id: 2,
    name: 'Dining Out',
    active_img:'./images/colorplate.png',
    background: '#E5F3F3',
    inactive_img:
      './images/grayplate.png',
  },
  {
    id: 3,
    name: 'Nightlife',
    active_img:'./images/Colorbeer.png',
    background: '#E5F3F3',
    inactive_img:'./images/graybeer.png',
  },
];


function Nav({ activeTab, setActiveTab }) {
  return (
    <div className='tab-options'>
      {tabs.map((tab) => (
          <button
            className={`tab-item absolute-center cur-pointer ${activeTab === tab.name && 'active-tab'}`}
            onClick={() => setActiveTab(tab.name)}
            key={tab.name}
          >
            <div
              className='tab-image-container absolute-center'
              style={{
                backgroundColor: `${activeTab === tab.name ? tab.background : ' '
                  }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className='tab-image'
                alt={tab.name}
              />
            </div>
            <div className='tab-name'>{tab.name}</div>
          </button>
        ))}
    </div>
  );

}
export default Nav;