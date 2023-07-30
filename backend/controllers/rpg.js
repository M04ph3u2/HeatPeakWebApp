const Character = require('../models/characters.js');
const { ObjectId } = require('mongoose').Types;

module.exports = {

  charaNames: async (req, res) => {
    try {
      const charas = await Character.find({});
      const names = [];
      charas.forEach(chara => {
        names.push(chara.name + ' (' + chara._id + ')');
      });
      res.status(200).json(names);
    } catch (error) {
      console.error('Error while retrieving character sheets:', error);
      return res.status(500).json({ message: 'Error while retrieving character sheets' });
    }
  },

  charaNew: async (req, res) => {
    try {
      const {name, classId, style, abilities, race, eyes, hairs, height, lore, skin, weight, references, items, constitution, strenght, dexterity, intelligence, wisdom, charisma, HP, HPmax, MP, HPbase} = req.body;
      
      const newCharacter = new Character({
        name: name,
        class: new ObjectId(classId),
        style: style,
        abilities: abilities.map((abilityName) => ({ability: abilityName})),
        description: {
          race: race,
          eyes: eyes,
          hairs: hairs,
          height: height,
          lore: lore,
          skin: skin,
          weight: weight,
          references: references
        },
        inventory: items.map((item) => ({item: item})),
        statistics: {
          constitution: constitution,
          strenght: strenght,
          dexterity: dexterity,
          intelligence: intelligence,
          wisdom: wisdom,
          charisma: charisma,
          HP: HP,
          HPmax: HPmax,
          MP: MP,
          HPbase: HPbase
        }
      });

      // Salva il nuovo personaggio nel database
      await newCharacter.save();

      // Invia una risposta di successo al client
      res.status(200).json({ message: 'New character created successfully', character: newCharacter });
    } catch (error) {
      console.error('Error while creating and sending to db a new chatacter:', error);
      return res.status(500).json({ message: 'Error while creating and sending to db a new chatacter' });
    }
  }
  
};