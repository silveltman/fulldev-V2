<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Flow,
    Button,
    Image,
    Text,
    Heading,
    Panel,
    Stack,
    Ratio,
    Icon,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="pb-lg pt-xl large">
  <Stack>
    <Container>
      <Highlight
        class="relative max-w-lg"
        center
      >
        <Text
          class="light-primary font-button !text-base-9"
          text={content.eyebrow}
          secondary
        />
        <Heading text={content.heading} />
        <Text
          class="max-w-xl !text-base-11"
          text={content.textarea}
        />

        <svelte:fragment slot="actions">
          <Button
            class="light-primary"
            variant="solid"
            {...content.button_1}
          />
          <Button
            class="light-primary"
            href={content.button_2.href}
          >
            {content.button_2.text}
            <Icon
              class="pl-xs"
              name="coffee"
            />
          </Button>
        </svelte:fragment>
      </Highlight>
    </Container>
    <Container class="max-lg:!px-0">
      <Ratio
        ratio={1.8}
        class="shadow-3xl overflow-hidden lg:rounded-box"
      >
        <Image
          sizes="100vw"
          class="rounded-0 object-cover"
          {...content.image}
        />
        <div class="absolute inset-0 h-full w-full bg-black/50" />
      </Ratio>
    </Container>
  </Stack>
</Section>
