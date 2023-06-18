<script lang="ts">
  import ProjectPanel from '@components/ProjectPanel.svelte'
  import {
    Section,
    Container,
    Grid,
    Stack,
    Button,
    Image,
    Text,
    Heading,
    Panel,
    Ratio,
    Card,
  } from 'fulldev-ui'
  import { text } from 'svelte/internal'

  export let content: any
</script>

<Section
  id="projecten"
  class="pt-0"
>
  <Container>
    <Grid
      class="large"
      masonry
    >
      {#each content.cards as card}
        <Card
          target="_blank"
          box
          href={card.href}
        >
          <Image
            sizes="100vw"
            slot="media"
            {...card.image}
          />
          <Heading
            secondary
            text={card.heading}
          />
          <Text
            class="!text-base-11"
            text={card.textarea}
          />
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>
