import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SocialMediaAnalysis from './components/SocialMediaAnalysis';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const mockData = {
    "total_posts": 5,
    "total_likes": 1478,
    "total_comments": 185,
    "total_shares": 113,
    "post_performance": {
      "static_image": {
        "posts": 3,
        "likes": 869,
        "comments": 142,
        "shares": 47
      },
      "reel": {
        "posts": 2,
        "likes": 760,
        "comments": 66,
        "shares": 21
      },
      "carousel": {
        "posts": 1,
        "likes": 519,
        "comments": 27,
        "shares": 46
      }
    },
    "post_performance_by_date": {
      "2024-12-05": {
        "posts": 1,
        "likes": 519,
        "comments": 27,
        "shares": 46
      },
      "2024-12-06": {
        "posts": 1,
        "likes": 141,
        "comments": 26,
        "shares": 43
      },
      "2024-12-13": {
        "posts": 1,
        "likes": 549,
        "comments": 86,
        "shares": 8
      },
      "2024-12-20": {
        "posts": 1,
        "likes": 681,
        "comments": 38,
        "shares": 5
      },
      "2024-12-25": {
        "posts": 1,
        "likes": 79,
        "comments": 28,
        "shares": 16
      }
    },
    "hashtag_performance": {
      "#catvideo": {
        "posts": 1,
        "likes": 549,
        "comments": 86,
        "shares": 8
      },
      "#style": {
        "posts": 1,
        "likes": 549,
        "comments": 86,
        "shares": 8
      },
      "#dance": {
        "posts": 2,
        "likes": 760,
        "comments": 66,
        "shares": 21
      },
      "#selfcare": {
        "posts": 1,
        "likes": 79,
        "comments": 28,
        "shares": 16
      },
      "#music": {
        "posts": 1,
        "likes": 141,
        "comments": 26,
        "shares": 43
      },
      "#workout": {
        "posts": 1,
        "likes": 141,
        "comments": 26,
        "shares": 43
      },
      "#funny": {
        "posts": 1,
        "likes": 681,
        "comments": 38,
        "shares": 5
      },
      "#weekend": {
        "posts": 1,
        "likes": 519,
        "comments": 27,
        "shares": 46
      },
      "#foodie": {
        "posts": 1,
        "likes": 519,
        "comments": 27,
        "shares": 46
      }
    }
  };

  return (
    <Router>
      <ErrorBoundary >
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage setShowAnalysis={setShowAnalysis} />} 
        />
        <Route 
          path="/analysis" 
          element={<SocialMediaAnalysis />} 
        />
      </Routes>
      </ErrorBoundary>
      
    </Router>
    // <div>
    //   <SocialMediaAnalysis data={mockData}/>
    // </div>
  );
};

export default App;