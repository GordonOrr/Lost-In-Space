const { Post } = require('../models');

const postdata = [
  {
    title: 'Forcing Functions For Great Pull Requests',
    post_url: 'Why some development teams might naturally write great PRs — Theres a lot said online about why we should craft good pull requests, and how to do it. Despite how well accepted this seems to be (\"bordering on common knowledge\"), I havent observed this to be common practice. I\'ve been thinking about this a lot lately, especially since I begin my journey on a new team, at a new company — and since my previous team and current team have very different PR writing cultures.',
    user_id: 1
  },
  {
    title: 'Let\'s Stop Talking About Serverless Cold Starts',
    post_url: 'Whenever we talk about serverless, theres always the one person who brings up cold starts — Every presentation I\'ve given on serverless, someone has brought up cold starts. They heard about them a few years ago and have latched onto the idea that serverless is a non-starter for them as long as they exist, serverless is a non-starter for them. Can someone give me an example where #lambda function cold starts gave you legitimate issues in production? — Allen Helton (@AllenHeltonDev) August 26, 2022',
    user_id: 2
  },
  {
    title: 'Evaluating Guess.js in Angular Applications',
    post_url: 'The predictive prefetching gets a thumbs up in Angular applications — Page prediction is a browser feature or script that, when enabled, tells the browser to download resources that a user is likely to visit before they request the content. These resources are downloaded and cached for future use without the user making an explicit request. This process is called prefetching. Page prediction improves performance by enabling almost instant loading of predicted content. However, page prediction may also download content a user does not seek.',
    user_id: 3
  },
  {
    title: 'Six Principles of Engineering Leadership',
    post_url: 'What contributes to a developers\' career growth — The map of programmers\' career growth has two directions: you can move up the vertical axis and inward or horizontally. Professionals who choose the vertical vector grow to the positions of tech/team leads, engineering managers, and delivery managers. Those who choose the horizontal vector gradually overcome each of the steps from junior to senior engineer, and then the horizontal growth relies on the corporate structure.',
    user_id: 4
  },
  {
    title: 'DALL-E to 3D: How to Turn Your Generative Art Into 3D Meshes',
    post_url: 'Generate cool 3D meshes using machine learning — These days image generation with deep learning models is all over Twitter. Whether it is DALL-E, Midjourney, Stable Diffusion, or Craiyon, generative art has become a phenomenon even resulting in a segment on Last Week Tonight. While these models only generate 2D images, there is a relatively straightforward way to turn them into 3D models. In this short tutorial, we will discuss how we can leverage machine learning (again) to generate cool 3D meshes from 2D images of generative art.',
    user_id: 5
  },
  {
    title: 'Build a Discord Bot Using Node.js, Discord.js, and OpenAI GPT-3',
    post_url: 'Add an AI to your Discord server — Artificial intelligence is booming right now, and many developers want to start creating projects with it. Training your own AI to use it in your project can be quite challenging for beginners, though. Fortunately, interacting with AIs has become much easier in recent years, thanks to companies like OpenAI publishing APIs for interacting with their large pre-trained neural networks. In this tutorial, we will build a genius Discord bot that can answer complex questions and complete useful tasks.',
    user_id: 6
  },
  {
    title: 'Notes on Spring Boot 3 Upgrade',
    post_url: 'Learn about upcoming changes in this quick guide — With Spring Boot 3.0 GA release around the corner (November 2022), its time for us to start preparing for and upgrading our existing Spring Boot microservices to the latest Spring Boot 3 milestone release, 3.0.0-M4 as of this writing. I am sharing my notes from upgrading one of my microservices to Spring Boot 3. I hope you find it helpful. Java 17 — Spring Boot 3.0 will be based on Spring Framework 6.0 and require Java 17 or above.',
    user_id: 7
  },
  {
    title: 'Python List Comprehensions Are More Powerful Than You Might Think',
    post_url: 'Write better list comprehensions with the help of these unknown features and tricks — Python\s list comprehensions (and generators) are an awesome feature that can greatly simplify your code. Most of the time, however, we only use them to write a single for loop, maybe with the addition of one if conditional, and that\'s it. If you start poking around a bit though, you will find out that there are many more features of Python\'s comprehensions that you don\'t know about, but can learn a lot from…',
    user_id: 8
  },
  {
    title: 'Automatically Create NBA Highlights With a Few Lines of Python Code',
    post_url: 'Leveraging open-source computer vision models to generate basketball highlights — Were living in a world of fast consumption of content which is led by the likes of TikTok, Snapchat, Instagram, Twitter, Facebook, Youtube, and more. Younger fans are embracing new ways of engaging with leagues with decreasing importance placed on watching games live. Among U.S. sports fans ages 18-34, 58% of MLB fans, 54% of NBA fans, and 48% of NFL fans say they prefer watching highlights over full games, according to a survey by Variety Intelligence Platform',
    user_id: 9
  },
  {
    title: 'A Deep Dive Into GitHub Copilot',
    post_url: 'How GitHub Copilot works under the hood — Welcome to AI Review, where we talk about different Artificial Intelligence products designed to make life easier for developers like you and me. Today were gonna be talking about GitHub Copilot, a product Ive talked about extensively on this blog and one I\'m pretty excited about. We\'ll dive into how it works under the hood, whether you should bother using it, and how it squares up to its competitors.',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
