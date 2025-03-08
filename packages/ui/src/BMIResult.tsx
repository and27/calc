import { Card, Paragraph, YStack } from '@my/ui'
import { useNutritionStore } from 'app/store'

export function BMIResult() {
  const { bmi, classification, recommendation, vct, macros, age } = useNutritionStore()

  if (!bmi) return null

  return (
    <YStack gap="$4" bg="$background" maxW={400} mx="auto">
      {/* 🏆 Bienvenida con storytelling */}
      <Card bg="$color2" p="$4">
        <Paragraph fontWeight="bold">Your BMI is: {bmi}</Paragraph>
        <Paragraph fontSize="$5" color="$green10">
          {classification}
        </Paragraph>
        <Paragraph fontWeight="bold" fontSize="$6">
          {bmi < 18.5
            ? `Whoa, ${age < 30 ? 'young champ' : 'friend'}!`
            : bmi < 24.9
              ? 'Solid balance! But can we optimize?'
              : 'Okay, let’s shake things up!'}
        </Paragraph>
      </Card>

      {/* 🍎 Tarjeta de Análisis */}
      <Card bg="$color3" p="$4">
        <Paragraph fontSize="$5" fontWeight="bold">
          What does this mean for you?
        </Paragraph>
        <Paragraph>
          {bmi < 18.5
            ? "You're on the lean side. If you often feel tired or hungry, your body might be craving more fuel!"
            : bmi < 24.9
              ? "You're in a great range, but small tweaks can supercharge your energy!"
              : 'Time to turn the tide! Small changes can make a big difference.'}
        </Paragraph>
      </Card>

      {/* 🔥 Accionable Directo */}
      <Card bg="$color4" p="$4">
        <Paragraph fontSize="$5" fontWeight="bold">
          Your next move 🎯
        </Paragraph>
        <Paragraph>{recommendation}</Paragraph>
      </Card>

      {/* ⚡ Hack Nutricional Sorpresa */}
      <Card bg="$color5" p="$4">
        <Paragraph fontSize="$5" fontWeight="bold">
          Quick Nutrition Hack 💡
        </Paragraph>
        <Paragraph>
          {bmi < 18.5
            ? 'Eat 3-5 extra handfuls of nuts or dried fruit daily – effortless calories!'
            : bmi < 24.9
              ? 'Switch white rice for quinoa or brown rice. It’s a small shift, but more fiber = more satiety!'
              : "Try the 'half-plate hack' – fill half your plate with veggies first!"}
        </Paragraph>
      </Card>

      {/* 🎯 Mini Desafío Personalizado */}
      <Card bg="$color6" p="$4">
        <Paragraph fontSize="$5" fontWeight="bold">
          Mini Challenge 🚀
        </Paragraph>
        <Paragraph>
          {bmi < 18.5
            ? 'For the next 3 days, add an extra snack (peanut butter, nuts, cheese) between meals!'
            : bmi < 24.9
              ? 'Try swapping your usual breakfast for eggs and avocado – notice the energy boost?'
              : "Go for a 10-minute walk after meals for 3 days. You'll feel the difference!"}
        </Paragraph>
      </Card>

      {vct && (
        <Card bg="$color7" p="$4">
          <Paragraph fontSize="$5" fontWeight="bold">
            Your Daily Fuel (VCT): {vct} kcal 🔥
          </Paragraph>
        </Card>
      )}

      <Card bg="$color8" p="$4">
        <Paragraph fontSize="$5" fontWeight="bold">
          Your Macronutrient Blueprint 🏗️
        </Paragraph>
        <Paragraph>Protein: {macros.protein}%</Paragraph>
        <Paragraph>Carbs: {macros.carbs}%</Paragraph>
        <Paragraph>Fats: {macros.fat}%</Paragraph>
      </Card>
    </YStack>
  )
}
