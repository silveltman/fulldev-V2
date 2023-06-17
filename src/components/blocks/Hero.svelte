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

<!-- <Section class="dark pt-lg">
  <Container>
    <Panel class="!py-2xl shadow-2xl large">
      <Flow
        center
        row
      >
        <Image
          class="absolute inset-0 h-full w-full object-cover"
          {...content.image}
        />
        <div class="absolute inset-0 h-full w-full bg-black/75" />
        <Highlight
          class="relative"
          center
        >
          <Text
            class="light-primary font-button !text-base-9"
            text={content.eyebrow}
            secondary
          />
          <Heading text={content.heading} />
          <Text
            class="max-w-xl"
            text={content.textarea}
          />

          <svelte:fragment slot="actions">
            <Button
              class="dark-primary"
              variant="solid"
              {...content.button_1}
            />
            <Button
              class="dark-primary bg-base-9/30 backdrop-blur-sm hover:bg-base-9/40"
              variant="solid"
              {...content.button_2}
            />
          </svelte:fragment>
        </Highlight>
      </Flow>
    </Panel>
  </Container>
</Section> -->

<!-- <Section
  class="dark mx-auto max-w-screen-2xl overflow-hidden large 2xl:my-lg 2xl:rounded-box"
>
  <Container>
    <Flow
      center
      row
    >
      <Image
        class="absolute inset-0 h-full w-full object-cover"
        {...content.image}
      />
      <div class="absolute inset-0 h-full w-full bg-black/75" />
      <Highlight
        class="relative"
        center
      >
        <Text
          class="light-primary font-button !text-base-9"
          text={content.eyebrow}
          secondary
        />
        <Heading text={content.heading} />
        <Text
          class="max-w-xl"
          text={content.textarea}
        />

        <svelte:fragment slot="actions">
          <Button
            class="dark-primary"
            variant="solid"
            {...content.button_1}
          />
          <Button
            class="dark-primary bg-base-9/30 backdrop-blur-sm hover:bg-base-9/40"
            variant="solid"
            {...content.button_2}
          />
        </svelte:fragment>
      </Highlight>
    </Flow>
  </Container>
</Section> -->

<Section class="pb-lg pt-xl large">
  <Stack>
    <Container>
      <Highlight
        class="relative"
        center
      >
        <Text
          class="light-primary font-button !text-base-9"
          text={content.eyebrow}
          secondary
        />
        <Heading text={content.heading} />
        <Text
          class="max-w-xl"
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
          class="rounded-0 object-cover"
          {...content.image}
        />
        <div class="absolute inset-0 h-full w-full bg-black/50" />
      </Ratio>
    </Container>
  </Stack>
</Section>
