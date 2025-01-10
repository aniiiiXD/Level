import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Hash, 
  FileText,
  Lightbulb,
  ThumbsUp,
  MessageCircle,
  Share2,
  Film,
  TrendingUp,
  Activity,
  Award,
  Target,
  Loader2,
  Calendar,
  TrendingDown
} from 'lucide-react';

// Dummy data
const dummyData = {
  "overall_performance": {
    "total_posts": 5,
    "total_likes": 1378,
    "total_comments": 185,
    "total_shares": 113
  },
  "post_performance": [
    {
      "post_id": 137,
      "type": "Static Image",
      "likes": 549,
      "comments": 86,
      "shares": 8,
      "date_posted": "2024-12-13",
      "hashtags": ["#catvideo", "#style"]
    },
    {
      "post_id": 82,
      "type": "Reel",
      "likes": 681,
      "comments": 38,
      "shares": 5,
      "date_posted": "2024-12-20",
      "hashtags": ["#dance", "#funny"]
    },
    {
      "post_id": 98,
      "type": "Carousel",
      "likes": 519,
      "comments": 27,
      "shares": 46,
      "date_posted": "2024-12-05",
      "hashtags": ["#weekend", "#foodie"]
    },
    {
      "post_id": 149,
      "type": "Reel",
      "likes": 79,
      "comments": 28,
      "shares": 16,
      "date_posted": "2024-12-25",
      "hashtags": ["#dance", "#selfcare"]
    },
    {
      "post_id": 130,
      "type": "Static Image",
      "likes": 141,
      "comments": 26,
      "shares": 43,
      "date_posted": "2024-12-06",
      "hashtags": ["#music", "#workout"]
    }
  ],
  "hashtag_performance": [
    { "hashtag": "#dance", "posts": 2 },
    { "hashtag": "#style", "posts": 1 },
    { "hashtag": "#catvideo", "posts": 1 },
    { "hashtag": "#music", "posts": 1 },
    { "hashtag": "#workout", "posts": 1 },
    { "hashtag": "#selfcare", "posts": 1 },
    { "hashtag": "#funny", "posts": 1 },
    { "hashtag": "#weekend", "posts": 1 },
    { "hashtag": "#foodie", "posts": 1 }
  ],
  "insights_and_recommendations": [
    {
      "recommendation": "Focus on Reels",
      "reason": "Reels have the highest engagement"
    },
    {
      "recommendation": "Use relevant hashtags",
      "reason": "Posts with relevant hashtags have higher engagement"
    },
    {
      "recommendation": "Post consistently",
      "reason": "Posting consistently can help maintain audience engagement and interest"
    },
    {
      "recommendation": "Experiment with different formats",
      "reason": "Experimenting with different formats can help find what works best for your audience"
    },
    {
      "recommendation": "Analyze post performance",
      "reason": "Analyzing post performance can help identify what works and what doesn't"
    }
  ]
};

const SocialMediaAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="relative">
        <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full bg-blue-200 opacity-50"></div>
        </div>
      </div>
      <p className="text-xl font-medium text-gray-700 mt-4">Loading Your Insights...</p>
      <p className="text-sm text-gray-500">Hang tight! We're preparing the data.</p>
    </div>
  );
  

  const renderStatCard = (title, value, Icon, trend = null) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-200 p-4 rounded-full">
          <Icon className="h-6 w-6 text-blue-700" />
        </div>
        <div>
          <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</p>
            {trend && (
              <span className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                {trend > 0 ? <TrendingUp className="h-5 w-5 mr-1" /> : <TrendingDown className="h-5 w-5 mr-1" />}
                {Math.abs(trend * 100).toFixed(1)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  

  const renderPostCard = (post) => (
    <div key={post.post_id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Post #{post.post_id}</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">{post.type}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4 flex items-center">
        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
        {post.date_posted}
      </p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-100 rounded-lg">
          <ThumbsUp className="h-5 w-5 text-blue-600 mx-auto mb-1" />
          <p className="text-sm">Likes</p>
          <p className="font-semibold">{post.likes}</p>
        </div>
        <div className="text-center p-3 bg-gray-100 rounded-lg">
          <MessageCircle className="h-5 w-5 text-blue-600 mx-auto mb-1" />
          <p className="text-sm">Comments</p>
          <p className="font-semibold">{post.comments}</p>
        </div>
        <div className="text-center p-3 bg-gray-100 rounded-lg">
          <Share2 className="h-5 w-5 text-blue-600 mx-auto mb-1" />
          <p className="text-sm">Shares</p>
          <p className="font-semibold">{post.shares}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.hashtags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
  

  const renderHashtagSection = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Hash className="h-6 w-6 text-blue-600 mr-2" />
        Hashtag Performance
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.hashtag_performance.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-blue-600 font-semibold">{item.hashtag}</p>
            <p className="text-sm text-gray-600">Used in {item.posts} posts</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInsightsSection = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
        Insights & Recommendations
      </h2>
      <div className="space-y-4">
        {data.insights_and_recommendations.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{item.recommendation}</p>
            <p className="text-sm text-gray-600 mt-1">{item.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) return <LoadingScreen />;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
        Social Media Analytics Dashboard
      </h1>

      {/* Overall Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {renderStatCard("Total Posts", data.overall_performance.total_posts, FileText)}
        {renderStatCard("Total Likes", data.overall_performance.total_likes, ThumbsUp, 0.05)}
        {renderStatCard("Total Comments", data.overall_performance.total_comments, MessageCircle, -0.02)}
        {renderStatCard("Total Shares", data.overall_performance.total_shares, Share2, 0.08)}
      </div>

      {/* Post Performance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Post Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.post_performance.map(post => renderPostCard(post))}
        </div>
      </div>

      {/* Hashtags and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderHashtagSection()}
        {renderInsightsSection()}
      </div>
    </div>
  );
};

export default SocialMediaAnalysis;