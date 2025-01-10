// components/Sidebar.jsx
const Sidebar = () => {
    const menuItems = [
      { name: 'Dashboard', active: true },
      { name: 'Overview', active: false },
      { name: 'Analytics', active: false },
      { name: 'Calendar', active: false },
      { name: 'Trends', active: false },
      { name: 'Engagement', active: false },
      { name: 'Reports', active: false },
      { name: 'Settings', active: false },
    ];
  
    return (
      <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4 fixed left-0">
        <h1 className="text-xl font-bold mb-8">Analytics</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                item.active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </div>
          ))}
        </nav>
        
        {/* User Profile at Bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;