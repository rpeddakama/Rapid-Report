# Rapid-Report

**Daily News Without the Reading**

A streamlined news digest application for those who want to stay informed without spending time reading lengthy articles. Get not just the news, but the public's emotional response to it, with historical context and trend analysis.

## 🛠️ Technologies Used

- **JavaScript**
- **Twitter API** - For social media data collection and analysis
- **Node.js**
- **AI/ML Libraries** - For sentiment analysis and natural language processing
- **Data Visualization** - For generating sentiment trend graphs
- **Web APIs** - For fetching and processing news content

## ⚡ Features

#### 🤖 AI-Powered Sentiment Analysis
- **Real-time Twitter Sentiment Tracking** - Analyzes public opinion on trending topics
- **Sentiment Scoring** - Provides numerical sentiment scores (-1 to +1) for any queried topic (vader)
- **Multi-dimensional Analysis** - Evaluates emotion, subjectivity, and opinion intensity

#### 📋 Browse Trending Topics
- Access the curated list of relevant, trending topics
- Topics are automatically detected and ranked by relevance and engagement (likes, retweets, hashtags, etc.)
- **Historical Trend Visualization** - Interactive graphs showing sentiment changes over time

#### 🔍 Custom Sentiment Queries  
```javascript
// Query any topic for sentiment analysis
const sentiment = await analyzeTopic("climate change");
console.log(`Sentiment Score: ${sentiment.score}`); // e.g., -0.23 (slightly negative)
console.log(`Confidence: ${sentiment.confidence}`);  // e.g., 0.87 (87% confident)
```

## ⚙️ Configuration

#### Environment variables
```bash
# Twitter API Configuration
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```
*Note: Twitter API keys and tokens mentioned in the repository have been regenerated for security purposes.*

#### Sentiment Analysis Configuration
- **Model Selection**: Choose between pre-trained models or custom training
- **Language Support**: Configure primary analysis language and detection
- **Scoring Method**: Adjust sentiment scoring algorithms and thresholds
- **Real-time vs Batch**: Configure processing mode based on needs

