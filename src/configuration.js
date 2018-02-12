'use strict';

var config = {
    // TODO Add Application ID
    appId : 'yourappid',
    // TODO Add an appropriate welcome message.
    welcome_message : 'Welcome to Tech News',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : true,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
        'Reuters Tech News' : 'http://feeds.reuters.com/reuters/technologyNews',
        'YCombinator Tech News' : 'https://news.ycombinator.com/rss',
    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : 'technewsrss',
    dynamoDBTableName : 'TechNewsRSSSkillTable',
    dynamoDBRegion : 'us-east-1'
};

module.exports = config;
