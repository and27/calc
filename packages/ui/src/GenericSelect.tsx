import { Check, ChevronDown } from '@tamagui/lucide-icons'
import { Select, Adapt, Sheet, YStack, Label } from 'tamagui'

type Option = { label: string; value: string }

interface SelectProps {
  label: string
  value: string
  options: Option[]
  onChange: (value: string) => void
}

export function GenericSelect({ label, value, options, onChange }: SelectProps) {
  return (
    <YStack>
      <Label minW={80} lineHeight={30}>
        {label}
      </Label>
      <Select value={value} onValueChange={onChange} disablePreventBodyScroll>
        <Select.Trigger width={320} iconAfter={ChevronDown}>
          <Select.Value placeholder="Selecciona una opción" />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet native modal dismissOnSnapToBottom animation="medium">
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.Viewport minW={200}>
            {options.map((item, i) => (
              <Select.Item index={i} key={item.value} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator marginLeft="auto">
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select>
    </YStack>
  )
}
