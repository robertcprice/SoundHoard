const changeSound = (req, res) => {
    const { id, padId } = req.params;
    const { soundId } = req.body;
  
    // Assuming you have a DrumMachine model/schema
    DrumMachine.findById(id)
      .then((drumMachine) => {
        if (!drumMachine) {
          return res.status(404).json({ error: 'Drum machine not found' });
        }
  
        const pad = drumMachine.pads.id(padId);
        if (!pad) {
          return res.status(404).json({ error: 'Pad not found' });
        }
  
        // Update the sound ID of the pad
        pad.soundId = soundId;
  
        // Save the updated drum machine
        drumMachine.save()
          .then(() => {
            res.status(200).json({ message: 'Sound changed successfully' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to update drum machine' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve drum machine' });
      });
  };

  const addPad = (req, res) => {
    const { id } = req.params;
    const { soundId } = req.body;
  
    DrumMachine.findById(id)
      .then((drumMachine) => {
        if (!drumMachine) {
          return res.status(404).json({ error: 'Drum machine not found' });
        }
  
        // Assuming you have a Pad model/schema
        const newPad = new Pad({ soundId });
        
        // Add the new pad to the drum machine
        drumMachine.pads.push(newPad);
  
        // Save the updated drum machine
        drumMachine.save()
          .then(() => {
            res.status(201).json({ message: 'Pad added successfully' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to update drum machine' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve drum machine' });
      });
  };

  const removePad = (req, res) => {
    const { id, padId } = req.params;
  
    DrumMachine.findById(id)
      .then((drumMachine) => {
        if (!drumMachine) {
          return res.status(404).json({ error: 'Drum machine not found' });
        }
  
        const pad = drumMachine.pads.id(padId);
        if (!pad) {
          return res.status(404).json({ error: 'Pad not found' });
        }
  
        // Remove the pad from the drum machine
        pad.remove();
  
        // Save the updated drum machine
        drumMachine.save()
          .then(() => {
            res.status(200).json({ message: 'Pad removed successfully' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to update drum machine' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve drum machine' });
      });
  };

  const saveState = (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
  
    DrumMachine.findByIdAndUpdate(id, { state }, { new: true })
      .then((drumMachine) => {
        if (!drumMachine) {
          return res.status(404).json({ error: 'Drum machine not found' });
        }
  
        res.status(200).json({ message: 'State saved successfully', drumMachine });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to update drum machine' });
      });
  };
  