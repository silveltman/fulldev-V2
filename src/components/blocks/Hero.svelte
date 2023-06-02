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
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="dark pt-lg">
  <Container>
    <Panel class="!py-2xl large">
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
</Section>
