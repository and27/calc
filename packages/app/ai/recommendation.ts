export const generateRecommendationMock = (
  bmi: number,
  gender: string,
  age: number,
  activityLevel: string
): string => {
  console.log('Mocking recommendation for:', { bmi, gender, age, activityLevel })

  if (bmi < 18.5) {
    return activityLevel === 'sedentary'
      ? 'Try to eat more calorie-dense foods like nuts, avocados, and whole grains.'
      : 'Increase protein intake and add strength training to gain healthy weight.'
  }

  if (bmi < 24.9) {
    return 'Maintain a balanced diet with fruits, vegetables, lean proteins, and regular physical activity.'
  }

  if (bmi < 29.9) {
    return activityLevel === 'sedentary'
      ? 'Reduce processed foods and added sugars. Aim for at least 30 minutes of daily movement.'
      : 'Focus on lean proteins, healthy fats, and high-fiber foods to improve metabolism.'
  }

  return 'Consider consulting a nutritionist for a personalized weight management plan.'
}
