const db = require('./connection');
const { User, Questions, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Grade 8 History' },
    { name: 'Grade 8 Math' },
    { name: 'Grade 8 Science' },
    { name: 'Grade 8 Geography' }
  ]);

  console.log('categories seeded');

  await Questions.deleteMany();

  const Questions = await Questions.insertMany([
    {
      question: 'Simplify this expression. 3(𝑥 + 9) =',
      answer: '3𝑥 + 27',
      category: categories[1]._id,
    },
    {
      question: 'Find Mode and Rage of the Given Data. 8, 2, 5, 9, 1, 2',
      answer: 'Mode: 2, Range: 8',
      category: categories[1]._id,
    },
    {
      question: 'A number is chosen at random from 1 to 10. Find the probability of selecting number 4 or smaller numbers. _',
      category: categories[1]._id,
      answer: '2/5',
    },
    {
      question: 'Simplify this expression. 𝑥 − 3 + 5 − 3𝑥 =',
      category: categories[1]._id,
      answer: '−2𝑥 + 2',
    },
    {
      question: ' A stationery sold 12 pencils, 36 red pens, 44 blue pens, 12 notebooks, 18 erasers, 34 rulers and 32 color pencils. What are the Mode and Range for the stationery sells?',
      category: categories[1]._id,
      answer: 'Mode: 12, Range: 32',
    },
    {
      question: 'A number is chosen at random from 1 to 10. What is the probability of selecting a multiple of 3.',
      category: categories[1]._id,
      answer:'3/10',
    },
    {
      question: 'Two complementary angles have equal measures. What is the measure of each angle?',
      category: categories[1]._id,
      answer: '45°',
    },
    {
      question: 'Find the slope of the line. 𝑦 = 𝑥 − 1',
      category: categories[1]._id,
      answer: '1',
    },
    {
      question: 'Find the slope of the line through each pair of points. (1, 1), (2, 3)',
      category: categories[1]._id,
      answer: '2',
    },
    {
        question: 'Solve this equation. 2(𝑥 − 14) = 4',
        category: categories[1]._id,
        answer: '16',
    },
    {
        question: 'Solve this equation. 2(𝑥 − 14) = 4',
        category: categories[2]._id,
        answer: '16',
    },
    {
        question: 'What presents as a safety hazard while working in the science laboratory? ',
        category: categories[2]._id,
        answer: 'Working Alone',
    },
    {
        question: 'What is the proper safety response to a trash-can fire in a lab?',
        category: categories[2]._id,
        answer: 'Use the appropriate fire extinguisher',
    },
    {
        question: 'A very large redwood tree is measured to be about 100 units tall. Which unit is the most appropriate to use?',
        category: categories[2]._id,
        answer: 'Meters',
    },
    {
        question: 'The fine lead used in mechanical pencils has a diameter of about',
        category: categories[2]._id,
        answer: '0.5 millimeters',
    },
    {
        question: 'The most appropriate scientific units for measuring the volume of the liquid in the petri dish would be?',
        category: categories[2]._id,
        answer: 'Milliliters',
    },
    {
        question: 'Sandy heated 20 grams of liquid hydrogen peroxide until it was completely broken down into liquid water and oxygen gas. What is the total mass of water and oxygen that was produced?',
        category: categories[2]._id,
        answer: '20 grams since no matter was added or removed',
    },
    {
        question: 'An experiment was preformed to test the effects of different types of fertilizers on the number of tomatoes produced by one type of tomato plant. What is the experimental (independent) variable in this investigation?',
        category: categories[2]._id,
        answer: 'Type of fertilizer',
    },
    {
        question: 'What is the original source of the energy released when fossil fuels are burned?',
        category: categories[2]._id,
        answer: 'Solar',
    },
    {
        question: 'List all terrestrial planets.',
        category: categories[2]._id,
        answer: 'Mercury, Venus, Earth, Mars',
    },
    {
        question: 'Who do Scientists and Historians believe to be the first people of North America?',
        category: categories[0]._id,
        answer: 'John Cabot 1497 Claims for Britain – discovers Grand Banks of Newfoundland',
    },
    {
        question: 'Who is Canadas Prime Minister?',
        category: categories[0]._id,
        answer: 'Justin Trudeau',
    },
    {
        question: ' What is the captial of Canada?',
        category: categories[0]._id,
        answer: 'Ottawa',
    },
    {
        question: 'Canada entered into Confederation in...?',
        category: categories[0]._id,
        answer: '1867',
    },
    {
        question: 'Which country took control of Quebec away from France, by winning the battle of the Plains of Abraham?',
        category: categories[0]._id,
        answer: 'Britain',
    },
    {
        question: 'What was the name of the route to Canada taken by blacks escaping slavery in the US?',
        category: categories[0]._id,
        answer: 'Underground Railway',
    },
    {
        question: 'Which province was the last to join Confederation? ',
        category: categories[0]._id,
        answer: 'Newfoundland',
    },
    {
        question: 'Remembrance Day in Canada falls on November 11. November 11 was the last day of which war?',
        category: categories[0]._id,
        answer: 'WWI',
    },
    {
        question: 'What is the name of the Metis leader who was hanged by the federal government in 1885?',
        category: categories[0]._id,
        answer: 'Louis Riel',
    },
    {
        question: 'True or False. Canadas head of government is the Governor General.',
        category: categories[0]._id,
        answer: 'True',
    },
    {
        question: 'Which country is responsible for the largest share of U.S. exports?',
        category: categories[3]._id,
        answer: 'Canada',
    },
    {
        question: 'Where is Iqaluit?',
        category: categories[3]._id,
        answer: 'Nunavut',
    },
    {
        question: 'Canada has ten provinces. Two have no coastline on any oceans. Alberta is one of them. Which is the other one?',
        category: categories[3]._id,
        answer: 'Saskatchewan',
    },
    {
        question: 'What continent is Canada located in?',
        category: categories[3]._id,
        answer: 'North America',
    },
    {
        question: 'What is the most eastern Canadian province?',
        category: categories[3]._id,
        answer: 'Newfoundland and Labrador',
    },
    {
        question: 'Where is Surrey?',
        category: categories[3]._id,
        answer: 'British Columbia',
    },
    {
        question: 'In what province can you find Brandon, Flin Flon, and the "Polar Bear Capital of the World", Churchill?',
        category: categories[3]._id,
        answer: 'Manitoba',
    },
    {
        question: 'Why is the province of Prince Edward Island nicknamed "Spud Island"?',
        category: categories[3]._id,
        answer: 'Its famous for its potatoes, also known as spuds.',
    },
    {
        question: 'Which province speaks mostly French?',
        category: categories[3]._id,
        answer: 'Quebec',
    },
    {
        question: 'How many provinces are there in Canada?',
        category: categories[3]._id,
        answer: '10, but if you add the territories there are 13.',
    },

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