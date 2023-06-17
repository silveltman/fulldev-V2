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

<Section>
  <Container>
    <Highlight
      center
      class="relative large"
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
        {#if content.button_1}
          <Button
            class="light-primary medium"
            variant="solid"
            {...content.button_1}
          />
        {/if}
        {#if content.button_2}
          <Button
            class="light-primary medium"
            {...content.button_2}
          />
        {/if}
      </svelte:fragment>
    </Highlight>
  </Container>
</Section>
