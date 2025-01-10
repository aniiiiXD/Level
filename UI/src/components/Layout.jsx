const AnalyticsDashboard = () => {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <h1 className="text-xl font-bold mb-8">Analytics</h1>
          <nav className="space-y-2">
            <div className="bg-gray-900 text-white rounded-lg p-2">Dashboard</div>
            <div className="text-gray-600 p-2">Overview</div>
            <div className="text-gray-600 p-2">Analytics</div>
            <div className="text-gray-600 p-2">Calendar</div>
            <div className="text-gray-600 p-2">Trends</div>
            <div className="text-gray-600 p-2">Engagement</div>
            <div className="text-gray-600 p-2">Reports</div>
            <div className="text-gray-600 p-2">Settings</div>
          </nav>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-96 p-2 border border-gray-200 rounded-lg"
            />
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gray-100">🔔</div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-600">Total Followers</h3>
                <span className="text-green-500">+12%</span>
              </div>
              <p className="text-2xl font-bold">124.7K</p>
              <p className="text-sm text-gray-500">Across all platforms</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-600">Engagement Rate</h3>
                <span className="text-red-500">-2%</span>
              </div>
              <p className="text-2xl font-bold">4.6%</p>
              <p className="text-sm text-gray-500">Average across posts</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-600">Post Reach</h3>
                <span className="text-green-500">+8%</span>
              </div>
              <p className="text-2xl font-bold">892K</p>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-600">Interactions</h3>
                <span className="text-green-500">+15%</span>
              </div>
              <p className="text-2xl font-bold">45.2K</p>
              <p className="text-sm text-gray-500">Comments & shares</p>
            </div>
          </div>
  
          {/* Data Import Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Data Import</h3>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Load Latest Data
              </button>
              <span className="text-gray-500 text-sm">Last updated: 2 hours ago</span>
            </div>
          </div>
  
          {/* Platform Distribution */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Platform Distribution</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Instagram</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-blue-500 h-2 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Twitter</span>
                    <span>30%</span>
                  </div>
                  <div className="w-4/5 bg-blue-500 h-2 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Facebook</span>
                    <span>25%</span>
                  </div>
                  <div className="w-3/5 bg-blue-500 h-2 rounded-full"></div>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Growth Trend</h3>
              <div className="h-48 flex items-end space-x-2">
                {/* Placeholder for chart bars */}
                <div className="w-1/7 h-1/3 bg-blue-200 rounded-t"></div>
                <div className="w-1/7 h-1/2 bg-blue-300 rounded-t"></div>
                <div className="w-1/7 h-1/4 bg-blue-400 rounded-t"></div>
                <div className="w-1/7 h-3/4 bg-blue-500 rounded-t"></div>
                <div className="w-1/7 h-2/3 bg-blue-600 rounded-t"></div>
                <div className="w-1/7 h-full bg-blue-700 rounded-t"></div>
                <div className="w-1/7 h-5/6 bg-blue-800 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AnalyticsDashboard;