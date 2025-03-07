import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  SwitchRouterButton,
  SwitchThemeButton,
  useToastController,
  XStack,
  YStack
} from '@my/ui';
import { ChevronDown, ChevronUp, LogIn, LogOut } from '@tamagui/lucide-icons';
import { useUserStore } from 'app/store';
import { useState } from 'react';
import { Platform } from 'react-native';
import { useLink } from 'solito/navigation';


export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user';
  const linkProps = useLink({ href: `${linkTarget}/nate` });

  const { user, setUser } = useUserStore()
  const [loading, setLoading] = useState(false);

  return (
    <YStack flex={1} justify="center" verticalAlign="center" gap="$6" p="$4" bg="$background" maxW={600} marginInline={Platform.OS === 'web' ? 'auto' : 0}>
      <XStack position="absolute" insetBlockStart="$4" width="100%" justify="center" gap="$6">
        {Platform.OS === 'web' && (
          <>
            <SwitchRouterButton pagesMode={pagesMode} />
            <SwitchThemeButton />
          </>
        )}
      </XStack>

      <H1 verticalAlign="center" color="$color12" size="$12">
        🚀 Tamagui MVP Boilerplate
      </H1>
      <Paragraph color="$color10" verticalAlign="center" size="$5">
        Web + Mobile con el mismo código
      </Paragraph>

      <Separator marginBlock="$4" />

      {/* Botón para ir al perfil */}
      <Button size="$5" {...linkProps} bg="$blue10" color="white">
        Ir a Perfil
      </Button>

      <Separator marginBlock="$4" />

      {/* Login Fake */}
      <Paragraph verticalAlign="center" size="$6" fontWeight="600">
        {user ? `Bienvenido, ${user}!` : "No estás logueado"}
      </Paragraph>

      <Button
        size="$5"
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            setUser(user ? null : "Andy Dev");
            setLoading(false);
          }, 500);
        }}
        disabled={loading}
        bg={user ? "$red10" : "$green10"}
        color="white"
        icon={user ? LogOut : LogIn}
      >
        {user ? "Cerrar sesión" : "Iniciar sesión"}
      </Button>

      <SheetDemo />
    </YStack>
  );
}

/* Sheet (ventana flotante con animaciones) */
function SheetDemo() {
  const toast = useToastController();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        bg="$color8"
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay bg="$shadow4" animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle bg="$color8" />
        <Sheet.Frame verticalAlign="center" gap="$10" bg="$color2">
          <XStack gap="$2">
            <Paragraph verticalAlign="center">Made by</Paragraph>
            <Anchor color="$blue10" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman
            </Anchor>
            <Anchor color="$blue10" href="https://github.com/tamagui/tamagui" target="_blank">
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            bg="$red10"
            color="white"
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', { message: 'Just showing how toast works...' });
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
