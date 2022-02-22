import './QuickItems.scss';

const QuickItemGroups = () => {

    return (
        <div className='quick-items-group'>
            <div className='quick-items-buy-theme quick-items'>
                <a href=''>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> Purchase Theme</span>
                </a>
            </div>
            <div className='quick-items-template quick-items'>
                <a href=''>
                    <i className="fa-solid fa-folder"></i>
                    <span> All Templates</span>
                </a>
            </div>
        </div>
    )
}

export default QuickItemGroups;