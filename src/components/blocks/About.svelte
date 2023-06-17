<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Stack,
    Heading,
    Text,
    Image,
    Social,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Stack
      row
      class="items-center"
    >
      <Image
        class="lg:col-span-3"
        {...content.image}
      />
      <Highlight class="lg:col-span-2">
        <Heading>{content.heading}</Heading>
        <Text>{content.textarea}</Text>
        <svelte:fragment slot="actions">
          <Social
            class="light-primary"
            href="https://www.linkedin.com/in/silveltman/"
            name="linkedin"
          />
          <Social
            class="light-primary"
            href="mailto:contact@full.dev"
            name="email"
          />
          <Social
            class="light-primary"
            href="https://wa.me/31683485163"
            name="whatsapp"
          />
        </svelte:fragment>
      </Highlight>
    </Stack>
  </Container>
</Section>
