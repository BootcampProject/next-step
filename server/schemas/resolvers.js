const { AuthenticationError } = require('apollo-server-express');
const { User, Questions, Category} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    Questions: async (parent, { category, question }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (question) {
        params.question = {
          $regex: question
        };
      }

      return await Questions.find(params).populate('category');
    },
    // question: async (parent, { _id }) => {
    //   return await Question.findById(_id).populate('category');
    // },
   
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'questions',
          populate: 'category'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    newquestion: async (parent, args) => {
      let question = '';
      try {
        question = await Questions.create(args);
      }
      catch (err) {
        console.log(err)
      }
     
      console.log(question)
      const token = signToken(question);

      return { token, question };

    },


    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
