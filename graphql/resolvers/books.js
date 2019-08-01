const Person = require("../../models/Person");
const Story = require("../../models/Story");

module.exports = {
  Query: {
    async getPersons() {
      try {
        const persons = await Person.find().sort({ createdAt: -1 }).populate('stories');
        return persons;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPerson(_, { personId }) {
      try {
        const person = await Person.findById(personId).populate('stories');
        if (person) {
          return person;
        } else {
          throw new Error('Person not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createPerson(_, { name, age }, context) {
      const newPerson = new Person({
        name,
        age,
        createdAt: new Date().toISOString()
      });

      const person = await newPerson.save();

      const story1 = new Story({
        title: 'Casino Royale',
        author: person._id    
      });

      const story2 = await story1.save();

     await person.stories.push(story1);
     await person.save();

      return person;
    }
  }
};
