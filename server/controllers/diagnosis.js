import { Symptoms, Sicknesses } from '../models';
require('dotenv').config();

/**
 * compareSymptoms - Logic for diagnosis of sickness
 * @param {array} sicknessSymptoms 
 * @param {string} comparingSymptoms
 * @return {string} - returns the string of the diagnosis
 */
function compareSymptoms(sicknessSymptoms, comparingSymptoms) {
  let degreeOfMatch = {}
  let patientsSymtoms = comparingSymptoms.split(',');
  
  let sickness = '';
  let symptoms = '';
  Object.keys(sicknessSymptoms).forEach((key) => {
      symptoms = sicknessSymptoms[key].split(',');
      sickness = key;
      
      let occurance = 0
      symptoms.map((mySymptoms) => {
        if(patientsSymtoms.includes(mySymptoms)) {
          occurance++
        }
      });
      
      degreeOfMatch[sickness] = occurance;
      
  });
  let sortable = [];
  for (let sick in degreeOfMatch) {
    sortable.push([sick, degreeOfMatch[sick]]);
  }
  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  // console.log(sortable.reverse());
  // return Object.keys(degreeOfMatch).reduce((a, b) => degreeOfMatch[a] > degreeOfMatch[b] ? a : b);
  return sortable.reverse()
}
export default {
  /**
   * diagnosis - creates a diagnosis of sickness based on symptoms
   * @param {object} req - incoming symptoms object
   * @param {object} res - server response object of sickness and treatment
   * @return {json} - returns json format response
   */
  diagnosePatient(req, res) {
    let patientSymptoms = req.body.symptoms;
    let sicknessSymptoms = {};
    let diagnosedSickness = [];
    
    Sicknesses.findAll()
    .then((result) => {
      if(result.length !== 0) {
        result.map((diagnose) => {
          sicknessSymptoms[diagnose.sickness] = diagnose.symptoms;
        });
        diagnosedSickness = compareSymptoms(sicknessSymptoms, patientSymptoms)
      }
      res.status(200).send({
        diagnosedSickness
      });
    }).catch(() => {
      res.status(500).send({
        message: 'Cannot diagnose you at the moment due to server error'
      })
    })
  }
}