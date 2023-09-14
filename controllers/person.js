const Person = require("../models/Person");

const createPerson = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name ) {
      res.status(400);
      return next(new Error("name field is required"));
    }

    // check if person already exists
    const isPersonExists = await Person.findOne({ name });

    if (isPersonExists) {
      res.status(404);
      return next(new Error("Person already exists"));
    }

    const createdPerson = await Person.create({
      name
    });

    res.status(200).json({
      
      createdPerson
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

const getPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();

    res.status(200).json({
      
      persons
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getPerson = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const PersonDetails = await Person.findById(user_id);

    if (!PersonDetails) {
      res.status(404);
      return next(new Error("Person not found"));
    }

    res.status(200).json({
      
      PersonDetails
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updatePerson = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const person = await Person.findById(user_id);

    if (!person) {
      res.status(404);
      return next(new Error("Person not found"));
    }

    const updatedPerson = await Person.findByIdAndUpdate(
      user_id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      
      updatedPerson
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deletePerson = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const person = await Person.findById(user_id);

    if (!person) {
      res.status(404);
      return next(new Error("Person not found"));
    }

    await Person.findByIdAndDelete(user_id);

    res.status(200).json({
      
      message: "Person has been deleted."
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getPerson,
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
