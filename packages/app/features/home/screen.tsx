import { BMIForm, BMIResult } from '@my/ui'
import { H1, YStack } from '@my/ui'

export function HomeScreen() {
  return (
    <YStack flex={1} justify="center" gap="$4" p="$6" bg="$background" mx="auto">
      <H1>BMI Calculator</H1>
      <BMIForm />
      <BMIResult />
    </YStack>
  )
}
