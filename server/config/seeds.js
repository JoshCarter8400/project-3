const db = require('./connection');
const { Service } = require('../models');

db.once('open', async () => {
  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      name: 'Create a new website',
      description: 'If you don\'t have an existing website or want to create one from scratch, we can help!',
      image: 'world-wide-web.svg',
      price: 1000
    }, {
      name: 'Convert to responsive design',
      description: 'Does your existing site work great on PCs but has issues on mobile devices? We\'ll help you convert your existing site to work on any device, no matter the screen size.',
      image: 'responsive-design.svg',
      price: 400
    }, {
      name: 'Add ecommerce functionality',
      description: 'Add a web store to your site to make selling your products or services easier.',
      image: 'online-shopping.svg',
      price: 200
    }, {
      name: 'Code cleanup/maintenance',
      description: 'If your website is hard to maintain or bogged down with legacy code, we\'ll clean it up and help you create a maintenance plan that works for you.',
      image: 'broom.svg',
      price: 500
    }, {
      name: 'SEO',
      description: 'Wondering how to get rich previews on social media sites and improve your site\'s standing with search engines? Search Engine Optimization, or SEO for short, helps other computer and servers understand your content and present the most relevent parts to prospecive users.',
      image: 'magnifying-glass.svg',
      price: 250
    }, {
      name: 'Accessibility',
      description: 'We\'ll make sure all users can easily access and interact with your site so you don\'t lose customers. Includes checking the contrast of text against the background colors or images, adjusting the font size if needed, and optimizing HTML elements for screen readers.',
      image: 'wheelchair.svg',
      price: 300
    }
  ]);

  console.log('services seeded');

  process.exit();
});
