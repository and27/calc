export const calculateBMI = (weight: number, height: number): number => {
  if (!weight || !height) return 0

  // Convertir altura a metros si está en cm
  const heightInMeters = height > 3 ? height / 100 : height

  const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(2)
  console.log('Calculating BMI:', bmi)
  return bmi
}

export const getBMIClassification = (bmi: number, gender: string, age: number): string => {
  if (age < 18) {
    // Clasificación para menores de edad
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 24.9) return 'Healthy weight'
    if (bmi < 29.9) return 'Overweight'
    return 'Obese'
  }

  // Clasificación estándar de la OMS para adultos
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 24.9) return 'Normal weight'
  if (bmi < 29.9) return 'Overweight'
  return 'Obese'
}

export const generateRecommendation = (
  bmi: number,
  gender: string,
  age: number,
  activityLevel: string
): string => {
  if (bmi < 18.5) {
    return activityLevel === 'sedentary'
      ? 'Increase calorie intake with nutrient-dense foods and light exercise.'
      : 'Increase calorie intake with protein-rich foods and strength training.'
  }

  if (bmi < 24.9) {
    return 'Maintain a balanced diet with regular physical activity.'
  }

  if (bmi < 29.9) {
    return activityLevel === 'sedentary'
      ? 'Reduce processed foods, increase daily movement, and drink more water.'
      : 'Optimize your diet by reducing refined carbs and maintaining exercise.'
  }

  return 'Consult a nutritionist for a personalized weight loss plan.'
}
