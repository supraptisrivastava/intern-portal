const mongoose = require('mongoose');
const Intern = require('./models/Intern');

mongoose.connect('mongodb+srv://supsri2005:gYqK5ckCP3CHRTEz@cluster0.grdbjel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    return Intern.create({
      name: 'Suprapti Srivastava',
      referralCode: 'suprapti2025',
      totalDonations: 1234,
      rewards: ['Bronze Badge', 'T-shirt Unlock', 'Early Access Invite']
    });
  })
  .then(() => {
    console.log('Intern seeded');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
