<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Split,
    Button,
    Image,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section class="dark pt-0">
  <Container>
    <Split center>
      <Highlight class="large">
        <span class="text-sm text-base-11">Lorem ipsum</span>
        <h2>{content.heading}</h2>
        <p>{content.textarea}</p>
        <svelte:fragment slot="footer">
          <Button
            class="light-indigo"
            variant="solid"
            {...content.button_1}
          />
          <Button
            class="light-indigo"
            {...content.button_1}
          />
        </svelte:fragment>
      </Highlight>
      <Image {...content.image} />
    </Split>
  </Container>
</Section>
