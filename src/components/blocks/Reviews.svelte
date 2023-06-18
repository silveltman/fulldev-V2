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

<Section
  id="fans"
  class="overflow-visible"
>
  <Container>
    <Stack>
      <Highlight>
        <Heading class="relative flex items-center gap-sm"
          >{content.heading}
          <Icon
            class="group relative animate-spin cursor-pointer hover:animate-none"
            name="mode_fan"
            size={40}
          >
            mode_fan
            <span
              class="light-primary absolute bottom-full left-0 hidden rotate-12 text-sm font-button text-base-11 group-hover:block"
              >Au, m'n vinger!</span
            >
          </Icon>
        </Heading>
        <!-- <Text>{content.textarea}</Text> -->
      </Highlight>
      <Carousel class="large">
        {#each content.cards as card}
          <Card box>
            <Heading secondary>{card.heading}</Heading>
            <div class="flex gap-xs">
              {#each { length: 5 } as item}
                <Icon
                  class="light-primary text-base-9 "
                  name="star"
                  fill
                />
              {/each}
            </div>
            <Text
              class="!text-base-11"
              secondary>{card.textarea}</Text
            >
          </Card>
        {/each}
      </Carousel>
    </Stack>
  </Container>
</Section>
