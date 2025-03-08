export const calculateTMB = (
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number => {
  if (!weight || !height || !age) return 0

  const weightFactor = 10 * weight
  const heightFactor = 6.25 * height * 100
  const ageFactor = 5 * age
  return gender === 'male'
    ? +(weightFactor + heightFactor - ageFactor + 5).toFixed(2)
    : +(weightFactor + heightFactor - ageFactor - 161).toFixed(2)
}

export const calculateVCT = (tmb: number, activityLevel: number): number => {
  if (!tmb || !activityLevel) return 0
  return +(tmb * activityLevel).toFixed(2)
}

export const calculateMacronutrients = (
  vct: number,
  proteinPercent = 15,
  fatPercent = 30,
  carbPercent = 55
) => {
  if (!vct) return { protein: 0, fat: 0, carbs: 0 }

  // Calorías por macronutriente
  const proteinCalories = (vct * proteinPercent) / 100
  const fatCalories = (vct * fatPercent) / 100
  const carbCalories = (vct * carbPercent) / 100

  // Conversión a gramos (1g proteína = 4 kcal, 1g grasa = 9 kcal, 1g carbohidrato = 4 kcal)
  return {
    protein: +(proteinCalories / 4).toFixed(2),
    fat: +(fatCalories / 9).toFixed(2),
    carbs: +(carbCalories / 4).toFixed(2),
  }
}
