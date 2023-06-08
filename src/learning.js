// Function to calculate the average score for a list of quiz results
function calculateAverageScore(quizResults) {
  if (quizResults.length === 0) {
    return 0;
  }
  
  const totalScore = quizResults.reduce((total, result) => total + result.score, 0);
  return totalScore / quizResults.length;
}

// Function to determine the highest scoring student based on quiz results
function getHighestScoringStudent(quizResults) {
  if (quizResults.length === 0) {
    return null;
  }
  
  let highestScore = 0;
  let highestScoringStudent = null;
  
  for (const result of quizResults) {
    if (result.score > highestScore) {
      highestScore = result.score;
      highestScoringStudent = result.student;
    }
  }
  
  return highestScoringStudent;
}

// Function to fetch the number of enrolled students in a course
async function fetchEnrolledStudents(apiService) {
  const enrolledStudents = await apiService.getEnrolledStudents();
  const filteredStudents = enrolledStudents.filter((student) => student.status === 'active');
  return filteredStudents.reduce((obj, student) => { obj[student.id] = student; return obj; }, {});
}

// Function to filter quiz results by passing score
function filterPassedQuizResults(quizResults, passingScore) {
  return quizResults.filter(result => result.score >= passingScore);
}

module.exports = {
  calculateAverageScore,
  getHighestScoringStudent,
  fetchEnrolledStudents,
  filterPassedQuizResults
};