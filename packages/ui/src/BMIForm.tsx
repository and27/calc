import { Input, Button, XStack, GenericSelect } from '@my/ui'
import { useState } from 'react'
import { useNutritionStore } from 'app/store'

export function BMIForm() {
  const { setWeight, setHeight, setAge, setGender, setActivityLevel, calculateNutrition } =
    useNutritionStore()
  const [weight, setWeightInput] = useState('')
  const [height, setHeightInput] = useState('')
  const [age, setAgeInput] = useState('')
  const [gender, setGenderInput] = useState<'male' | 'female'>('male')
  const [activityInput, setActivityInput] = useState('1.2')

  const handleCalculate = () => {
    const parsedWeight = parseFloat(weight)
    const parsedHeight = parseFloat(height)
    const parsedAge = parseInt(age)

    if (!parsedWeight || !parsedHeight || !parsedAge) {
      console.warn('Invalid input values.')
      return
    }

    // Convert height to meters if given in cm
    const heightInMeters = parsedHeight > 3 ? parsedHeight / 100 : parsedHeight

    setWeight(parsedWeight)
    setHeight(heightInMeters)
    setAge(parsedAge)
    setGender(gender)
    calculateNutrition()
  }

  return (
    <>
      <Input
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeightInput}
      />
      <Input
        placeholder="Height (cm or m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeightInput}
      />
      <Input placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAgeInput} />

      <GenericSelect
        label="Activity Level"
        value={activityInput}
        options={[
          { label: 'Sedentary', value: '1.2' },
          { label: 'Lightly Active', value: '1.375' },
          { label: 'Moderately Active', value: '1.55' },
          { label: 'Very Active', value: '1.725' },
          { label: 'Extra Active', value: '1.9' },
        ]}
        onChange={(value) => setActivityLevel(parseFloat(value))}
      />

      <GenericSelect
        label="Gender"
        value={gender}
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        onChange={(value) => setGenderInput(value as 'male' | 'female')}
      />

      <XStack>
        <Button onPress={handleCalculate} bg="$red8" color="white" width={'100%'}>
          Calculate BMI
        </Button>
      </XStack>
    </>
  )
}
