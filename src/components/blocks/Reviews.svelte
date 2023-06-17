<script lang="ts">
  import {
    Section,
    Container,
    Button,
    Heading,
    Text,
    Card,
    Icon,
    Carousel,
    Stack,
    Highlight,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Stack>
      <Highlight>
        <Heading>{content.heading}</Heading>
        <Text>{content.textarea}</Text>
      </Highlight>
      <Carousel class="large">
        {#each content.cards as card}
          <Card box>
            <Heading secondary>{card.heading}</Heading>
            <div class="flex gap-xs">
              {#each { length: 5 } as item}
                <Icon
                  class="light-primary text-base-9"
                  name="star"
                  fill
                />
              {/each}
            </div>
            <Text secondary>{card.textarea}</Text>
          </Card>
        {/each}
      </Carousel>
    </Stack>
  </Container>
</Section>
