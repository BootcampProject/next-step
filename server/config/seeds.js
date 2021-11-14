const db = require('./connection');
const { User, Questions, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Grade 8 English' },
    { name: 'Grade 8 Math' },
    { name: 'Grade 8 Science' },
    { name: 'Grade 8 History' },
    { name: 'Grade 8 Geography' }
  ]);

  console.log('categories seeded');

  await Questions.deleteMany();

  const Questions = await Questions.insertMany([
    {
      question: 'Tin of Cookies',
      answer:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
    },
    {
      question: 'Canned Coffee',
      answer:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
    },
    {
      question: 'Toilet Paper',
      category: categories[1]._id,
      answer:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
    },
    {
      question: 'Handmade Soap',
      category: categories[1]._id,
      answer:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
    },
    {
      question: 'Set of Wooden Spoons',
      category: categories[1]._id,
      answer:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
    },
    {
      question: 'Camera',
      category: categories[2]._id,
      answer:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
    },
    {
      question: 'Tablet',
      category: categories[2]._id,
      answer:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
    },
    {
      question: 'Tales at Bedtime',
      category: categories[3]._id,
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
    },
    {
      question: 'Spinning Top',
      category: categories[4]._id,
      answer: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
    }
  ]);

  console.log('questions seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Clark',
    lastName: 'Kent',
    email: 'email@email.com',
    password: '11223366password',
  });

  await User.create({
    firstName: 'Ben',
    lastName: 'Benji',
    email: 'ben@email.com',
    password: 'password22097'
  });

  console.log('users seeded');

  process.exit();
});