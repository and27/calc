import { generateRecommendationMock } from 'app/ai'
import { calculateBMI, getBMIClassification } from 'app/utils/bmi'
import { calculateMacronutrients, calculateTMB, calculateVCT } from 'app/utils/nutrition'
import { create } from 'zustand'

type NutritionState = {
  weight: number
  height: number
  age: number
  gender: 'male' | 'female'
  activityLevel: number // 1.2 (sedentary) - 1.9 (athlete)
  bmi: number | null
  classification: string
  recommendation: string
  tmb: number | null
  vct: number | null
  macros: { protein: number; fat: number; carbs: number }
  setWeight: (weight: number) => void
  setHeight: (height: number) => void
  setAge: (age: number) => void
  setGender: (gender: 'male' | 'female') => void
  setActivityLevel: (activityLevel: number) => void
  calculateNutrition: () => void
}

export const useNutritionStore = create<NutritionState>((set, get) => ({
  weight: 0,
  height: 0,
  age: 18,
  gender: 'male',
  activityLevel: 1.2, // Default: sedentary
  bmi: null,
  classification: '',
  recommendation: '',
  tmb: null,
  vct: null,
  macros: { protein: 0, fat: 0, carbs: 0 },

  setWeight: (weight) => set({ weight }),
  setHeight: (height) => set({ height }),
  setAge: (age) => set({ age }),
  setGender: (gender) => set({ gender }),
  setActivityLevel: (activityLevel) => set({ activityLevel }),

  calculateNutrition: () => {
    const { weight, height, age, gender, activityLevel } = get()

    if (weight <= 0 || height <= 0 || age <= 0) {
      console.warn('Invalid inputs for nutrition calculation')
      return
    }

    const bmi = calculateBMI(weight, height)
    const classification = getBMIClassification(bmi, gender, age)
    const recommendation = generateRecommendationMock(bmi, gender, age, activityLevel.toString())
    const tmb = calculateTMB(weight, height, age, gender)
    const vct = calculateVCT(tmb, activityLevel)
    const macros = calculateMacronutrients(vct)

    console.log('Nutrition Calculation:', { bmi, classification, tmb, vct, macros })

    set({ bmi, classification, recommendation, tmb, vct, macros })
  },
}))
